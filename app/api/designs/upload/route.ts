import { NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/get-current-user"

// POST /api/designs/upload - Upload fashion sketch/reference image
export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth() as { id: string }

    const formData = await req.formData()
    const file = formData.get("file") as File
    const type = formData.get("type") as string  // clothing, accessory, footwear, pattern, full-outfit
    const category = formData.get("category") as string
    const style = formData.get("style") as string | null
    const description = formData.get("description") as string | null
    const collectionId = formData.get("collectionId") as string | null

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      )
    }

    if (!type || !category) {
      return NextResponse.json(
        { error: "Type and category are required" },
        { status: 400 }
      )
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, WebP, and SVG are allowed." },
        { status: 400 }
      )
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size too large. Maximum 10MB allowed." },
        { status: 400 }
      )
    }

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    })

    // Create Design record in database
    const design = await prisma.design.create({
      data: {
        userId: user.id,
        collectionId: collectionId || undefined,
        filename: file.name,
        sourceUrl: blob.url,
        fileSize: file.size,
        type,
        category,
        style: style || undefined,
        description: description || null,
        tags: [],
        status: "ready",
      },
    })

    return NextResponse.json({
      success: true,
      design: {
        id: design.id,
        sourceUrl: design.sourceUrl,
        category: design.category,
        createdAt: design.createdAt,
      },
    })
  } catch (error: unknown) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Failed to upload design" },
      { status: 500 }
    )
  }
}
