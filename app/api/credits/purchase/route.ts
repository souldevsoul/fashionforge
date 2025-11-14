import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/get-current-user"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-08-27.basil',
})

// POST /api/credits/purchase - Purchase credit bundle
export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth() as { id: string; email?: string | null }
    const body = await req.json()

    const { bundleId } = body

    if (!bundleId) {
      return NextResponse.json(
        { error: "Bundle ID is required" },
        { status: 400 }
      )
    }

    // Get credit bundle
    const bundle = await prisma.creditBundle.findUnique({
      where: { id: bundleId },
    })

    if (!bundle || !bundle.active) {
      return NextResponse.json(
        { error: "Credit bundle not found or inactive" },
        { status: 404 }
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: bundle.name,
              description: bundle.description || `${bundle.credits} FashionForge credits`,
            },
            unit_amount: Math.round(bundle.price * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?payment=success&credits=${bundle.credits}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/pricing?payment=cancelled`,
      customer_email: user.email || undefined,
      metadata: {
        userId: user.id,
        bundleId: bundle.id,
        credits: bundle.credits.toString(),
        type: 'credit_purchase',
      },
    })

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url,
      bundle: {
        name: bundle.name,
        credits: bundle.credits,
        price: bundle.price,
      },
    })
  } catch (error: unknown) {
    console.error("Credit purchase error:", error)
    return NextResponse.json(
      {
        error: "Failed to create purchase session",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
