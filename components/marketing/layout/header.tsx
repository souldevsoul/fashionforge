"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { RiShirtLine } from "react-icons/ri"

export interface NavLink {
  label: string
  href: string
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  logoText?: string
  navLinks?: NavLink[]
  ctaButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  transparent?: boolean
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    logo,
    logoText = "FashionForge",
    navLinks = [],
    ctaButton,
    transparent = false,
    className,
    ...props
  }, ref) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const headerBg = transparent && !scrolled
      ? "bg-white/80 backdrop-blur-md"
      : "bg-white/95 backdrop-blur-md shadow-sm"

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-200",
          headerBg,
          className
        )}
        {...props}
      >
        <Container maxWidth="xl">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              {logo || (
                <>
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/images/logo/fashionforge-icon.svg"
                      alt="FashionForge Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{logoText}</span>
                </>
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {ctaButton && (
                <a
                  href={ctaButton.href}
                  onClick={ctaButton.onClick}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  {ctaButton.text}
                </a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                {ctaButton && (
                  <a
                    href={ctaButton.href}
                    className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                    onClick={() => {
                      ctaButton.onClick?.()
                      setMobileMenuOpen(false)
                    }}
                  >
                    {ctaButton.text}
                  </a>
                )}
              </div>
            </div>
          )}
        </Container>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header }
