"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  RiDownload2Line,
  RiPaletteLine,
  RiImageAddLine,
  RiFileCopyLine,
} from "react-icons/ri"

export interface DesignVariation {
  id: string
  name: string
  style: string
  colors: string[]
  outputUrl: string
  thumbnail?: string
  createdAt: string
}

interface DesignGalleryProps {
  variations: DesignVariation[]
  onGenerateVariations?: (variationId: string) => void
  onGenerateMockup?: (variationId: string) => void
  onCreateTechPack?: (variationId: string) => void
  loading?: boolean
}

export function DesignGallery({
  variations,
  onGenerateVariations,
  onGenerateMockup,
  onCreateTechPack,
  loading = false,
}: DesignGalleryProps) {
  if (variations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🎨</div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No designs yet</h3>
        <p className="text-gray-500">
          Generate your first fashion design to see it here
        </p>
      </div>
    )
  }

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {variations.map((variation) => (
        <Card key={variation.id} className="border-2 border-gray-200 hover:border-purple-400 transition-all">
          <CardContent className="p-0">
            {/* Image */}
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={variation.thumbnail || variation.outputUrl}
                alt={variation.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Info */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-bold text-lg">{variation.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{variation.style} style</p>
              </div>

              {/* Colors */}
              {variation.colors.length > 0 && (
                <div className="flex items-center gap-2">
                  <RiPaletteLine className="w-4 h-4 text-gray-400" />
                  <div className="flex gap-1">
                    {variation.colors.slice(0, 5).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownload(variation.outputUrl, `${variation.name}.png`)}
                  className="border-2"
                >
                  <RiDownload2Line className="w-4 h-4 mr-1" />
                  Download
                </Button>

                {onGenerateVariations && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onGenerateVariations(variation.id)}
                    disabled={loading}
                    className="border-2"
                  >
                    <RiPaletteLine className="w-4 h-4 mr-1" />
                    Vary
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {onGenerateMockup && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onGenerateMockup(variation.id)}
                    disabled={loading}
                    className="border-2"
                  >
                    <RiImageAddLine className="w-4 h-4 mr-1" />
                    Mockup
                  </Button>
                )}

                {onCreateTechPack && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onCreateTechPack(variation.id)}
                    disabled={loading}
                    className="border-2"
                  >
                    <RiFileCopyLine className="w-4 h-4 mr-1" />
                    Tech Pack
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
