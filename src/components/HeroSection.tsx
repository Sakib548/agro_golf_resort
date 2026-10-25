"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Flag, Sprout, Home, FileCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-10 sm:pt-14 overflow-hidden bg-[#134630] text-white">
      {/* Background Visual with Translucent, Airy Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Sampan Agro & Golf Resort Golf Course"
          fill
          priority
          className="object-cover object-center opacity-75 scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft, translucent gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#134630]/85 via-[#134630]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#134630]/80 via-transparent to-[#134630]/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-20 md:pt-12 md:pb-32">
        <div className="max-w-3xl drop-shadow-sm">
          {/* Location pill */}
          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#708564]/40 bg-[#134630]/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#EEF1DE] backdrop-blur-md mb-6 shadow-xs">
            <span className="size-2 rounded-full bg-[#42732E] animate-pulse" />
            <span>Dhaka-Sylhet Highway</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-reveal font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
            Luxury of nature <br className="hidden sm:inline" />
            <span className="text-[#EEF1DE] italic font-heading">with leisure.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal text-base sm:text-xl text-[#EEF1DE]/90 leading-relaxed max-w-2xl font-normal mb-10 drop-shadow-xs">
            A 100+ acre green estate by <strong className="font-semibold text-white">Sampan Group</strong>:
            nine-hole international golf, a thriving organic agro farm, lakeside villas, and land you own with 100% sub-kabula deed registration.
          </p>

          {/* Action CTAs */}
          <div className="hero-reveal flex flex-wrap items-center gap-3.5">
            <Link
              href="/invest"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#42732E] px-6 sm:px-7 py-3.5 text-sm uppercase tracking-wider font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-[#365e25] hover:scale-105 active:scale-95"
            >
              <span>See Invest &amp; Membership</span>
            </Link>

            <a
              href="/brochure.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-black/30 px-5 sm:px-6 py-3.5 text-sm uppercase tracking-wider font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-[#EEF1DE] hover:text-[#EEF1DE] active:scale-95"
            >
              <FileText className="size-4" />
              <span>Download Brochure</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Key Metrics Strip - Soft Bento Floating Dock */}
      <div className="hero-reveal relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 mb-16">
        <div className="bento-card neo-hairline grid grid-cols-2 md:grid-cols-5 gap-0 bg-[#FBFAF6] shadow-2xl divide-x divide-y md:divide-y-0 divide-[#708564]/20 overflow-hidden rounded-2xl ring-1 ring-[#708564]/20">
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#134630]">100+</span>
            <span className="text-xs sm:text-sm font-medium text-[#708564] uppercase tracking-wide">Acres Estate</span>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#134630]">9</span>
            <span className="text-xs sm:text-sm font-medium text-[#708564] uppercase tracking-wide">Hole Intl Golf</span>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#134630]">10</span>
            <span className="text-xs sm:text-sm font-medium text-[#708564] uppercase tracking-wide">Natural Ponds</span>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#134630]">4</span>
            <span className="text-xs sm:text-sm font-medium text-[#708564] uppercase tracking-wide">Swimming Pools</span>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 sm:p-6 text-center bg-[#EEF1DE]">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#134630]">100%</span>
            <span className="text-xs sm:text-sm font-bold text-[#42732E] uppercase tracking-wide">Sub-Kabula Deed</span>
          </div>
        </div>
      </div>

      {/* 4 Ways to Enjoy It (Four Core Pillars) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="reveal-slow text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#EEF1DE] px-3 py-1 rounded-full">
            Master Estate
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-50 mt-3">
            One estate, four ways to enjoy it
          </h2>
          <p className="text-[#EEF1DE]/80 text-sm sm:text-base mt-2">
            A harmonious integration of sports, sustainable agriculture, world-class leisure, and permanent wealth.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-[#EEF1DE] text-[#42732E] flex items-center justify-center mb-4 transition-colors">
              <Flag className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">Golf Lifestyle</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Nine holes, short and long driving ranges, professional trainers, tournaments, and elite corporate outings.
            </p>
          </div>

          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-[#EEF1DE] text-[#42732E] flex items-center justify-center mb-4 transition-colors">
              <Sprout className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">Agro-Farming</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Organic farming, dairy, and orchards of sweet mango, dragon fruit, and malta, served organic farm-to-table.
            </p>
          </div>

          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-[#EEF1DE] text-[#42732E] flex items-center justify-center mb-4 transition-colors">
              <Home className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">Hospitality</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Luxury villas, cottages, wellness spa, pools, kayaking, cinema, and lakeside amphitheatre.
            </p>
          </div>

          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-[#EEF1DE] text-[#42732E] flex items-center justify-center mb-4 transition-colors">
              <FileCheck className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">Secure Land</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Real land share with 100% sub-kabula deed registration in your name, professionally managed by Sampan Group.
            </p>
          </div>
        </div>
      </div>

      {/* Undulating Transition to Pale Sage Section */}
      <div className="relative z-10 w-full overflow-hidden leading-none mt-12 -mb-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 text-[#EEF1DE] fill-current block"
          aria-hidden="true"
        >
          <path d="M0 50 C250 20 450 90 700 50 S1050 20 1200 45 V120 H0Z" fill="#134630" opacity="0.4" />
          <path d="M0 75 C300 45 520 100 800 65 S1100 50 1200 70 V120 H0Z" fill="#708564" opacity="0.7" />
          <path d="M0 95 C350 75 700 115 1200 85 V120 H0Z" fill="#EEF1DE" />
        </svg>
      </div>
    </section>
  );
}
