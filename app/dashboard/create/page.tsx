"use client"

import * as React from "react"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DesignUploader } from "@/components/fashionforge/design-uploader"
import { CategorySelector } from "@/components/fashionforge/category-selector"
import { StyleSelector } from "@/components/fashionforge/style-selector"
import { ColorPalettePicker } from "@/components/fashionforge/color-palette-picker"
import { VariationGrid } from "@/components/fashionforge/variation-grid"
import { RiArrowRightLine, RiSparklingLine } from "react-icons/ri"

type Design = {
  id: string
  filename: string
  sourceUrl: string
  category: string
}

type Variation = {
  id: string
  name: string
  style: string
  outputUrl: string
  thumbnail?: string
  downloads: number
  colors: string[]
}

export default function CreateDesignPage() {
  const [currentStep, setCurrentStep] = React.useState<"upload" | "customize" | "generate" | "results">("upload")
  const [uploadedDesign, setUploadedDesign] = React.useState<Design | null>(null)
  const [category, setCategory] = React.useState("streetwear")
  const [style, setStyle] = React.useState("modern")
  const [colors, setColors] = React.useState<string[]>([])
  const [variations, setVariations] = React.useState<Variation[]>([])
  const [isGenerating, setIsGenerating] = React.useState(false)

  const handleUploadComplete = (designId: string, sourceUrl: string) => {
    setUploadedDesign({
      id: designId,
      filename: "uploaded-design",
      sourceUrl,
      category,
    })
    setCurrentStep("customize")
  }

  const handleGenerate = async () => {
    if (!uploadedDesign) return

    setIsGenerating(true)
    setCurrentStep("generate")

    try {
      const response = await fetch(`/api/designs/${uploadedDesign.id}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          style,
          colors,
          variationCount: 4,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate variations")
      }

      const data = await response.json()
      setVariations(data.variations || [])
      setCurrentStep("results")
    } catch {
      console.error("Generation error:", error)
      alert("Failed to generate design variations. Please try again.")
      setCurrentStep("customize")
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
    } catch {
      console.error("Download error:", error)
      alert("Failed to download design. Please try again.")
    }
  }

  const handleStartOver = () => {
    setUploadedDesign(null)
    setCurrentStep("upload")
    setVariations([])
    setColors([])
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Heading variant="h1" className="uppercase">
            Create Design
          </Heading>
          <Text variant="body" className="text-slate-600 mt-2">
            Upload a sketch and generate professional fashion designs with AI
          </Text>
        </div>
        {currentStep === "results" && (
          <Button variant="outline" onClick={handleStartOver}>
            Start New Design
          </Button>
        )}
      </div>

      {/* Progress Steps */}
      <Card variant="outlined" className="p-6">
        <div className="flex items-center justify-between">
          {["Upload", "Customize", "Generate", "Results"].map((label, index) => {
            const stepNames = ["upload", "customize", "generate", "results"]
            const currentIndex = stepNames.indexOf(currentStep)
            const isActive = index === currentIndex
            const isCompleted = index < currentIndex

            return (
              <React.Fragment key={label}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 border-4 border-black flex items-center justify-center font-bold ${
                      isActive
                        ? "bg-purple-400 text-black"
                        : isCompleted
                        ? "bg-black text-purple-400"
                        : "bg-white text-black"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <Text
                    variant="body-sm"
                    className={`font-bold uppercase ${
                      isActive ? "text-black" : "text-slate-400"
                    }`}
                  >
                    {label}
                  </Text>
                </div>
                {index < 3 && (
                  <div className="flex-1 h-1 bg-slate-200 mx-4">
                    <div
                      className={`h-full ${isCompleted ? "bg-black" : "bg-slate-200"}`}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </Card>

      {/* Step Content */}
      {currentStep === "upload" && (
        <Card variant="outlined" className="p-8">
          <DesignUploader
            onUploadComplete={handleUploadComplete}
            category={category}
            userId="user_temp" // TODO: Get from auth session
          />
        </Card>
      )}

      {currentStep === "customize" && uploadedDesign && (
        <div className="space-y-6">
          {/* Preview */}
          <Card variant="outlined" className="p-6">
            <Heading variant="h3" className="uppercase mb-4">
              Uploaded Design
            </Heading>
            <div className="aspect-square max-w-md mx-auto border-4 border-black bg-gray-100">
              <img
                src={uploadedDesign.sourceUrl}
                alt={uploadedDesign.filename}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* Category Selection */}
          <Card variant="outlined" className="p-6">
            <CategorySelector value={category} onChange={setCategory} />
          </Card>

          {/* Style Selection */}
          <Card variant="outlined" className="p-6">
            <StyleSelector value={style} onChange={setStyle} />
          </Card>

          {/* Color Palette */}
          <Card variant="outlined" className="p-6">
            <ColorPalettePicker value={colors} onChange={setColors} maxColors={5} />
          </Card>

          {/* Generate Button */}
          <div className="flex justify-center">
            <Button
              size="xl"
              onClick={handleGenerate}
              disabled={colors.length === 0}
              className="gap-3 bg-black text-purple-400 hover:bg-gray-900 border-4 border-black font-bold uppercase brutalist-shadow"
            >
              <RiSparklingLine className="w-6 h-6" />
              Generate Variations
              <RiArrowRightLine className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}

      {currentStep === "generate" && (
        <Card variant="outlined" className="p-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 border-4 border-black bg-purple-400 animate-pulse">
              <RiSparklingLine className="w-12 h-12" />
            </div>
            <Heading variant="h2" className="uppercase">
              Generating Your Designs
            </Heading>
            <Text variant="body-lg" className="text-slate-600 max-w-2xl mx-auto">
              Our AI is creating {4} unique design variations based on your preferences.
              This usually takes 30-60 seconds.
            </Text>
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-black animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {currentStep === "results" && (
        <div className="space-y-6">
          <Card variant="outlined" className="p-6 bg-black text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <RiSparklingLine className="w-8 h-8 text-purple-400" />
              <Heading variant="h2" className="uppercase text-purple-400">
                Your Designs Are Ready!
              </Heading>
            </div>
            <Text variant="body" className="text-center">
              {variations.length} variations generated successfully. Click to preview or download.
            </Text>
          </Card>

          <VariationGrid
            variations={variations}
            onDownload={handleDownload}
          />
        </div>
      )}
    </div>
  )
}
