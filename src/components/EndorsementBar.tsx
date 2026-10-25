"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const SISTER_CONCERNS = [
  { name: "Sampan Development Limited ", link: "https://sampandevelopmentltd.com/", logo: "/logo/development.webp" },
  { name: "LSHS", link: "https://cips.lshs.co.uk/", logo: "/logo/lshs.webp" },
  { name: "Sampan Group", link: "https://sampangroup.com.bd", logo: "/logo/sampanretail.webp" },
];

export default function EndorsementBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".endorsement-anim", {
        opacity: 0,
        y: 35,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FBFAF6] pt-16 pb-24 md:pt-20 md:pb-28 border-t border-[#708564]/20 border-b border-[#708564]/20 overflow-hidden text-[#134630]"
    >
      {/* Brand Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#708564]/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-125 h-62.5 bg-[#42732E]/10 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* ─── Brand Statement ─── */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-16">
          <div className="endorsement-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#708564]/30 bg-[#EEF1DE] shadow-2xs text-[10px] font-mono tracking-wider uppercase text-[#134630] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#42732E]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#708564]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#134630]" />
            <span className="text-[#134630] font-semibold ml-1">The Sampan Group Legacy</span>
          </div>
          <p className="endorsement-anim font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-[#134630] leading-[1.35] max-w-4xl">
            Built on a foundation of trust, delivering excellence in hospitality, education, and real estate across Bangladesh.
          </p>
        </div>

        {/* ─── Architectural Logo Grid ─── */}
        <div className="endorsement-anim border border-[#708564]/20 rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#708564]/20 bg-[#FBFAF6] shadow-xl overflow-hidden">
          {SISTER_CONCERNS.map((concern, idx) => {
            const hoverBorder =
              idx === 0
                ? "bg-gradient-to-r from-[#42732E] to-[#708564]"
                : idx === 1
                  ? "bg-gradient-to-r from-[#708564] to-[#42732E]"
                  : "bg-gradient-to-r from-[#42732E] to-[#134630]";

            return (
              <a
                key={concern.name}
                href={concern.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-10 sm:p-14 md:p-16 transition-all duration-500 hover:bg-[#EEF1DE]/40"
              >
                {/* Hover Accent Line (Top) matching brand color */}
                <span className={`absolute top-0 left-0 right-0 h-[2.5px] ${hoverBorder} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left`} />

                {/* Logo Wrapper */}
                <div className="relative w-full h-20 md:h-24 flex items-center justify-center mb-6">
                  {/* Subtle Brand Glow Behind Logo on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(66,115,46,0.1), transparent 70%)" }}
                  />

                  <Image
                    src={concern.logo}
                    alt={concern.name}
                    fill
                    sizes="(max-width: 768px) 80vw, 33vw"
                    className="object-contain relative z-10 transition-all duration-500 group-hover:scale-105 filter drop-shadow-xs"
                  />
                </div>

                {/* Elegant text reveal on hover */}
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#708564] group-hover:text-[#42732E] transition-colors duration-300 flex items-center gap-1.5 font-bold">
                  Visit Website
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#42732E]" />
                </span>
              </a>
            );
          })}
        </div>

        {/* ─── Learn More CTA ─── */}
        <div className="endorsement-anim flex justify-center mt-12 md:mt-16">
          <a
            href="https://sampangroup.com.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.25em] text-[#708564] hover:text-[#42732E] transition-colors duration-300 font-bold"
          >
            Explore the whole ecosystem
            <span className="relative w-14 h-px bg-[#708564]/40 group-hover:bg-[#42732E] transition-all duration-500 group-hover:w-20">
              <ArrowUpRight className="absolute right-0 -top-[7px] h-3.5 w-3.5 text-[#42732E] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
