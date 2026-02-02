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

import { signUp } from "@/lib/auth/auth-client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("")
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
    await signUp.email({
      name,
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
            Create your account
          </CardTitle>

          <CardDescription>
            Start tracking your job applications in minutes
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
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <Input
                id="name"
                type="text"
                placeholder="Jhonny Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                     value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                minLength={8}
                     value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full"
            disabled={loading}
            >
             {loading ? "Creating account..." : "Create account"}
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
