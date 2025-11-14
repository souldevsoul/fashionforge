"use client"

import * as React from "react"
import Image from "next/image"
import { Button, Heading, Text } from "@/components/ui"
import { Footer } from "@/components/marketing/layout/footer"
import { NewsletterPopup } from "@/components/marketing/NewsletterPopup"
import {
  RiSparklingLine,
  RiPaintBrushLine,
  RiPaletteLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiShirtLine,
  RiArrowRightLine,
  RiPlayCircleLine,
  RiCheckLine,
  RiCloseLine,
  RiStarFill,
  RiLineChartLine,
  RiUserLine,
  RiImageEditLine,
  RiTimerLine,
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
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
              <RiShirtLine className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">FashionForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>
          <Button
            size="md"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-md"
            onClick={() => window.location.href = '/dashboard'}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <RiSparklingLine className="w-5 h-5 text-purple-600" />
              <Text variant="body-sm" className="font-semibold text-purple-800">AI-Powered Fashion Design Studio</Text>
            </div>

            {/* Big Revealing Text */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className={`block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-gray-900">From</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sketch</span>
                </span>
                <span className={`block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-gray-900">to</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Runway</span>
                </span>
                <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-gray-900">in</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Seconds</span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Text variant="lead" className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
                Transform sketches into professional fashion designs. Create apparel mockups, try-on visualizations, and export ready-to-produce designs with AI.
              </Text>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap justify-center gap-4 pt-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="xl"
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 py-6"
                onClick={() => window.location.href = '/dashboard'}
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Designing Free
              </Button>
              <Button
                size="xl"
                variant="secondary"
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6"
                onClick={() => window.location.href = '/demo'}
              >
                <RiPlayCircleLine className="w-5 h-5" />
                Watch Demo
              </Button>
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
                    <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-md">
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
