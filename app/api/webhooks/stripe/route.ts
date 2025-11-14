import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import { prisma } from "@/lib/prisma"
import { addCredits } from "@/lib/credits"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-08-27.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

// POST /api/webhooks/stripe - Handle Stripe webhook events
export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'No signature' },
        { status: 400 }
      )
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (error: unknown) {
      console.error('Webhook signature verification failed:', error)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // Check if this is a credit purchase
        if (session.metadata?.type === 'credit_purchase') {
          const userId = session.metadata.userId
          const credits = parseInt(session.metadata.credits || '0', 10)
          const bundleId = session.metadata.bundleId

          if (!userId || !credits) {
            console.error('Missing metadata in checkout session:', session.id)
            break
          }

          // Get bundle info
          const bundle = await prisma.creditBundle.findUnique({
            where: { id: bundleId },
          })

          // Add credits to user
          await addCredits(
            userId,
            credits,
            'CREDIT_PURCHASE',
            `Purchased ${bundle?.name || 'credit bundle'}: ${credits} credits`,
            {
              stripeSessionId: session.id,
              bundleId,
              amount: session.amount_total ? session.amount_total / 100 : 0,
            }
          )

          console.log(`Added ${credits} credits to user ${userId}`)
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('PaymentIntent succeeded:', paymentIntent.id)
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('PaymentIntent failed:', paymentIntent.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error: unknown) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}
