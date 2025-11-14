"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiHeartLine,
  RiLightbulbLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiTeamLine,
  RiCodeLine,
  RiShirtLine,
  RiFlashlightLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiPaletteLine,
} from "react-icons/ri"

export default function AboutPage() {
  const values = [
    {
      icon: RiLightbulbLine,
      title: "Innovation First",
      description: "We leverage the most advanced AI models to push the boundaries of fashion design technology. Always testing, always improving.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Privacy & Security",
      description: "Your design data is yours. End-to-end encryption, GDPR compliance, and SOC 2 certification are standard, not optional.",
    },
    {
      icon: RiHeartLine,
      title: "Creator-Centric",
      description: "Built by designers, for designers. Every feature is crafted with real creative workflows in mind, from solo creators to design teams.",
    },
    {
      icon: RiGlobalLine,
      title: "Accessible to All",
      description: "Professional fashion design technology should be accessible to everyone. That's why we offer a free tier and transparent pricing.",
    },
  ]

  const technology = [
    {
      icon: RiSparklingLine,
      name: "FLUX Pro",
      description: "Cutting-edge AI fashion design model with proven reliability. Advanced style transfer and design generation with exceptional quality.",
      stats: "1M+ Designs",
    },
    {
      icon: RiShirtLine,
      name: "Style Intelligence",
      description: "AI-powered design generation supporting multiple fashion categories with natural aesthetic flow and trend-aware outputs.",
      stats: "5 Categories",
    },
    {
      icon: RiFlashlightLine,
      name: "Real-Time Generation",
      description: "Lightning-fast design processing with sub-30-second generation times. Perfect for rapid prototyping and creative exploration.",
      stats: "Sub-30s Speed",
    },
    {
      icon: RiCodeLine,
      name: "Enterprise Platform",
      description: "Built on enterprise-grade infrastructure with guaranteed uptime, scalability, and performance. Trusted by design studios worldwide.",
      stats: "99.9% Uptime",
    },
  ]

  const milestones = [
    {
      year: "2024",
      title: "FashionForge Founded",
      description: "Started with a mission to democratize professional fashion design technology using AI.",
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched private beta with 100 designers testing FLUX Pro integration and style generation.",
    },
    {
      year: "2024",
      title: "Style Variations Added",
      description: "Integrated multi-style generation technology, enabling custom design variations from a single sketch.",
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "Opened to the public with free tier, serving thousands of designers and brands worldwide.",
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-8">
              <RiSparklingLine className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Making AI Fashion Design Accessible to Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re building the future of fashion design. Professional-quality apparel designs powered by cutting-edge AI models.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fashion design technology has the power to transform how we create apparel, explore styles, and bring design visions to life. But for too long, professional design tools have been out of reach for most creators and small brands.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We built FashionForge to change that. By leveraging cutting-edge AI models like FLUX Pro, we&apos;re making professional-quality fashion design accessible to everyone—from solo creators to enterprise design teams.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform transforms sketches into production-ready designs in seconds. Generate multiple style variations, explore color palettes, and export high-resolution files. This isn&apos;t experimental technology—it&apos;s proven AI powered by <span className="font-bold text-purple-600">FLUX Pro</span> and trusted by thousands of designers worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 p-10 rounded-2xl shadow-xl">
              <div className="space-y-8">
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
                  <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sm font-semibold text-purple-200">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by the Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only proven AI models and enterprise-grade infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technology.map((tech, index) => {
              const Icon = tech.icon

              return (
                <div
                  key={index}
                  className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">
                      {tech.name}
                    </h3>
                    <span className="text-xs font-bold text-white px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-sm">
                      {tech.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              From idea to platform serving thousands of designers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl hover:bg-white/15 transition-all">
                  <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                  <p className="text-purple-100">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Why Choose FashionForge?
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Proven Technology
                    </h3>
                    <p className="text-gray-600">
                      Our platform is powered by FLUX Pro, a cutting-edge AI model trusted by thousands of designers. Over 1 million designs generated with consistently high quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Transparent Credit-Based Pricing
                    </h3>
                    <p className="text-gray-700">
                      No hidden fees, no subscriptions. Buy credits once and use them anytime. Credits never expire. Clear pricing: $9 for 100 credits, $39 for 500, $149 for 2000.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-600">
                      End-to-end encryption, GDPR compliance, SOC 2 Type II certification. Your design data is protected with enterprise-grade security standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Best-in-Class Support
                    </h3>
                    <p className="text-gray-700">
                      Real humans ready to help. Email support for all users, priority support for larger credit bundles, and dedicated account managers for studio plans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Constantly Improving
                    </h3>
                    <p className="text-gray-600">
                      We&apos;re always adding new models, features, and capabilities. Beta access to cutting-edge design technology for Pro and Studio users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built by Designers, for Designers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines expertise in AI, fashion technology, and product design to build the best fashion design platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <RiCodeLine className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Engineers</h3>
              <p className="text-gray-600">
                Deep expertise in machine learning, design generation, and model optimization.
              </p>
            </div>

            <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <RiPaletteLine className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fashion Experts</h3>
              <p className="text-gray-600">
                Professional designers ensuring high-quality outputs and trend-aware aesthetics.
              </p>
            </div>

            <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <RiTeamLine className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Product Team</h3>
              <p className="text-gray-600">
                Focused on building intuitive tools that designers actually want to use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Thousands of Designers
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Start creating professional fashion designs today. Buy credits starting at just $9—no subscriptions required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 py-6"
                asChild
                aria-label="Buy credits now"
              >
                <a href="/dashboard">
                  <RiArrowRightLine className="w-5 h-5" />
                  Buy Credits Now
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6"
                asChild
              >
                <a href="/demo">Try Demo</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
