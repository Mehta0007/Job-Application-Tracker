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

export default function SignIn() {
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
          <form className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
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
                placeholder="••••••••"
                required
              />
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full">
              Sign in
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
