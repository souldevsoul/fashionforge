"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { RiUploadLine, RiImageLine, RiCloseLine } from "react-icons/ri"

interface DesignUploaderProps {
  onUploadComplete?: (designId: string, sourceUrl: string) => void
  category: string
  userId: string
}

export function DesignUploader({ onUploadComplete, category, userId }: DesignUploaderProps) {
  const [file, setFile] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState<string | null>(null)
  const [uploading, setUploading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"]
    if (!validTypes.includes(selectedFile.type)) {
      setError("Invalid file type. Please upload JPEG, PNG, WebP, or SVG.")
      return
    }

    // Validate file size (10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File size too large. Maximum 10MB allowed.")
      return
    }

    setFile(selectedFile)
    setError(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("category", category)
      formData.append("userId", userId)

      const response = await fetch("/api/designs/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()

      if (onUploadComplete) {
        onUploadComplete(data.design.id, data.design.sourceUrl)
      }

      // Reset
      setFile(null)
      setPreview(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  const handleClear = () => {
    setFile(null)
    setPreview(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="w-full">
      {!preview ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-4 border-dashed border-black p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-purple-400 flex items-center justify-center">
              <RiImageLine className="w-8 h-8 text-black" />
            </div>
            <div>
              <p className="text-lg font-bold uppercase mb-2">Upload Design Sketch</p>
              <p className="text-sm text-gray-600">
                Drop your fashion sketch here or click to browse
              </p>
              <p className="text-xs text-gray-500 mt-2">
                JPEG, PNG, WebP, SVG • Max 10MB
              </p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/svg+xml"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="border-2 border-gray-200 rounded-2xl p-6 bg-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold uppercase text-lg">Preview</h3>
            <button
              onClick={handleClear}
              className="p-2 hover:bg-gray-100 transition-colors"
              aria-label="Clear preview"
            >
              <RiCloseLine className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto max-h-96 object-contain border-2 border-gray-300"
            />
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleUpload}
              disabled={uploading}
              className="flex-1 bg-purple-400 hover:bg-purple-500 text-black font-bold uppercase border-2 border-gray-200 rounded-2xl shadow-lg"
              aria-label={uploading ? "Uploading design" : "Upload design"}
            >
              <RiUploadLine className="w-5 h-5 mr-2" />
              {uploading ? "Uploading..." : "Upload Design"}
            </Button>
            <Button
              onClick={handleClear}
              variant="secondary"
              className="border-2 border-gray-200 rounded-2xl font-bold uppercase"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-rose-500 text-white border-2 border-gray-200 rounded-2xl">
          <p className="font-bold uppercase text-sm">{error}</p>
        </div>
      )}
    </div>
  )
}
