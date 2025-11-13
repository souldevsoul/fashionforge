import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/variations/[id]/download - Download design variation
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const variation = await prisma.designVariation.findUnique({
      where: { id },
    })

    if (!variation) {
      return NextResponse.json(
        { error: "Variation not found" },
        { status: 404 }
      )
    }

    // Increment download counter
    await prisma.designVariation.update({
      where: { id },
      data: { downloads: { increment: 1 } },
    })

    // Fetch the image from the URL
    const imageResponse = await fetch(variation.outputUrl)

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch design image" },
        { status: 500 }
      )
    }

    const imageBuffer = await imageResponse.arrayBuffer()

    // Return the image with download headers
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename="${variation.name.replace(/\s+/g, "-")}.png"`,
      },
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json(
      { error: "Failed to download variation" },
      { status: 500 }
    )
  }
}
