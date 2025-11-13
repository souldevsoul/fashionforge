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
    <div className="space-y-4">
      <div>
        <h3 className="font-bold uppercase text-lg mb-2">Select Category</h3>
        <p className="text-sm text-gray-600">Choose the fashion category for your design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          const isSelected = value === category.id

          return (
            <button
              key={category.id}
              onClick={() => onChange(category.id)}
              className={`
                p-6 border-4 border-black text-left transition-all
                ${isSelected
                  ? "bg-purple-400 text-black brutalist-shadow-purple"
                  : "bg-white hover:bg-gray-50 brutalist-shadow"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div className={`
                  w-12 h-12 flex items-center justify-center
                  ${isSelected ? "bg-black" : "bg-purple-400"}
                `}>
                  <Icon className={`w-6 h-6 ${isSelected ? "text-purple-400" : "text-black"}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold uppercase mb-1">{category.name}</h4>
                  <p className="text-xs opacity-80">{category.description}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
