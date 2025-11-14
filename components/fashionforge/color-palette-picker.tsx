"use client"

import * as React from "react"
import { RiCheckLine } from "react-icons/ri"

interface ColorPalettePickerProps {
  selectedColors: string[]
  onChange: (colors: string[]) => void
  maxColors?: number
}

const colorPalettes = [
  { name: "Monochrome", colors: ["#000000", "#FFFFFF", "#808080"] },
  { name: "Pastel", colors: ["#FFB3BA", "#BAFFC9", "#BAE1FF"] },
  { name: "Vibrant", colors: ["#FF0000", "#00FF00", "#0000FF"] },
  { name: "Earth Tones", colors: ["#8B4513", "#D2691E", "#F4A460"] },
  { name: "Neon", colors: ["#FF00FF", "#00FFFF", "#FFFF00"] },
  { name: "Ocean", colors: ["#006994", "#4A90A4", "#87CEEB"] },
  { name: "Sunset", colors: ["#FF6B6B", "#FFA500", "#FFD700"] },
  { name: "Forest", colors: ["#228B22", "#32CD32", "#90EE90"] },
]

export function ColorPalettePicker({ selectedColors, onChange, maxColors = 5 }: ColorPalettePickerProps) {
  const [customColor, setCustomColor] = React.useState("#000000")

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      onChange(selectedColors.filter(c => c !== color))
    } else {
      if (selectedColors.length < maxColors) {
        onChange([...selectedColors, color])
      }
    }
  }

  const addCustomColor = () => {
    if (!selectedColors.includes(customColor) && selectedColors.length < maxColors) {
      onChange([...selectedColors, customColor])
    }
  }

  return (
    <div className="space-y-4">
      {/* Preset Palettes */}
      <div className="space-y-2">
        {colorPalettes.map((palette) => (
          <div
            key={palette.name}
            className="p-3 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{palette.name}</span>
              <div className="flex gap-2">
                {palette.colors.map((color) => {
                  const isSelected = selectedColors.includes(color)
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`
                        w-8 h-8 border-2 rounded relative transition-all
                        ${isSelected ? "border-purple-500 scale-110 shadow-lg" : "border-gray-300"}
                      `}
                      style={{ backgroundColor: color }}
                      title={color}
                      aria-label={`${isSelected ? 'Deselect' : 'Select'} color ${color}`}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <RiCheckLine className="w-5 h-5 text-white drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Color */}
      <div className="p-3 border-2 border-gray-300 rounded-lg bg-white">
        <div className="flex items-center gap-3">
          <label className="font-semibold text-sm">Custom:</label>
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="w-12 h-10 border-2 border-gray-300 rounded cursor-pointer"
          />
          <button
            onClick={addCustomColor}
            disabled={selectedColors.length >= maxColors}
            className={`
              px-4 py-2 font-semibold text-sm border-2 rounded transition-all
              ${selectedColors.length >= maxColors
                ? "bg-gray-200 border-gray-300 cursor-not-allowed text-gray-500"
                : "bg-purple-500 hover:bg-purple-600 border-purple-500 text-white"
              }
            `}
          >
            Add
          </button>
          <span className="text-xs text-gray-500 ml-auto">
            {selectedColors.length}/{maxColors} selected
          </span>
        </div>
      </div>

      {/* Selected Colors */}
      {selectedColors.length > 0 && (
        <div className="p-3 border-2 border-purple-500 rounded-lg bg-purple-50">
          <h4 className="font-semibold text-sm mb-2">Selected Colors</h4>
          <div className="flex flex-wrap gap-2">
            {selectedColors.map((color) => (
              <div
                key={color}
                className="flex items-center gap-2 px-2 py-1 bg-white rounded border border-gray-300"
              >
                <div
                  className="w-5 h-5 rounded border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs font-mono">{color}</span>
                <button
                  onClick={() => toggleColor(color)}
                  className="ml-1 text-gray-400 hover:text-rose-500 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
