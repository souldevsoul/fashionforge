# TODO.md - FashionForge

Complete task breakdown for transforming VoiceCraft into FashionForge, an AI fashion design platform.

**Total Phases:** 10 | **Estimated Time:** 19-27 hours | **Total Tasks:** ~240 tasks

---

## PHASE 1: SETUP & BRANDING (2 hours)

- [ ] Update `package.json` name to "fashionforge"
- [ ] Update description: "AI-powered fashion design and apparel mockup platform"
- [ ] Update `app/globals.css` color variables:
  - `--primary: #A855F7` (Purple 500)
  - `--secondary: #EC4899` (Pink 500)
  - `--accent: #F97316` (Orange 500)
- [ ] Search/replace Tailwind classes:
  - `bg-purple-600` → `bg-purple-500`
  - `bg-blue-500` → `bg-pink-500`
  - Update all gradient classes
- [ ] Update `app/layout.tsx` metadata:
  - title: "FashionForge - AI Fashion Design Studio"
  - description: "Transform sketches into professional fashion designs with AI. Create apparel mockups, try-on visualizations, and export ready-to-produce designs."
- [ ] Global text replacements:
  - "VoiceCraft" → "FashionForge"
  - "Voice Synthesis" → "Fashion Design"
  - "audio" → "design" (context-aware)

---

## PHASE 2: DATABASE MIGRATION (1 hour)

- [ ] Delete Voice models from `prisma/schema.prisma`
- [ ] Add Design model (sourceUrl, category, tags, variations)
- [ ] Add DesignVariation model (style, colors, outputUrl, mockupUrl)
- [ ] Update User model (add designs relation)
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma db push`
- [ ] Verify Prisma Client types updated

---

## PHASE 3: API ROUTES (3-4 hours)

- [ ] Delete `/app/api/voices/` directory
- [ ] Delete `/app/api/audios/` directory
- [ ] Create `/app/api/designs/upload/route.ts`
  - Accept image file (sketch/reference)
  - Validate file type (JPG, PNG, SVG)
  - Upload to Vercel Blob
  - Create Design record
- [ ] Create `/app/api/designs/[id]/route.ts` (GET)
- [ ] Create `/app/api/designs/[id]/generate/route.ts` (POST)
  - Accept category, style, colors
  - Call Replicate FLUX Pro
  - Generate 4 variations
  - Create DesignVariation records
- [ ] Create `/app/api/variations/[id]/route.ts` (GET)
- [ ] Create `/app/api/variations/[id]/download/route.ts` (GET)
- [ ] Create `/app/api/variations/[id]/mockup/route.ts` (POST)
  - Generate virtual try-on with model
  - Use Replicate for model visualization

---

## PHASE 4: COMPONENTS (4 hours)

- [ ] `design-uploader.tsx` - Drag-drop sketch upload
- [ ] `category-selector.tsx` - Fashion categories (Streetwear, High Fashion, Casual, Sportswear, Vintage)
- [ ] `style-selector.tsx` - Style variations (Modern, Retro, Minimalist, Bold, Elegant)
- [ ] `color-palette-picker.tsx` - Interactive color scheme selector
- [ ] `design-preview.tsx` - Zoom, annotations, measurements
- [ ] `variation-grid.tsx` - Grid of generated variations
- [ ] `mockup-generator.tsx` - Virtual try-on interface
- [ ] Update navigation (Voices → Designs, Audios → Variations)

---

## PHASE 5: PAGES (3 hours)

- [ ] Update homepage hero:
  - "AI-Powered Fashion Design Studio - From Sketch to Runway"
  - Primary CTA: "Start Designing Free"
- [ ] Update features (AI Design Generation, Virtual Try-On, Export Options, Color Schemes)
- [ ] Update dashboard (Design library, Variation gallery, Mockup viewer)
- [ ] Create `/dashboard/designs/page.tsx`
- [ ] Create `/dashboard/variations/page.tsx`
- [ ] Create `/dashboard/create/page.tsx` (design studio workflow)
- [ ] Update pricing:
  - Free: 3 designs/mo, 2 variations
  - Designer ($39/mo): 30 designs, 5 variations, HD
  - Studio ($149/mo): 200 designs, unlimited variations, commercial license
- [ ] Update all legal pages (replace VoiceCraft)

---

## PHASE 6: ADMIN & DESIGNER PAGES (2 hours)

- [ ] Admin dashboard (Total designs, variations, popular categories)
- [ ] Admin user management (design count, subscription)
- [ ] Admin content moderation (flagged designs)
- [ ] Designer/specialist dashboard (project assignments)
- [ ] Custom design request workflow

---

## PHASE 7: IMAGES & ASSETS (2-3 hours)

- [ ] Generate logo (hanger + fashion silhouette) with Recraft V3 SVG
- [ ] Generate hero image (runway models with AI designs) with FLUX Pro
- [ ] Generate category examples:
  - [ ] Streetwear design
  - [ ] High fashion design
  - [ ] Casual wear design
  - [ ] Sportswear design
  - [ ] Vintage design
- [ ] Generate feature icons (8 icons)
- [ ] Generate UI mockups (design studio, variation gallery, mockup generator)
- [ ] Generate testimonial avatars (3)
- [ ] Optimize all images (WebP, <100KB)

---

## PHASE 8: TESTING (2 hours)

- [ ] Test sketch upload flow
- [ ] Test design generation with all categories
- [ ] Test style variations
- [ ] Test color palette selection
- [ ] Test mockup generation
- [ ] Test download functionality
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Run Lighthouse audit (>90 performance)
- [ ] Run `npx tsc --noEmit` (zero errors)
- [ ] Run `npm run build` (successful)

---

## PHASE 9: DEPLOYMENT (2 hours)

- [ ] Create GitHub repo: `fashionforge` in `soultosoul`
- [ ] Push code to main branch
- [ ] Create Vercel project
- [ ] Set environment variables
- [ ] Deploy to production
- [ ] Test live deployment
- [ ] Configure custom domain

---

## PHASE 10: DOCUMENTATION & POLISH (1 hour)

- [ ] Update README.md
- [ ] Create user guide
- [ ] Create FAQ content
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Accessibility audit
- [ ] Code cleanup (remove console.logs, unused code)
- [ ] Security review
- [ ] Performance optimization

---

**Progress:** 0/240 tasks | **Status:** Ready to start Phase 1
