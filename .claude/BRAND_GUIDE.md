# FashionForge - Brand Guide

**AI Fashion Design Platform**

Transform fashion design with AI-powered design generation and human designer refinement.

---

## Brand Colors (CRITICAL - DO NOT DEVIATE!)

### Primary Palette

**Fashion-Forward Colors:**
```
Fuchsia Family:
- #D946EF (fuchsia-500) - Bold, fashion, energy
- #C026D3 (fuchsia-600) - Deeper fashion
- #E879F9 (fuchsia-400) - Lighter accent

Rose Family:
- #F43F5E (rose-500) - Luxury, elegance
- #E11D48 (rose-600) - Deeper luxury
- #FB7185 (rose-400) - Softer elegance

Amber Family:
- #F59E0B (amber-500) - Warmth, creativity
- #D97706 (amber-600) - Deeper warmth
- #FBBF24 (amber-400) - Bright accent
```

### Usage Rules

**Primary CTAs:**
```tsx
bg-gradient-to-r from-fuchsia-500 to-rose-500
bg-gradient-to-r from-rose-500 to-amber-500
bg-gradient-to-br from-fuchsia-600 to-rose-600
```

**Secondary Elements:**
```tsx
bg-fuchsia-500
bg-rose-500
bg-amber-500
```

**Backgrounds:**
- White / Slate-50 (neutral base)
- Fuchsia-50, Rose-50 (subtle tints)

**Text:**
- Slate-900 (headings)
- Slate-700 (body)
- Slate-600 (secondary text)

### NEVER Use (Other Products)

- ❌ Emerald/Teal (LogoSmith)
- ❌ Coral/Orange/Lime (PetPortrait)
- ❌ Yellow alone (VoiceCraft template)
- ❌ Harsh black borders
- ❌ Brutalist shadows

---

## Visual Style - Fashion Forward & Luxurious

### Typography

**Headings (Bold Fashion):**
```tsx
text-6xl font-black    // Hero headings
text-5xl font-bold     // Section headings
text-4xl font-bold     // Subsection headings
text-3xl font-semibold // Card headings
```

**Body (Elegant & Readable):**
```tsx
text-xl leading-relaxed    // Large body text
text-lg leading-relaxed    // Standard body
text-slate-700             // Body color
text-slate-600             // Secondary text
```

**Fashion Accents:**
```tsx
font-black              // Ultra bold for impact
italic                  // Elegant styling
uppercase tracking-wide // Headlines
```

### Shadows (Elegant, Luxurious)

**Custom Shadows for FashionForge:**
```css
/* Add to globals.css */
.shadow-fashion-sm {
  box-shadow: 0 2px 8px rgba(217, 70, 239, 0.12);
}

.shadow-fashion-md {
  box-shadow: 0 4px 16px rgba(217, 70, 239, 0.15);
}

.shadow-fashion-lg {
  box-shadow: 0 8px 24px rgba(217, 70, 239, 0.18);
}

.shadow-fashion-xl {
  box-shadow: 0 12px 32px rgba(217, 70, 239, 0.2);
}

.shadow-glow-fuchsia {
  box-shadow: 0 0 20px rgba(217, 70, 239, 0.5);
}

.shadow-glow-rose {
  box-shadow: 0 0 20px rgba(244, 63, 94, 0.5);
}

.shadow-glow-amber {
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
}
```

**Use:**
```tsx
shadow-fashion-sm    // Subtle elevation
shadow-fashion-md    // Card elevation
shadow-fashion-lg    // Modal elevation
shadow-fashion-xl    // Hero elevation
shadow-glow-fuchsia  // Interactive glow (primary)
shadow-glow-rose     // Interactive glow (luxury)
shadow-glow-amber    // Interactive glow (warm)
```

### Corners (Smooth & Modern)

**Use:**
```tsx
rounded-2xl    // Standard cards
rounded-3xl    // Large cards, sections
rounded-full   // Badges, avatars
rounded-xl     // Buttons, inputs
```

**Fashion Elements:**
```tsx
rounded-tl-3xl rounded-br-3xl  // Asymmetric (fashion-forward)
```

### Spacing (Generous & Breathable)

**Section Padding:**
```tsx
py-32        // Hero sections (desktop)
py-24        // Standard sections (desktop)
py-16        // Compact sections (mobile)
px-6 md:px-8 // Horizontal padding
```

**Card Padding:**
```tsx
p-10         // Large cards
p-8          // Standard cards
p-6          // Compact cards
```

**Element Gaps:**
```tsx
gap-8        // Standard element spacing
gap-12       // Large element spacing
space-y-8    // Vertical rhythm
space-y-12   // Large vertical rhythm
```

---

## Component Patterns

### Primary Button (Fashion CTA)

```tsx
<button className="
  bg-gradient-to-r from-fuchsia-500 to-rose-500
  hover:from-fuchsia-600 hover:to-rose-600
  text-white font-bold
  px-8 py-4
  rounded-xl
  shadow-fashion-md
  hover:shadow-glow-fuchsia
  hover:scale-105
  transition-all duration-300
">
  Start Designing
</button>
```

### Secondary Button (Elegant)

```tsx
<button className="
  bg-white
  border-2 border-fuchsia-500
  text-fuchsia-600 font-semibold
  px-8 py-4
  rounded-xl
  shadow-fashion-sm
  hover:bg-fuchsia-50
  hover:shadow-fashion-md
  transition-all duration-300
">
  View Gallery
</button>
```

### Fashion Card

```tsx
<div className="
  bg-white
  rounded-3xl
  shadow-fashion-lg
  p-10
  border border-slate-100
  hover:shadow-glow-fuchsia
  hover:scale-105
  transition-all duration-500
">
  {/* Content */}
</div>
```

### Hero Section

```tsx
<section className="
  relative
  py-32
  bg-gradient-to-br from-fuchsia-50 via-rose-50 to-amber-50
  overflow-hidden
">
  <div className="container mx-auto px-6">
    <h1 className="
      text-6xl md:text-7xl font-black
      text-slate-900
      mb-6
    ">
      Your Fashion. <span className="text-gradient-fuchsia">Reimagined.</span>
    </h1>
    <p className="text-xl leading-relaxed text-slate-700 max-w-2xl">
      AI generates stunning designs. Professional fashion designers refine to runway-ready.
    </p>
  </div>
</section>
```

### Text Gradients (Fashion Accent)

```css
/* Add to globals.css */
.text-gradient-fuchsia {
  background: linear-gradient(to right, #D946EF, #F43F5E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-rose {
  background: linear-gradient(to right, #F43F5E, #F59E0B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Anti-Patterns (DO NOT USE)

### Wrong Colors

❌ **DON'T:**
```tsx
bg-blue-500      // Wrong brand
bg-emerald-500   // LogoSmith color
bg-orange-500    // PetPortrait color
bg-yellow-400    // VoiceCraft template
```

✅ **DO:**
```tsx
bg-fuchsia-500   // FashionForge primary
bg-rose-500      // FashionForge luxury
bg-amber-500     // FashionForge warmth
```

### Harsh Shadows

❌ **DON'T:**
```tsx
shadow-[0_8px_0_0_#000]        // Brutalist
border-4 border-black          // Too harsh
```

✅ **DO:**
```tsx
shadow-fashion-lg              // Elegant
border border-slate-200        // Subtle
```

### Cramped Spacing

❌ **DON'T:**
```tsx
py-4 px-2 gap-2   // Too tight
```

✅ **DO:**
```tsx
py-24 px-6 gap-8  // Generous, luxurious
```

### Sharp Corners

❌ **DON'T:**
```tsx
rounded           // Too subtle
rounded-none      // Too sharp
```

✅ **DO:**
```tsx
rounded-2xl       // Smooth, modern
rounded-3xl       // Luxurious
```

---

## Before/After Examples

### Pricing Card

**BEFORE (Generic):**
```tsx
<div className="border rounded p-4">
  <h3 className="text-xl mb-2">Designer</h3>
  <div className="text-3xl font-bold mb-4">$35</div>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Start Trial
  </button>
</div>
```

**AFTER (FashionForge):**
```tsx
<div className="
  bg-white rounded-3xl shadow-fashion-xl p-10
  border border-slate-100
  hover:shadow-glow-fuchsia
  transition-all duration-500
">
  <h3 className="text-3xl font-bold mb-6 text-slate-900">Designer</h3>
  <div className="text-6xl font-black text-gradient-fuchsia mb-8">$35</div>
  <button className="
    bg-gradient-to-r from-fuchsia-500 to-rose-500
    text-white font-bold
    px-8 py-4 rounded-xl
    shadow-fashion-md
    hover:shadow-glow-fuchsia hover:scale-105
    transition-all duration-300
    w-full
  ">
    Start Trial
  </button>
</div>
```

### Feature Card

**BEFORE (Boring):**
```tsx
<div className="bg-white p-4 shadow rounded">
  <h3 className="font-bold">AI Design</h3>
  <p className="text-sm text-gray-600">Generate concepts fast</p>
</div>
```

**AFTER (Fashion-Forward):**
```tsx
<div className="
  group
  bg-gradient-to-br from-fuchsia-50 to-rose-50
  rounded-2xl p-8
  shadow-fashion-md
  hover:shadow-fashion-lg
  transition-all duration-300
">
  <div className="
    w-16 h-16 rounded-full
    bg-gradient-to-r from-fuchsia-500 to-rose-500
    flex items-center justify-center
    mb-6
    group-hover:scale-110
    transition-transform duration-300
  ">
    <SparklesIcon className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Design</h3>
  <p className="text-lg leading-relaxed text-slate-700">
    Generate stunning fashion concepts in seconds with cutting-edge AI
  </p>
</div>
```

---

## Mobile Responsiveness

**Always test on:**
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

**Responsive Patterns:**
```tsx
// Typography
text-4xl md:text-6xl        // Smaller on mobile
text-base md:text-xl        // Readable on all sizes

// Spacing
py-16 md:py-32             // Less padding on mobile
px-4 md:px-8               // Tighter margins on mobile

// Grid
grid-cols-1 md:grid-cols-3  // Single column on mobile

// Flex
flex-col md:flex-row        // Stack on mobile
```

---

## Accessibility

**ALWAYS include:**
```tsx
alt="Descriptive text"              // All images
aria-label="Button purpose"         // Icon buttons
role="button" tabIndex={0}          // Custom clickable elements
```

**Color Contrast:**
- All text must meet WCAG AA (4.5:1 ratio)
- Fuchsia/Rose/Amber on white: ✅ Passes
- White text on Fuchsia/Rose: ✅ Passes
- Slate-600 on white: ✅ Passes

---

## Fashion-Specific Elements

### Asymmetric Layouts

```tsx
<div className="grid grid-cols-2 gap-8">
  <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden">
    {/* Image */}
  </div>
  <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden">
    {/* Image */}
  </div>
</div>
```

### Bold Typography Mixing

```tsx
<h1>
  <span className="font-black uppercase tracking-wide">Fashion</span>
  {' '}
  <span className="font-light italic">Reimagined</span>
</h1>
```

### Layered Gradients

```tsx
<div className="
  bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-500
  relative
">
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  {/* Content */}
</div>
```

---

## Quality Checklist

Before committing, verify:

- [ ] Only Fuchsia/Rose/Amber colors used
- [ ] Shadows are fashion-* classes (elegant, not harsh)
- [ ] Corners are rounded-xl or larger
- [ ] Spacing is generous (py-24, gap-8, p-10)
- [ ] Typography is bold and fashion-forward
- [ ] Hover states are smooth (transition-all duration-300)
- [ ] Mobile responsive tested
- [ ] All images have alt text
- [ ] No console errors
- [ ] `npm run lint:product` passes

---

**This is the definitive FashionForge brand guide. Follow it religiously.**
