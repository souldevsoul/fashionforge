# IMAGES_SCRIPT.md - FashionForge

Guide for generating all images for FashionForge using Replicate AI models.

**Brand Colors:** Purple (#A855F7), Pink (#EC4899), Orange (#F97316)

---

## IMAGE INVENTORY (~20-25 images)

1. Logo & Branding (4 images)
2. Hero Section (2 images)
3. Feature Icons (8 icons)
4. Category Examples (10 designs)
5. UI Mockups (3 images)
6. Testimonials (3 avatars)

---

## LOGOS

### Logo Main
**File:** `logo-main.svg`
**Model:** `recraft-ai/recraft-v3-svg`
**Prompt:** Fashion design logo "FashionForge". Hanger icon with geometric fashion silhouette. Purple (#A855F7) and pink (#EC4899) gradient. Modern, luxury typography. SVG vector style.

### Logo Icon
**File:** `logo-icon.svg`
**Model:** `recraft-ai/recraft-v3-svg`
**Prompt:** App icon for fashion design platform. Abstract hanger with fabric flowing. Purple to pink gradient. Geometric, elegant. No text. Square 512x512px. SVG.

---

## HERO IMAGES

### Hero Runway Models
**File:** `hero-runway-models.png`
**Model:** `black-forest-labs/flux-pro`
**Prompt:** Fashion runway scene with 3 models wearing AI-generated designer clothing. High fashion aesthetic, purple and pink accent lighting, modern luxury runway, professional fashion photography, 4K quality.
**Size:** 1920x1080px

### Design Studio Interface
**File:** `hero-design-studio.png`
**Model:** `black-forest-labs/flux-pro`
**Prompt:** Modern fashion design software interface. Laptop screen showing apparel sketch with AI-generated variations. Purple (#A855F7) UI accents, color palette selector visible, professional workspace, 4K quality.
**Size:** 1200x900px

---

## FEATURE ICONS (8 icons)

**Model:** `recraft-ai/recraft-v3`
**Style:** Outline icons, purple/pink gradient, 256x256px, SVG

1. **icon-ai-generation.svg** - AI sparkles with fashion sketch transforming
2. **icon-categories.svg** - Grid of clothing items (shirt, dress, pants)
3. **icon-try-on.svg** - Model silhouette with clothing overlay
4. **icon-export.svg** - Layered file download icon
5. **icon-color-palette.svg** - Artist palette with color swatches
6. **icon-variations.svg** - Multiple design variations branching
7. **icon-mockup.svg** - 3D clothing visualization
8. **icon-commercial.svg** - License badge with checkmark

---

## CATEGORY EXAMPLES (10 designs)

Generate realistic fashion design images for each category:

**Model:** `black-forest-labs/flux-pro`
**Base Prompt Template:**
```
Professional {category} fashion design. {style_description}. High-quality apparel photography, white background, fashion catalog style, 4K quality.
```

1. **category-streetwear.jpg** - Urban streetwear outfit, bold graphics, contemporary
2. **category-high-fashion.jpg** - Luxury evening gown, elegant, runway-ready
3. **category-casual.jpg** - Comfortable everyday wear, versatile style
4. **category-sportswear.jpg** - Athletic performance apparel, functional design
5. **category-vintage.jpg** - Retro 1970s inspired outfit, classic aesthetic
6. **category-avant-garde.jpg** - Experimental artistic fashion, boundary-pushing
7. **category-business.jpg** - Professional business suit, sophisticated
8. **category-resort.jpg** - Tropical vacation wear, relaxed elegance
9. **category-evening.jpg** - Formal cocktail dress, glamorous
10. **category-sustainable.jpg** - Eco-friendly materials, ethical design

---

## UI MOCKUPS (3 images)

### Design Library Dashboard
**File:** `mockup-design-library.png`
**Model:** `black-forest-labs/flux-pro`
**Prompt:** Fashion design software dashboard. Grid of apparel design thumbnails, purple (#A855F7) UI accents, dark theme, sidebar navigation, modern SaaS interface, 4K.
**Size:** 1920x1080px

### Variation Generator
**File:** `mockup-variation-generator.png`
**Model:** `black-forest-labs/flux-pro`
**Prompt:** Fashion design variation interface. Central design with 4 AI-generated variations around it. Purple and pink UI, style selector, color palette picker visible, professional design tool, 4K.
**Size:** 1920x1080px

### Virtual Try-On Mockup
**File:** `mockup-try-on.png`
**Model:** `black-forest-labs/flux-pro`
**Prompt:** Virtual try-on interface showing model wearing AI-generated fashion design. Side-by-side comparison views, purple UI elements, professional fashion tech interface, 4K.
**Size:** 1920x1080px

---

## TESTIMONIAL AVATARS (3)

**Model:** `black-forest-labs/flux-pro`
**Size:** 400x400px, crop to circle

1. **testimonial-sarah.jpg** - Female fashion designer, 30s, creative professional look
2. **testimonial-marcus.jpg** - Male fashion brand owner, 40s, business professional
3. **testimonial-jessica.jpg** - Female fashion student, 20s, young creative energy

---

## POST-PROCESSING

1. Generate with Replicate
2. Background removal (Rembg) for logos, avatars
3. Optimize to WebP (<100KB)
4. Generate responsive sizes (640px, 1024px, 1920px)
5. Organize in `/public/images/` directories

**Total Cost:** ~$2-3 (Replicate API)
**Time:** 2-3 hours
