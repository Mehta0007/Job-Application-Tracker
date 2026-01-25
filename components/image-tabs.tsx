"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function ImageTabs() {
     const tabs = [
    {
      id: "organize",
      label: "Organize Applications",
      image: "/hero-images/hero1.png",
    },
    {
      id: "hired",
      label: "Get Hired",
      image: "/hero-images/hero2.png",
    },
    {
      id: "boards",
      label: "Manage Boards",
      image: "/hero-images/hero3.png",
    },
  ];

const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);
    return(

        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-6xl px-4">

            {/* Section header */}
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-black sm:text-4xl">
                See how it works
              </h2>

              <p className="mx-auto max-w-2xl text-muted-foreground">
                A simple workflow to manage your job applications from start to
                finish.
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                  <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className="rounded-full px-6"
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Image Preview */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-white shadow-xl">

                {currentTab && (
                    <Image
                    src={currentTab.image}
                    alt={currentTab.label}
                    width={1200}
                    height={800}
                    priority
                    className="h-auto w-full object-cover"
                    />
                )}

              </div>
            </div>

          </div>
        </section>
            )
}