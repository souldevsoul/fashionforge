"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiCheckLine,
  RiCloseLine,
  RiArrowRightLine,
  RiQuestionLine,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiShirtLine,
  RiPaletteLine,
} from "react-icons/ri"

export default function PricingPage() {
  const creditBundles = [
    {
      name: "STARTER",
      credits: 100,
      price: "$9",
      pricePerCredit: "$0.09",
      period: "one-time",
      description: "Perfect for trying out FashionForge",
      popular: false,
      savings: null,
      features: [
        "6 design generations (15 credits each)",
        "20 design variations (5 credits each)",
        "Never expires",
        "Commercial use included",
        "Email support",
      ],
      cta: "Buy Now",
      ctaHref: "/dashboard",
    },
    {
      name: "PRO",
      credits: 500,
      price: "$39",
      pricePerCredit: "$0.078",
      period: "one-time",
      description: "Best value for professional designers",
      popular: true,
      savings: "Save 13%",
      features: [
        "33 design generations",
        "100 design variations",
        "50 mockup generations (10 credits)",
        "50 tech pack exports (10 credits)",
        "Never expires",
        "Commercial use included",
        "Priority email support",
      ],
      cta: "Buy Now",
      ctaHref: "/dashboard",
    },
    {
      name: "STUDIO",
      credits: 2000,
      price: "$149",
      pricePerCredit: "$0.0745",
      period: "one-time",
      description: "For fashion brands and design studios",
      popular: false,
      savings: "Save 17%",
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
      cta: "Buy Now",
      ctaHref: "/dashboard",
    },
  ]


  const faqs = [
    {
      question: "How do credits work?",
      answer: "Credits are the currency you use to create designs in FashionForge. Each action costs a specific number of credits: Design generation (15 credits), Design variation (5 credits), Mockup generation (10 credits), and Tech pack creation (10 credits). Credits never expire once purchased.",
    },
    {
      question: "Do credits expire?",
      answer: "No! Credits never expire. Purchase once and use them whenever you need. There are no monthly limits or time restrictions. Use your credits at your own pace.",
    },
    {
      question: "Can I get a refund on unused credits?",
      answer: "Credits are non-refundable once purchased. However, since credits never expire, you can always use them in the future whenever you need to create designs.",
    },
    {
      question: "What design categories are supported?",
      answer: "FashionForge supports 5 major fashion categories: Streetwear, High Fashion/Haute Couture, Casual/Everyday Wear, Sportswear/Activewear, and Vintage/Retro styles. All categories work with all style variations (Modern, Retro, Minimalist, Bold, Elegant).",
    },
    {
      question: "What are style variations?",
      answer: "Style variations allow you to generate multiple design interpretations from a single base design. After creating an initial design (15 credits), you can create variations in different styles for only 5 credits each. Each variation explores different aesthetic directions while maintaining the core concept.",
    },
    {
      question: "What export formats are supported?",
      answer: "All generated designs can be downloaded as high-resolution PNG files. Designs include full commercial usage rights, allowing you to use them for products, portfolios, client presentations, and manufacturing.",
    },
    {
      question: "How do I buy more credits?",
      answer: "You can purchase additional credits anytime from your dashboard. Simply select a credit bundle (Starter, Pro, or Studio) and complete the checkout. Credits are added to your account instantly after payment.",
    },
    {
      question: "What is the commercial license?",
      answer: "All credit bundles include full commercial usage rights. You can use generated designs for selling products, client work, brand campaigns, manufacturing, and any commercial purpose without additional licensing fees.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! Larger credit bundles offer better per-credit pricing. The Pro bundle (500 credits) saves 13%, and the Studio bundle (2000 credits) saves 17% compared to the Starter bundle. For enterprise needs beyond 2000 credits, contact us for custom pricing.",
    },
    {
      question: "How secure is my data?",
      answer: "All design data is encrypted end-to-end (AES-256). We're GDPR compliant and SOC 2 Type II certified. Your sketches and generated designs are never shared with third parties or used to train AI models without your explicit consent.",
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
              <span className="text-sm font-semibold text-purple-800">Simple Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Buy Credits, Use Anytime
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pay only for what you use. Credits never expire. No subscriptions, no hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-700">Commercial use included</span>
              </div>
              <div className="flex items-center gap-2">
                <RiFlashlightLine className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-700">Credits never expire</span>
              </div>
              <div className="flex items-center gap-2">
                <RiCheckLine className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-700">Instant activation</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-3 gap-8">
            {creditBundles.map((bundle, index) => (
              <div
                key={index}
                className={`relative p-8 border-2 rounded-2xl ${
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
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {bundle.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {bundle.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {bundle.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="font-bold text-purple-600">{bundle.credits} credits</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{bundle.pricePerCredit}/credit</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {bundle.description}
                  </p>
                </div>

                <Button
                  size="lg"
                  className={`w-full mb-8 gap-2 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${
                    bundle.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0"
                      : "bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300"
                  }`} type="button"
                  asChild
                  aria-label={bundle.cta}
                >
                  <a href={bundle.ctaHref}>
                    {bundle.cta}
                    <RiArrowRightLine className="w-5 h-5" />
                  </a>
                </Button>

                <ul className="space-y-3">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <RiCheckLine className="w-5 h-5 flex-shrink-0 text-purple-600 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
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
        </Container>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <RiQuestionLine className="w-5 h-5 text-purple-200" />
              <span className="text-sm font-semibold text-purple-100">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-purple-100">
              Everything you need to know about credit-based pricing
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-purple-100 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Designing?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Buy credits once, use them forever. Start with just $9 and create professional fashion designs instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 py-6" type="button"
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
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6" type="button"
                asChild
              >
                <a href="/demo">Try Demo</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-2 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6" type="button"
                asChild
              >
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
