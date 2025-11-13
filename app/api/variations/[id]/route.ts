import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/variations/[id] - Get variation details
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const variation = await prisma.designVariation.findUnique({
      where: { id },
      include: {
        design: {
          select: {
            id: true,
            filename: true,
            category: true,
            sourceUrl: true,
          },
        },
      },
    })

    if (!variation) {
      return NextResponse.json(
        { error: "Variation not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ variation })
  } catch (error) {
    console.error("Get variation error:", error)
    return NextResponse.json(
      { error: "Failed to get variation" },
      { status: 500 }
    )
  }
}
