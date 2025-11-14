"use client"

import { Suspense, useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RiArrowRightLine,
  RiLockLine,
  RiMailLine,
  RiUserLine,
  RiCheckLine,
} from "react-icons/ri"

function SignUpForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro'>('starter')

  // Get plan from URL params
  useEffect(() => {
    const plan = searchParams?.get('plan')
    if (plan === 'pro') {
      // Set plan during component mount, not during render
      Promise.resolve().then(() => setSelectedPlan('pro'))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    try {
      // Register user
      const registerResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          plan: selectedPlan,
        }),
      })

      const registerData = await registerResponse.json()

      if (!registerResponse.ok) {
        setError(registerData.error || "Registration failed")
        setIsLoading(false)
        return
      }

      // Show success message
      setSuccess(true)

      // Auto sign in after registration
      setTimeout(async () => {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })

        if (result?.error) {
          setError("Account created but sign in failed. Please sign in manually.")
          setIsLoading(false)
          return
        }

        router.push("/dashboard")
        router.refresh()
      }, 2000)
    } catch (_error) {
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-purple-700 rounded-2xl shadow-xl p-8 text-center text-white">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <RiCheckLine className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Welcome to FashionForge!
            </h2>
            <p className="text-lg mb-6 text-purple-50">
              Your account has been created successfully. You received{" "}
              <strong>1000 credits ($10)</strong> as a welcome bonus!
            </p>
            <p className="text-sm text-purple-100">Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <RiUserLine className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">
              Fashion<span className="text-purple-600">Forge</span>
            </h1>
          </Link>
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>

        {/* Selected Plan Badge */}
        {selectedPlan === 'pro' && (
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl shadow-md p-4 mb-6 text-center">
            <p className="font-semibold text-sm mb-1 text-purple-800">Selected Plan</p>
            <p className="text-2xl font-bold text-purple-900">Pro - 500 Credits Bundle</p>
            <p className="text-xs mt-1 text-purple-700">$39 one-time • Credits never expire</p>
          </div>
        )}

        {/* Sign Up Form */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-rose-50 border-2 border-red-200 rounded-lg p-4">
                <p className="text-rose-700 font-semibold text-sm">
                  {error}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="font-semibold text-sm text-gray-700">
                Full Name
              </Label>
              <div className="relative">
                <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="pl-12 border-2 border-gray-300 rounded-lg h-12 text-base focus:border-purple-600 focus:ring-2 focus:ring-purple-600"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-sm text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="support@fashionforge.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 border-2 border-gray-300 rounded-lg h-12 text-base focus:border-purple-600 focus:ring-2 focus:ring-purple-600"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-semibold text-sm text-gray-700">
                Password
              </Label>
              <div className="relative">
                <RiLockLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="pl-12 border-2 border-gray-300 rounded-lg h-12 text-base focus:border-purple-600 focus:ring-2 focus:ring-purple-600"
                  disabled={isLoading}
                />
              </div>
              <p className="text-xs text-gray-500">
                Must be at least 6 characters
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="font-semibold text-sm text-gray-700"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <RiLockLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-12 border-2 border-gray-300 rounded-lg h-12 text-base focus:border-purple-600 focus:ring-2 focus:ring-purple-600"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Welcome Bonus Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-center text-purple-900">
                🎁 Get <span className="text-purple-600">1000 FREE CREDITS</span> ($10) when you sign up!
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              <RiArrowRightLine className="w-5 h-5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm font-semibold text-gray-500">
                Or
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-semibold text-purple-600 hover:text-purple-700 underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-black">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-black">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
              <RiUserLine className="w-10 h-10 text-white" />
            </div>
            <p className="text-gray-600 font-semibold">Loading...</p>
          </div>
        </div>
      }
    >
      <SignUpForm />
    </Suspense>
  )
}
