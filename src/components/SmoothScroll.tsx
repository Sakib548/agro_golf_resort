"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 2. Instantiate Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 3. Luxurious Cinematic Slow Reveal Effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Elements: Staggered slow fade-in on initial load
      const heroElements = document.querySelectorAll(".hero-reveal");
      if (heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.35,
            stagger: 0.16,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }

      // Single elements scrolling into view slowly
      const slowElements = document.querySelectorAll(".reveal-slow");
      slowElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Card grids: Staggered slow glide-up as user scrolls
      const staggerContainers = document.querySelectorAll(".reveal-stagger");
      staggerContainers.forEach((container) => {
        const items = container.children;
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 1.15,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
