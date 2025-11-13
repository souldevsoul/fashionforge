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
      <section className="py-20 border-b-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-400 border-4 border-black mb-8">
              <RiSparklingLine className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              MAKING AI FASHION DESIGN ACCESSIBLE TO EVERYONE
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We&apos;re building the future of fashion design. Professional-quality apparel designs powered by cutting-edge AI models.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
                OUR MISSION
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Fashion design technology has the power to transform how we create apparel, explore styles, and bring design visions to life. But for too long, professional design tools have been out of reach for most creators and small brands.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We built FashionForge to change that. By leveraging cutting-edge AI models like FLUX Pro, we&apos;re making professional-quality fashion design accessible to everyone—from solo creators to enterprise design teams.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our platform transforms sketches into production-ready designs in seconds. Generate multiple style variations, explore color palettes, and export high-resolution files. This isn&apos;t experimental technology—it&apos;s proven AI powered by <span className="font-bold">FLUX Pro</span> and trusted by thousands of designers worldwide.
              </p>
            </div>
            <div className="bg-black p-8 border-4 border-black brutalist-shadow-purple">
              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold text-purple-400 mb-2">1M+</div>
                  <div className="text-sm font-bold text-white uppercase">Designs Generated</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-purple-400 mb-2">5</div>
                  <div className="text-sm font-bold text-white uppercase">Style Categories</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-sm font-bold text-white uppercase">Color Palettes</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm font-bold text-white uppercase">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-purple-400 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              OUR VALUES
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-white border-4 border-black brutalist-shadow"
                >
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              POWERED BY THE BEST
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We use only proven AI models and enterprise-grade infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technology.map((tech, index) => {
              const Icon = tech.icon
              const bgColors = ["bg-white", "bg-black"]
              const textColors = ["text-black", "text-purple-400"]
              const descColors = ["text-gray-700", "text-white"]
              const colorIndex = index % 2

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
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-2xl font-bold uppercase ${textColors[colorIndex]}`}>
                      {tech.name}
                    </h3>
                    <span className={`text-sm font-bold uppercase ${colorIndex === 1 ? "text-purple-400" : "text-black"} px-3 py-1 ${colorIndex === 1 ? "bg-black" : "bg-purple-400"} border-2 border-black`}>
                      {tech.stats}
                    </span>
                  </div>
                  <p className={`${descColors[colorIndex]} leading-relaxed`}>{tech.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-black border-y-8 border-purple-400">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-purple-400">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              From idea to platform serving thousands of designers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-purple-400 border-4 border-purple-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 bg-white border-4 border-white brutalist-shadow-purple">
                  <h3 className="text-xl font-bold uppercase mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-center">
              WHY CHOOSE FASHIONFORGE?
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-black" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">
                      PROVEN TECHNOLOGY
                    </h3>
                    <p className="text-gray-700">
                      Our platform is powered by FLUX Pro, a cutting-edge AI model trusted by thousands of designers. Over 1 million designs generated with consistently high quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black text-white border-4 border-black brutalist-shadow-purple">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2 text-purple-400">
                      TRANSPARENT PRICING
                    </h3>
                    <p className="text-white">
                      No hidden fees, no surprises. We show you exactly what you&apos;re paying for based on real API costs. Start free, scale as you grow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-black" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">
                      ENTERPRISE SECURITY
                    </h3>
                    <p className="text-gray-700">
                      End-to-end encryption, GDPR compliance, SOC 2 Type II certification. Your design data is protected with enterprise-grade security standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-purple-400 border-4 border-black brutalist-shadow">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-black" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">
                      BEST-IN-CLASS SUPPORT
                    </h3>
                    <p className="text-gray-900">
                      Real humans ready to help. From email support on free plans to dedicated account managers for enterprise customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black text-white border-4 border-black brutalist-shadow-purple">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2 text-purple-400">
                      CONSTANTLY IMPROVING
                    </h3>
                    <p className="text-white">
                      We&apos;re always adding new models, features, and capabilities. Beta access to cutting-edge design technology for Pro and Enterprise users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              BUILT BY DESIGNERS, FOR DESIGNERS
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our team combines expertise in AI, fashion technology, and product design to build the best fashion design platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border-4 border-black brutalist-shadow text-center">
              <div className="w-24 h-24 bg-black border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <RiCodeLine className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">AI ENGINEERS</h3>
              <p className="text-gray-700">
                Deep expertise in machine learning, design generation, and model optimization.
              </p>
            </div>

            <div className="p-6 bg-purple-400 border-4 border-black brutalist-shadow text-center">
              <div className="w-24 h-24 bg-black border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <RiPaletteLine className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">FASHION EXPERTS</h3>
              <p className="text-gray-900">
                Professional designers ensuring high-quality outputs and trend-aware aesthetics.
              </p>
            </div>

            <div className="p-6 bg-black text-white border-4 border-black brutalist-shadow-purple text-center">
              <div className="w-24 h-24 bg-purple-400 border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <RiTeamLine className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2 text-purple-400">PRODUCT TEAM</h3>
              <p className="text-white">
                Focused on building intuitive tools that designers actually want to use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
              JOIN THOUSANDS OF DESIGNERS
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Start creating professional fashion designs today. Free tier available—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-purple-400 text-black border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/signup">
                  <RiArrowRightLine className="w-5 h-5" />
                  Get Started Free
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-black border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/demo">Try Demo</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-black text-purple-400 border-4 border-black font-bold uppercase brutalist-shadow"
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
