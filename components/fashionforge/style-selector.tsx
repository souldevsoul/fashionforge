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
    color: "bg-orange-500",
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
    <div className="space-y-4">
      <div>
        <h3 className="font-bold uppercase text-lg mb-2">Choose Style</h3>
        <p className="text-sm text-gray-600">Select the design aesthetic for variations</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {styles.map((style) => {
          const isSelected = value === style.id

          return (
            <button
              key={style.id}
              onClick={() => onChange(style.id)}
              className={`
                p-4 border-4 border-black text-center transition-all
                ${isSelected
                  ? "bg-black text-white scale-105"
                  : "bg-white hover:bg-gray-50"
                }
              `}
            >
              <div className={`
                w-12 h-12 mx-auto mb-3 ${style.color}
                ${isSelected ? "border-4 border-white" : ""}
              `}></div>
              <h4 className="font-bold uppercase text-sm mb-1">{style.name}</h4>
              <p className={`text-xs ${isSelected ? "text-gray-300" : "text-gray-600"}`}>
                {style.description}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
