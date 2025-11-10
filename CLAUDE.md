# CLAUDE.md - FashionForge

**AI Fashion Design Platform**

Transform VoiceCraft into FashionForge - create custom fashion designs and apparel mockups using AI.

---

## ⚠️ CRITICAL LESSONS FROM CLIPMASTER (READ FIRST!)

**When adapting VoiceCraft, apply these 7 lessons learned from ClipMaster transformation:**

### 1. **DESIGN SYSTEM MUST BE COMPLETELY DIFFERENT**
❌ Don't just change colors - Transform the entire visual style!
- VoiceCraft: Brutalist (black borders, sharp corners, yellow)
- **Your project**: Create UNIQUE visual identity for fashion platform
- **Action**: Don't keep border-4 border-black, brutalist-shadow
- **Action**: Choose style: Chic (minimal, elegant), Bold (fashion-forward), Luxury (premium, refined), or Creative (artistic, unique)

### 2. **COMPONENT STYLING OVERHAUL REQUIRED**
❌ Don't just update pages - Redesign ALL UI components!
- **Files to update:** button.tsx, card.tsx, header.tsx, footer.tsx, NewsletterPopup.tsx, globals.css
- **Action**: Match components to fashion-forward aesthetic

### 3. **BRANDING CONSISTENCY**
❌ Don't mix uppercase/lowercase!
- **Your choice**: UPPERCASE, lowercase, or Title Case - pick ONE
- **Action**: Update everywhere (Header, Footer, legal docs, meta tags)

### 4. **VISUAL ELEMENTS - COMPLETE REPLACEMENT**
❌ Don't reuse VoiceCraft images!
- **Action**: Delete all microphone/waveform images
- **Action**: Generate fashion design mockups (see IMAGES_SCRIPT.md)

### 5. **TYPOGRAPHY & SPACING**
❌ Don't keep VoiceCraft font styles!
- **Action**: Choose elegant, fashion-appropriate fonts

### 6. **ANIMATION & INTERACTIONS**
❌ Don't keep same animations!
- **Action**: Create sophisticated animations (fade, elegant transitions)

### 7. **LAYOUT PATTERNS**
❌ Don't copy VoiceCraft sections!
- **Action**: Redesign for fashion lookbook/gallery showcase
- **Action**: Add design portfolio sections

---

## 🎯 PROJECT OVERVIEW

**Core Functionality:**
- Upload fashion sketches or photos
- AI generates professional apparel designs
- Multiple style categories (Streetwear, High Fashion, Casual, Sportswear, Vintage)
- Virtual try-on with model mockups
- Design variations and color schemes
- Export design files (PNG, SVG, PSD)

**Replicate Model:** `stability-ai/stable-diffusion-xl-base-1.0`, `black-forest-labs/flux-pro`

**Tech Stack:** Next.js 16.0.1 · Prisma + PostgreSQL · Vercel Blob · Replicate API · Stripe

---

## 🎨 BRAND COLORS

```css
/* NEW (FashionForge) */
--primary: #A855F7;    /* Purple 500 - Luxury, creative */
--secondary: #EC4899;  /* Pink 500 - Fashion, bold */
--accent: #F97316;     /* Orange 500 - Energetic, modern */
```

**Update in:** `app/globals.css`, all Tailwind classes (`bg-purple-600` → `bg-purple-500`, etc.)

---

## 🗄 DATABASE SCHEMA

### DELETE
```prisma
model Voice { }
model VoiceGeneration { }
model VoiceTemplate { }
model Audio { }
```

### ADD
```prisma
model Design {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])

  // Design source
  filename String
  sourceUrl String  // Sketch or reference image URL
  fileSize Int?

  // Design details
  category String  // "streetwear", "high-fashion", "casual", "sportswear", "vintage"
  description String?
  tags String[]

  status String @default("ready")
  variations DesignVariation[]
  createdAt DateTime @default(now())

  @@index([userId])
  @@index([category])
  @@map("designs")
}

model DesignVariation {
  id String @id @default(cuid())
  designId String
  design Design @relation(fields: [designId], references: [id], onDelete: Cascade)

  // Variation details
  name String
  style String  // "modern", "retro", "minimalist", "bold", "elegant"
  colors String[]  // Color palette used
  outputUrl String
  thumbnail String?

  // Try-on mockup
  mockupUrl String?  // Model wearing the design

  status String @default("processing")
  downloads Int @default(0)
  createdAt DateTime @default(now())

  @@index([designId])
  @@index([style])
  @@map("design_variations")
}
```

**Migration:** `npx prisma generate && npx prisma db push`

---

## 🛣 API ROUTES

**DELETE:** `/api/voices/*`, `/api/audios/*`

**CREATE:**
- `POST /api/designs/upload` - Upload sketch/reference image, create Design record
- `GET /api/designs/[id]` - Get design with all variations
- `POST /api/designs/[id]/generate` - Generate design variations
- `GET /api/designs/[id]/variations` - Get all variations for a design
- `GET /api/variations/[id]` - Get single variation details
- `GET /api/variations/[id]/download` - Download design file
- `POST /api/variations/[id]/mockup` - Generate virtual try-on mockup

**Replicate Integration:**
```typescript
const output = await replicate.run(
  "black-forest-labs/flux-pro",
  {
    input: {
      prompt: `${category} fashion design, ${style} style, ${colors.join(', ')} color palette, professional apparel design, high fashion photography`,
      image: sourceUrl,  // Reference sketch
      guidance_scale: 7.5,
      num_outputs: 4,  // Generate 4 variations
    }
  }
)
```

---

## 📄 KEY PAGES

- **Homepage:** "AI-Powered Fashion Design Studio - From Sketch to Runway"
- **Dashboard:** Design library + variation gallery + mockup viewer
- **Pricing:**
  - Free (3 designs/mo, 2 variations each)
  - Designer ($39/mo, 30 designs, 5 variations, HD exports)
  - Studio ($149/mo, 200 designs, unlimited variations, commercial license, team collaboration)

---

## 🧩 COMPONENTS TO CREATE

- `design-uploader.tsx` - Upload sketch or reference image
- `category-selector.tsx` - Choose design category (streetwear, high fashion, etc.)
- `style-selector.tsx` - Select style variations (modern, retro, minimalist, etc.)
- `color-palette-picker.tsx` - Choose color schemes
- `design-preview.tsx` - View design with zoom and annotations
- `variation-grid.tsx` - Grid of generated variations
- `mockup-generator.tsx` - Virtual try-on with model selection

---

## 🖼 IMAGES & BRANDING

**Logo:** Hanger with geometric fashion silhouette design
**Hero Image:** AI-generated fashion designs on runway models
**Style Previews:** Sample designs in different categories
**Generate with:** `black-forest-labs/flux-pro` for mockups, `recraft-ai/recraft-v3-svg` for logo

---

## ✅ ADAPTATION CHECKLIST

1. **Branding** (2h): Colors, logo, text replacements
2. **Database** (1h): Update schema, migrate
3. **API Routes** (3-4h): Create design/variation endpoints
4. **Components** (4h): Uploader, category selector, mockup generator
5. **Pages** (3h): Homepage, dashboard, design studio
6. **Images** (2-3h): Generate logo, mockups, category examples
7. **Testing** (2h): Upload flow, generation, mockups
8. **Deployment** (2h): GitHub repo, Vercel, env vars

**Total:** 19-27 hours

---

**Next:** See `TODO.md`, `LANDING_PAGE_CONTENT.md`, `IMAGES_SCRIPT.md` for detailed guidance.
