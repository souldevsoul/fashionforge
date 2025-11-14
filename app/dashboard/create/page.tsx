"use client"

import * as React from "react"
import { Heading, Text } from "@/components/ui/typography"
import { DesignForm, type DesignFormData } from "@/components/fashionforge/design-form"
import { DesignGallery, type DesignVariation } from "@/components/fashionforge/design-gallery"
import { Card } from "@/components/ui/card"
import { RiSparklingLine, RiCheckLine, RiErrorWarningLine } from "react-icons/ri"

export default function CreateDesignPage() {
  const [variations, setVariations] = React.useState<DesignVariation[]>([])
  const [designId, setDesignId] = React.useState<string | null>(null)
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null)

  const handleSubmit = async (formData: DesignFormData) => {
    setIsGenerating(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const response = await fetch("/api/designs/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate design")
      }

      // Set design ID and variations
      setDesignId(data.design.id)
      setVariations(data.variations || [])
      setSuccessMessage(`Successfully generated ${data.variations?.length || 0} design variations!`)
    } catch (err) {
      console.error("Generation error:", err)
      setError(err instanceof Error ? err.message : "Failed to generate design")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleGenerateVariations = async (variationId: string) => {
    if (!designId) return

    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch(`/api/designs/${designId}/variations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          colors: ["#FF6B9D", "#C44569"],
          style: "modern",
          numVariations: 3,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate variations")
      }

      // Add new variations to the list
      setVariations(prev => [...prev, ...data.variations])
      setSuccessMessage(`Generated ${data.variations.length} new variations!`)
    } catch (err) {
      console.error("Variation error:", err)
      setError(err instanceof Error ? err.message : "Failed to generate variations")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleGenerateMockup = async (variationId: string) => {
    if (!designId) return

    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch("/api/mockups/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          designId,
          variationId,
          type: "model",
          modelType: "female",
          pose: "standing",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate mockup")
      }

      setSuccessMessage("Mockup generated successfully!")
    } catch (err) {
      console.error("Mockup error:", err)
      setError(err instanceof Error ? err.message : "Failed to generate mockup")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCreateTechPack = async (variationId: string) => {
    if (!designId) return

    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch("/api/techpacks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          designId,
          measurements: {
            sizes: ["XS", "S", "M", "L", "XL"],
            chest: { XS: 86, S: 91, M: 96, L: 101, XL: 106 },
            waist: { XS: 66, S: 71, M: 76, L: 81, XL: 86 },
            hips: { XS: 91, S: 96, M: 101, L: 106, XL: 111 },
          },
          materials: {
            fabric: "100% Cotton Jersey",
            weight: "180 GSM",
            finish: "Pre-washed, soft hand",
          },
          construction: {
            seams: "Double-needle stitching",
            hem: "Ribbed hem and cuffs",
            collar: "Crew neck",
          },
          notes: "Sample tech pack for design",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create tech pack")
      }

      setSuccessMessage("Tech pack created successfully!")
    } catch (err) {
      console.error("Tech pack error:", err)
      setError(err instanceof Error ? err.message : "Failed to create tech pack")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div>
        <Heading variant="h1" className="uppercase flex items-center gap-3">
          <RiSparklingLine className="w-10 h-10 text-purple-600" />
          Create Fashion Design
        </Heading>
        <Text variant="body" className="text-slate-600 mt-2">
          Generate professional fashion designs with AI - from concept to production
        </Text>
      </div>

      {/* Error Message */}
      {error && (
        <Card className="p-4 bg-red-50 border-2 border-red-500">
          <div className="flex items-center gap-3 text-red-700">
            <RiErrorWarningLine className="w-6 h-6" />
            <div>
              <p className="font-bold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Success Message */}
      {successMessage && (
        <Card className="p-4 bg-green-50 border-2 border-green-500">
          <div className="flex items-center gap-3 text-green-700">
            <RiCheckLine className="w-6 h-6" />
            <div>
              <p className="font-bold">Success</p>
              <p className="text-sm">{successMessage}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Design Form */}
      <DesignForm onSubmit={handleSubmit} loading={isGenerating} />

      {/* Results */}
      {variations.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Heading variant="h2" className="uppercase">
              Generated Designs ({variations.length})
            </Heading>
          </div>

          <DesignGallery
            variations={variations}
            onGenerateVariations={handleGenerateVariations}
            onGenerateMockup={handleGenerateMockup}
            onCreateTechPack={handleCreateTechPack}
            loading={isGenerating}
          />
        </div>
      )}

      {/* Empty State */}
      {!isGenerating && variations.length === 0 && (
        <Card className="p-12 text-center border-2 border-dashed border-gray-300">
          <div className="text-gray-400 text-6xl mb-4">✨</div>
          <Heading variant="h3" className="text-gray-700 mb-2">
            Ready to Create?
          </Heading>
          <Text variant="body" className="text-gray-500 max-w-md mx-auto">
            Fill out the form above to generate your first AI-powered fashion design.
            Each generation costs 15 credits and creates 4 unique variations.
          </Text>
        </Card>
      )}
    </div>
  )
}
