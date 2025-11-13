import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { requireAuth } from '@/lib/get-current-user'
import { createSubscription, PLANS } from '@/lib/subscriptions'

const CreateSubscriptionSchema = z.object({
  plan: z.enum(['starter', 'pro', 'enterprise']),
  startTrial: z.boolean().optional().default(false),
})

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth() as { id: string; email?: string | null; name?: string | null; image?: string | null }

    // Parse and validate request
    const body = await request.json()
    const { plan, startTrial } = CreateSubscriptionSchema.parse(body)

    // Create subscription (FashionForge doesn't have trials)
    const subscription = await createSubscription(user.id, plan, false)

    return NextResponse.json({
      success: true,
      subscription: {
        id: subscription.id,
        plan: subscription.plan,
        status: subscription.status,
        monthlyDesignLimit: subscription.monthlyDesignLimit,
        monthlyVariations: subscription.monthlyVariations,
        allowHDExport: subscription.allowHDExport,
        allowCommercialUse: subscription.allowCommercialUse,
      },
    })

  } catch (error: any) {
    console.error('Create subscription error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create subscription',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}
