import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"
import Stripe from "stripe"

const UpgradeSchema = z.object({
  plan: z.enum(["pro", "enterprise"]),
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { plan } = UpgradeSchema.parse(body)

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        subscriptions: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    const currentSubscription = user.subscriptions[0]

    // Check if user is already on this plan
    if (currentSubscription?.plan === plan) {
      return NextResponse.json(
        { error: `You are already on the ${plan} plan` },
        { status: 400 }
      )
    }

    // If upgrading to Pro, create subscription
    if (plan === "pro") {
      const planLimits = {
        pro: {
          monthlyDesignLimit: 30,
          monthlyVariations: 5,
          allowHDExport: true,
          allowCommercialUse: true,
        },
      }

      const limits = planLimits[plan]

      // Update or create subscription
      if (currentSubscription) {
        await prisma.subscription.update({
          where: { id: currentSubscription.id },
          data: {
            plan,
            status: "active",
            monthlyDesignLimit: limits.monthlyDesignLimit,
            monthlyVariations: limits.monthlyVariations,
            allowHDExport: limits.allowHDExport,
            allowCommercialUse: limits.allowCommercialUse,
            cancelledAt: null,
          },
        })
      } else {
        await prisma.subscription.create({
          data: {
            userId: user.id,
            plan,
            status: "active",
            monthlyDesignLimit: limits.monthlyDesignLimit,
            monthlyVariations: limits.monthlyVariations,
            allowHDExport: limits.allowHDExport,
            allowCommercialUse: limits.allowCommercialUse,
          },
        })
      }

      return NextResponse.json({
        success: true,
        message: "Successfully upgraded to Pro plan!",
      })
    }

    // For Enterprise, redirect to contact page
    if (plan === "enterprise") {
      return NextResponse.json({
        success: true,
        message: "Please contact sales for Enterprise plan",
        redirectUrl: "/contact",
      })
    }

    return NextResponse.json(
      { error: "Invalid plan" },
      { status: 400 }
    )
  } catch (error: unknown) {
    console.error("Upgrade subscription error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        error: "Failed to upgrade subscription",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
