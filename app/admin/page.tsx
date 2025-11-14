"use client"

import { useState, useEffect } from "react"
import {
  RiShirtLine,
  RiUserLine,
  RiImageLine,
  RiMoneyDollarCircleLine,
  RiLineChartLine,
} from "react-icons/ri"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Text, Heading } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalDesigns: 0,
    totalVariations: 0,
    activeDesigns: 0,
    totalUsers: 0,
    freeUsers: 0,
    proUsers: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
  })

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

      // Fetch designs data
      const designsResponse = await fetch(`${baseUrl}/api/designs`, {
        cache: 'no-store',
      })

      let totalDesigns = 0
      let totalVariations = 0
      let activeDesigns = 0

      if (designsResponse.ok) {
        const designsData = await designsResponse.json()
        if (designsData.success && designsData.designs) {
          totalDesigns = designsData.designs.length
          activeDesigns = designsData.designs.filter((d: { status: string }) => d.status === 'ready').length
          totalVariations = designsData.designs.reduce((acc: number, d: { variations?: unknown[] }) =>
            acc + (d.variations?.length || 0), 0
          )
        }
      }

      setStats({
        totalDesigns,
        totalVariations,
        activeDesigns,
        totalUsers: 1248, // Mock data - TODO: Implement user counting
        freeUsers: 856,
        proUsers: 392,
        totalRevenue: 89450, // Mock data - TODO: Calculate from subscriptions
        monthlyRevenue: 12680,
      })
    } catch (error) {
      console.error("Error fetching admin stats:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-center h-96">
          <Text variant="body" className="text-slate-600">Loading dashboard...</Text>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between space-y-2">
        <div>
          <Heading variant="h1" className="uppercase">
            ADMIN DASHBOARD
          </Heading>
          <Text variant="body" className="text-slate-600">
            Platform overview and management
          </Text>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Designs */}
        <Card variant="outlined" className="border-4 border-purple-500 bg-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold uppercase text-purple-900">
              TOTAL DESIGNS
            </CardTitle>
            <RiShirtLine className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold text-purple-900">
              {stats.totalDesigns}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <Text variant="caption" className="text-xs text-purple-800">
                {stats.activeDesigns} active
              </Text>
              <Text variant="caption" className="text-xs text-purple-600">•</Text>
              <Text variant="caption" className="text-xs text-purple-800">
                {stats.totalVariations} variations
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Total Users */}
        <Card variant="outlined" className="border-4 border-pink-500 bg-pink-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold uppercase text-rose-900">
              TOTAL USERS
            </CardTitle>
            <RiUserLine className="h-6 w-6 text-pink-600" />
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold text-rose-900">
              {stats.totalUsers}
            </h2>
            <Text variant="caption" className="mt-2 text-xs text-rose-800">
              {stats.freeUsers} free, {stats.proUsers} pro
            </Text>
          </CardContent>
        </Card>

        {/* Design Variations */}
        <Card variant="outlined" className="border-4 border-rose-500 bg-rose-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold uppercase text-rose-900">
              VARIATIONS
            </CardTitle>
            <RiImageLine className="h-6 w-6 text-rose-600" />
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold text-rose-900">
              {stats.totalVariations}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <Text variant="caption" className="text-xs text-rose-800">
                Total generated
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card variant="outlined" className="border-4 border-purple-500 bg-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold uppercase text-purple-900">
              TOTAL REVENUE
            </CardTitle>
            <RiMoneyDollarCircleLine className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <Heading as="h2" className="text-3xl font-bold text-purple-900">
              ${stats.totalRevenue.toLocaleString()}
            </Heading>
            <Text variant="caption" className="mt-2 text-xs text-purple-800">
              ${stats.monthlyRevenue.toLocaleString()} this month
            </Text>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <Heading variant="h3" className="uppercase">
          QUICK ACTIONS
        </Heading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card variant="outlined" className="border-4 border-black hover:shadow-[4px_4px_0_0_#000] transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <RiShirtLine className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-tight">
                MANAGE DESIGNS
              </h3>
              <Text variant="caption" className="mt-2 text-xs text-slate-600">
                View and moderate all designs
              </Text>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-2"
                onClick={() => window.location.href = "/admin/designs"}
              >
                GO TO DESIGNS
              </Button>
            </CardContent>
          </Card>

          <Card variant="outlined" className="border-4 border-black hover:shadow-[4px_4px_0_0_#000] transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <RiUserLine className="h-12 w-12 text-pink-600" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-tight">
                MANAGE USERS
              </h3>
              <Text variant="caption" className="mt-2 text-xs text-slate-600">
                View users and subscriptions
              </Text>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-2"
                onClick={() => window.location.href = "/admin/users"}
              >
                GO TO USERS
              </Button>
            </CardContent>
          </Card>

          <Card variant="outlined" className="border-4 border-black hover:shadow-[4px_4px_0_0_#000] transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <RiLineChartLine className="h-12 w-12 text-rose-600" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-tight">
                ANALYTICS
              </h3>
              <Text variant="caption" className="mt-2 text-xs text-slate-600">
                View detailed platform analytics
              </Text>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-2"
                onClick={() => window.location.href = "/admin/analytics"}
              >
                GO TO ANALYTICS
              </Button>
            </CardContent>
          </Card>

          <Card variant="outlined" className="border-4 border-black hover:shadow-[4px_4px_0_0_#000] transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <RiMoneyDollarCircleLine className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-tight">
                FINANCIALS
              </h3>
              <Text variant="caption" className="mt-2 text-xs text-slate-600">
                View revenue and subscriptions
              </Text>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-2"
                onClick={() => window.location.href = "/admin/financials"}
              >
                GO TO FINANCIALS
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
