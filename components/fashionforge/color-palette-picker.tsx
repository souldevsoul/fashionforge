"use client"

import * as React from "react"
import { RiCheckLine } from "react-icons/ri"

interface ColorPalettePickerProps {
  value: string[]
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

export function ColorPalettePicker({ value, onChange, maxColors = 5 }: ColorPalettePickerProps) {
  const [customColor, setCustomColor] = React.useState("#000000")

  const toggleColor = (color: string) => {
    if (value.includes(color)) {
      onChange(value.filter(c => c !== color))
    } else {
      if (value.length < maxColors) {
        onChange([...value, color])
      }
    }
  }

  const addCustomColor = () => {
    if (!value.includes(customColor) && value.length < maxColors) {
      onChange([...value, customColor])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold uppercase text-lg mb-2">Color Palette</h3>
        <p className="text-sm text-gray-600">
          Select up to {maxColors} colors for your design ({value.length}/{maxColors} selected)
        </p>
      </div>

      {/* Preset Palettes */}
      <div className="space-y-3">
        {colorPalettes.map((palette) => (
          <div
            key={palette.name}
            className="p-4 border-4 border-black bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase text-sm">{palette.name}</span>
              <div className="flex gap-2">
                {palette.colors.map((color) => {
                  const isSelected = value.includes(color)
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`
                        w-10 h-10 border-4 border-black relative transition-transform
                        ${isSelected ? "scale-110" : ""}
                      `}
                      style={{ backgroundColor: color }}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <RiCheckLine className="w-6 h-6 text-white drop-shadow-lg" />
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
      <div className="p-4 border-4 border-black bg-white">
        <div className="flex items-center gap-3">
          <label className="font-bold uppercase text-sm">Custom Color:</label>
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="w-16 h-12 border-4 border-black cursor-pointer"
          />
          <button
            onClick={addCustomColor}
            disabled={value.length >= maxColors}
            className={`
              px-4 py-2 font-bold uppercase text-sm border-4 border-black
              ${value.length >= maxColors
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-400 hover:bg-purple-500"
              }
            `}
          >
            Add Color
          </button>
        </div>
      </div>

      {/* Selected Colors */}
      {value.length > 0 && (
        <div className="p-4 border-4 border-black bg-black text-white">
          <h4 className="font-bold uppercase text-sm mb-3">Selected Colors</h4>
          <div className="flex flex-wrap gap-2">
            {value.map((color) => (
              <div
                key={color}
                className="flex items-center gap-2 px-3 py-2 bg-white text-black"
              >
                <div
                  className="w-6 h-6 border-2 border-black"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs font-mono">{color}</span>
                <button
                  onClick={() => toggleColor(color)}
                  className="ml-1 text-black hover:text-red-500"
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
