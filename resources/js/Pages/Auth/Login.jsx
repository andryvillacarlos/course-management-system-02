import LandingPageLayout from "@/Layouts/LandingPageLayout"
import React from "react"
import { Link, useForm } from "@inertiajs/react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route("user.login"), {
      onSuccess: () => reset("password"), // clear password on success
    })
  }

  return (
    <LandingPageLayout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">
            Student Login
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Enter your credentials to access your student portal
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                required
              />
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={data.remember}
                onChange={(e) => setData("remember", e.target.checked)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </Label>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" disabled={processing}>
              {processing ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Extra Links */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Don’t have an account?{" "}
              <Link
                href={route("register")}
                className="text-indigo-600 font-medium hover:underline"
              >
                Register here
              </Link>
            </p>
            <p className="mt-2">
              <a
                href={route("password.request")}
                className="text-indigo-600 font-medium hover:underline"
              >
                Forgot your password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  )
}
