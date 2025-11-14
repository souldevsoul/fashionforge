/* eslint-disable react/no-unescaped-entities */
"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiMailLine,
  RiCustomerService2Line,
  RiQuestionLine,
  RiRocketLine,
  RiTeamLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: RiCustomerService2Line,
      title: "General Support",
      description: "Questions about your account, features, or how to use FashionForge",
      email: "support@fashionforge.ai",
      responseTime: "24 hours",
      color: "white",
    },
    {
      icon: RiRocketLine,
      title: "Sales & Enterprise",
      description: "Interested in Enterprise plan, custom pricing, or volume discounts",
      email: "sales@fashionforge.ai",
      responseTime: "4 hours",
      color: "black",
    },
    {
      icon: RiTeamLine,
      title: "Partnerships",
      description: "Integration partnerships, affiliate programs, or collaboration opportunities",
      email: "partners@fashionforge.ai",
      responseTime: "48 hours",
      color: "yellow",
    },
  ]

  const supportTopics = [
    {
      title: "Account & Billing",
      items: [
        "Credit bundle purchases",
        "Payment and invoice questions",
        "Account management",
        "Credit usage tracking",
      ],
    },
    {
      title: "Technical Support",
      items: [
        "API integration help",
        "Design generation issues",
        "Export quality problems",
        "Error troubleshooting",
      ],
    },
    {
      title: "Design Creation",
      items: [
        "Design quality improvement",
        "Sketch file requirements",
        "Processing time questions",
        "Style variation options",
      ],
    },
    {
      title: "Studio Inquiries",
      items: [
        "Custom deployment options",
        "SLA and uptime guarantees",
        "Security compliance",
        "Bulk credit pricing",
      ],
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
              <RiMailLine className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions? Need support? Want to discuss studio plans? Our team is ready to assist you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon

              return (
                <div
                  key={index}
                  className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {method.title}
                  </h3>

                  <p className="mb-6 text-gray-600">
                    {method.description}
                  </p>

                  <div className="mb-6">
                    <a
                      href={`mailto:${method.email}`}
                      className="text-lg font-bold text-purple-600 underline hover:no-underline"
                    >
                      {method.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <RiTimeLine className="w-5 h-5" />
                    Response within {method.responseTime}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="bg-white p-8 border-2 border-gray-200 rounded-2xl shadow-xl">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-medium"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-medium"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-medium bg-white"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="sales">Sales & Studio Plans</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-medium resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <RiArrowRightLine className="w-5 h-5" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours on business days
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Support Topics */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Common Support Topics
            </h2>
            <p className="text-xl text-gray-600">
              Reach out about any of these topics—we're here to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportTopics.map((topic, index) => (
              <div
                key={index}
                className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <RiCheckLine className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Looking for Something Else?
            </h2>
            <p className="text-xl text-gray-600">
              Quick links to help you find what you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="/pricing"
              className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <RiQuestionLine className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-lg font-bold mb-2">Pricing FAQ</h3>
              <p className="text-sm text-gray-600">
                Common questions about credit bundles
              </p>
            </a>

            <a
              href="/demo"
              className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <RiRocketLine className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Try Demo</h3>
              <p className="text-sm text-gray-600">
                Test our design generation before buying credits
              </p>
            </a>

            <a
              href="/features"
              className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <RiCustomerService2Line className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-lg font-bold mb-2">Feature Docs</h3>
              <p className="text-sm text-gray-600">
                Learn about all FashionForge capabilities
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* Studio Support */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Studio & Priority Support
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Studio plan customers with priority support have access to dedicated assistance channels for faster response times.
            </p>
            <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Studio Customers</h3>
              <p className="text-purple-100 mb-6">
                If you have an active Studio plan with dedicated support, use your priority channels for immediate assistance.
              </p>
              <Button
                size="lg"
                className="gap-2 bg-white text-purple-900 hover:bg-gray-100 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="mailto:studio@fashionforge.ai">
                  Contact Studio Support
                  <RiArrowRightLine className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
