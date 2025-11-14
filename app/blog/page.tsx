"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiArticleLine,
  RiCalendarLine,
  RiTimeLine,
  RiArrowRightLine,
  RiFireLine,
  RiLightbulbLine,
  RiCodeLine,
  RiShirtLine,
} from "react-icons/ri"

export default function BlogPage() {
  const categories = [
    { name: "All Posts", slug: "all", count: 24 },
    { name: "Product Updates", slug: "updates", count: 8 },
    { name: "Tutorials", slug: "tutorials", count: 10 },
    { name: "Use Cases", slug: "use-cases", count: 6 },
  ]

  const featuredPost = {
    title: "Flux Pro: Why It's the Most Trusted AI Design Model for Fashion",
    excerpt: "Deep dive into the world's most popular AI design model and why battle-tested technology matters for professional fashion design applications.",
    category: "Product Updates",
    date: "Nov 8, 2025",
    readTime: "8 min read",
    author: "FashionForge Team",
    image: "featured",
  }

  const blogPosts = [
    {
      title: "AI Fashion Design: Getting Started",
      excerpt: "Learn how to create custom apparel designs using AI technology. From sketch preparation to design optimization.",
      category: "Tutorials",
      date: "Nov 5, 2025",
      readTime: "12 min read",
      author: "Sarah Chen",
      tag: "Beginner",
    },
    {
      title: "10 Ways AI Transforms Fashion Design",
      excerpt: "Discover innovative applications of AI in fashion: from concept sketches to production-ready mockups and trend forecasting.",
      category: "Use Cases",
      date: "Nov 3, 2025",
      readTime: "6 min read",
      author: "Marcus Johnson",
      tag: "Popular",
    },
    {
      title: "Creating Custom Apparel with AI",
      excerpt: "How aesthetic parameters work in AI design models and best practices for achieving professional-quality fashion designs.",
      category: "Tutorials",
      date: "Nov 1, 2025",
      readTime: "10 min read",
      author: "Dr. Emily Rodriguez",
      tag: "Technical",
    },
    {
      title: "Comparing Design Models: Flux vs DALL-E",
      excerpt: "A comprehensive comparison of top AI design models: features, quality, speed, and pricing for fashion applications.",
      category: "Product Updates",
      date: "Oct 28, 2025",
      readTime: "15 min read",
      author: "FashionForge Team",
      tag: "Popular",
    },
    {
      title: "How Designers Use AI to Scale Production",
      excerpt: "Case study: How independent fashion designers use AI to create multiple variations and expand their product lines.",
      category: "Use Cases",
      date: "Oct 25, 2025",
      readTime: "7 min read",
      author: "Alex Turner",
      tag: "Case Study",
    },
    {
      title: "Virtual Try-On Technology",
      excerpt: "Essential tips for implementing virtual try-on in your design workflow: model selection, rendering, and quality optimization.",
      category: "Tutorials",
      date: "Oct 22, 2025",
      readTime: "11 min read",
      author: "Dev Team",
      tag: "Technical",
    },
    {
      title: "The Future of AI Fashion",
      excerpt: "How AI design technology is revolutionizing the fashion industry and enabling creators to reach global markets faster.",
      category: "Product Updates",
      date: "Oct 19, 2025",
      readTime: "8 min read",
      author: "Sarah Chen",
      tag: "Trending",
    },
    {
      title: "Color Palette Generation Tips",
      excerpt: "Advanced techniques for generating perfect color palettes: trend analysis, seasonal themes, and brand consistency.",
      category: "Tutorials",
      date: "Oct 16, 2025",
      readTime: "9 min read",
      author: "Marcus Johnson",
      tag: "Pro Tips",
    },
    {
      title: "Fabric Selection with AI",
      excerpt: "How fashion brands are using AI to visualize fabric textures and materials, creating more accurate design previews.",
      category: "Use Cases",
      date: "Oct 13, 2025",
      readTime: "6 min read",
      author: "Jennifer Liu",
      tag: "Industry",
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
              <RiArticleLine className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Fashion Design Insights & Updates
            </h1>
            <p className="text-xl text-gray-600">
              Tutorials, use cases, product updates, and everything you need to master AI fashion design
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 font-semibold text-sm rounded-lg transition-all ${
                  index === 0
                    ? "bg-white text-purple-900 shadow-lg"
                    : "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white"
                }`}
              >
                {category.name}
                <span className="ml-2 opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <Container maxWidth="xl">
          <div className="mb-6 flex items-center gap-3">
            <RiFireLine className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Featured Post</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 border-2 border-purple-200 rounded-2xl shadow-xl p-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 rounded-2xl aspect-video flex items-center justify-center">
              <RiShirtLine className="w-24 h-24 text-purple-600" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold mb-3">
                <span className="px-3 py-1 bg-white text-purple-900 rounded-full">
                  {featuredPost.category}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4 leading-tight text-white">
                {featuredPost.title}
              </h3>

              <p className="text-purple-100 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-purple-200 mb-6">
                <div className="flex items-center gap-2">
                  <RiCalendarLine className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <RiTimeLine className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all w-fit"
              >
                Read Article
                <RiArrowRightLine className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <Container maxWidth="xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest in AI fashion design technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const tagIcons: { [key: string]: any } = {
                Popular: RiFireLine,
                Technical: RiCodeLine,
                Beginner: RiLightbulbLine,
              }

              const TagIcon = tagIcons[post.tag] || RiArticleLine

              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 border-b-2 border-gray-200 flex items-center justify-center">
                    <RiArticleLine className="w-16 h-16 text-purple-600" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-900 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <TagIcon className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-semibold text-gray-600">
                          {post.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mb-4 text-sm text-gray-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <RiCalendarLine className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <RiTimeLine className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More */}
                    <button className="w-full py-3 font-semibold text-sm border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg transition-all">
                      Read More →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              size="xl"
              variant="outline"
              className="gap-3 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Load More Articles
              <RiArrowRightLine className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get the latest AI fashion design insights, tutorials, and product updates delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 rounded-lg font-medium text-lg focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white"
              />
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all px-8 whitespace-nowrap"
              >
                Subscribe
                <RiArrowRightLine className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-purple-200 mt-4">
              No spam. Unsubscribe anytime. Read our{" "}
              <a href="/privacy" className="text-white underline hover:no-underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
