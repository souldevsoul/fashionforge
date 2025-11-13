import { Suspense } from "react"
import Link from "next/link"
import {
  RiShirtLine,
  RiImageLine,
  RiFolder3Line,
  RiCoinLine,
  RiArrowRightLine,
} from "react-icons/ri"
import { Card } from "@/components/ui/card"
import { Text, Heading } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardQuickActions } from "@/components/dashboard/dashboard-quick-actions"

type DashboardStats = {
  totalDesigns: number
  totalVariations: number
  totalProjects: number
  creditsRemaining: number
}

type RecentDesign = {
  id: string
  filename: string
  category: string | null
  createdAt: string
  status: string
}

async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Fetch all counts in parallel
    const [designsRes, variationsRes, projectsRes] = await Promise.all([
      fetch(`${baseUrl}/api/designs?limit=1`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/variations?limit=1`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/projects?limit=1`, { cache: 'no-store' }),
    ])

    const [designsData, variationsData, projectsData] = await Promise.all([
      designsRes.ok ? designsRes.json() : { pagination: { total: 0 } },
      variationsRes.ok ? variationsRes.json() : { pagination: { total: 0 } },
      projectsRes.ok ? projectsRes.json() : { pagination: { total: 0 } },
    ])

    return {
      totalDesigns: designsData.pagination?.total || 0,
      totalVariations: variationsData.pagination?.total || 0,
      totalProjects: projectsData.pagination?.total || 0,
      creditsRemaining: 27, // TODO: Get from user subscription
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalDesigns: 0,
      totalVariations: 0,
      totalProjects: 0,
      creditsRemaining: 0,
    }
  }
}

async function getRecentDesigns(): Promise<RecentDesign[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/designs?limit=5&sortBy=createdAt&sortOrder=desc`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('Failed to fetch recent designs:', response.statusText)
      return []
    }

    const data = await response.json()

    if (!data.success || !data.designs) {
      console.error('Invalid API response:', data)
      return []
    }

    // Map API response to RecentDesign type
    return data.designs.map((design: any) => ({
      id: design.id,
      filename: design.filename,
      category: design.category || null,
      createdAt: new Date(design.createdAt).toISOString(),
      status: design.status,
    }))
  } catch (error) {
    console.error('Error fetching recent designs:', error)
    return []
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()
  const recentDesigns = await getRecentDesigns()

  const statCards = [
    {
      title: "Total Designs",
      value: stats.totalDesigns,
      icon: RiShirtLine,
      color: "bg-purple-400",
      link: "/dashboard/designs",
    },
    {
      title: "Design Variations",
      value: stats.totalVariations,
      icon: RiImageLine,
      color: "bg-pink-500",
      link: "/dashboard/variations",
    },
    {
      title: "Active Projects",
      value: stats.totalProjects,
      icon: RiFolder3Line,
      color: "bg-orange-400",
      link: "/dashboard/projects",
    },
    {
      title: "Designs Left",
      value: stats.creditsRemaining,
      icon: RiCoinLine,
      color: "bg-purple-400",
      link: "#",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <Heading variant="h1" className="uppercase">
          Dashboard
        </Heading>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Link key={stat.title} href={stat.link}>
                <Card
                  variant="outlined"
                  className="p-6 transition-all hover:shadow-[8px_8px_0_0_#000] cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <Text variant="caption" className="text-xs font-bold uppercase text-slate-600">
                        {stat.title}
                      </Text>
                      <Heading as="h2" className="text-3xl font-bold uppercase mt-2">
                        {stat.value}
                      </Heading>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center border-2 border-black ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Recent Designs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card variant="outlined" className="col-span-4 p-6">
            <div className="flex items-center justify-between">
              <Heading variant="h3" className="uppercase">
                Recent Designs
              </Heading>
              <Link href="/dashboard/designs">
                <Button variant="ghost" size="sm">
                  View All
                  <RiArrowRightLine className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {recentDesigns.map((design) => (
                <div
                  key={design.id}
                  className="flex items-center justify-between border-2 border-black p-4 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white">
                      <RiShirtLine className="h-5 w-5" />
                    </div>
                    <div>
                      <Text variant="body" className="font-medium">
                        {design.filename}
                      </Text>
                      <Text variant="caption" className="text-xs text-slate-600 uppercase">
                        {design.category || "No category"}
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={design.status === "ready" ? "success" : "warning"}
                      className="text-xs"
                    >
                      {design.status}
                    </Badge>
                    <Text variant="caption" className="text-xs text-slate-500">
                      {new Date(design.createdAt).toLocaleTimeString()}
                    </Text>
                  </div>
                </div>
              ))}

              {recentDesigns.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-black p-8">
                  <RiShirtLine className="h-12 w-12 text-slate-400" />
                  <Text variant="body" className="mt-2 text-slate-600">
                    No recent designs
                  </Text>
                </div>
              )}
            </div>
          </Card>

          {/* Designs Left Card */}
          <Card variant="outlined" className="col-span-3 p-6">
            <div className="flex items-center justify-between">
              <Heading variant="h3" className="uppercase">
                Designs Left
              </Heading>
              <Button variant="primary" size="sm">
                Upgrade
              </Button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center border-4 border-black bg-purple-400">
                  <div className="text-center">
                    <Heading as="h2" className="text-4xl font-bold">
                      {stats.creditsRemaining}
                    </Heading>
                    <Text variant="caption" className="text-xs uppercase">
                      This Month
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t-2 border-black pt-4">
                <div className="flex items-center justify-between text-sm">
                  <Text variant="caption" className="text-slate-600">
                    Design Upload
                  </Text>
                  <Text variant="body" className="font-medium">
                    1 design
                  </Text>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Text variant="caption" className="text-slate-600">
                    Variation (each)
                  </Text>
                  <Text variant="body" className="font-medium">
                    Free
                  </Text>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Text variant="caption" className="text-slate-600">
                    HD Export
                  </Text>
                  <Text variant="body" className="font-medium">
                    Pro Only
                  </Text>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Pricing
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <DashboardQuickActions />
      </Suspense>
    </div>
  )
}
