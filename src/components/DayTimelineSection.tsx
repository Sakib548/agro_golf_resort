"use client";

import Image from "next/image";
import Link from "next/link";
import { Sunrise, UtensilsCrossed, Compass, Flame, Flag, Waves, Home, Sprout } from "lucide-react";

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

const galleryHighlights = [
  {
    title: "Championship Golf Swing",
    tag: "9-Hole Golf Action",
    src: "/images/Web-1.webp",
  },
  {
    title: "Sunset Clubhouse Lounge",
    tag: "Clubhouse Leisure",
    src: "/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp",
  },
  {
    title: "Lakeside Luxury Villas",
    tag: "Eco Villas & Cottages",
    src: "/images/scenic-villa-overlooking-golf-course.webp",
  },
  {
    title: "Executive Reading Lounge",
    tag: "Quiet Retreat",
    src: "/images/reading-lounge.webp",
  },
];

export default function DayTimelineSection() {
  return (
    <section className="py-20 bg-[#EEF1DE] text-[#134630]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Why Owners Choose It */}
        <div className="mb-20">
          <div className="reveal-slow max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#42732E] bg-[#FBFAF6] px-3 py-1 rounded-full border border-[#708564]/30">
              Tangible Value
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#134630] mt-2">
              Why owners choose it
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border-l-4 border-l-[#42732E] border border-[#708564]/20 bg-[#FBFAF6] p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#42732E] uppercase tracking-wider">Sub-Kabula Security</span>
              <h3 className="font-heading text-2xl font-bold text-[#134630] mt-2 mb-3">Land you hold</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Direct 100% Sub-Kabula registration in your own name. Your share is recorded freehold Bangladesh land, not merely an intangible club membership.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-l-[#708564] border border-[#708564]/20 bg-[#FBFAF6] p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#708564] uppercase tracking-wider">Compounded Cashflow</span>
              <h3 className="font-heading text-2xl font-bold text-[#134630] mt-2 mb-3">Two income streams</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Reap sustainable agro-yield dividends from certified organic farms, orchards, and dairy, combined with hospitality room nights and tournament revenue.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-l-[#134630] border border-[#708564]/20 bg-[#FBFAF6] p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#134630] uppercase tracking-wider">Established Group</span>
              <h3 className="font-heading text-2xl font-bold text-[#134630] mt-2 mb-3">Proven track record</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Sampan Highway Inn and Sampan Eco &amp; Agro are actively operating ventures proving commercial delivery capacity.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Glimpses of the Estate */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#134630] bg-[#FBFAF6] px-3 py-1 rounded-full border border-[#708564]/30">
                Resort Gallery
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#134630] mt-2">
                Life across the resort
              </h2>
            </div>
            <a
              href="#resort"
              className="text-sm font-bold text-[#42732E] hover:text-[#134630] flex items-center gap-1 transition-colors"
            >
              <span>Explore all resort zones</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryHighlights.map((img) => (
              <div
                key={img.title}
                className="group relative overflow-hidden rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEF1DE]">
                    {img.tag}
                  </span>
                  <h4 className="font-heading text-base font-bold leading-tight mt-0.5">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities at a glance */}
        <div className="mb-14">
          <h3 className="font-heading text-2xl font-bold text-[#134630] mb-6 text-center sm:text-left">
            Facilities at a glance
          </h3>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-[#708564]/20 bg-[#FBFAF6] p-5 shadow-xs">
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

            <div className="rounded-xl border border-[#708564]/20 bg-[#FBFAF6] p-5 shadow-xs">
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

            <div className="rounded-xl border border-[#708564]/20 bg-[#FBFAF6] p-5 shadow-xs">
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

            <div className="rounded-xl border border-[#708564]/20 bg-[#FBFAF6] p-5 shadow-xs">
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
      <div className="reveal-slow bg-[#134630] text-[#FBFAF6] py-16 px-4 sm:px-6 lg:px-8 mt-12 relative overflow-hidden border-t border-[#708564]/30">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#42732E]/20 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#EEF1DE] font-bold">
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
              className="inline-flex items-center justify-center rounded-xl border border-[#EEF1DE]/40 bg-[#FBFAF6]/10 px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-[#EEF1DE] hover:bg-[#FBFAF6]/20 transition-all"
            >
              See Operating Track Record
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
