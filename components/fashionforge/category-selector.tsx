"use client"

import * as React from "react"
import { RiShirtLine, RiTShirtLine } from "react-icons/ri"

interface CategorySelectorProps {
  value: string
  onChange: (category: string) => void
}

const categories = [
  {
    id: "streetwear",
    name: "Streetwear",
    description: "Urban, casual, trendy",
    icon: RiTShirtLine,
  },
  {
    id: "high-fashion",
    name: "High Fashion",
    description: "Runway, couture, luxury",
    icon: RiShirtLine,
  },
  {
    id: "casual",
    name: "Casual",
    description: "Everyday, comfortable",
    icon: RiTShirtLine,
  },
  {
    id: "sportswear",
    name: "Sportswear",
    description: "Athletic, performance",
    icon: RiTShirtLine,
  },
  {
    id: "vintage",
    name: "Vintage",
    description: "Retro, classic, timeless",
    icon: RiShirtLine,
  },
]

export function CategorySelector({ value, onChange }: CategorySelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {categories.map((category) => {
        const Icon = category.icon
        const isSelected = value === category.id

        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={`
              p-4 border-2 rounded-lg text-center transition-all
              ${isSelected
                ? "border-purple-500 bg-purple-50 shadow-lg"
                : "border-gray-300 hover:border-purple-300 bg-white"
              }
            `}
          >
            <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? "text-purple-600" : "text-gray-400"}`} />
            <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
            <p className="text-xs text-gray-500">{category.description}</p>
          </button>
        )
      })}
    </div>
  )
}
