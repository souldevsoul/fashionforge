import { prisma } from '@/lib/prisma'

export type PlanType = 'starter' | 'pro' | 'enterprise'

export interface PlanLimits {
  monthlyDesignLimit: number
  monthlyVariations: number
  allowHDExport: boolean
  allowCommercialUse: boolean
  price: number // Monthly price in USD
}

// Plan configurations
export const PLANS: Record<PlanType, PlanLimits> = {
  starter: {
    monthlyDesignLimit: 3,
    monthlyVariations: 2,
    allowHDExport: false,
    allowCommercialUse: false,
    price: 0,
  },
  pro: {
    monthlyDesignLimit: 30,
    monthlyVariations: 5,
    allowHDExport: true,
    allowCommercialUse: true,
    price: 39,
  },
  enterprise: {
    monthlyDesignLimit: 200,
    monthlyVariations: 999,
    allowHDExport: true,
    allowCommercialUse: true,
    price: 149,
  },
}

/**
 * Get user's active subscription
 */
export async function getUserSubscription(userId: string) {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId,
      status: {
        in: ['active', 'trialing'],
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return subscription
}

/**
 * Create a new subscription for user
 */
export async function createSubscription(
  userId: string,
  plan: PlanType,
  startTrial: boolean = false
) {
  const planLimits = PLANS[plan]

  const subscription = await prisma.subscription.create({
    data: {
      userId,
      plan,
      status: 'active',
      monthlyDesignLimit: planLimits.monthlyDesignLimit,
      monthlyVariations: planLimits.monthlyVariations,
      allowHDExport: planLimits.allowHDExport,
      allowCommercialUse: planLimits.allowCommercialUse,
    },
  })

  return subscription
}

/**
 * Check if user can perform an action based on their subscription
 */
export async function checkSubscriptionLimit(
  userId: string,
  limitType: 'hdExport' | 'commercialUse'
): Promise<{ allowed: boolean; reason?: string }> {
  const subscription = await getUserSubscription(userId)

  if (!subscription) {
    // No subscription = free starter plan
    return {
      allowed: false,
      reason: 'Upgrade to Pro to access this feature',
    }
  }

  // Check specific limits
  switch (limitType) {
    case 'hdExport':
      return {
        allowed: subscription.allowHDExport,
        reason: !subscription.allowHDExport ? 'Upgrade to Pro for HD exports' : undefined,
      }
    case 'commercialUse':
      return {
        allowed: subscription.allowCommercialUse,
        reason: !subscription.allowCommercialUse ? 'Upgrade to Pro for commercial use' : undefined,
      }
    default:
      return { allowed: true }
  }
}

/**
 * Get user's current plan or return starter (free) plan
 */
export async function getUserPlan(userId: string): Promise<PlanType> {
  const subscription = await getUserSubscription(userId)
  return (subscription?.plan as PlanType) || 'starter'
}

/**
 * Cancel subscription
 */
export async function cancelSubscription(subscriptionId: string) {
  const subscription = await prisma.subscription.update({
    where: { id: subscriptionId },
    data: {
      status: 'cancelled',
      cancelledAt: new Date(),
    },
  })

  return subscription
}

/**
 * Upgrade user subscription
 */
export async function upgradeSubscription(
  userId: string,
  newPlan: PlanType,
  startTrial: boolean = false
) {
  // Cancel existing subscription
  const existing = await getUserSubscription(userId)
  if (existing) {
    await cancelSubscription(existing.id)
  }

  // Create new subscription
  return createSubscription(userId, newPlan, startTrial)
}
