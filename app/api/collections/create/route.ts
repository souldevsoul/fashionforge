import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/get-current-user"
import { deductCredits } from "@/lib/credits"

// POST /api/collections/create - Create new design collection
export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth() as { id: string }
    const body = await req.json()

    const {
      name,
      description,
      theme,  // minimalist, vintage, futuristic, etc.
      season,  // Spring, Summer, Fall, Winter
      year,
    } = body

    if (!name) {
      return NextResponse.json(
        { error: "Collection name is required" },
        { status: 400 }
      )
    }

    // Cost: 5 credits for collection creation
    const collectionCost = 5

    // Deduct credits
    try {
      await deductCredits(
        user.id,
        collectionCost,
        "COLLECTION_CREATION",
        `Create collection: ${name}`,
        { name, theme, season, year }
      )
    } catch (error: unknown) {
      return NextResponse.json(
        {
          error: "Insufficient credits",
          message: error instanceof Error ? error.message : "Unknown error",
          creditsNeeded: collectionCost
        },
        { status: 402 }
      )
    }

    // Create Collection
    const collection = await prisma.collection.create({
      data: {
        userId: user.id,
        name,
        description: description || undefined,
        theme: theme || undefined,
        season: season || undefined,
        year: year || undefined,
      },
    })

    return NextResponse.json({
      success: true,
      collection: {
        id: collection.id,
        name: collection.name,
        description: collection.description,
        theme: collection.theme,
        season: collection.season,
        year: collection.year,
        createdAt: collection.createdAt,
      },
      creditsUsed: collectionCost,
    })
  } catch (error: unknown) {
    console.error("Collection creation error:", error)
    return NextResponse.json(
      {
        error: "Failed to create collection",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
