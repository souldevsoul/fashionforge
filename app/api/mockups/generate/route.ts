import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/get-current-user"
import { deductCredits } from "@/lib/credits"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// POST /api/mockups/generate - Generate mockups for design
export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth() as { id: string }
    const body = await req.json()

    const {
      designId,
      variationId,  // optional - specific variation to mockup
      type = "model",  // model, flat-lay, hanger, mannequin, lifestyle
      modelType = "female",  // male, female, unisex, child
      pose = "standing",  // standing, walking, sitting, dynamic
    } = body

    if (!designId) {
      return NextResponse.json(
        { error: "Design ID is required" },
        { status: 400 }
      )
    }

    // Get design
    const design = await prisma.design.findUnique({
      where: { id: designId },
      include: {
        variations: variationId ? {
          where: { id: variationId }
        } : undefined,
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

    // Get the image URL to mockup
    let imageUrl = design.sourceUrl
    if (variationId && design.variations && design.variations.length > 0) {
      imageUrl = design.variations[0].outputUrl
    }

    // Cost: 10 credits for mockup generation
    const mockupCost = 10

    // Deduct credits
    try {
      await deductCredits(
        user.id,
        mockupCost,
        "MOCKUP_GENERATION",
        `Generate ${type} mockup for design ${designId}`,
        { designId, type, modelType, pose }
      )
    } catch (error: unknown) {
      return NextResponse.json(
        {
          error: "Insufficient credits",
          message: error instanceof Error ? error.message : "Unknown error",
          creditsNeeded: mockupCost
        },
        { status: 402 }
      )
    }

    // Build prompt based on mockup type
    let prompt: string
    if (type === "model") {
      prompt = `Professional fashion photography, ${modelType} model wearing the design, ${pose} pose, studio lighting, white background, high-quality fashion catalog, runway presentation, photorealistic, 4K quality`
    } else if (type === "flat-lay") {
      prompt = `Professional flat-lay product photography, garment laid flat on white background, top-down view, perfect lighting, e-commerce photography, high-quality product shot, 4K quality`
    } else if (type === "hanger") {
      prompt = `Professional product photography, garment on hanger, white background, studio lighting, retail display, clean presentation, high-quality, 4K`
    } else if (type === "mannequin") {
      prompt = `Professional mannequin photography, garment on dress form, white background, studio lighting, retail display, 4K quality`
    } else {
      prompt = `Professional lifestyle fashion photography, design in real-world setting, natural lighting, editorial style, high-quality, 4K`
    }

    // Generate mockup using Replicate
    const output = await replicate.run(
      "black-forest-labs/flux-pro" as `${string}/${string}:${string}` | `${string}/${string}`,
      {
        input: {
          prompt,
          image: imageUrl,
          aspect_ratio: type === "flat-lay" ? "1:1" : "3:4",
          output_format: "png",
          output_quality: 95,
        },
      }
    ) as string[]

    // Create Mockup record
    const mockup = await prisma.mockup.create({
      data: {
        designId: design.id,
        type,
        modelType: type === "model" ? modelType : undefined,
        pose: type === "model" ? pose : undefined,
        outputUrl: output[0],
        thumbnail: output[0],
        status: "completed",
      },
    })

    return NextResponse.json({
      success: true,
      mockup: {
        id: mockup.id,
        type: mockup.type,
        outputUrl: mockup.outputUrl,
        modelType: mockup.modelType,
        pose: mockup.pose,
        createdAt: mockup.createdAt,
      },
      creditsUsed: mockupCost,
    })
  } catch (error: unknown) {
    console.error("Mockup generation error:", error)
    return NextResponse.json(
      {
        error: "Failed to generate mockup",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
