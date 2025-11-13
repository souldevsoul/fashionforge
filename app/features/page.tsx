"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiShirtLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiPaletteLine,
  RiImageLine,
  RiSettings4Line,
  RiLayoutLine,
  RiTimerLine,
  RiDatabase2Line,
  RiCodeLine,
  RiTeamLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiPaintBrushLine,
} from "react-icons/ri"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: RiSparklingLine,
      title: "AI-Powered Design Generation",
      subtitle: "FLUX PRO TECHNOLOGY",
      description: "Built on cutting-edge AI fashion models. Transform sketches into professional apparel designs instantly. Battle-tested technology with proven reliability and exceptional quality.",
      features: [
        "FLUX Pro model for high-quality designs",
        "Natural design flow and aesthetics",
        "Multiple style profiles available",
        "Automatic design enhancement",
        "Fast generation (seconds, not minutes)",
        "Lightweight and efficient"
      ]
    },
    {
      icon: RiShirtLine,
      title: "Style Variations",
      subtitle: "UNLIMITED CREATIVITY",
      description: "Generate multiple design variations from a single sketch. Explore different styles: Modern, Retro, Minimalist, Bold, Elegant. Create unique fashion pieces that match your vision.",
      features: [
        "5 style presets included",
        "Custom style variations",
        "Color palette customization",
        "Pattern & texture control",
        "Quality validation built-in",
        "Design version history"
      ]
    },
    {
      icon: RiFlashlightLine,
      title: "Real-Time Generation",
      subtitle: "LIGHTNING FAST PERFORMANCE",
      description: "Generate professional fashion designs in seconds, not minutes. Optimized for real-time applications with minimal latency. Perfect for design studios, brands, and creative teams.",
      features: [
        "Sub-30-second generation times",
        "Real-time preview support",
        "Batch processing for efficiency",
        "Queue management for scale",
        "Concurrent request handling",
        "CDN-optimized image delivery"
      ]
    },
    {
      icon: RiPaletteLine,
      title: "Color & Pattern Control",
      subtitle: "COMPLETE CUSTOMIZATION",
      description: "Fine-tune every aspect of your design. Control colors, patterns, fabrics, and styles to create the perfect apparel. From vibrant streetwear to elegant haute couture.",
      features: [
        "Custom color palette selection",
        "Pattern & texture options",
        "Fabric type specification",
        "Style intensity control",
        "Seasonal trend suggestions",
        "Brand color matching"
      ]
    },
    {
      icon: RiLayoutLine,
      title: "Category Support",
      subtitle: "ALL APPAREL TYPES",
      description: "Generate designs for any apparel category. Streetwear, high fashion, casual wear, sportswear, vintage styles. Full range of fashion categories supported.",
      features: [
        "Streetwear designs",
        "High fashion & haute couture",
        "Casual & everyday wear",
        "Sportswear & activewear",
        "Vintage & retro styles",
        "Accessories & details"
      ]
    },
    {
      icon: RiImageLine,
      title: "High-Quality Exports",
      subtitle: "PROFESSIONAL OUTPUT",
      description: "Professional-grade design exports at high resolution. Multiple format support including PNG, SVG, and PSD. Perfect for production, presentations, and portfolios.",
      features: [
        "4K resolution exports",
        "PNG, SVG, PSD formats",
        "Transparent backgrounds",
        "Print-ready files",
        "Technical spec sheets",
        "High-fidelity mockups"
      ]
    },
    {
      icon: RiShieldCheckLine,
      title: "Security & Privacy",
      subtitle: "ENTERPRISE-GRADE PROTECTION",
      description: "Your design data is encrypted end-to-end and never shared with third parties. Full GDPR compliance, SOC 2 Type II certified. Enterprise-grade security for peace of mind.",
      features: [
        "End-to-end encryption",
        "GDPR compliant",
        "SOC 2 Type II certified",
        "Data residency options",
        "Zero data retention (optional)",
        "Audit logs & compliance reports"
      ]
    },
    {
      icon: RiPaintBrushLine,
      title: "Design Library Management",
      subtitle: "ORGANIZE YOUR DESIGNS",
      description: "Manage unlimited custom design variations. Organize, preview, edit, and delete designs. Search and filter your design library. Track usage statistics for each design.",
      features: [
        "Unlimited design storage (Enterprise)",
        "Design preview & comparison",
        "Metadata & descriptions",
        "Usage analytics per design",
        "Batch operations",
        "Import/export design collections"
      ]
    },
    {
      icon: RiTimerLine,
      title: "Smart Design Processing",
      subtitle: "INTELLIGENT ENHANCEMENT",
      description: "Automatic design enhancement and optimization. Smart fabric detection. Detail enhancement for production quality. AI-powered style suggestions based on trends.",
      features: [
        "Automatic design enhancement",
        "Smart fabric recognition",
        "Detail optimization",
        "Trend-based suggestions",
        "Production readiness checks",
        "Technical specification generation"
      ]
    },
    {
      icon: RiDatabase2Line,
      title: "Usage & Analytics",
      subtitle: "TRACK YOUR PROJECTS",
      description: "Comprehensive analytics dashboard showing design generation history, style preferences, and project tracking. Export reports for client presentations and portfolios.",
      features: [
        "Real-time usage tracking",
        "Design generation analytics",
        "Style trend insights",
        "Project cost tracking",
        "Export reports (PDF, CSV)",
        "Webhook notifications"
      ]
    },
    {
      icon: RiCodeLine,
      title: "Developer API",
      subtitle: "FULL API ACCESS",
      description: "Complete REST API with comprehensive documentation. SDKs available for Node.js, Python, and more. Webhook support for async operations. Rate limiting and authentication included.",
      features: [
        "RESTful API",
        "Official SDKs (Node.js, Python)",
        "Webhook support",
        "Rate limiting & quotas",
        "API key management",
        "Detailed error messages"
      ]
    },
    {
      icon: RiTeamLine,
      title: "Team Collaboration",
      subtitle: "WORK TOGETHER",
      description: "Built for design teams. Share design libraries across your organization. Role-based access control. Team analytics and usage tracking. Centralized billing and management.",
      features: [
        "Unlimited team members (Enterprise)",
        "Role-based permissions",
        "Shared design library",
        "Team usage analytics",
        "Centralized billing",
        "SSO integration (Enterprise)"
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header
        logoText="FashionForge"
        navLinks={[
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Demo", href: "/demo" },
        ]}
        ctaButton={{
          text: "Get Started",
          href: "/signup",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 border-b-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-400 border-4 border-black mb-8">
              <RiSparklingLine className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Features</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              EVERYTHING YOU NEED FOR PROFESSIONAL FASHION DESIGN
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Powered by cutting-edge AI models. Built for designers, brands, and creators who demand the best.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-3 bg-black text-purple-400 border-4 border-black font-bold uppercase"
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 border-4 border-black font-bold uppercase"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Model Stats */}
      <section className="py-16 bg-black border-b-8 border-purple-400">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2 uppercase">1M+</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Designs Generated</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2 uppercase">5</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Style Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2 uppercase">100+</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Color Palettes</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2 uppercase">4K</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Export Quality</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Features Grid */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              const bgColors = ["bg-white", "bg-black", "bg-purple-400"]
              const textColors = ["text-black", "text-purple-400", "text-black"]
              const subtitleColors = ["text-gray-600", "text-white", "text-gray-900"]
              const colorIndex = index % 3

              return (
                <div
                  key={index}
                  className={`p-8 ${bgColors[colorIndex]} border-4 border-black ${
                    colorIndex === 1 ? "brutalist-shadow-purple" : "brutalist-shadow"
                  }`}
                >
                  <div className={`w-16 h-16 ${colorIndex === 1 ? "bg-purple-400" : "bg-black"} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colorIndex === 1 ? "text-black" : "text-purple-400"}`} />
                  </div>

                  <h3 className={`text-2xl font-bold uppercase mb-2 ${textColors[colorIndex]}`}>
                    {feature.title}
                  </h3>

                  <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${subtitleColors[colorIndex]}`}>
                    {feature.subtitle}
                  </div>

                  <p className={`mb-6 ${colorIndex === 1 ? "text-white" : "text-gray-700"}`}>
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <RiCheckDoubleLine className={`w-5 h-5 flex-shrink-0 ${colorIndex === 1 ? "text-purple-400" : "text-black"}`} />
                        <span className={`text-sm ${colorIndex === 1 ? "text-white" : "text-gray-700"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Style Categories CTA */}
      <section className="py-24 bg-purple-400 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border-4 border-black mb-8">
              <RiPaintBrushLine className="w-6 h-6 text-purple-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-purple-400">Multiple Styles</span>
            </div>
            <h2 className="text-5xl font-bold uppercase mb-6 text-black">
              CHOOSE THE RIGHT STYLE FOR YOUR BRAND
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              We support multiple design styles: Modern (sleek & contemporary), Retro (vintage vibes), Minimalist (clean & simple), Bold (statement pieces), and Elegant (refined luxury).
            </p>
            <Button
              size="xl"
              className="gap-3 bg-black text-purple-400 border-4 border-black font-bold uppercase brutalist-shadow"
            >
              <RiArrowRightLine className="w-5 h-5" />
              Explore Styles
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black border-t-8 border-purple-400">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6 text-purple-400">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-white mb-12">
              Join thousands of designers and brands using FashionForge. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-purple-400 text-black border-4 border-purple-400 font-bold uppercase"
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-black border-4 border-white font-bold uppercase"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
