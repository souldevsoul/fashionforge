import { Suspense } from "react"
import Link from "next/link"
import { Text, Heading } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RiShirtLine, RiArrowRightLine, RiAddLine } from "react-icons/ri"

type Design = {
  id: string
  filename: string
  sourceUrl: string
  category: string
  status: string
  createdAt: string
  variationCount: number
}

async function getDesigns(): Promise<Design[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/designs`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('Failed to fetch designs:', response.statusText)
      return []
    }

    const data = await response.json()

    if (!data.success || !data.designs) {
      console.error('Invalid API response:', data)
      return []
    }

    // Map API response to Design type
    return data.designs.map((design: any) => ({
      id: design.id,
      filename: design.filename,
      sourceUrl: design.sourceUrl,
      category: design.category,
      status: design.status,
      createdAt: new Date(design.createdAt).toISOString(),
      variationCount: design.variations?.length || 0,
    }))
  } catch (error) {
    console.error('Error fetching designs:', error)
    return []
  }
}

export default async function DesignsPage() {
  const designs = await getDesigns()

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <Heading as="h1" className="text-2xl font-bold uppercase tracking-tight">
            Design Library
          </Heading>
          <Text variant="body" className="text-slate-600">
            View and manage your uploaded fashion designs
          </Text>
        </div>
        <Link href="/dashboard/create">
          <Button variant="primary" className="gap-2">
            <RiAddLine className="w-5 h-5" />
            New Design
          </Button>
        </Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {designs.length === 0 ? (
          <Card variant="outlined" className="p-12 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 border-4 border-black bg-purple-100 flex items-center justify-center">
                <RiShirtLine className="w-12 h-12 text-purple-400" />
              </div>
              <Heading variant="h3" className="uppercase">
                No Designs Yet
              </Heading>
              <Text variant="body" className="text-slate-600 max-w-md">
                Upload your first fashion sketch to start generating professional designs with AI
              </Text>
              <Link href="/dashboard/create">
                <Button variant="primary" size="lg" className="gap-2 mt-4">
                  <RiAddLine className="w-5 h-5" />
                  Create Your First Design
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((design) => (
              <Link key={design.id} href={`/dashboard/designs/${design.id}`}>
                <Card variant="outlined" className="overflow-hidden hover:shadow-[8px_8px_0_0_#000] transition-all cursor-pointer">
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={design.sourceUrl}
                      alt={design.filename}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 border-t-4 border-black">
                    <div className="flex items-start justify-between mb-2">
                      <Heading variant="h4" className="uppercase flex-1 truncate">
                        {design.filename}
                      </Heading>
                      <Badge
                        variant={design.status === "ready" ? "success" : "warning"}
                        className="ml-2"
                      >
                        {design.status}
                      </Badge>
                    </div>
                    <Text variant="caption" className="text-slate-600 uppercase block mb-3">
                      {design.category}
                    </Text>
                    <div className="flex items-center justify-between text-sm">
                      <Text variant="caption" className="text-slate-500">
                        {design.variationCount} variations
                      </Text>
                      <Text variant="caption" className="text-slate-500">
                        {new Date(design.createdAt).toLocaleDateString()}
                      </Text>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Suspense>
    </div>
  )
}
