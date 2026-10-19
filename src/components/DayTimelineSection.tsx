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
    <section className="py-20 bg-[#f6f8f2] text-[#14261c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Timeline Header */}
        <div className="reveal-slow max-w-3xl mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0b4a32] bg-emerald-100/80 px-3.5 py-1 rounded-full mb-3">
            The Resort Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#14261c]">
            A day at the resort
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            From the crisp morning dew on the golf greens to bonfire gatherings along serene water bodies, every hour is crafted for peace, health, and leisure.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {timelineEvents.map((item, idx) => (
            <div
              key={item.time}
              className="relative flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#66b447]/60 transition-all duration-300"
            >
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b4a32] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  <item.Icon className="size-3.5" />
                  <span>{item.time}</span>
                </span>
              </div>

              <div className="pt-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#66b447] block mb-1.5">
                  {item.badge}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#14261c] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* 
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-[#0b4a32] font-semibold">Explore →</span>
              </div> */}
            </div>
          ))}
        </div>

        {/* Why Owners Choose It */}
        <div className="mb-20">
          <div className="reveal-slow max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b8892b] bg-amber-50 px-3 py-1 rounded-full">
              Tangible Value
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#14261c] mt-2">
              Why owners choose it
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border-l-4 border-l-[#66b447] border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#0b4a32] uppercase tracking-wider">Sub-Kabula Security</span>
              <h3 className="font-heading text-2xl font-bold text-[#14261c] mt-2 mb-3">Land you hold</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Direct 100% Sub-Kabula registration in your own name. Your share is recorded freehold Bangladesh land, not merely an intangible club membership.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-l-[#b8892b] border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#b8892b] uppercase tracking-wider">Compounded Cashflow</span>
              <h3 className="font-heading text-2xl font-bold text-[#14261c] mt-2 mb-3">Two income streams</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Reap sustainable agro-yield dividends from certified organic farms, orchards, and dairy, combined with hospitality room nights and tournament revenue.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-l-[#0b4a32] border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#0b4a32] uppercase tracking-wider">Established Group</span>
              <h3 className="font-heading text-2xl font-bold text-[#14261c] mt-2 mb-3">Proven track record</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Sampan Highway Inn (generating ৳95L–1.30Cr/month) and Sampan Eco & Agro are actively operating ventures proving commercial delivery capacity.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Glimpses of the Estate */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
                Estate Gallery
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#14261c] mt-2">
                Glimpses of the estate
              </h2>
            </div>
            <a
              href="#resort"
              className="text-sm font-bold text-[#0b4a32] hover:text-[#66b447] flex items-center gap-1"
            >
              <span>Explore all resort zones</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryHighlights.map((img) => (
              <div
                key={img.title}
                className="group relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#b6e59c]">
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

        {/* Events & Tournaments Section */}
        <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100/80 px-3 py-1 rounded-full">
                Events &amp; Tournaments
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#14261c] mt-3 mb-4">
                Host national tournaments &amp; corporate retreats
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                The estate boasts comprehensive professional sports infrastructure: a full-fledged cricket ground, four FIFA-grade football turfs, a dedicated baseball diamond, and tournament-ready lawn tennis, basketball, and badminton courts.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Corporate outings, executive summits, and family celebrations enjoy lakeside open-air amphitheatre events at the MP Centre, barbecue pavilions, and banquet dining.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#135c3f] transition-colors"
                >
                  <span>Plan an Event / Outing</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-stone-200">
                <Image
                  src="/images/golf-hero.webp"
                  alt="Sports and Events at Sampan Resort"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b6e59c]">International Standards</span>
                  <p className="font-heading text-sm font-semibold mt-0.5">Cricket Ground • Football Turfs • Tennis • Golf</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities at a glance */}
        <div className="mb-14">
          <h3 className="font-heading text-2xl font-bold text-[#14261c] mb-6 text-center sm:text-left">
            Facilities at a glance
          </h3>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <span className="font-bold text-[#0b4a32] text-sm flex items-center gap-1.5 mb-2">
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

            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <span className="font-bold text-[#0b4a32] text-sm flex items-center gap-1.5 mb-2">
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

            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <span className="font-bold text-[#0b4a32] text-sm flex items-center gap-1.5 mb-2">
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

            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <span className="font-bold text-[#0b4a32] text-sm flex items-center gap-1.5 mb-2">
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
      <div className="reveal-slow bg-[#0b4a32] text-white py-16 px-4 sm:px-6 lg:px-8 mt-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#66b447]/20 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#b6e59c] font-bold">
              Sampan Group Philosophy
            </span>
            <blockquote className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight mt-2 mb-4">
              “The Village Will Be the City.”
            </blockquote>
            <p className="text-emerald-100/90 text-base leading-relaxed">
              Sampan Group&apos;s founding belief: bring urban comfort, modern opportunity, and 5-star infrastructure to rural Bangladesh, backed by economically self-sustaining agro-enterprises.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-[#66b447] px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-[#06210f] shadow-lg hover:bg-[#77c955] transition-all hover:scale-105"
            >
              About Sampan Group
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/15 transition-all"
            >
              See Operating Track Record
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
