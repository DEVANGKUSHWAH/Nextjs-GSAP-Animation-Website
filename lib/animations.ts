"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const initializeHeroAnimation = (element: HTMLElement) => {
  const text = new SplitType(element, { types: "chars" });
  
  gsap.from(text.chars, {
    opacity: 0,
    y: 100,
    rotateX: -90,
    stagger: 0.02,
    duration: 1,
    ease: "back.out(1.7)",
  });
};

export const initializeScrollAnimation = (element: HTMLElement) => {
  gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
    },
  });
};

export const initializeParallax = (element: HTMLElement) => {
  gsap.to(element, {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const initializeStaggeredList = (elements: HTMLElement[]) => {
  gsap.from(elements, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elements[0],
      start: "top 80%",
    },
  });
};