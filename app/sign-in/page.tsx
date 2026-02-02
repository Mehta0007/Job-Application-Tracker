"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth/auth-client";

export default function SignIn() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

 async function handleSubmit(e: React.FormEvent ) {
  e.preventDefault();
  setError("")
  setLoading(true)

  try {
    await signIn.email({
      email,
      password,
    })
    router.push("/dashboard")
  } catch (err: any ) {
    setError( err?.message || "something went wrong")
  } finally {
    setLoading(false)
  }
 }


  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/30 px-4">

      <Card className="w-full max-w-md shadow-lg">

        {/* Header */}
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">
            Welcome back
          </CardTitle>

          <CardDescription>
            Sign in to continue tracking your job applications
          </CardDescription>
        </CardHeader>

        {/* Form */}
        <CardContent>
          <form 
          onSubmit={handleSubmit}
          className="space-y-5">

          {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full"
            disabled={loading}
            >
             {loading ? "Signing in...": "Sign in"}
            </Button>

            {/* Footer */}
            <div className="space-y-2 text-center">

              <p className="text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>

              <p className="text-sm">
                <Link
                  href="/forgot-password"
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </p>

            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
