import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/get-current-user"
import { deductCredits } from "@/lib/credits"

// POST /api/techpacks/create - Create technical pack for design
export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth() as { id: string }
    const body = await req.json()

    const {
      designId,
      measurements,  // size chart object
      materials,  // fabric specifications object
      construction,  // assembly instructions object
      colorways,  // available colors object
      trim,  // buttons, zippers, etc object
      notes,  // additional production notes
    } = body

    if (!designId || !measurements || !materials || !construction) {
      return NextResponse.json(
        { error: "Design ID, measurements, materials, and construction are required" },
        { status: 400 }
      )
    }

    // Get design
    const design = await prisma.design.findUnique({
      where: { id: designId },
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

    // Cost: 10 credits for tech pack creation
    const techPackCost = 10

    // Deduct credits
    try {
      await deductCredits(
        user.id,
        techPackCost,
        "TECH_PACK_CREATION",
        `Create tech pack for design ${designId}`,
        { designId }
      )
    } catch (error: unknown) {
      return NextResponse.json(
        {
          error: "Insufficient credits",
          message: error instanceof Error ? error.message : "Unknown error",
          creditsNeeded: techPackCost
        },
        { status: 402 }
      )
    }

    // Create TechPack record
    const techPack = await prisma.techPack.create({
      data: {
        designId: design.id,
        measurements,
        materials,
        construction,
        colorways: colorways || undefined,
        trim: trim || undefined,
        notes,
        status: "completed",
      },
    })

    return NextResponse.json({
      success: true,
      techPack: {
        id: techPack.id,
        designId: techPack.designId,
        measurements: techPack.measurements,
        materials: techPack.materials,
        construction: techPack.construction,
        colorways: techPack.colorways,
        trim: techPack.trim,
        notes: techPack.notes,
        createdAt: techPack.createdAt,
      },
      creditsUsed: techPackCost,
    })
  } catch (error: unknown) {
    console.error("Tech pack creation error:", error)
    return NextResponse.json(
      {
        error: "Failed to create tech pack",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
