import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/get-current-user'
import { getUserSubscription } from '@/lib/subscriptions'

export async function GET() {
  try {
    const user = await requireAuth() as { id: string; email?: string | null; name?: string | null; image?: string | null }

    const subscription = await getUserSubscription(user.id)

    if (!subscription) {
      // User has no subscription, return starter plan defaults
      return NextResponse.json({
        success: true,
        subscription: {
          plan: 'starter',
          status: 'active',
          monthlyDesignLimit: 3,
          monthlyVariations: 2,
          allowHDExport: false,
          allowCommercialUse: false,
        },
      })
    }

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
        createdAt: subscription.createdAt,
      },
    })

  } catch (error: unknown) {
    console.error('Get subscription error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to get subscription',
        details: error instanceof Error ? error.message : "Unknown error" || 'Unknown error',
      },
      { status: 500 }
    )
  }
}
