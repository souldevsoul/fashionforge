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
  const pricingTiers = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out FashionForge and small design projects",
      popular: false,
      features: [
        { text: "3 designs/month", included: true },
        { text: "FLUX Pro AI model", included: true },
        { text: "2 style variations per design", included: true },
        { text: "Standard resolution exports", included: true },
        { text: "5 style categories", included: true },
        { text: "Email support", included: true },
        { text: "HD exports (4K resolution)", included: false },
        { text: "Commercial license", included: false },
        { text: "Team collaboration", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Start Free",
      ctaHref: "/signup",
    },
    {
      name: "Designer",
      price: "$39",
      period: "per month",
      description: "For designers and brands that need powerful fashion design tools",
      popular: true,
      features: [
        { text: "30 designs/month", included: true },
        { text: "FLUX Pro + advanced models", included: true },
        { text: "5 style variations per design", included: true },
        { text: "HD exports (4K resolution)", included: true },
        { text: "PNG, SVG, PSD formats", included: true },
        { text: "Color palette customization", included: true },
        { text: "Commercial license", included: true },
        { text: "API access", included: true },
        { text: "Priority email support", included: true },
        { text: "Usage analytics", included: true },
      ],
      cta: "Start Free Trial",
      ctaHref: "/signup?plan=designer",
    },
    {
      name: "Studio",
      price: "$149",
      period: "per month",
      description: "Unlimited designs, team collaboration, and dedicated support",
      popular: false,
      features: [
        { text: "200 designs/month", included: true },
        { text: "All models + beta access", included: true },
        { text: "Unlimited style variations", included: true },
        { text: "Custom design training", included: true },
        { text: "Dedicated infrastructure", included: true },
        { text: "SLA guarantee (99.9% uptime)", included: true },
        { text: "Team collaboration (unlimited)", included: true },
        { text: "SSO integration", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Custom integrations", included: true },
      ],
      cta: "Contact Sales",
      ctaHref: "/contact",
    },
  ]

  const comparisonFeatures = [
    {
      category: "USAGE LIMITS",
      features: [
        { name: "Designs per month", starter: "3", designer: "30", studio: "200" },
        { name: "Style variations", starter: "2", designer: "5", studio: "Unlimited" },
        { name: "API requests/min", starter: "10", designer: "60", studio: "Custom" },
        { name: "Concurrent generations", starter: "1", designer: "3", studio: "Unlimited" },
      ],
    },
    {
      category: "AI MODELS",
      features: [
        { name: "FLUX Pro (1M+ designs)", starter: true, designer: true, studio: true },
        { name: "Style Intelligence", starter: false, designer: true, studio: true },
        { name: "Advanced color matching", starter: false, designer: true, studio: true },
        { name: "Pattern generation", starter: false, designer: true, studio: true },
        { name: "Beta model access", starter: false, designer: false, studio: true },
        { name: "Custom model training", starter: false, designer: false, studio: true },
      ],
    },
    {
      category: "FEATURES",
      features: [
        { name: "Basic style presets", starter: true, designer: true, studio: true },
        { name: "Multi-style variations", starter: false, designer: true, studio: true },
        { name: "Color palette control", starter: false, designer: true, studio: true },
        { name: "Category selection (5 types)", starter: true, designer: true, studio: true },
        { name: "Pattern customization", starter: true, designer: true, studio: true },
        { name: "HD exports (4K)", starter: false, designer: true, studio: true },
        { name: "File formats (PNG, SVG, PSD)", starter: "PNG", designer: true, studio: true },
        { name: "Transparent backgrounds", starter: false, designer: true, studio: true },
        { name: "Batch processing", starter: false, designer: true, studio: true },
      ],
    },
    {
      category: "SUPPORT & SECURITY",
      features: [
        { name: "Email support", starter: true, designer: true, studio: true },
        { name: "Priority support", starter: false, designer: true, studio: true },
        { name: "24/7 support", starter: false, designer: false, studio: true },
        { name: "Dedicated account manager", starter: false, designer: false, studio: true },
        { name: "GDPR compliance", starter: true, designer: true, studio: true },
        { name: "SOC 2 Type II", starter: true, designer: true, studio: true },
        { name: "SLA guarantee", starter: false, designer: false, studio: "99.9%" },
        { name: "SSO integration", starter: false, designer: false, studio: true },
      ],
    },
  ]

  const faqs = [
    {
      question: "How is usage calculated?",
      answer: "Usage is calculated based on the number of designs you generate per month. Each time you upload a sketch and generate variations, it counts as one design. Style variations are counted separately based on your plan limits.",
    },
    {
      question: "What happens if I exceed my design limit?",
      answer: "On the Starter plan, generation will be paused until the next month. On Designer plan, you can purchase additional design packs for $25 per 10 designs. Studio plans have generous limits of 200 designs/month.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! All plans can be canceled at any time. If you cancel, you'll retain access until the end of your current billing period, and you won't be charged again.",
    },
    {
      question: "What design categories are supported?",
      answer: "FashionForge supports 5 major fashion categories: Streetwear, High Fashion/Haute Couture, Casual/Everyday Wear, Sportswear/Activewear, and Vintage/Retro styles. All categories work with all style variations (Modern, Retro, Minimalist, Bold, Elegant).",
    },
    {
      question: "What are style variations?",
      answer: "Style variations allow you to generate multiple design interpretations from a single sketch. Upload one design and get variations in Modern (contemporary), Retro (vintage), Minimalist (clean), Bold (statement), and Elegant (refined) styles. Designer plan includes 5 variations per design.",
    },
    {
      question: "What export formats are supported?",
      answer: "Starter plan supports PNG. Designer and Studio plans support PNG, SVG (vector), and PSD (Adobe Photoshop) formats. All formats can be exported at up to 4K resolution for print-ready quality.",
    },
    {
      question: "Is there a free trial for Designer?",
      answer: "Yes! All new Designer subscribers get a 14-day free trial. No credit card required to start. Cancel anytime during the trial and you won't be charged.",
    },
    {
      question: "What is the commercial license?",
      answer: "Designer and Studio plans include a commercial license, allowing you to use generated designs for commercial purposes including selling products, client work, and brand campaigns. Starter plan is for personal use only.",
    },
    {
      question: "Do you offer discounts for non-profits or education?",
      answer: "Yes! We offer 50% discounts for qualified non-profit organizations and educational institutions. Contact us at sales@fashionforge.ai with your organization details.",
    },
    {
      question: "How secure is my data?",
      answer: "All design data is encrypted end-to-end (AES-256). We're GDPR compliant and SOC 2 Type II certified. Your sketches and generated designs are never shared with third parties. Studio plans can opt for zero data retention.",
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
              <span className="text-sm font-bold uppercase tracking-wider">Pricing</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              SIMPLE, TRANSPARENT PRICING
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="w-5 h-5 text-black" />
                <span className="font-bold uppercase">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <RiFlashlightLine className="w-5 h-5 text-black" />
                <span className="font-bold uppercase">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <RiCheckLine className="w-5 h-5 text-black" />
                <span className="font-bold uppercase">Cancel anytime</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 border-4 border-black ${
                  tier.popular
                    ? "bg-black text-white brutalist-shadow-purple scale-105"
                    : "bg-white brutalist-shadow"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-purple-400 border-4 border-black">
                    <span className="text-sm font-bold uppercase text-black">Most Popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold uppercase mb-2 ${
                      tier.popular ? "text-purple-400" : "text-black"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className={`text-5xl font-bold ${
                        tier.popular ? "text-purple-400" : "text-black"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm font-bold uppercase ${
                        tier.popular ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <p className={`text-sm ${tier.popular ? "text-white" : "text-gray-600"}`}>
                    {tier.description}
                  </p>
                </div>

                <Button
                  size="lg"
                  className={`w-full mb-8 border-4 font-bold uppercase ${
                    tier.popular
                      ? "bg-purple-400 text-black border-purple-400 hover:bg-purple-300"
                      : "bg-black text-purple-400 border-black hover:bg-gray-900"
                  }`}
                  asChild
                >
                  <a href={tier.ctaHref}>
                    {tier.cta}
                    <RiArrowRightLine className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <RiCheckLine
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-purple-400" : "text-black"
                          }`}
                        />
                      ) : (
                        <RiCloseLine
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-gray-500" : "text-gray-400"
                          }`}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? tier.popular
                              ? "text-white"
                              : "text-gray-900"
                            : tier.popular
                            ? "text-gray-500 line-through"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-gray-50 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              DETAILED FEATURE COMPARISON
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          {comparisonFeatures.map((category, catIndex) => (
            <div key={catIndex} className="mb-8 bg-white border-4 border-black brutalist-shadow">
              <div className="bg-black text-purple-400 px-6 py-4 border-b-4 border-black">
                <h3 className="text-xl font-bold uppercase">{category.category}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-4 border-black bg-purple-400">
                      <th className="text-left p-4 font-bold uppercase text-sm">Feature</th>
                      <th className="text-center p-4 font-bold uppercase text-sm border-l-4 border-black">
                        Starter
                      </th>
                      <th className="text-center p-4 font-bold uppercase text-sm border-l-4 border-black">
                        Designer
                      </th>
                      <th className="text-center p-4 font-bold uppercase text-sm border-l-4 border-black">
                        Studio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((feature, featIndex) => (
                      <tr key={featIndex} className="border-b-2 border-gray-200 last:border-0">
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="text-center p-4 border-l-4 border-black">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <RiCheckLine className="w-6 h-6 text-black mx-auto" />
                            ) : (
                              <RiCloseLine className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold">{feature.starter}</span>
                          )}
                        </td>
                        <td className="text-center p-4 border-l-4 border-black bg-purple-50">
                          {typeof feature.designer === "boolean" ? (
                            feature.designer ? (
                              <RiCheckLine className="w-6 h-6 text-black mx-auto" />
                            ) : (
                              <RiCloseLine className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold">{feature.designer}</span>
                          )}
                        </td>
                        <td className="text-center p-4 border-l-4 border-black">
                          {typeof feature.studio === "boolean" ? (
                            feature.studio ? (
                              <RiCheckLine className="w-6 h-6 text-black mx-auto" />
                            ) : (
                              <RiCloseLine className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold">{feature.studio}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Cost Calculator */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                TRANSPARENT PRICING MODEL
              </h2>
              <p className="text-xl text-gray-600">
                Based on Replicate API costs with our markup
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="w-12 h-12 bg-purple-400 border-2 border-black flex items-center justify-center mb-4">
                  <RiShirtLine className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2">FLUX PRO</h3>
                <div className="text-3xl font-bold mb-2">$3.50</div>
                <p className="text-sm text-gray-600 mb-4">per design</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Most reliable</li>
                  <li>• 1M+ designs generated</li>
                  <li>• Best for quality</li>
                </ul>
              </div>

              <div className="p-6 bg-black text-white border-4 border-black brutalist-shadow-purple">
                <div className="w-12 h-12 bg-purple-400 border-2 border-black flex items-center justify-center mb-4">
                  <RiFlashlightLine className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2 text-purple-400">
                  STYLE VARIATION
                </h3>
                <div className="text-3xl font-bold mb-2 text-purple-400">$2.00</div>
                <p className="text-sm text-gray-300 mb-4">per variation</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Fast generation</li>
                  <li>• 5 style options</li>
                  <li>• Multiple outputs</li>
                </ul>
              </div>

              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="w-12 h-12 bg-purple-400 border-2 border-black flex items-center justify-center mb-4">
                  <RiPaletteLine className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2">HD EXPORT</h3>
                <div className="text-3xl font-bold mb-2">$1.00</div>
                <p className="text-sm text-gray-600 mb-4">per 4K export</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 4K resolution</li>
                  <li>• Print-ready</li>
                  <li>• Multiple formats</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-purple-400 border-4 border-black brutalist-shadow">
              <h3 className="text-2xl font-bold uppercase mb-4">EXAMPLE MONTHLY COSTS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b-4 border-black">
                  <span className="font-bold">Small Brand (5 designs/month)</span>
                  <span className="text-2xl font-bold">$17.50 - $27.50</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-4 border-black">
                  <span className="font-bold">Growing Studio (20 designs/month)</span>
                  <span className="text-2xl font-bold">$70.00 - $110.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Design Agency (100 designs/month)</span>
                  <span className="text-2xl font-bold">$350.00 - $550.00</span>
                </div>
              </div>
              <p className="text-sm mt-6 font-medium">
                * API costs only. Designer plan ($39/mo) includes 30 designs plus all premium features.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black border-y-8 border-purple-400">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-400 border-4 border-purple-400 mb-8">
              <RiQuestionLine className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-purple-400">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xl text-white">
              Everything you need to know about pricing and plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white border-4 border-white brutalist-shadow-purple"
              >
                <h3 className="text-lg font-bold uppercase mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Start with our free Starter plan. Upgrade anytime as you grow. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-purple-400 text-black border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/signup">
                  <RiArrowRightLine className="w-5 h-5" />
                  Start Free Trial
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
