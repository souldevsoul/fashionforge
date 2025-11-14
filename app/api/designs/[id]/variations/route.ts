import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/get-current-user"
import { deductCredits } from "@/lib/credits"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// POST /api/designs/[id]/variations - Generate design variations
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await requireAuth() as { id: string }
    const body = await req.json()

    const {
      colors,  // array of new colors to try
      style,  // variation style
      numVariations = 3,
    } = body

    // Get original design
    const design = await prisma.design.findUnique({
      where: { id },
      include: {
        variations: true,
      },
    })

    if (!design) {
      return NextResponse.json(
        { error: "Design not found" },
        { status: 404 }
      )
    }

    // Verify ownership
    if (design.userId !== user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      )
    }

    // Cost: 5 credits per variation
    const variationCost = 5 * numVariations

    // Deduct credits
    try {
      await deductCredits(
        user.id,
        variationCost,
        "DESIGN_VARIATION",
        `Generate ${numVariations} variations for design ${id}`,
        { designId: id, numVariations, style, colors }
      )
    } catch (error: unknown) {
      return NextResponse.json(
        {
          error: "Insufficient credits",
          message: error instanceof Error ? error.message : "Unknown error",
          creditsNeeded: variationCost
        },
        { status: 402 }
      )
    }

    // Build prompt for variations
    const colorPalette = colors && colors.length > 0
      ? colors.join(", ")
      : "complementary color scheme"

    const prompt = `Professional fashion design variation, ${design.type} design, ${design.category} category, ${style || design.style} style, color palette: ${colorPalette}, based on existing design, high-quality fashion illustration, detailed technical drawing, 4K quality`

    // Generate variations using Replicate
    const output = await replicate.run(
      "black-forest-labs/flux-pro" as `${string}/${string}:${string}` | `${string}/${string}`,
      {
        input: {
          prompt,
          image: design.sourceUrl,  // Use original design as reference
          num_outputs: Math.min(numVariations, 4),
          aspect_ratio: "1:1",
          output_format: "png",
          output_quality: 90,
        },
      }
    ) as string[]

    // Create Design Variation records
    const variations = await Promise.all(
      output.map(async (url, index) => {
        return prisma.designVariation.create({
          data: {
            designId: design.id,
            name: `${style || design.style} Color Variation ${design.variations.length + index + 1}`,
            style: style || design.style || "modern",
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
      variations: variations.map(v => ({
        id: v.id,
        name: v.name,
        style: v.style,
        colors: v.colors,
        outputUrl: v.outputUrl,
        createdAt: v.createdAt,
      })),
      creditsUsed: variationCost,
    })
  } catch (error: unknown) {
    console.error("Variation generation error:", error)
    return NextResponse.json(
      {
        error: "Failed to generate variations",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
