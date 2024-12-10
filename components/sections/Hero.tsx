"use client";

import { useEffect, useRef } from "react";
import { initializeHeroAnimation } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      initializeHeroAnimation(headingRef.current);
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Creating Digital Experiences That Matter
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Frontend Developer & UI/UX Enthusiast
        </p>
        <Button size="lg" className="animate-bounce">
          Explore My Work <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="w-1 h-16 bg-primary/20 rounded-full" />
      </div>
    </section>
  );
}