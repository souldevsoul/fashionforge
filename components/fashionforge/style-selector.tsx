"use client"

import * as React from "react"
import { RiSparklingLine, RiFlashlightLine, RiLineChartLine } from "react-icons/ri"

interface StyleSelectorProps {
  value: string
  onChange: (style: string) => void
}

const styles = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean, contemporary, minimalist",
    color: "bg-purple-400",
  },
  {
    id: "retro",
    name: "Retro",
    description: "Vintage-inspired, nostalgic",
    color: "bg-pink-500",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Simple, refined, essential",
    color: "bg-gray-800",
  },
  {
    id: "bold",
    name: "Bold",
    description: "Statement, dramatic, eye-catching",
    color: "bg-rose-500",
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Sophisticated, graceful, refined",
    color: "bg-rose-500",
  },
]

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {styles.map((style) => {
        const isSelected = value === style.id

        return (
          <button
            key={style.id}
            onClick={() => onChange(style.id)}
            className={`
              p-4 border-2 rounded-lg text-center transition-all
              ${isSelected
                ? "border-purple-500 bg-purple-50 shadow-lg"
                : "border-gray-300 hover:border-purple-300 bg-white"
              }
            `}
          >
            <div className={`
              w-12 h-12 mx-auto mb-3 rounded ${style.color}
              ${isSelected ? "ring-4 ring-purple-500 ring-offset-2" : ""}
            `}></div>
            <h4 className="font-semibold text-sm mb-1">{style.name}</h4>
            <p className="text-xs text-gray-500">
              {style.description}
            </p>
          </button>
        )
      })}
    </div>
  )
}
