"use client"

import { Suspense, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RiArrowRightLine, RiLockLine, RiMailLine, RiShirtLine } from "react-icons/ri"

function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid email or password")
        setIsLoading(false)
        return
      }

      router.push(callbackUrl)
      router.refresh()
    } catch {
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <RiShirtLine className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">
              Fashion<span className="text-purple-600">Forge</span>
            </h1>
          </Link>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-semibold text-sm">
                  {error}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-sm text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="email@fashionforge.ai"
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
                  className="pl-12 border-2 border-gray-300 rounded-lg h-12 text-base focus:border-purple-600 focus:ring-2 focus:ring-purple-600"
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
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

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-semibold text-purple-600 hover:text-purple-700 underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
              <RiLockLine className="w-10 h-10 text-white" />
            </div>
            <p className="text-gray-600 font-semibold">Loading...</p>
          </div>
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  )
}
