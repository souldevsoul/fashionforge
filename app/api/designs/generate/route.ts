import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/get-current-user"
import { deductCredits } from "@/lib/credits"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// POST /api/designs/generate - AI generation of fashion designs
export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth() as { id: string }
    const body = await req.json()

    const {
      type,  // clothing, accessory, footwear, pattern, full-outfit
      category,  // streetwear, high-fashion, casual, sportswear, vintage
      style,  // minimalist, bold, elegant, futuristic, retro
      description,
      colors,  // array of color names
      materials,  // fabric types
      referenceImageUrl,  // optional reference image
      numVariations = 4,  // number of design variations to generate
      collectionId,  // optional collection
    } = body

    if (!type || !category || !description) {
      return NextResponse.json(
        { error: "Type, category, and description are required" },
        { status: 400 }
      )
    }

    // Cost: 15 credits for AI generation
    const generationCost = 15

    // Deduct credits
    try {
      await deductCredits(
        user.id,
        generationCost,
        "DESIGN_GENERATION",
        `AI generation of ${type} design in ${category} style`,
        { type, category, style, description }
      )
    } catch (error: unknown) {
      return NextResponse.json(
        {
          error: "Insufficient credits",
          message: error instanceof Error ? error.message : "Unknown error",
          creditsNeeded: generationCost
        },
        { status: 402 }
      )
    }

    // Build prompt for fashion design generation
    const colorPalette = colors && colors.length > 0
      ? colors.join(", ")
      : "professional, cohesive color palette"

    const materialDesc = materials && materials.length > 0
      ? `, materials: ${materials.join(", ")}`
      : ""

    const prompt = `Professional fashion design illustration, ${type} design, ${category} category, ${style || "modern"} style, ${description}, color palette: ${colorPalette}${materialDesc}, high-quality fashion sketch, detailed technical drawing, runway ready, fashion illustration, 4K quality, professional presentation`

    // Generate design using Replicate (FLUX Pro or SDXL)
    const output = await replicate.run(
      "black-forest-labs/flux-pro" as `${string}/${string}:${string}` | `${string}/${string}`,
      {
        input: {
          prompt,
          ...(referenceImageUrl && { image: referenceImageUrl }),
          num_outputs: Math.min(numVariations, 4),
          aspect_ratio: "1:1",
          output_format: "png",
          output_quality: 90,
        },
      }
    ) as string[]

    // Create Design record
    const design = await prisma.design.create({
      data: {
        userId: user.id,
        collectionId: collectionId || undefined,
        filename: `ai-generated-${Date.now()}.png`,
        sourceUrl: output[0], // First generated image as source
        type,
        category,
        style: style || "modern",
        description,
        tags: [type, category, style || "modern", ...colors || []],
        status: "ready",
      },
    })

    // Create Design Variations from all generated images
    const variations = await Promise.all(
      output.map(async (url, index) => {
        return prisma.designVariation.create({
          data: {
            designId: design.id,
            name: `${style || "Modern"} Variation ${index + 1}`,
            style: style || "modern",
            colors: colors || [],
            outputUrl: url,
            thumbnail: url,
            status: "completed",
          },
        })
      })
    )

    return NextResponse.json({
      success: true,
      design: {
        id: design.id,
        type: design.type,
        category: design.category,
        style: design.style,
        description: design.description,
        sourceUrl: design.sourceUrl,
        createdAt: design.createdAt,
      },
      variations: variations.map(v => ({
        id: v.id,
        name: v.name,
        style: v.style,
        colors: v.colors,
        outputUrl: v.outputUrl,
        createdAt: v.createdAt,
      })),
      creditsUsed: generationCost,
    })
  } catch (error: unknown) {
    console.error("Design generation error:", error)
    return NextResponse.json(
      {
        error: "Failed to generate design",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
