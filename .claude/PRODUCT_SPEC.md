# FashionForge - Complete Product Specification

## Brand Concept & Vision

### What is FashionForge?

**FashionForge** is an AI-powered fashion design platform that democratizes professional fashion design through intelligent AI generation and expert human designer refinement.

**The Core Innovation:**
We combine the speed of AI-generated fashion concepts with the expertise of professional fashion designers through a seamless hybrid workflow and unified credit system.

### Value Proposition

**For Fashion Entrepreneurs & Startups:**
- Launch your fashion line in days, not months
- Professional designs without hiring a full-time designer
- Test concepts quickly and affordably
- Scale from one design to full collections

**For Independent Designers:**
- Use AI for rapid concept exploration
- Focus creative energy on refinement, not repetitive work
- Complete collections faster
- Maintain creative control throughout

**For Fashion Agencies:**
- Accelerate client pitches with instant concepts
- Professional designers refine the best ideas
- Complete brand systems automatically
- White-label option for client presentations

### Unique Selling Points

1. **AI + Human Hybrid** - AI speed meets designer expertise
2. **Unified Credits** - One credit system for AI generation and designer services
3. **Multiple Design Styles** - Streetwear, Haute Couture, Minimalist, Vintage, Avant-Garde, Sustainable, Athleisure
4. **Complete Design Packages** - Not just sketches, full tech packs included
5. **All Export Formats** - SVG, PNG, PDF, AI ready for production
6. **Commercial Rights** - Full ownership, manufacture anywhere

---

## Visual Brand Identity

### Brand Colors (CRITICAL - DO NOT DEVIATE!)

**Primary Palette:**
```
Fuchsia/Rose/Amber Family:
- #D946EF (fuchsia-500) - Bold, fashion, energy
- #F43F5E (rose-500) - Luxury, elegance, passion
- #F59E0B (amber-500) - Warmth, creativity, innovation

Supporting:
- #C026D3 (fuchsia-600) - Deeper fashion
- #E11D48 (rose-600) - Deeper luxury
- #D97706 (amber-600) - Deeper warmth
```

**Usage Rules:**
- Primary CTAs: Fuchsia/Rose gradients
- Secondary elements: Rose/Amber
- Backgrounds: White/Slate-50 with subtle fuchsia/rose tints
- Text: Slate-900 (headings), Slate-700 (body)

**NEVER Use (Other Product Colors):**
- ❌ Emerald/Teal (LogoSmith)
- ❌ Coral/Orange/Lime (PetPortrait)
- ❌ Yellow alone (VoiceCraft)
- ❌ Harsh black borders
- ❌ Brutalist shadows

### Visual Style

**Typography:**
- Headings: Bold, fashion-forward (text-6xl, font-black)
- Body: Elegant, readable (text-xl, leading-relaxed)
- Accents: Ultra bold for impact (font-black, uppercase)

**Shadows (Elegant & Luxurious):**
```css
shadow-fashion-sm    - Subtle elevation
shadow-fashion-md    - Card elevation
shadow-fashion-lg    - Modal elevation
shadow-fashion-xl    - Hero elevation
shadow-glow-fuchsia  - Interactive glow (primary)
shadow-glow-rose     - Interactive glow (luxury)
shadow-glow-amber    - Interactive glow (warm)
```

**Corners (Smooth & Modern):**
```css
rounded-2xl    - Standard cards
rounded-3xl    - Large cards, sections
rounded-full   - Badges, avatars
rounded-xl     - Buttons, inputs
```

**Spacing (Generous & Luxurious):**
- Section padding: py-32 (desktop), py-16 (mobile)
- Card padding: p-10, p-12
- Element gaps: gap-8, gap-12
- Vertical rhythm: space-y-8, space-y-12

---

## Core User Flows

### Flow 1: New User → First Design (AI Only)

```
1. User lands on homepage
   ↓
2. Clicks "Start Designing" CTA
   ↓
3. [If not logged in] → Sign up/login (Clerk Auth)
   ↓
4. Arrives at /dashboard/brief
   ↓
5. Fills out design brief:
   - Design type (dress, shirt, pants, accessories, etc.)
   - Style (Streetwear, Haute Couture, Minimalist, etc.)
   - Description (vision, inspiration)
   - Color palette (color picker)
   - Target audience (casual, formal, athletic, etc.)
   - Fabric preferences (optional)
   ↓
6. Clicks "Generate Designs" button
   ↓
7. Brief saved to database (Prisma)
   ↓
8. API call to /api/designs/generate
   ↓
9. Replicate API generates 6-10 fashion concepts
   - Model: black-forest-labs/flux-pro (fashion sketches)
   - Style: Fashion illustration, technical drawing
   ↓
10. Loading state shows progress (AI at work)
    ↓
11. Generated designs appear in gallery
    ↓
12. User clicks on favorite design
    ↓
13. Opens customization panel:
    - Color adjustments
    - Fabric selection
    - Detail modifications
    - Size/fit variations
    ↓
14. User clicks "Download" or "Get Tech Pack"
    ↓
15. [FREE TIER] → Download PNG with watermark
    [PAID TIER] → Download all formats + tech pack
    ↓
16. Success! Design downloaded
```

**Happy Path Checkpoints:**
- ✅ Brief form validates properly
- ✅ Generation shows real-time AI progress
- ✅ All 6-10 designs render correctly
- ✅ Customization updates preview instantly
- ✅ Download delivers correct file format
- ✅ Free tier shows watermark, paid tier doesn't

---

### Flow 2: User → Hire Fashion Designer (Hybrid Path)

```
1. User has generated AI design
   ↓
2. Sees "Not runway-ready? Hire a designer" CTA
   ↓
3. Clicks "Hire Fashion Designer" button
   ↓
4. Modal opens explaining service:
   - "Professional fashion designer refines your AI concept"
   - "2-3 revision rounds included"
   - "Tech pack + production-ready files"
   - "Delivered in 3-7 business days"
   - "Cost: 15 credits ($149) or 30 credits ($299 for rush)"
   ↓
5. User confirms selected design
   ↓
6. User adds refinement brief:
   - What to improve
   - Target production method
   - Special requirements
   ↓
7. [If insufficient credits] → Redirect to /pricing
   ↓
8. Credit purchase flow:
   - Select credit package
   - Stripe checkout
   - Credits added to account
   ↓
9. Designer request created in database
   ↓
10. Email sent to design team
    ↓
11. Dashboard shows "In Progress" status
    ↓
12. Designer uploads refined versions + tech pack
    ↓
13. User receives notification
    ↓
14. User reviews designs in dashboard
    ↓
15. User approves OR requests revision
    ↓
16. Final approved design + tech pack delivered
    ↓
17. User downloads production-ready files
```

**Happy Path Checkpoints:**
- ✅ Designer request form collects all production details
- ✅ Credit deduction happens correctly
- ✅ User receives confirmation email
- ✅ Status updates show in dashboard
- ✅ Designer can upload files + tech pack
- ✅ User can request revisions (up to limit)
- ✅ Final files downloadable in all formats

---

### Flow 3: Returning User → Browse Portfolio

```
1. User logs in
   ↓
2. Lands on /dashboard
   ↓
3. Sees:
   - Recent designs (gallery view)
   - Active designer projects (status cards)
   - Credit balance (top-right)
   - "New Design" button
   ↓
4. Clicks on past design
   ↓
5. Design detail page opens:
   - Preview of design
   - Original brief
   - Tech pack (if available)
   - Download buttons
   - "Create Variation" button
   - "Hire Designer to Refine" button
   ↓
6. User can:
   - Download again (no extra charge)
   - Create new variation (uses credits)
   - Send to designer (uses credits)
   - Share design (social media)
```

**Happy Path Checkpoints:**
- ✅ All past designs visible
- ✅ Designs load with correct metadata
- ✅ Download works without re-generation
- ✅ Variations respect original brief
- ✅ Social sharing works correctly

---

## Credit System (Unified)

### Credit Economics

**What Credits Buy:**
- 1 credit = 1 AI design generation (up to 10 concepts)
- 2 credits = 1 design variation (color/fabric change)
- 15 credits = Professional designer refinement (standard, 3-7 days)
- 30 credits = Professional designer refinement (rush, 24-48hr)
- 10 credits = Complete tech pack generation (production specs)

### Pricing Tiers

| Tier | Price | Credits/Month | AI Designs | Designer Access | Features |
|------|-------|---------------|------------|-----------------|----------|
| **Free** | $0 | 3 | 3 designs | ❌ | PNG only, watermark |
| **Designer** | $35/mo | 35 | 35 designs | ✅ | All formats, tech packs, no watermark |
| **Studio** | $99/mo | 120 | 120 designs | ✅ | Everything + team (5 seats) + white-label |

### Credit Purchase (À la carte)

| Package | Price | Credits | Savings |
|---------|-------|---------|---------|
| Starter | $15 | 15 | - |
| Pro | $40 | 50 | 20% |
| Studio | $100 | 150 | 33% |
| Agency | $300 | 500 | 50% |

**Rules:**
- Credits never expire
- Unused monthly credits carry over (up to 2x monthly limit)
- Team seats share credit pool
- Designer requests deduct credits immediately
- Failed generations refund credits automatically

---

## AI Integration (Replicate)

### AI Model Used

**Primary: black-forest-labs/flux-pro**
- **Purpose:** High-quality fashion design generation
- **Output:** PNG files (high resolution fashion sketches)
- **Speed:** ~20-40 seconds per generation
- **Best for:** All fashion design styles

### Generation Prompts

**Template Structure:**
```
Create a professional fashion design sketch for {designType}.

Style: {style}
Description: {description}
Color palette: {colors}
Target audience: {audience}
Fabric: {fabric}

Technical requirements:
- Fashion illustration style
- Clear details and construction lines
- Production-ready visualization
- {designType}-specific details
- Professional presentation

Style notes:
{styleSpecificInstructions}
```

**Style-Specific Instructions:**

**Streetwear:**
```
Urban, bold graphics, oversized fits, contemporary culture.
Street-ready aesthetic with modern edge.
```

**Haute Couture:**
```
Luxury, intricate details, dramatic silhouettes, runway-ready.
High-fashion aesthetic with artistic elements.
```

**Minimalist:**
```
Clean lines, simple silhouettes, understated elegance.
Timeless design with refined details.
```

**Vintage:**
```
Classic cuts, retro elements, nostalgic appeal.
Heritage-inspired with period-appropriate details.
```

**Avant-Garde:**
```
Experimental, unconventional, artistic expression.
Push boundaries with innovative construction.
```

**Sustainable:**
```
Eco-friendly design, timeless appeal, minimal waste.
Conscious fashion with versatile styling.
```

**Athleisure:**
```
Performance meets style, comfort-focused, active lifestyle.
Technical fabrics with fashion-forward design.
```

---

## Database Schema

### Core Models

```prisma
model DesignBrief {
  id              String @id @default(cuid())
  userId          String
  user            User @relation(fields: [userId], references: [id])
  designType      String  // "dress", "shirt", "pants", "jacket", etc.
  style           String  // "streetwear", "haute-couture", etc.
  description     String @db.Text
  colorPalette    String[]
  targetAudience  String
  fabricPref      String?
  designs         Design[]
  createdAt       DateTime @default(now())
}

model Design {
  id              String @id @default(cuid())
  briefId         String
  brief           DesignBrief @relation(fields: [briefId], references: [id])
  userId          String
  user            User @relation(fields: [userId], references: [id])
  style           String
  primaryUrl      String
  status          String @default("processing")
  replicateId     String?
  variations      DesignVariation[]
  techPack        TechPack?
  favorites       Int @default(0)
  downloads       Int @default(0)
  createdAt       DateTime @default(now())
}

model DesignVariation {
  id        String @id @default(cuid())
  designId  String
  design    Design @relation(fields: [designId], references: [id], onDelete: Cascade)
  type      String  // "color-variant", "fabric-variant", "detail-variant"
  fileUrl   String
  format    String  // "png", "svg", "pdf", "ai"
}

model TechPack {
  id                String @id @default(cuid())
  designId          String @unique
  design            Design @relation(fields: [designId], references: [id], onDelete: Cascade)
  measurements      Json    // Size specs
  fabricSpecs       Json    // Material details
  constructionNotes String @db.Text
  colorSpecs        Json    // Pantone/RGB codes
  pdfUrl            String?
}

model DesignerRequest {
  id              String @id @default(cuid())
  userId          String
  user            User @relation(fields: [userId], references: [id])
  designId        String
  refinementBrief String @db.Text
  productionType  String?  // "mass", "small-batch", "custom"
  priority        String   // "standard", "rush"
  status          String @default("pending")
  designerId      String?
  deliverables    DesignerDeliverable[]
  revisions       DesignRevision[]
  creditsUsed     Int
  createdAt       DateTime @default(now())
  completedAt     DateTime?
}

model DesignerDeliverable {
  id        String @id @default(cuid())
  requestId String
  request   DesignerRequest @relation(fields: [requestId], references: [id])
  version   Int
  fileUrls  String[]
  techPackUrl String?
  notes     String?
  uploadedAt DateTime @default(now())
}

model DesignRevision {
  id        String @id @default(cuid())
  requestId String
  request   DesignerRequest @relation(fields: [requestId], references: [id])
  feedback  String @db.Text
  createdAt DateTime @default(now())
}

model User {
  id              String @id @default(cuid())
  email           String @unique
  name            String?
  credits         Int @default(0)
  plan            String @default("free")
  planRenewsAt    DateTime?
  briefs          DesignBrief[]
  designs         Design[]
  requests        DesignerRequest[]
  transactions    CreditTransaction[]
}

model CreditTransaction {
  id          String @id @default(cuid())
  userId      String
  user        User @relation(fields: [userId], references: [id])
  type        String  // "purchase", "earn", "spend", "refund"
  amount      Int
  balance     Int
  description String
  relatedId   String?
  createdAt   DateTime @default(now())
}
```

---

## API Routes

**Design Briefs:**
- `POST /api/briefs/create` - Create design brief
- `GET /api/briefs` - List user's briefs
- `GET /api/briefs/[id]` - Get brief details

**Designs:**
- `POST /api/designs/generate` - Generate designs (calls Replicate)
- `GET /api/designs` - List user's designs
- `GET /api/designs/[id]` - Get design details
- `PATCH /api/designs/[id]/customize` - Update design customization
- `POST /api/designs/[id]/variations` - Generate variations
- `DELETE /api/designs/[id]` - Delete design

**Tech Packs:**
- `POST /api/techpacks/generate` - Generate tech pack
- `GET /api/techpacks/[designId]` - Get tech pack
- `GET /api/techpacks/[designId]/download` - Download PDF

**Designer Requests:**
- `POST /api/requests/create` - Create designer request
- `GET /api/requests` - List user's requests
- `GET /api/requests/[id]` - Get request details
- `POST /api/requests/[id]/revise` - Request revision
- `POST /api/requests/[id]/approve` - Approve final design

**Credits:**
- `GET /api/credits/balance` - Get current balance
- `POST /api/credits/spend` - Deduct credits
- `POST /api/credits/refund` - Refund credits
- `POST /api/credits/purchase` - Stripe checkout

**Webhooks:**
- `POST /api/webhooks/replicate` - Replicate generation complete
- `POST /api/webhooks/stripe` - Stripe payment events

---

## Key Pages

### Homepage (/)

**Sections:**
1. Hero - "Your Fashion. Reimagined."
2. AI + Human Hybrid explanation
3. How It Works (3 steps)
4. Design Gallery (real examples)
5. 7 Design Styles
6. Features Grid
7. Testimonials
8. Pricing
9. Final CTA

### Dashboard (/dashboard)

**Elements:**
- Recent designs gallery
- Active designer projects
- Credit balance
- "New Design" CTA

### Design Studio (/dashboard/brief)

**Form:**
- Design type
- Style selection
- Description
- Color palette
- Target audience
- Fabric preferences

### Pricing (/pricing)

**Three Tiers:**
- Free ($0)
- Designer ($35/mo)
- Studio ($99/mo)

---

## Environment Variables

```env
DATABASE_URL="postgresql://..."
REPLICATE_API_TOKEN="r8_..."
BLOB_READ_WRITE_TOKEN="vercel_blob_..."
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
STRIPE_SECRET_KEY="sk_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_APP_URL="https://fashionforge.ai"
RESEND_API_KEY="re_..."
DESIGNER_TEAM_EMAIL="designers@fashionforge.ai"
```

---

## Success Metrics

**With FashionForge:**
- Design concept generation: 30 seconds (vs 3 days)
- Cost per design concept: $1 (vs $500+)
- Time to production-ready: 3-7 days (vs 4-6 weeks)
- Designer efficiency: 5x faster with AI assistance

---

This is the complete, comprehensive specification for FashionForge. Every flow, every feature, every technical detail is documented here.
