"use client";
import { Briefcase, Sparkles, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { getSession, signOut } from "@/lib/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40  backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 bg-muted/30">
      {/* Gradient line at top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand with animation */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-primary/80 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30">
            <Briefcase className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-green-500 ring-2 ring-background" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Job Tracker
            </span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
              Track • Apply • Succeed
            </span>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              {/* Dashboard Button - Desktop */}
              <Button
                asChild
                variant="ghost"
                className="hidden sm:inline-flex gap-2 font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>

              {/* User Avatar Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full p-0 ring-offset-background transition-all duration-300 hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 hover:scale-105"
                  >
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white font-semibold text-sm">
                        {session.user.name?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-background" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-2">
                  <DropdownMenuLabel className="font-normal p-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white font-semibold">
                          {session.user.name?.[0]?.toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col space-y-1.5 flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-none truncate">
                          {session.user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground truncate">
                          {session.user.email}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  
                  <DropdownMenuSeparator className="my-2" />
                  
                  <DropdownMenuItem 
                    asChild 
                    className="sm:hidden cursor-pointer p-3 rounded-lg font-medium transition-colors"
                  >
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  
                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* Login Button */}
              <Button 
                asChild 
                variant="ghost" 
                className="hidden sm:inline-flex font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/sign-in">Log In</Link>
              </Button>
              
              {/* CTA Button with gradient and animation */}
              <Button 
                asChild 
                className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 shadow-lg shadow-primary/25 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] group"
              >
                <Link href="/sign-up" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Start for free
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}