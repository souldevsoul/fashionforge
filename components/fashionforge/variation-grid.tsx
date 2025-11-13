"use client"

import * as React from "react"
import Image from "next/image"
import { RiDownloadLine, RiEyeLine, RiHeartLine, RiHeartFill } from "react-icons/ri"

interface Variation {
  id: string
  name: string
  style: string
  outputUrl: string
  thumbnail?: string
  downloads: number
  colors: string[]
}

interface VariationGridProps {
  variations: Variation[]
  onSelect?: (variation: Variation) => void
  onDownload?: (variationId: string) => void
}

export function VariationGrid({ variations, onSelect, onDownload }: VariationGridProps) {
  const [favorites, setFavorites] = React.useState<Set<string>>(new Set())

  const toggleFavorite = (variationId: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev)
      if (newSet.has(variationId)) {
        newSet.delete(variationId)
      } else {
        newSet.add(variationId)
      }
      return newSet
    })
  }

  if (variations.length === 0) {
    return (
      <div className="p-12 border-4 border-dashed border-gray-300 text-center">
        <p className="text-gray-500 uppercase font-bold">No variations yet</p>
        <p className="text-sm text-gray-400 mt-2">Generate some design variations to see them here</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {variations.map((variation) => {
        const isFavorite = favorites.has(variation.id)

        return (
          <div
            key={variation.id}
            className="border-4 border-black bg-white hover:shadow-lg transition-shadow group"
          >
            {/* Image */}
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <img
                src={variation.thumbnail || variation.outputUrl}
                alt={variation.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button
                  onClick={() => onSelect?.(variation)}
                  className="p-3 bg-white hover:bg-purple-400 transition-colors"
                  title="Preview"
                >
                  <RiEyeLine className="w-6 h-6" />
                </button>
                <button
                  onClick={() => onDownload?.(variation.id)}
                  className="p-3 bg-white hover:bg-purple-400 transition-colors"
                  title="Download"
                >
                  <RiDownloadLine className="w-6 h-6" />
                </button>
              </div>

              {/* Favorite button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(variation.id)
                }}
                className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white transition-colors"
              >
                {isFavorite ? (
                  <RiHeartFill className="w-5 h-5 text-rose-500" />
                ) : (
                  <RiHeartLine className="w-5 h-5 text-black" />
                )}
              </button>
            </div>

            {/* Info */}
            <div className="p-4 border-t-4 border-black">
              <h4 className="font-bold uppercase mb-1">{variation.name}</h4>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 uppercase">{variation.style}</span>
                <span className="text-gray-500">{variation.downloads} downloads</span>
              </div>

              {/* Color palette */}
              {variation.colors.length > 0 && (
                <div className="flex gap-1 mt-3">
                  {variation.colors.slice(0, 5).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 border-2 border-black"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
