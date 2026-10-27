"use client";

import Image from "next/image";
import Link from "next/link";
import { Flag, Waves, Home, Sprout, ArrowUpRight, Sparkles, Map, ShieldCheck, Trophy } from "lucide-react";

export default function GlimpsesSection() {
  return (
    <section className="py-24 bg-[#FFFFFF] text-[#134630] border-t border-[#708564]/20 relative overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/3 -left-36 size-[500px] rounded-full bg-[#F7F5EE]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-36 size-[500px] rounded-full bg-[#708564]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F5EE] px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold text-[#134630] border border-[#708564]/30">
              <Sparkles className="size-3.5 text-[#42732E]" />
              <span>Our Architecture Showcase</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#134630] mt-3">
              Glimpses of the Estate
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              Experience the 100+ acre grounds structured as an interconnected tapestry — international championship golf, lakeside living, and commercial agro-farming.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/resort#gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-[#42732E] px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#134630] transition-all hover:scale-105 active:scale-95"
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
          {/* TILE 1: Oversized Featured Card for Golf Course */}
          <Link
            href="/resort#chapter-sports"
            className="bento-card group md:col-span-2 lg:col-span-2 md:row-span-2 overflow-hidden flex flex-col justify-between relative shadow-xl border border-[#708564]/30"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/golf-swing.webp"
                alt="Championship Golf Fairway Swing"
                fill
                priority
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
            </div>

            {/* Top Bar with Pulsing Badge */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/20 shadow-md">
                <span className="size-2 rounded-full bg-[#42732E] animate-pulse" />
                <span>Featured &bull; 9-Hole Championship Golf</span>
              </span>
              <div className="size-9 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-8 text-white">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F7F5EE] block mb-1.5 font-semibold">
                Elite Sports Enclave &bull; 100+ Acres
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-2.5">
                Championship Fairways &amp; Tiered Driving Range
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm max-w-lg leading-relaxed line-clamp-2">
                Engineered around natural water hazards, tea garden mounds, 4 championship football turfs, and professional trainers.
              </p>
            </div>
          </Link>

          {/* TILE 2: Waterfront Living & Thatched Cottages (Cinematic Image Card) */}
          <Link
            href="/resort#chapter-stay"
            className="bento-card group md:col-span-1 md:row-span-2 overflow-hidden flex flex-col justify-between relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/Golden_Sunset_Resort Balcony_Retreat.png"
                alt="Lakeside Luxury Villas"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/15">
                <Home className="size-3.5 text-[#42732E]" />
                <span>Lakeside Villas</span>
              </span>
              <div className="size-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-6 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#F7F5EE] block mb-1">
                100% Sub-Kabula Deeded
              </span>
              <h3 className="font-heading text-xl font-bold leading-tight mb-2">
                Thatched Shan Cottages &amp; Waterfront Living
              </h3>
              <p className="text-stone-200 text-xs leading-relaxed line-clamp-3">
                Handcrafted thatched eco-cottages alongside waterfront luxury villas with wooden decks facing natural ponds.
              </p>
            </div>
          </Link>

          {/* TILE 3: Editorial Card for Supporting Information — Sub-Kabula Deed */}
          <div className="bento-card p-6 flex flex-col justify-between bg-[#FFFFFF] border border-[#708564]/25 border-t-4 border-t-[#42732E] shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#708564]/20">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#42732E]">
                  01 / Legal Assurance
                </span>
                <ShieldCheck className="size-4 text-[#42732E]" />
              </div>

              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#134630] tracking-tight block">
                100%
              </span>
              <h4 className="text-xs font-bold text-[#134630] mt-1 leading-snug">
                Sub-Kabula Deed Registration
              </h4>
            </div>

            <p className="text-[11px] text-[#708564] leading-relaxed pt-2 border-t border-[#708564]/15 italic">
              &ldquo;Own physical land on paper with full government sub-registry rights.&rdquo;
            </p>
          </div>

          {/* TILE 4: Editorial Card for Supporting Information — Dual Revenue Yields */}
          <div className="bento-card p-6 flex flex-col justify-between bg-[#FFFFFF] border border-[#708564]/25 border-t-4 border-t-[#708564] shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#708564]/20">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#708564]">
                  02 / Economic Model
                </span>
                <Sprout className="size-4 text-[#42732E]" />
              </div>

              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#134630] tracking-tight block">
                Dual Yields
              </span>
              <h4 className="text-xs font-bold text-[#134630] mt-1 leading-snug">
                Agro Dividends &bull; Resort Revenue
              </h4>
            </div>

            <p className="text-[11px] text-[#708564] leading-relaxed pt-2 border-t border-[#708564]/15 italic">
              &ldquo;Organic orchards and dairy yields combined with hospitality dividends.&rdquo;
            </p>
          </div>

          {/* TILE 5: Masterplan Blueprint Visual Bento (Cinematic Image Card) */}
          <Link
            href="/resort#gallery"
            className="bento-card group md:col-span-2 overflow-hidden flex flex-col justify-between relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/2.webp"
                alt="100+ Acre Masterplan Drawing"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/15">
                <Map className="size-3.5" />
                <span>100+ Acre Masterplan Drawing</span>
              </span>
              <div className="size-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="font-heading text-xl font-bold leading-tight">
                Architectural Masterplan
              </h3>
              <p className="text-emerald-100/80 text-xs mt-1">
                Preserving 10 natural ponds, integrating waterpark rides, sports grounds, and eco-parks.
              </p>
            </div>
          </Link>

          {/* TILE 6: Aquatic & Pools Bento (Cinematic Image Card) */}
          <Link
            href="/resort#chapter-leisure"
            className="bento-card group md:col-span-1 overflow-hidden flex flex-col justify-between relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/Swimming-Pool.webp"
                alt="Resort Swimming Pools"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-85 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/15">
                <Waves className="size-3.5" />
                <span>4 Pools</span>
              </span>
              <div className="size-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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

          {/* TILE 7: Night Illuminated Gateway Bento (Cinematic Image Card) */}
          <Link
            href="/resort#chapter-leisure"
            className="bento-card group md:col-span-1 overflow-hidden flex flex-col justify-between relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/4.webp"
                alt="Night Illuminated Gateway"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-85 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/15">
                <Sparkles className="size-3.5" />
                <span>Night Ambiance</span>
              </span>
              <div className="size-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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

          {/* TILE 8: Authentic Shan Thatched Cottages Bento (Cinematic Image Card) */}
          <Link
            href="/resort#chapter-stay"
            className="bento-card group md:col-span-2 overflow-hidden flex flex-col justify-between relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/Sampan-Agro-&-Golf-Resort-2.webp"
                alt="Traditional Thatched Shan Cottages"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/15">
                <Home className="size-3.5" />
                <span>Shan Eco-Cottages</span>
              </span>
              <div className="size-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="font-heading text-xl font-bold leading-tight">
                Traditional Thatched Shan Cottages &amp; Veranda
              </h3>
              <p className="text-emerald-100/80 text-xs mt-1">
                Handcrafted eco-cottages engineered for natural cooling, with private verandas and scenic tropical garden vistas.
              </p>
            </div>
          </Link>

          {/* TILE 9: Sunset Infinity Pool & Loungers Bento (Cinematic Image Card) */}
          <Link
            href="/resort#chapter-leisure"
            className="bento-card group md:col-span-2 overflow-hidden flex flex-col justify-between relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-950">
              <Image
                src="/images/umbrella-chair-around-swimming-pool-resort-hotel-leisure-travel-vacation-neary-sea-ocean-beach-sunset-sunrise-time.webp"
                alt="Sunset Infinity Pool and Deck Loungers"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/15">
                <Waves className="size-3.5" />
                <span>Sunset Deck</span>
              </span>
              <div className="size-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="font-heading text-xl font-bold leading-tight">
                Lakeside Infinity Pool &amp; Sunset Deck
              </h3>
              <p className="text-emerald-100/80 text-xs mt-1">
                Temperature-controlled waters, parasol sun loungers, and evening golden reflections across the estate.
              </p>
            </div>
          </Link>
        </div>

        {/* ========================================================
            EVENTS & TOURNAMENTS (BENTO TREATMENT)
           ======================================================== */}
        {/* <div className="bento-card p-8 sm:p-12 mb-20 bg-gradient-to-br from-white via-[#FFFFFF] to-[#F7F5EE]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F5EE] px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold text-[#134630] border border-[#708564]/30 mb-3">
                <Trophy className="size-3.5 text-[#42732E]" />
                <span>Host Your Occasions</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#134630] mt-2 mb-4">
                Events &amp; Tournaments Arena
              </h3>
              <p className="text-[#134630]/80 text-base leading-relaxed mb-4">
                Host championship golf tournaments, executive retreats, sports meets, and corporate galas on the estate. Featuring cricket grounds, 4 championship football turfs, baseball diamond, and courts.
              </p>
              <p className="text-[#134630]/80 text-base leading-relaxed mb-6">
                Company outings, family reunions, and club galas can utilize banquet-style dining, the MP Centre lakeside concert zone, and sizzling barbecue areas.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#42732E] px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#134630] transition-colors shadow-sm"
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
                <span className="text-[#F7F5EE]">Corporate &amp; Club</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* ========================================================
            FACILITIES AT A GLANCE (BENTO GRID TILES)
           ======================================================== */}

      </div>
    </section>
  );
}
