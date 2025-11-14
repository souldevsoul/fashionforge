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
          { label: "About", href: "/about" },
        ]}
        ctaButton={{
          text: "Start Designing",
          href: "/dashboard",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-8">
              <RiSparklingLine className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Features</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Everything You Need for Professional Fashion Design
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Powered by cutting-edge AI models. Built for designers, brands, and creators who demand the best.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="/dashboard">
                  <RiArrowRightLine className="w-5 h-5" />
                  Buy Credits Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Model Stats */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-sm font-semibold text-purple-200">Designs Generated</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">5</div>
              <div className="text-sm font-semibold text-purple-200">Style Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-sm font-semibold text-purple-200">Color Palettes</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">4K</div>
              <div className="text-sm font-semibold text-purple-200">Export Quality</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={index}
                  className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {feature.title}
                  </h3>

                  <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
                    {feature.subtitle}
                  </div>

                  <p className="mb-6 text-gray-600">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <RiCheckDoubleLine className="w-5 h-5 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">
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
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <Container maxWidth="xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-8">
              <RiPaintBrushLine className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Multiple Styles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the Right Style for Your Brand
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We support multiple design styles: Modern (sleek & contemporary), Retro (vintage vibes), Minimalist (clean & simple), Bold (statement pieces), and Elegant (refined luxury).
            </p>
            <Button
              size="xl"
              className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 py-6"
              asChild
            >
              <a href="/dashboard/create">
                <RiArrowRightLine className="w-5 h-5" />
                Explore Styles
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              Join thousands of designers and brands using FashionForge. Buy credits starting at just $9—no subscriptions required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-2 bg-white text-purple-900 hover:bg-gray-100 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 py-6"
                asChild
              >
                <a href="/dashboard">
                  <RiArrowRightLine className="w-5 h-5" />
                  Buy Credits Now
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-2 bg-transparent text-white hover:bg-white/10 border-2 border-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6"
                asChild
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
