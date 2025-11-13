import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/designs/[id] - Get design with all variations
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const design = await prisma.design.findUnique({
      where: { id },
      include: {
        variations: {
          orderBy: { createdAt: "desc" },
        },
      },
    })

    if (!design) {
      return NextResponse.json(
        { error: "Design not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ design })
  } catch (error) {
    console.error("Get design error:", error)
    return NextResponse.json(
      { error: "Failed to get design" },
      { status: 500 }
    )
  }
}
