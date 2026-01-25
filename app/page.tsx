import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* {hero section} */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-3xl text-center ">
            <h1 className="text-black mb-6 text-5xl font-bold sm:text-6xl ">
              A better way to track your job application
            </h1>
          </div>
          <p className="mx-auto  max-w-2xl text-muted-foreground mb-10 text-xl">
            Capture, organize, and manage you job application in one place.
          </p>

          <div className="flex flex-col items-center gap-4  ">

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
              <span>Start for free</span>{" "}
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

            <p className="text-sm text-muted-foreground opacity-90 text-center">
              Free forever. No credit card required.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
