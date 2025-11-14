"use client"

import * as React from "react"
import Image from "next/image"
import { RiZoomInLine, RiZoomOutLine, RiDownloadLine } from "react-icons/ri"

interface DesignPreviewProps {
  imageUrl: string
  title: string
  category?: string
  showDownload?: boolean
}

export function DesignPreview({
  imageUrl,
  title,
  category,
  showDownload = false
}: DesignPreviewProps) {
  const [zoom, setZoom] = React.useState(1)

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${title.replace(/\s+/g, "-")}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error: unknown) {
      console.error("Download failed:", error)
    }
  }

  return (
    <div className="border-2 border-gray-200 rounded-2xl bg-white">
      {/* Header */}
      <div className="p-4 border-b-4 border-black bg-black text-white flex items-center justify-between">
        <div>
          <h3 className="font-bold uppercase">{title}</h3>
          {category && (
            <p className="text-xs text-gray-300 uppercase">{category}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white text-black hover:bg-gray-200 transition-colors"
            disabled={zoom <= 0.5}
          >
            <RiZoomOutLine className="w-5 h-5" />
          </button>
          <span className="px-3 text-sm font-mono">{Math.round(zoom * 100)}%</span>
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white text-black hover:bg-gray-200 transition-colors"
            disabled={zoom >= 3}
          >
            <RiZoomInLine className="w-5 h-5" />
          </button>
          {showDownload && (
            <button
              onClick={handleDownload}
              className="p-2 bg-purple-400 text-black hover:bg-purple-500 transition-colors ml-2"
            >
              <RiDownloadLine className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Image Container */}
      <div className="p-8 bg-gray-50 overflow-auto max-h-[600px]">
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "400px" }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full h-auto transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>
      </div>
    </div>
  )
}
