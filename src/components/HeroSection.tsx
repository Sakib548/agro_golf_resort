"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Flag, Sprout, Home, FileCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-10 sm:pt-14 overflow-hidden bg-[#0a2318] text-white">
      {/* Background Visual with Translucent, Airy Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Sampan Agro & Golf Resort Golf Course"
          fill
          priority
          className="object-cover object-center opacity-75 scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft, translucent gradient overlays - lighter and less dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07291c]/80 via-[#0b3a28]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07291c]/75 via-transparent to-[#07291c]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-20 md:pt-12 md:pb-32">
        <div className="max-w-3xl drop-shadow-sm">
          {/* Location pill */}
          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-[#07291c]/75 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#b6e59c] backdrop-blur-md mb-6 shadow-sm">
            <span className="size-2 rounded-full bg-[#66b447] animate-pulse" />
            <span>Dhaka-Sylhet Highway</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-reveal font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
            Luxury of nature <br className="hidden sm:inline" />
            <span className="text-[#66b447] italic font-heading">with leisure.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal text-base sm:text-xl text-emerald-50/95 leading-relaxed max-w-2xl font-normal mb-10 drop-shadow-sm">
            A 100+ acre green estate by <strong className="font-semibold text-white">Sampan Group</strong>:
            nine-hole international golf, a thriving organic agro farm, lakeside villas, and land you own with 100% sub-kabula deed registration.
          </p>

          {/* Action CTAs */}
          <div className="hero-reveal flex flex-wrap items-center gap-3.5">
            <Link
              href="/invest"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#66b447] px-6 sm:px-7 py-3.5 text-sm uppercase tracking-wider font-bold text-[#06210f] shadow-sm transition-all duration-300 hover:bg-[#77c955] hover:scale-105 active:scale-95"
            >
              <span>See Invest &amp; Membership</span>
              {/* <span className="text-xs">৳2.50L+</span> */}
            </Link>

            <a
              href="/brochure.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime-400/40 bg-emerald-950/75 px-5 sm:px-6 py-3.5 text-sm uppercase tracking-wider font-bold text-[#b6e59c] backdrop-blur-sm transition-all duration-300 hover:bg-emerald-900 hover:border-lime-400 active:scale-95"
            >
              <FileText className="size-4" />
              <span>Download Brochure</span>
              <span>↗</span>
            </a>

            {/* <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-black/20 px-5 sm:px-6 py-3.5 text-sm uppercase tracking-wider font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/70 active:scale-95"
            >
              <span>Book Site Visit</span>
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Floating Key Metrics Strip - Soft Bento Floating Dock */}
      <div className="hero-reveal relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 mb-16">
        <div className="bento-card neo-hairline grid grid-cols-2 md:grid-cols-5 gap-0 bg-white/95 backdrop-blur-md shadow-2xl divide-x divide-y md:divide-y-0 divide-stone-200 overflow-hidden rounded-2xl ring-1 ring-white/20">
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#0b4a32]">100+</span>
            <span className="text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wide">Acres Estate</span>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#0b4a32]">9</span>
            <span className="text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wide">Hole Intl Golf</span>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#0b4a32]">10</span>
            <span className="text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wide">Natural Ponds</span>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#0b4a32]">4</span>
            <span className="text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wide">Swimming Pools</span>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 sm:p-6 text-center bg-emerald-50/80">
            <span className="font-heading block text-3xl sm:text-4xl font-extrabold text-[#0b4a32]">100%</span>
            <span className="text-xs sm:text-sm font-bold text-[#0b4a32] uppercase tracking-wide">Sub-Kabula Deed</span>
          </div>
        </div>
      </div>

      {/* 4 Ways to Enjoy It (Four Core Pillars) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="reveal-slow text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
            Master Estate
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-50 mt-3">
            One estate, four ways to enjoy it
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            A harmonious integration of sports, sustainable agriculture, world-class leisure, and permanent wealth.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-emerald-900/10 text-[#0b4a32] flex items-center justify-center mb-4 transition-colors">
              <Flag className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">Golf Lifestyle</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Nine holes, short and long driving ranges, professional trainers, tournaments, and elite corporate outings.
            </p>
          </div>

          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-lime-500/15 text-[#529434] flex items-center justify-center mb-4 transition-colors">
              <Sprout className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">Agro-Farming</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Organic farming, dairy, and orchards of sweet mango, dragon fruit, and malta, served organic farm-to-table.
            </p>
          </div>

          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-amber-500/15 text-[#b8892b] flex items-center justify-center mb-4 transition-colors">
              <Home className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">Hospitality</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Luxury villas, cottages, wellness spa, pools, kayaking, cinema, and lakeside amphitheatre.
            </p>
          </div>

          <div className="bento-card neo-hairline p-6 transition-all duration-300">
            <div className="size-12 rounded-xl bg-blue-500/15 text-blue-800 flex items-center justify-center mb-4 transition-colors">
              <FileCheck className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">Secure Land</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Real land share with 100% sub-kabula deed registration in your name, professionally managed by Sampan Group.
            </p>
          </div>
        </div>
      </div>

      {/* Undulating Transition to Beige Timeline Section */}
      <div className="relative z-10 w-full overflow-hidden leading-none mt-12 -mb-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 text-[#f6f8f2] fill-current block"
          aria-hidden="true"
        >
          <path d="M0 50 C250 20 450 90 700 50 S1050 20 1200 45 V120 H0Z" fill="#1f6b3f" opacity="0.4" />
          <path d="M0 75 C300 45 520 100 800 65 S1100 50 1200 70 V120 H0Z" fill="#66b447" opacity="0.7" />
          <path d="M0 95 C350 75 700 115 1200 85 V120 H0Z" fill="#f6f8f2" />
        </svg>
      </div>
    </section>
  );
}
