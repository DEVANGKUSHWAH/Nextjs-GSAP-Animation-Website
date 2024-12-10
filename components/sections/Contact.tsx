"use client";

import { useEffect, useRef } from "react";
import { initializeScrollAnimation } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      initializeScrollAnimation(formRef.current);
    }
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>
        <form
          ref={formRef}
          className="max-w-xl mx-auto space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input placeholder="Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
          </div>
          <div>
            <Input placeholder="Subject" />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              className="min-h-[150px]"
            />
          </div>
          <Button className="w-full" size="lg">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
        <div className="mt-16 flex justify-center gap-8">
          <Button variant="ghost" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            hello@example.com
          </Button>
          <Button variant="ghost" size="lg">
            <MessageSquare className="mr-2 h-5 w-5" />
            Let's chat
          </Button>
        </div>
      </div>
    </section>
  );
}