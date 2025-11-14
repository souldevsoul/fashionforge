"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiArrowLeftLine,
  RiShirtLine,
  RiPaletteLine,
  RiImageLine,
  RiCheckLine,
  RiArrowRightLine,
} from "react-icons/ri"

export default function DemoPage() {
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

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Container maxWidth="xl">
          {/* Back to Home Link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors mb-8"
          >
            <RiArrowLeftLine className="w-4 h-4" />
            Back to Home
          </a>

          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-6">
              <RiSparklingLine className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Live Demo</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Try FashionForge
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience AI-powered fashion design in action. Generate professional apparel designs from sketches in seconds.
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Demo Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <RiShirtLine className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Interactive Demo Coming Soon
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Sign up now to get full access to FashionForge design generation
                  </p>
                </div>
              </div>

              {/* Demo Controls */}
              <div className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Upload Your Sketch</h4>
                      <p className="text-sm text-gray-600">
                        Upload a fashion sketch or reference image (JPG, PNG up to 10MB)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Choose Style & Colors</h4>
                      <p className="text-sm text-gray-600">
                        Select design category, style variation, color palette, and materials
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Generate & Download</h4>
                      <p className="text-sm text-gray-600">
                        AI generates professional designs in 30 seconds, download high-res PNG files
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <RiShirtLine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">5 Design Categories</h3>
              <p className="text-sm text-gray-600">
                Streetwear, High Fashion, Casual, Sportswear, and Vintage styles
              </p>
            </div>

            <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <RiPaletteLine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Style Variations</h3>
              <p className="text-sm text-gray-600">
                Modern, Retro, Minimalist, Bold, and Elegant aesthetic options
              </p>
            </div>

            <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <RiImageLine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">4K Quality Export</h3>
              <p className="text-sm text-gray-600">
                High-resolution PNG files ready for production and presentations
              </p>
            </div>
          </div>

          {/* What You Can Do */}
          <div className="max-w-4xl mx-auto mb-12 p-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">What You Can Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <RiCheckLine className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Multiple Style Variations</h4>
                  <p className="text-sm text-purple-100">
                    Generate 1-4 design variations in different styles from a single sketch
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RiCheckLine className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Custom Color Palettes</h4>
                  <p className="text-sm text-purple-100">
                    Choose from 100+ preset palettes or create your own custom colors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RiCheckLine className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Material Selection</h4>
                  <p className="text-sm text-purple-100">
                    Specify fabric types: Cotton, Silk, Denim, Leather, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RiCheckLine className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Production-Ready Files</h4>
                  <p className="text-sm text-purple-100">
                    Download high-resolution PNG files with commercial usage rights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Buy credits starting at just $9 and start creating professional fashion designs instantly
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 py-6"
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
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6"
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
