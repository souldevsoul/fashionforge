"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DesignPreview } from "@/components/fashionforge/design-preview"
import { VariationGrid } from "@/components/fashionforge/variation-grid"
import { StyleSelector } from "@/components/fashionforge/style-selector"
import { ColorPalettePicker } from "@/components/fashionforge/color-palette-picker"
import {
  RiArrowLeftLine,
  RiSparklingLine,
  RiDeleteBinLine,
  RiEditLine,
  RiShareLine,
} from "react-icons/ri"

type Design = {
  id: string
  filename: string
  sourceUrl: string
  category: string
  description?: string
  status: string
  createdAt: string
  variations: Variation[]
}

type Variation = {
  id: string
  name: string
  style: string
  outputUrl: string
  thumbnail?: string
  downloads: number
  colors: string[]
  status: string
  createdAt: string
}

export default function DesignDetailPage() {
  const params = useParams()
  const router = useRouter()
  const designId = params.id as string

  const [design, setDesign] = React.useState<Design | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [selectedStyle, setSelectedStyle] = React.useState("modern")
  const [selectedColors, setSelectedColors] = React.useState<string[]>([])
  const [showGeneratePanel, setShowGeneratePanel] = React.useState(false)

  React.useEffect(() => {
    fetchDesign()
  }, [designId])

  const fetchDesign = async () => {
    try {
      const response = await fetch(`/api/designs/${designId}`)
      if (!response.ok) throw new Error("Failed to fetch design")

      const data = await response.json()
      setDesign(data.design)
    } catch (error: unknown) {
      console.error("Error fetching design:", error)
      alert("Failed to load design. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGenerateMore = async () => {
    if (!design || selectedColors.length === 0) return

    setIsGenerating(true)

    try {
      const response = await fetch(`/api/designs/${designId}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          style: selectedStyle,
          colors: selectedColors,
          variationCount: 4,
        }),
      })

      if (!response.ok) throw new Error("Failed to generate variations")

      await fetchDesign() // Refresh design data
      setShowGeneratePanel(false)
      setSelectedColors([])
    } catch (error: unknown) {
      console.error("Generation error:", error)
      alert("Failed to generate variations. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = async (variationId: string) => {
    try {
      const response = await fetch(`/api/variations/${variationId}/download`)
      if (!response.ok) throw new Error("Download failed")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `design-${variationId}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error: unknown) {
      console.error("Download error:", error)
      alert("Failed to download design. Please try again.")
    }
  }

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this design and all its variations?")) return

    try {
      const response = await fetch(`/api/designs/${designId}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete design")

      alert("Design deleted successfully")
      router.push("/dashboard/designs")
    } catch (error: unknown) {
      console.error("Delete error:", error)
      alert("Failed to delete design. Please try again.")
    }
  }

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 border-4 border-black bg-purple-400 animate-pulse">
            <RiSparklingLine className="w-8 h-8" />
          </div>
          <Text variant="body-lg" className="font-bold uppercase">Loading Design...</Text>
        </div>
      </div>
    )
  }

  if (!design) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <Card variant="outlined" className="p-12 text-center max-w-md">
          <Heading variant="h3" className="uppercase mb-4">Design Not Found</Heading>
          <Text variant="body" className="text-slate-600 mb-6">
            This design may have been deleted or you don&apos;t have permission to view it.
          </Text>
          <Button variant="outline" onClick={() => router.push("/dashboard/designs")}>
            <RiArrowLeftLine className="w-5 h-5 mr-2" />
            Back to Designs
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/dashboard/designs")}
          >
            <RiArrowLeftLine className="w-5 h-5 mr-2" />
            Back
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <Heading variant="h1" className="uppercase">
                {design.filename}
              </Heading>
              <Badge variant={design.status === "ready" ? "success" : "warning"}>
                {design.status}
              </Badge>
            </div>
            <Text variant="body" className="text-slate-600 mt-2">
              {design.category.toUpperCase()} • Created {new Date(design.createdAt).toLocaleDateString()}
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RiShareLine className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <RiEditLine className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
            className="border-red-500 text-rose-500 hover:bg-rose-50"
          >
            <RiDeleteBinLine className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      {/* Original Design Preview */}
      <Card variant="outlined" className="p-6">
        <Heading variant="h3" className="uppercase mb-4">Original Sketch</Heading>
        <DesignPreview
          imageUrl={design.sourceUrl}
          title={design.filename}
          category={design.category}
          showDownload={true}
        />
      </Card>

      {/* Variations Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Heading variant="h2" className="uppercase">
              Design Variations
            </Heading>
            <Text variant="body" className="text-slate-600 mt-1">
              {design.variations.length} variations generated
            </Text>
          </div>
          <Button
            variant="primary"
            onClick={() => setShowGeneratePanel(!showGeneratePanel)}
            className="gap-2"
          >
            <RiSparklingLine className="w-5 h-5" />
            Generate More
          </Button>
        </div>

        {/* Generate More Panel */}
        {showGeneratePanel && (
          <Card variant="outlined" className="p-6 bg-purple-50">
            <div className="space-y-6">
              <Heading variant="h3" className="uppercase">
                Generate New Variations
              </Heading>

              <StyleSelector value={selectedStyle} onChange={setSelectedStyle} />

              <ColorPalettePicker
                selectedColors={selectedColors}
                onChange={setSelectedColors}
                maxColors={5}
              />

              <div className="flex items-center justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowGeneratePanel(false)}
                  disabled={isGenerating}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleGenerateMore}
                  disabled={selectedColors.length === 0 || isGenerating}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <>
                      <RiSparklingLine className="w-5 h-5 animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <RiSparklingLine className="w-5 h-5" />
                      Generate 4 Variations
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Variations Grid */}
        {design.variations.length > 0 ? (
          <VariationGrid
            variations={design.variations}
            onDownload={handleDownload}
          />
        ) : (
          <Card variant="outlined" className="p-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 border-4 border-black bg-purple-100">
                <RiSparklingLine className="w-10 h-10 text-purple-400" />
              </div>
              <Heading variant="h3" className="uppercase">
                No Variations Yet
              </Heading>
              <Text variant="body" className="text-slate-600 max-w-md mx-auto">
                Generate your first design variations by clicking the &quot;Generate More&quot; button above
              </Text>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
