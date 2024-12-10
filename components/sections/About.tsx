"use client";

import { useEffect, useRef } from "react";
import { initializeScrollAnimation, initializeParallax } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      initializeScrollAnimation(contentRef.current);
    }
    if (imageRef.current) {
      initializeParallax(imageRef.current);
    }
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I specialize in creating beautiful, performant, and accessible web experiences. 
              With a passion for clean code and modern design, I bring ideas to life through 
              technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-1">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Maintainable & scalable solutions</p>
              </Card>
              <Card className="p-4">
                <Palette className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-1">Design</h3>
                <p className="text-sm text-muted-foreground">Beautiful & intuitive interfaces</p>
              </Card>
              <Card className="p-4">
                <Zap className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-1">Performance</h3>
                <p className="text-sm text-muted-foreground">Fast & optimized experiences</p>
              </Card>
            </div>
          </div>
          <div 
            ref={imageRef}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Workspace"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}