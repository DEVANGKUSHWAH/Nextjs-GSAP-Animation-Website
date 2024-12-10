"use client";

import { useEffect, useRef } from "react";
import { initializeStaggeredList } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tags: ["Next.js", "TypeScript", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
    tags: ["React", "Node.js", "Socket.io"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with GSAP animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Next.js", "GSAP", "Tailwind"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    initializeStaggeredList(projectRefs.current);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => (projectRefs.current[index] = el as HTMLDivElement)}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}