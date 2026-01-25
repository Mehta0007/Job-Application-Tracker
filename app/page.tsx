"use client";

import FeatureSection from "@/components/features-section";
import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
 
  

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-muted/30 py-32">

          {/* Subtle background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="container mx-auto px-4">

            <div className="relative z-10 mx-auto max-w-4xl text-center">

              <h1 className="mb-6 text-5xl font-bold text-black sm:text-6xl">
                A better way to track your job application
              </h1>

              <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
                Capture, organize, and manage your job application in one place.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">

                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="
                      h-12
                      px-8
                      text-lg
                      font-medium
                      rounded-xl
                      leading-none

                      inline-flex
                      items-center
                      gap-2

                      shadow-sm
                      transition-all
                      duration-200

                      hover:scale-[1.02]
                      hover:shadow-md

                      active:scale-[0.98]

                      focus-visible:ring-2
                      focus-visible:ring-ring
                      focus-visible:ring-offset-2

                      group
                    "
                  >
                    <span>Start for free</span>

                    <ArrowRight
                      className="
                        h-5 w-5
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </Button>
                </Link>

                <p className="text-center text-sm text-muted-foreground opacity-90">
                  Free forever. No credit card required.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Image Tabs Section */}
        <ImageTabs />
        
        {/* Feature Section */}

        <FeatureSection />

      </main>
    </div>
  );
}
