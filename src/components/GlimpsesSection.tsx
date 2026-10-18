"use client";

import Image from "next/image";
import Link from "next/link";
import { Flag, Waves, Home, Sprout, ArrowUpRight, Sparkles, Map, ShieldCheck, Trophy } from "lucide-react";

export default function GlimpsesSection() {
  return (
    <section className="py-24 bg-[#ffffff] text-[#14261c] border-t border-stone-200/90 relative overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/3 -left-36 size-[500px] rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-36 size-[500px] rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold text-[#0b4a32] border border-emerald-200">
              <Sparkles className="size-3.5" />
              <span>Bento Architecture Showcase</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14261c] mt-3">
              Glimpses of the Estate
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              Experience the 100+ acre grounds structured as an interconnected tapestry — international championship golf, lakeside living, and commercial agro-farming.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/resort#gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#12583d] transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Divided Gallery</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* ========================================================
            ELITE BENTO GRID LAYOUT
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 auto-rows-[240px] sm:auto-rows-[280px]">
          {/* TILE 1: Large Featured Hero Bento (Spans 2 cols, 2 rows) */}
          <Link
            href="/resort#chapter-sports"
            className="bento-card group md:col-span-2 md:row-span-2 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-stone-900">
              <Image
                src="/images/golf-swing-action.webp"
                alt="Championship Golf Fairway Swing"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            {/* Top Bar with Pulsing Badge */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] border border-white/15">
                <span className="size-2 rounded-full bg-[#66b447] animate-pulse" />
                <span>9-Hole Championship Golf</span>
              </span>
              <div className="size-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-8 text-white">
              <span className="text-xs font-mono uppercase tracking-widest text-[#b6e59c] block mb-1">
                Elite Sports Enclave &bull; 100+ Acres
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-2">
                Championship Fairways &amp; Tiered Driving Range
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm max-w-lg leading-relaxed line-clamp-2">
                Engineered around natural water hazards, tea garden mounds, 4 FIFA football turfs, and professional trainers.
              </p>
            </div>
          </Link>

          {/* TILE 2: Waterfront Living & Thatched Cottages (1 col, 2 rows) */}
          <Link
            href="/resort#chapter-stay"
            className="bento-card group md:col-span-1 md:row-span-2 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-stone-900">
              <Image
                src="/images/lakeside-villas.webp"
                alt="Lakeside Luxury Villas"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] border border-white/15">
                <Home className="size-3.5" />
                <span>Lakeside Villas</span>
              </span>
              <div className="size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-6 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#d9aa4a] block mb-1">
                100% Sub-Kabula Deeded
              </span>
              <h3 className="font-heading text-xl font-bold leading-tight mb-2">
                Thatched Shan Cottages &amp; Waterfront Living
              </h3>
              <p className="text-emerald-100/80 text-xs leading-relaxed line-clamp-3">
                Handcrafted thatched eco-cottages alongside waterfront luxury villas with wooden decks facing natural ponds.
              </p>
            </div>
          </Link>

          {/* TILE 3: Real Estate & Metrics Mini-Bento (1 col, 1 row) */}
          <div className="bento-card bento-glow-gold p-6 flex flex-col justify-between bg-gradient-to-br from-white via-[#fbfcf9] to-amber-50/40 border border-stone-200/90">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#b8892b] bg-amber-100 px-2.5 py-0.5 rounded-full">
                Tangible Asset
              </span>
              <ShieldCheck className="size-5 text-[#b8892b]" />
            </div>

            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0b4a32] tracking-tight">
                100%
              </div>
              <p className="text-xs font-bold text-[#14261c] mt-0.5">
                Sub-Kabula Deed Registration
              </p>
              <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                Own physical land on paper with full registration rights.
              </p>
            </div>
          </div>

          {/* TILE 4: Dual Revenue Yields Mini-Bento (1 col, 1 row) */}
          <div className="bento-card p-6 flex flex-col justify-between bg-gradient-to-br from-white via-[#fbfcf9] to-emerald-50/40 border border-stone-200/90">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Dual Yields
              </span>
              <Sprout className="size-5 text-[#66b447]" />
            </div>

            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0b4a32] tracking-tight">
                Agro &bull; Leisure
              </div>
              <p className="text-xs font-bold text-[#14261c] mt-0.5">
                Two Continuous Revenue Streams
              </p>
              <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                Farm yields from organic orchards plus hospitality dividends.
              </p>
            </div>
          </div>

          {/* TILE 5: Masterplan Blueprint Visual Bento (Spans 2 cols, 1 row) */}
          <Link
            href="/resort#gallery"
            className="bento-card group md:col-span-2 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-stone-900">
              <Image
                src="/images/2.webp"
                alt="100+ Acre Masterplan Drawing"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] border border-white/15">
                <Map className="size-3.5" />
                <span>100+ Acre Masterplan Drawing</span>
              </span>
              <div className="size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="font-heading text-xl font-bold leading-tight">
                Architectural Masterplan &bull; Signature &ldquo;S&rdquo; Curve Complex
              </h3>
              <p className="text-emerald-100/80 text-xs mt-1">
                Preserving 10 natural ponds, integrating waterpark rides, sports grounds, and eco-parks.
              </p>
            </div>
          </Link>

          {/* TILE 6: Aquatic & Pools Bento (1 col, 1 row) */}
          <Link
            href="/resort#chapter-leisure"
            className="bento-card group md:col-span-1 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-stone-900">
              <Image
                src="/images/Swimming-Pool.webp"
                alt="Resort Swimming Pools"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] border border-white/15">
                <Waves className="size-3.5" />
                <span>4 Pools</span>
              </span>
              <div className="size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="font-heading text-base font-bold leading-tight">
                4 Luxury Swimming Pools
              </h3>
              <p className="text-emerald-100/80 text-[11px] mt-0.5">
                Heated lap pool, infinity pools &amp; kids splash area.
              </p>
            </div>
          </Link>

          {/* TILE 7: Night Illuminated Gateway Bento (1 col, 1 row) */}
          <Link
            href="/resort#chapter-leisure"
            className="bento-card group md:col-span-1 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-stone-900">
              <Image
                src="/images/4.webp"
                alt="Night Illuminated Gateway"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] border border-white/15">
                <Sparkles className="size-3.5" />
                <span>Night Ambiance</span>
              </span>
              <div className="size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="font-heading text-base font-bold leading-tight">
                Grand Fountain Entrance
              </h3>
              <p className="text-emerald-100/80 text-[11px] mt-0.5">
                Stunning illuminated gateway with cascading fountains.
              </p>
            </div>
          </Link>
        </div>

        {/* ========================================================
            EVENTS & TOURNAMENTS (BENTO TREATMENT)
           ======================================================== */}
        <div className="bento-card p-8 sm:p-12 mb-20 bg-gradient-to-br from-white via-[#fbfcf9] to-emerald-50/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold text-[#0b4a32] border border-emerald-200 mb-3">
                <Trophy className="size-3.5" />
                <span>Host Your Occasions</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-2 mb-4">
                Events &amp; Tournaments Arena
              </h3>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                Host championship golf tournaments, executive retreats, sports meets, and corporate galas on the estate. Featuring cricket grounds, 4 FIFA football turfs, baseball diamond, and courts.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Company outings, family reunions, and club galas can utilize banquet-style dining, the MP Centre lakeside concert zone, and sizzling barbecue areas.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-sm"
              >
                <span>Plan an Event</span>
                <span>→</span>
              </Link>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src="/images/high-angle-view-golf-course-by-lake (2).webp"
                alt="Tournament day at golf course"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3.5 text-white text-xs sm:text-sm font-semibold flex items-center justify-between border border-white/10">
                <span>Championship Arena</span>
                <span className="text-[#b6e59c]">Corporate &amp; Club</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            FACILITIES AT A GLANCE (BENTO GRID TILES)
           ======================================================== */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Infrastructure
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
              Facilities at a Glance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bento-card p-6 border-l-4 !border-l-[#0b4a32]">
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-stone-100">
                <Flag className="size-4 text-[#0b4a32]" />
                <h4 className="font-heading text-base font-bold text-[#14261c]">
                  Elite Athletics
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>9-hole international golf course</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Short &amp; long driving ranges &amp; trainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Cricket ground &amp; 4 football turfs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Baseball diamond, tennis &amp; badminton</span>
                </li>
              </ul>
            </div>

            <div className="bento-card p-6 border-l-4 !border-l-[#0284c7]">
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-stone-100">
                <Waves className="size-4 text-[#0284c7]" />
                <h4 className="font-heading text-base font-bold text-[#14261c]">
                  Aquatics &amp; Wellness
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0284c7] font-bold mt-0.5">•</span>
                  <span>4 swimming pools (temp-controlled &amp; kids)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284c7] font-bold mt-0.5">•</span>
                  <span>10 preserved natural ponds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284c7] font-bold mt-0.5">•</span>
                  <span>Boating, pedal boats &amp; kayaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284c7] font-bold mt-0.5">•</span>
                  <span>European spa, sauna &amp; luxury salon</span>
                </li>
              </ul>
            </div>

            <div className="bento-card p-6 border-l-4 !border-l-[#b8892b]">
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-stone-100">
                <Home className="size-4 text-[#b8892b]" />
                <h4 className="font-heading text-base font-bold text-[#14261c]">
                  Hospitality &amp; Stays
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#b8892b] font-bold mt-0.5">•</span>
                  <span>Waterfront villas &amp; thatched cottages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8892b] font-bold mt-0.5">•</span>
                  <span>Presidential suites &amp; butler services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8892b] font-bold mt-0.5">•</span>
                  <span>Farm-to-table organic restaurant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8892b] font-bold mt-0.5">•</span>
                  <span>3D movie theater &amp; reading library</span>
                </li>
              </ul>
            </div>

            <div className="bento-card p-6 border-l-4 !border-l-[#66b447]">
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-stone-100">
                <Sprout className="size-4 text-[#66b447]" />
                <h4 className="font-heading text-base font-bold text-[#14261c]">
                  Nature &amp; Farmlands
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Commercial agro farm &amp; organic orchards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Golden paddy &amp; wheat fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Miles of cycling, jogging &amp; horse trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#66b447] font-bold mt-0.5">•</span>
                  <span>Family picnic lawns &amp; barbecue zones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
