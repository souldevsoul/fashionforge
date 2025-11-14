"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CategorySelector } from "./category-selector"
import { StyleSelector } from "./style-selector"
import { ColorPalettePicker } from "./color-palette-picker"
import { RiSparklingLine, RiLoader4Line } from "react-icons/ri"

export interface DesignFormData {
  type: string
  category: string
  style?: string
  description: string
  colors: string[]
  materials: string[]
  referenceImageUrl?: string
  numVariations: number
  collectionId?: string
}

interface DesignFormProps {
  onSubmit: (data: DesignFormData) => Promise<void>
  loading?: boolean
}

const DESIGN_TYPES = [
  { id: "clothing", name: "Clothing", icon: "👔" },
  { id: "accessory", name: "Accessory", icon: "👜" },
  { id: "footwear", name: "Footwear", icon: "👟" },
  { id: "pattern", name: "Pattern", icon: "🎨" },
  { id: "full-outfit", name: "Full Outfit", icon: "👗" },
]

const MATERIALS = [
  "Cotton",
  "Silk",
  "Wool",
  "Linen",
  "Denim",
  "Leather",
  "Polyester",
  "Nylon",
  "Cashmere",
  "Velvet",
]

export function DesignForm({ onSubmit, loading = false }: DesignFormProps) {
  const [formData, setFormData] = useState<DesignFormData>({
    type: "clothing",
    category: "streetwear",
    style: "modern",
    description: "",
    colors: [],
    materials: [],
    numVariations: 4,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.description.trim()) {
      return
    }
    await onSubmit(formData)
  }

  const toggleMaterial = (material: string) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material],
    }))
  }

  return (
    <Card className="border-4 border-purple-500">
      <CardHeader className="bg-purple-50">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold uppercase">
          <RiSparklingLine className="w-6 h-6 text-purple-600" />
          Create Fashion Design
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Design Type */}
          <div className="space-y-2">
            <Label className="text-sm font-bold uppercase">Design Type</Label>
            <div className="grid grid-cols-5 gap-3">
              {DESIGN_TYPES.map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
                  className={`p-4 border-2 rounded-lg text-center transition-all ${
                    formData.type === type.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300 hover:border-purple-300"
                  }`}
                >
                  <div className="text-3xl mb-1">{type.icon}</div>
                  <div className="text-xs font-semibold">{type.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label className="text-sm font-bold uppercase">Category</Label>
            <CategorySelector
              value={formData.category}
              onChange={category => setFormData(prev => ({ ...prev, category }))}
            />
          </div>

          {/* Style */}
          <div className="space-y-2">
            <Label className="text-sm font-bold uppercase">Style</Label>
            <StyleSelector
              value={formData.style || ""}
              onChange={style => setFormData(prev => ({ ...prev, style }))}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-bold uppercase">
              Design Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your fashion design idea in detail... (e.g., 'Oversized hoodie with geometric patterns, urban streetwear aesthetic, relaxed fit, contrast stitching')"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-[120px] border-2"
              required
            />
            <p className="text-xs text-gray-500">
              Be specific about fit, details, inspiration, and intended use
            </p>
          </div>

          {/* Color Palette */}
          <div className="space-y-2">
            <Label className="text-sm font-bold uppercase">Color Palette</Label>
            <ColorPalettePicker
              selectedColors={formData.colors}
              onChange={colors => setFormData(prev => ({ ...prev, colors }))}
            />
          </div>

          {/* Materials */}
          <div className="space-y-2">
            <Label className="text-sm font-bold uppercase">Materials (Optional)</Label>
            <div className="flex flex-wrap gap-2">
              {MATERIALS.map(material => (
                <button
                  key={material}
                  type="button"
                  onClick={() => toggleMaterial(material)}
                  className={`px-3 py-1.5 border-2 rounded-full text-sm font-semibold transition-all ${
                    formData.materials.includes(material)
                      ? "border-purple-500 bg-purple-50 text-purple-700"
                      : "border-gray-300 text-gray-700 hover:border-purple-300"
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Variations */}
          <div className="space-y-2">
            <Label htmlFor="numVariations" className="text-sm font-bold uppercase">
              Number of Variations
            </Label>
            <Input
              id="numVariations"
              type="number"
              min={1}
              max={4}
              value={formData.numVariations}
              onChange={e => setFormData(prev => ({ ...prev, numVariations: parseInt(e.target.value) || 1 }))}
              className="border-2"
            />
            <p className="text-xs text-gray-500">
              Generate 1-4 design variations (15 credits total)
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading || !formData.description.trim()}
            className="w-full h-12 text-lg font-bold uppercase bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RiLoader4Line className="w-5 h-5 mr-2 animate-spin" />
                Generating Design...
              </>
            ) : (
              <>
                <RiSparklingLine className="w-5 h-5 mr-2" />
                Generate Design (15 Credits)
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
