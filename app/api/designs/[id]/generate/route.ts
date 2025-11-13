import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// POST /api/designs/[id]/generate - Generate design variations with AI
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()
    const { style, colors, variationCount = 4 } = body

    if (!style) {
      return NextResponse.json(
        { error: "Style is required" },
        { status: 400 }
      )
    }

    // Get the design
    const design = await prisma.design.findUnique({
      where: { id },
    })

    if (!design) {
      return NextResponse.json(
        { error: "Design not found" },
        { status: 404 }
      )
    }

    // Build prompt for FLUX Pro
    const colorPalette = colors && colors.length > 0
      ? colors.join(", ")
      : "vibrant, fashionable colors"

    const prompt = `Professional ${design.category} fashion design, ${style} style, ${colorPalette} color palette, high-quality apparel design, fashion illustration, detailed clothing design, runway ready, photorealistic fabric textures, 4K quality`

    // Generate variations using Replicate FLUX Pro
    const output = await replicate.run(
      "black-forest-labs/flux-pro" as `${string}/${string}:${string}` | `${string}/${string}`,
      {
        input: {
          prompt,
          image: design.sourceUrl,
          num_outputs: Math.min(variationCount, 4),
          aspect_ratio: "1:1",
          output_format: "png",
          output_quality: 90,
        },
      }
    ) as string[]

    // Create DesignVariation records for each output
    const variations = await Promise.all(
      (output as string[]).map(async (url, index) => {
        return prisma.designVariation.create({
          data: {
            designId: design.id,
            name: `${style} Variation ${index + 1}`,
            style,
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
        outputUrl: v.outputUrl,
        createdAt: v.createdAt,
      })),
    })
  } catch (error) {
    console.error("Generation error:", error)
    return NextResponse.json(
      {
        error: "Failed to generate design variations",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
