"use client"

import * as React from "react"
import Image from "next/image"
import { Button, Heading, Text } from "@/components/ui"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import { NewsletterPopup } from "@/components/marketing/NewsletterPopup"
import {
  RiSparklingLine,
  RiPaintBrushLine,
  RiPaletteLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiPlayCircleLine,
  RiCheckLine,
  RiImageEditLine,
  RiShirtLine,
} from "react-icons/ri"

export default function Home() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [currentFashion, setCurrentFashion] = React.useState(0)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  // Fashion examples carousel
  const fashionExamples = [
    { style: "Haute Couture", title: "Runway Excellence", image: "/images/examples/haute-couture-1762952512296.png" },
    { style: "Luxury Collection", title: "Designer Showcase", image: "/images/examples/luxury-collection-1762949977044.png" },
    { style: "Minimalist Chic", title: "Modern Elegance", image: "/images/examples/minimalist-chic-1762952524683.png" },
    { style: "Runway Model", title: "Fashion Week", image: "/images/examples/runway-model-1762949939801.png" },
    { style: "Street Style", title: "Urban Fashion", image: "/images/examples/street-style-1762949955706.png" },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFashion((prev) => (prev + 1) % fashionExamples.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Features data
  const features = [
    {
      icon: RiPaintBrushLine,
      title: "AI Design Generation",
      description: "Transform sketches and ideas into professional fashion designs. Advanced AI creates detailed apparel mockups instantly.",
    },
    {
      icon: RiPaletteLine,
      title: "Multiple Styles",
      description: "From haute couture to streetwear. Generate designs in any fashion style with customizable colors, patterns, and fabrics.",
    },
    {
      icon: RiFlashlightLine,
      title: "Instant Rendering",
      description: "See your designs come to life in seconds. High-quality renders and mockups perfect for presentations and portfolios.",
    },
    {
      icon: RiImageEditLine,
      title: "Design Editor",
      description: "Fine-tune every detail with our intuitive editor. Adjust colors, fabrics, patterns, and styling elements with precision.",
    },
    {
      icon: RiShirtLine,
      title: "Virtual Try-On",
      description: "See designs on virtual models. Multiple body types, poses, and styling options for realistic visualization.",
    },
    {
      icon: RiShieldCheckLine,
      title: "HD Export",
      description: "Download designs in high resolution. Perfect for manufacturing, portfolios, or client presentations.",
    },
  ]

  // Credit bundles data (1 credit = $0.01)
  const creditBundles = [
    {
      name: "STARTER",
      credits: 100,
      price: "$9",
      pricePerCredit: "$0.09",
      description: "Perfect for trying out FashionForge",
      features: [
        "6 design generations (15 credits each)",
        "20 design variations (5 credits each)",
        "Never expires",
        "Commercial use included",
      ],
      ctaText: "BUY NOW",
      popular: false,
      savings: null,
    },
    {
      name: "PRO",
      credits: 500,
      price: "$39",
      pricePerCredit: "$0.078",
      description: "Best value for designers",
      features: [
        "33 design generations",
        "100 design variations",
        "50 mockup generations (10 credits)",
        "50 tech pack exports (10 credits)",
        "Never expires",
        "Commercial use included",
      ],
      ctaText: "BUY NOW",
      popular: true,
      savings: "Save 13%",
    },
    {
      name: "STUDIO",
      credits: 2000,
      price: "$149",
      pricePerCredit: "$0.0745",
      description: "For fashion brands and studios",
      features: [
        "133 design generations",
        "400 design variations",
        "200 mockup generations",
        "200 tech pack exports",
        "Priority processing",
        "Never expires",
        "Full commercial license",
        "Dedicated support",
      ],
      ctaText: "BUY NOW",
      popular: false,
      savings: "Save 17%",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        logoText="FashionForge"
        navLinks={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "About", href: "/about" },
        ]}
        ctaButton={{
          text: "Try Free",
          href: "/dashboard",
        }}
      />

      {/* Hero Section - Editorial Fashion Magazine Layout */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto">
          {/* Magazine-style grid layout */}
          <div className="grid lg:grid-cols-2 min-h-screen">

            {/* LEFT: Editorial Content - Fashion Magazine Style */}
            <div className="relative flex flex-col justify-center px-8 md:px-16 py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
              {/* Vogue-style top badge */}
              <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                <div className="inline-block">
                  <div className="text-xs tracking-[0.3em] text-purple-600 font-bold mb-2">SPRING/SUMMER 2025</div>
                  <div className="h-px w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
              </div>

              {/* Editorial Typography - Like Vogue/Harper's Bazaar */}
              <div className="space-y-6 mb-10">
                <h1 className={`font-serif ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-4">
                    <span className="italic text-gray-900">Design</span>
                  </div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-4">
                    <span className="font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">Without</span>
                  </div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                    <span className="italic text-gray-900">Limits</span>
                  </div>
                </h1>

                {/* Subtitle - Editorial style */}
                <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                  <p className="text-lg md:text-xl text-gray-700 max-w-xl font-light leading-relaxed border-l-2 border-purple-500 pl-6">
                    AI-powered atelier transforming sketches into haute couture.
                    From concept to runway in moments.
                  </p>
                </div>
              </div>

              {/* Stats - Fashion Week Style */}
              <div className={`grid grid-cols-3 gap-6 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                <div className="border-l-2 border-purple-500 pl-4">
                  <div className="text-3xl font-bold text-purple-600">10K+</div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mt-1">Designs</div>
                </div>
                <div className="border-l-2 border-pink-500 pl-4">
                  <div className="text-3xl font-bold text-pink-600">5min</div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mt-1">Avg Time</div>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <div className="text-3xl font-bold text-purple-600">AI</div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mt-1">Powered</div>
                </div>
              </div>

              {/* CTA Buttons - Minimalist Editorial */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
                <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="group relative px-8 py-4 bg-gray-900 text-white font-medium tracking-wider text-sm uppercase overflow-hidden transition-all hover:bg-purple-600"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Creating
                    <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
                <button
                  onClick={() => window.location.href = '/demo'}
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <RiPlayCircleLine className="w-5 h-5" />
                  View Collections
                </button>
              </div>

              {/* Bottom decorative line */}
              <div className={`mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
                <div className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">Featured In</div>
                <div className="flex gap-4 text-gray-400">
                  <span className="text-sm font-light">Vogue</span>
                  <span className="text-sm font-light">•</span>
                  <span className="text-sm font-light">Elle</span>
                  <span className="text-sm font-light">•</span>
                  <span className="text-sm font-light">Harper's Bazaar</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Fashion Design Showcase - Mood Board Style */}
            <div className="relative bg-gray-900 flex items-center justify-center p-8 lg:p-12">
              {/* Mood board grid - design sketches to 3D */}
              <div className="relative w-full h-full max-w-2xl">

                {/* Main featured design - rotated slightly like a polaroid */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] ${isVisible ? 'animate-sophisticated-scale' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                  <div className="relative bg-white p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                        alt="AI Fashion Design"
                        className="w-full h-full object-cover"
                      />
                      {/* Sketch overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                    </div>
                    {/* Polaroid caption */}
                    <div className="mt-3 text-center font-handwriting text-gray-700 text-sm">
                      Sketch → 3D in seconds
                    </div>
                  </div>
                </div>

                {/* Floating fabric swatches - top left */}
                <div className={`absolute top-8 left-8 ${isVisible ? 'animate-float' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                  <div className="bg-white p-3 shadow-lg transform -rotate-6">
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-purple-500 rounded-sm"></div>
                      <div className="w-12 h-12 bg-pink-500 rounded-sm"></div>
                      <div className="w-12 h-12 bg-purple-300 rounded-sm"></div>
                    </div>
                    <div className="text-[10px] text-gray-600 mt-2 tracking-wider">COLOR PALETTE</div>
                  </div>
                </div>

                {/* Fashion sketch card - top right */}
                <div className={`absolute top-12 right-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-4 shadow-xl transform rotate-3 w-32">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <RiPaintBrushLine className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-purple-400" />
                    </div>
                    <div className="text-[9px] text-gray-600 mt-2 tracking-wider uppercase">Sketch Mode</div>
                  </div>
                </div>

                {/* Design specs card - bottom left */}
                <div className={`absolute bottom-16 left-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
                  <div className="bg-white/95 backdrop-blur-sm p-4 shadow-xl transform -rotate-3 w-40">
                    <div className="text-[10px] tracking-[0.2em] text-purple-600 font-bold mb-2">TECH SPECS</div>
                    <div className="space-y-1 text-[9px] text-gray-600">
                      <div className="flex justify-between">
                        <span>FABRIC</span>
                        <span className="font-medium">Silk</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CUT</span>
                        <span className="font-medium">Tailored</span>
                      </div>
                      <div className="flex justify-between">
                        <span>STYLE</span>
                        <span className="font-medium">Couture</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI badge - bottom right */}
                <div className={`absolute bottom-8 right-12 ${isVisible ? 'animate-pulse' : 'opacity-0'}`} style={{ animationDelay: '1100ms' }}>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <RiSparklingLine className="w-4 h-4" />
                      <span className="text-xs font-bold tracking-wider">AI POWERED</span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner marks - like a design template */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-400"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-pink-400"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-pink-400"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-400"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fashion Examples Carousel */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fashion That Inspires
            </h2>
            <p className="text-gray-600 text-lg">See the styles our AI can create</p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {fashionExamples.map((example, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentFashion ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={example.image}
                  alt={`${example.style}: ${example.title}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-full mb-4">
                      <span className="text-sm font-semibold tracking-wide">{example.style}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold">{example.title}</h3>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {fashionExamples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFashion(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentFashion
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-6">
              <RiSparklingLine className="w-5 h-5 text-purple-600" />
              <Text variant="body-sm" className="text-purple-800 font-semibold">Features</Text>
            </div>
            <Heading variant="h2" className="mb-4 text-4xl md:text-5xl font-bold">Everything You Need</Heading>
            <Text variant="body-lg" className="text-gray-600 max-w-3xl mx-auto">
              Powerful features designed for fashion designers, brands, and creative studios
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <Heading variant="h4" className="mb-3 text-xl font-bold text-gray-900">
                    {feature.title}
                  </Heading>
                  <Text variant="body" className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </Text>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-6">
              <Text variant="body-sm" className="text-purple-800 font-semibold">Simple Pricing</Text>
            </div>
            <Heading variant="h2" className="mb-4 text-4xl md:text-5xl font-bold">Buy Credits, Use Anytime</Heading>
            <Text variant="body-lg" className="text-gray-600 max-w-3xl mx-auto">
              Pay only for what you use. Credits never expire. All bundles include commercial use.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {creditBundles.map((bundle, index) => (
              <div
                key={index}
                className={`p-8 border-2 rounded-2xl relative ${
                  bundle.popular
                    ? "border-purple-500 bg-gradient-to-b from-purple-50 to-white shadow-xl scale-105"
                    : "border-gray-200 bg-white hover:shadow-lg transition-all"
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}
                {bundle.savings && (
                  <div className="absolute -top-4 right-4">
                    <div className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-md">
                      {bundle.savings}
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <Heading variant="h3" className="mb-2 text-2xl font-bold text-gray-900">
                    {bundle.name}
                  </Heading>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{bundle.price}</span>
                    <span className="text-gray-500">one-time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-purple-600">{bundle.credits} credits</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{bundle.pricePerCredit}/credit</span>
                  </div>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  {bundle.description}
                </Text>
                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <RiCheckLine className="w-5 h-5 flex-shrink-0 text-purple-600 mt-0.5" />
                      <Text variant="body-sm" className="text-gray-700">
                        {feature}
                      </Text>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full gap-2 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${
                    bundle.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0"
                      : "bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300"
                  }`}
                  type="button"
                  aria-label={bundle.ctaText}
                >
                  {bundle.ctaText}
                  <RiArrowRightLine className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Credit costs info */}
          <div className="mt-16 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">How Credits Work</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">15</div>
                <div className="text-sm text-gray-600">credits per design generation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">5</div>
                <div className="text-sm text-gray-600">credits per design variation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">10</div>
                <div className="text-sm text-gray-600">credits per mockup generation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">10</div>
                <div className="text-sm text-gray-600">credits per tech pack</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <RiSparklingLine className="w-5 h-5 text-purple-200" />
            <Text variant="body-sm" className="text-purple-100 font-semibold">Ready to Start?</Text>
          </div>
          <Heading variant="h1" className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Design Your Fashion Future
          </Heading>
          <Text variant="body-lg" className="text-purple-100 mb-12 max-w-2xl mx-auto text-lg">
            Join fashion designers and brands using FashionForge to create professional apparel designs in seconds. Get started with free credits—no card required.
          </Text>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="xl"
              className="gap-2 bg-white text-purple-900 hover:bg-gray-100 border-0 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all px-8 py-6"
              onClick={() => window.location.href = '/dashboard'}
            >
              <RiArrowRightLine className="w-5 h-5" />
              Start Designing Free
            </Button>
            <Button
              size="xl"
              variant="secondary"
              className="gap-2 bg-transparent text-white hover:bg-white/10 border-2 border-white font-semibold rounded-lg backdrop-blur-sm px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </div>
  )
}
