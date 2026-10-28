"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sunrise,
  UtensilsCrossed,
  Compass,
  Flame,
  Flag,
  Waves,
  Home,
  Sprout,
  ChevronRight,
  ArrowRight,
  Volume2,
  VolumeX,
} from "lucide-react";

const timelineEvents = [
  {
    time: "Morning",
    Icon: Sunrise,
    title: "Championship Fairways & Driving Range",
    description:
      "Tee off across the tranquil morning mist on the 9-hole international course, or refine your swing under the guidance of professional instructors at the driving range.",
    badge: "Sports & Golf",
  },
  {
    time: "Midday",
    Icon: UtensilsCrossed,
    title: "Farm-to-Table Dining & Spa Rejuvenation",
    description:
      "Savor gourmet organic cuisine sourced fresh from the estate's own orchards and dairy farm, followed by a dip in the temperature-controlled pool or a wellness treatment at the spa.",
    badge: "Gastronomy & Wellness",
  },
  {
    time: "Afternoon",
    Icon: Compass,
    title: "Pond Kayaking & Agro Orchard Trails",
    description:
      "Paddle through 10 natural ponds, fish peacefully, or explore miles of cycling, hiking, and horse-riding trails winding through lush mango, dragon fruit, and malta groves.",
    badge: "Eco Adventure",
  },
  {
    time: "Evening",
    Icon: Flame,
    title: "Bonfire BBQ, Cinema & Lakeside Concerts",
    description:
      "Gather around glowing barbecue bonfires under the starlit Moulvibazar sky, watch a screening in the private cinema, or experience a musical performance at the lakeside MP Centre.",
    badge: "Hospitality & Leisure",
  },
];

interface ResortHighlightItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  src: string;
  rating: string;
  reviews: string;
  desc: string;
  href: string;
  stats: { label: string; value: string }[];
}

const galleryHighlights: ResortHighlightItem[] = [
  {
    id: "golf-swing",
    title: "Championship Golf Swing",
    subtitle: "Dhaka-Sylhet Highway",
    tag: "9-Hole Golf Action",
    src: "/images/Web-1.webp",
    rating: "4.9",
    reviews: "182 reviews",
    desc: "Tee off over scenic natural water hazards contoured organically into Moulvibazar's tea garden valley mounds.",
    href: "/resort#featured-golf",
    stats: [
      { label: "Fairway Scale", value: "9 Holes" },
      { label: "Ideal Time", value: "Morning" },
      { label: "Instruction", value: "PGA Level" },
    ],
  },
  {
    id: "clubhouse-lounge",
    title: "Sunset Clubhouse Lounge",
    subtitle: "Fairway Overlook Terrace",
    tag: "Clubhouse Leisure",
    src: "/images/cozy-outdoor-golf-clubhouse-seating-sunset.jpg",
    rating: "4.9",
    reviews: "148 reviews",
    desc: "Relax with evening tea on open-air sofas watching players complete the 9th pin as the sun sets over the green.",
    href: "/resort#lifestyle-facilities",
    stats: [
      { label: "Best Hour", value: "Sunset" },
      { label: "Atmosphere", value: "Alfresco" },
      { label: "Dining", value: "Barbecue" },
    ],
  },
  {
    id: "lakeside-villas",
    title: "Lakeside Luxury Villas",
    subtitle: "10 Natural Ponds Enclave",
    tag: "Eco Villas & Cottages",
    src: "/images/Golden_Sunset_Resort Balcony_Retreat.png",
    rating: "4.8",
    reviews: "210 reviews",
    desc: "Handcrafted thatched cottages and modern waterfront villas with floor-to-ceiling glass and private wooden decks.",
    href: "/resort#lifestyle-facilities",
    stats: [
      { label: "Ownership", value: "Sub-Kabula" },
      { label: "Setting", value: "Waterfront" },
      { label: "Vibe", value: "Tranquil" },
    ],
  },
  {
    id: "reading-lounge",
    title: "Executive Reading Lounge",
    subtitle: "Curated Library Sanctuary",
    tag: "Quiet Retreat",
    src: "/images/reading-lounge.webp",
    rating: "4.9",
    reviews: "96 reviews",
    desc: "Peaceful quiet sanctuary surrounded by tropical gardens, equipped with curated books and high-speed fiber WiFi.",
    href: "/resort#lifestyle-facilities",
    stats: [
      { label: "Connection", value: "Fiber WiFi" },
      { label: "Space", value: "Private Pods" },
      { label: "Collection", value: "Curated" },
    ],
  },
];

export default function DayTimelineSection() {
  const [viewStyle, setViewStyle] = useState<"right" | "left">("left");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="py-20 bg-[#F7F5EE] text-[#134630]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Why Owners Choose It */}
        <div className="mb-20">
          <div className="reveal-slow max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#42732E] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#708564]/30">
              Tangible Value
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#134630] mt-2">
              Why owners choose it
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border-l-4 border-l-[#42732E] border border-[#708564]/20 bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#42732E] uppercase tracking-wider">Sub-Kabula Security</span>
              <h3 className="font-heading text-2xl font-bold text-[#134630] mt-2 mb-3">Land you hold</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Direct 100% Sub-Kabula registration in your own name. Your share is recorded freehold Bangladesh land, not merely an intangible club membership.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-l-[#708564] border border-[#708564]/20 bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#708564] uppercase tracking-wider">Compounded Cashflow</span>
              <h3 className="font-heading text-2xl font-bold text-[#134630] mt-2 mb-3">Two income streams</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Reap sustainable agro-yield dividends from certified organic farms, orchards, and dairy, combined with hospitality room nights and tournament revenue.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-l-[#134630] border border-[#708564]/20 bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#134630] uppercase tracking-wider">Established Group</span>
              <h3 className="font-heading text-2xl font-bold text-[#134630] mt-2 mb-3">Proven track record</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Sampan Highway Inn and Sampan Eco &amp; Agro are actively operating ventures proving commercial delivery capacity.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            CINEMATIC VIDEO FEATURE (Compact height for laptops)
           ======================================================== */}
        <div className="mb-14 rounded-3xl bg-white border border-[#708564]/20 p-5 sm:p-6 lg:p-7 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Video Column: Balanced height for laptops */}
            <div className="w-full lg:w-[35%] shrink-0">
              <div className="relative w-full aspect-[4/3] h-[310px] sm:h-[340px] lg:h-[355px] rounded-2xl overflow-hidden shadow-md bg-stone-950 border border-[#708564]/20 group">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src="/videos/golf_swing2.mp4" type="video/mp4" />
                  <source src="/videos/golf_swing.mp4" type="video/mp4" />
                </video>

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold text-[#F7F5EE] border border-white/20 shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#42732E] animate-pulse" />
                    <span>Live Swing</span>
                  </span>
                </div>

                {/* Audio Mute/Unmute Toggle Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-3 right-3 size-8 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/25 flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-10 cursor-pointer shadow-sm"
                >
                  {isMuted ? (
                    <VolumeX className="size-3.5 text-white/80" />
                  ) : (
                    <Volume2 className="size-3.5 text-[#F7F5EE]" />
                  )}
                </button>
              </div>
            </div>

            {/* Editorial Content: Dropped bottom half, clean text */}
            <div className="flex-1 w-full lg:self-stretch lg:flex lg:flex-col lg:justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F5EE] border border-[#708564]/30 px-3 py-1 text-xs uppercase tracking-wider font-bold text-[#134630] mb-2.5">
                <span className="size-2 rounded-full bg-[#42732E] animate-pulse" />
                <span>Estate in Motion &bull; 9-Hole Championship Course</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#134630] leading-tight mb-3">
                Golf, in Harmony with Nature
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                Experience the game across rolling greens, scenic ponds, and gently undulating fairways. Our international-standard, 9-hole golf facility along the Dhaka–Sylhet Highway brings together the challenge of the game and the tranquillity of nature.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-[#134630] font-bold">Ready to take your swing?</strong>{" "}
                <Link
                  href="/contact"
                  className="text-[#42732E] hover:text-[#134630] font-semibold underline underline-offset-4 decoration-[#42732E]/40 hover:decoration-[#134630] transition-colors"
                >
                  Plan your visit and discover golf at Sampan →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Visual Glimpses of the Estate / Life across the resort */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#134630] bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#708564]/30 inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#42732E] animate-pulse" />
                <span>Resort Gallery</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#134630] mt-2">
                Life across the resort
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Style Switcher: Immersive (Right of Image 2) vs Detailed (Left of Image 2) */}
              <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#708564]/25 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewStyle("right")}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${viewStyle === "right"
                    ? "bg-[#42732E] text-white shadow-xs"
                    : "text-[#134630]/70 hover:text-[#134630]"
                    }`}
                >
                  Immersive View
                </button>
                <button
                  type="button"
                  onClick={() => setViewStyle("left")}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${viewStyle === "left"
                    ? "bg-[#42732E] text-white shadow-xs"
                    : "text-[#134630]/70 hover:text-[#134630]"
                    }`}
                >
                  Detailed View
                </button>
              </div>

              <Link
                href="/resort"
                className="text-xs sm:text-sm font-bold text-[#42732E] hover:text-[#134630] flex items-center gap-1 transition-colors ml-1"
              >
                <span>Explore all resort zones</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Cards Grid: Render either Right Card or Left Card style based on viewStyle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryHighlights.map((img) =>
              viewStyle === "right" ? (
                /* ========================================================
                   RIGHT CARD DESIGN (Immersive Full-Bleed Photo + Floating Pill)
                   ======================================================== */
                <div
                  key={img.id}
                  className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full rounded-[28px] overflow-hidden shadow-lg border border-[#708564]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between bg-stone-900"
                >
                  {/* Full-bleed photography */}
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Atmospheric dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Top Bar: Tag badge */}
                  <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-black/55 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F7F5EE] border border-white/20 shadow-xs">
                      {img.tag}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-5 sm:p-6 text-white flex flex-col justify-end">
                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white leading-tight mb-1 group-hover:text-[#F7F5EE] transition-colors">
                      {img.title}
                    </h3>

                    {/* Subtitle / Location */}
                    <p className="text-xs text-white/80 font-medium mb-4">
                      {img.subtitle}
                    </p>

                    {/* Floating pill button with "See more" & circular arrow */}
                    <Link
                      href={img.href}
                      className="w-full rounded-full bg-white/20 hover:bg-[#42732E] backdrop-blur-md border border-white/30 hover:border-[#42732E] py-2.5 px-4 sm:px-5 flex items-center justify-between transition-all duration-300 shadow-md group/btn"
                    >
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        See more
                      </span>
                      <span className="size-7 sm:size-8 rounded-full bg-white text-[#134630] flex items-center justify-center shadow-md transition-transform duration-300 group-hover/btn:translate-x-1">
                        <ChevronRight className="size-4 stroke-[2.5]" />
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                /* ========================================================
                   LEFT CARD DESIGN (White Container + Inset Image + 3 Stats)
                   ======================================================== */
                <Link
                  key={img.id}
                  href={img.href}
                  className="group relative rounded-[28px] bg-white border border-[#708564]/20 p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between block cursor-pointer"
                >
                  <div>
                    {/* Inset Photo */}
                    <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-4 bg-stone-900">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        quality={90}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="inline-block rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F7F5EE] border border-white/15">
                          {img.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <div className="mb-2">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#134630] leading-snug group-hover:text-[#42732E] transition-colors">
                        {img.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">
                        {img.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-2 mb-4">
                      {img.desc}
                    </p>
                  </div>

                  {/* 3 Stats Row */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#708564]/15 text-center sm:text-left">
                    {img.stats.map((s, idx) => (
                      <div key={idx} className="border-r border-[#708564]/15 last:border-r-0 pr-1">
                        <span className="font-heading text-xs sm:text-sm font-bold text-[#134630] block leading-tight">
                          {s.value}
                        </span>
                        <span className="text-[10px] text-stone-500 block truncate mt-0.5 font-medium">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Facilities at a glance */}
        <div className="mb-14">
          <h3 className="font-heading text-2xl font-bold text-[#134630] mb-6 text-center sm:text-left">
            Facilities at a glance
          </h3>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-[#708564]/20 bg-[#FFFFFF] p-5 shadow-xs">
              <span className="font-bold text-[#42732E] text-sm flex items-center gap-1.5 mb-2">
                <Flag className="size-4" />
                <span>Sports &amp; Golf</span>
              </span>
              <ul className="text-stone-600 text-sm space-y-1.5 list-disc list-inside">
                <li>9-hole golf course</li>
                <li>Long &amp; short driving ranges</li>
                <li>Professional trainers</li>
                <li>Cricket &amp; football turfs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#708564]/20 bg-[#FFFFFF] p-5 shadow-xs">
              <span className="font-bold text-[#42732E] text-sm flex items-center gap-1.5 mb-2">
                <Waves className="size-4" />
                <span>Aquatics &amp; Wellness</span>
              </span>
              <ul className="text-stone-600 text-sm space-y-1.5 list-disc list-inside">
                <li>4 swimming pools</li>
                <li>10 natural ponds &amp; fishing</li>
                <li>Boating &amp; kayaking</li>
                <li>Spa, sauna &amp; salon</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#708564]/20 bg-[#FFFFFF] p-5 shadow-xs">
              <span className="font-bold text-[#42732E] text-sm flex items-center gap-1.5 mb-2">
                <Home className="size-4" />
                <span>Stay &amp; Living</span>
              </span>
              <ul className="text-stone-600 text-sm space-y-1.5 list-disc list-inside">
                <li>Lakeside villas &amp; cottages</li>
                <li>Presidential luxury suites</li>
                <li>Farm-to-table restaurant</li>
                <li>Cinema &amp; reading lounge</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#708564]/20 bg-[#FFFFFF] p-5 shadow-xs">
              <span className="font-bold text-[#42732E] text-sm flex items-center gap-1.5 mb-2">
                <Sprout className="size-4" />
                <span>Eco &amp; Agri</span>
              </span>
              <ul className="text-stone-600 text-sm space-y-1.5 list-disc list-inside">
                <li>Commercial organic farm</li>
                <li>Mango, dragon &amp; malta groves</li>
                <li>Flower gardens &amp; eco park</li>
                <li>Trail trekking &amp; horse riding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* "The Village Will Be the City" Band - Slow Reveal */}
      <div className="reveal-slow bg-[#134630] text-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 mt-12 relative overflow-hidden border-t border-[#708564]/30">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#42732E]/20 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#F7F5EE] font-bold">
              Sampan Group Philosophy
            </span>
            <blockquote className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight mt-2 mb-4">
              “The Village Will Be the City.”
            </blockquote>
            <p className="text-stone-300 text-base leading-relaxed">
              Sampan Group&apos;s founding belief: bring urban comfort, modern opportunity, and 5-star infrastructure to rural Bangladesh, backed by economically self-sustaining agro-enterprises.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-[#42732E] px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-white shadow-lg hover:bg-[#708564] transition-all hover:scale-105"
            >
              About Sampan Group
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-[#F7F5EE]/40 bg-[#FFFFFF]/10 px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-[#F7F5EE] hover:bg-[#FFFFFF]/20 transition-all"
            >
              See Operating Track Record
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
