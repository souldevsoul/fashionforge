# FashionForge - VoiceCraft Adaptation Guide

## 📋 Overview
**From:** Voice cloning → **To:** AI fashion design & virtual try-on
**Model:** Minimax Voice → Stable Diffusion XL + Virtual try-on models

## 🎨 Brand

###Colors
```css
--primary: #A855F7;    /* Purple 500 - Luxury */
--secondary: #EC4899;  /* Pink 500 - Fashion */
--accent: #F97316;     /* Orange 500 - Energy */
```

### Typography
- Primary: Playfair Display (serif, elegant)
- Secondary: Inter
- Accent: Bodoni Moda

### Logo
"FF" monogram with fabric texture, purple-pink gradient

## 🔄 Key Changes

### Database
```prisma
model Design {
  id String @id @default(cuid())
  userId String
  prompt String @db.Text
  style String // casual, formal, streetwear, etc.
  designUrl String
  category String // tops, bottoms, dresses, accessories
  colors String[]
  season String
}

model VirtualTryOn {
  id String @id @default(cuid())
  userId String
  userPhotoUrl String
  designId String
  design Design @relation(fields: [designId], references: [id])
  resultUrl String
}
```

### API Routes
- `/api/designs/generate` - Generate fashion designs from text
- `/api/designs/tryon` - Virtual try-on
- `/api/designs/variations` - Create color/style variations

### Homepage
```tsx
<h1>Design Your Dream Wardrobe with AI</h1>
<p>Describe any outfit, see it designed, try it on virtually.</p>

<div className="demo">
  <Input placeholder="A flowy summer dress with floral patterns..." />
  <Select>
    <option>Casual</option>
    <option>Formal</option>
    <option>Streetwear</option>
    <option>Vintage</option>
  </Select>
  <Button>Generate Design</Button>
</div>
```

### Features
- Text-to-fashion design (Stable Diffusion XL + LoRA)
- Virtual try-on (AR-based or image-based)
- Style variations (colors, patterns, cuts)
- Trend analysis
- Size recommendations
- Shopping links (affiliate integration)

### Replicate Models
```typescript
// Fashion design
const output = await replicate.run(
  "stability-ai/sdxl:model-id",
  {
    input: {
      prompt: `fashion design, ${userPrompt}, professional fashion illustration, trending on pinterest`,
      negative_prompt: "low quality, blurry, distorted"
    }
  }
)

// Virtual try-on
const tryonOutput = await replicate.run(
  "appropriate/virtual-tryon:model-id",
  {
    input: {
      person_image: userPhotoUrl,
      garment_image: designUrl
    }
  }
)
```

### Pricing
```tsx
const tiers = [
  {
    name: "Free",
    price: "$0/mo",
    features: ["10 designs/month", "Standard quality", "Watermark"]
  },
  {
    name: "Designer",
    price: "$19/mo",
    features: ["100 designs/month", "HD quality", "Virtual try-on (50/mo)", "No watermark", "Save to collections"]
  },
  {
    name: "Brand",
    price: "$79/mo",
    features: ["Unlimited designs", "4K quality", "Unlimited try-on", "API access", "Commercial license", "Custom brand colors"]
  }
]
```

## Quick Commands
```bash
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/voice/design/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/audio/fashion/g' {} +
```

---

*Turn ideas into wearable fashion!* 👗✨
