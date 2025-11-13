import { NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { prisma } from "@/lib/prisma"

// POST /api/designs/upload - Upload fashion sketch/reference image
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    const category = formData.get("category") as string
    const description = formData.get("description") as string | null
    const userId = formData.get("userId") as string // TODO: Get from session

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      )
    }

    if (!category) {
      return NextResponse.json(
        { error: "Category is required" },
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
        userId,
        filename: file.name,
        sourceUrl: blob.url,
        fileSize: file.size,
        category,
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
  } catch {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Failed to upload design" },
      { status: 500 }
    )
  }
}
