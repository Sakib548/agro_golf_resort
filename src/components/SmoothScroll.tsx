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
      // Hero Entrance Elements: Staggered fade-in on initial load (fast & smooth)
      const heroElements = document.querySelectorAll(".hero-reveal");
      if (heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.05,
          }
        );
      }

      // Single elements scrolling into view (fast & responsive)
      const slowElements = document.querySelectorAll(".reveal-slow");
      slowElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Card grids: Staggered glide-up as user scrolls (crisp & snappy)
      const staggerContainers = document.querySelectorAll(".reveal-stagger");
      staggerContainers.forEach((container) => {
        const items = container.children;
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
