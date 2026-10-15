"use client";

import Image from "next/image";
import Link from "next/link";

const glimpses = [
  {
    title: "Nine-hole golf course",
    tag: "Championship Fairway",
    image: "/images/GOLF.webp",
  },
  {
    title: "Lakeside villas",
    tag: "Sub-Kabula Living",
    image: "/images/lakeside-villas.webp",
  },
  {
    title: "Organic orchards",
    tag: "Farm & Agro",
    image: "/images/Argo.webp",
  },
  {
    title: "Swimming pool",
    tag: "4 Luxury Pools",
    image: "/images/Swimming-Pool.webp",
  },
  {
    title: "Boating and kayaking",
    tag: "10 Natural Ponds",
    image: "/images/Boating-and-Kayaking.webp",
  },
  {
    title: "Evening bonfire",
    tag: "Lakeside Leisure",
    image: "/images/Movie-Theater.webp",
  },
];

const facilities = [
  {
    title: "Elite Athletics",
    items: [
      "9-hole international golf course",
      "Short & long driving ranges & trainers",
      "Cricket ground & 4 football turfs",
      "Baseball diamond, tennis & badminton courts",
    ],
  },
  {
    title: "Aquatics & Wellness",
    items: [
      "4 swimming pools (temp-controlled & kids)",
      "10 preserved natural ponds",
      "Boating, pedal boats & kayaking",
      "European spa, sauna & luxury salon",
    ],
  },
  {
    title: "Hospitality & Stays",
    items: [
      "Waterfront villas & cottages",
      "Presidential suites & butler services",
      "Farm-to-table organic restaurant",
      "3D movie theater & executive library",
    ],
  },
  {
    title: "Nature & Farmlands",
    items: [
      "Commercial agro farm & organic orchards",
      "Golden paddy & wheat fields",
      "Miles of cycling, jogging & horse riding trails",
      "Family picnic lawns & barbecue zones",
    ],
  },
];

export default function GlimpsesSection() {
  return (
    <section className="py-20 bg-[#ffffff] text-[#14261c] border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glimpses Header */}
        <div className="reveal-slow flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Visual Preview
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
              Glimpses of the estate
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              A curated look across our 100+ acre grounds in Podunapur, Moulvibazar. Discover championship greens, calm waters, and lush agro plantations.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/resort#gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-5 py-3 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#12583d] transition-all hover:scale-105"
            >
              <span>Explore Full Gallery in The Resort</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 6 Glimpse Photos Grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {glimpses.map((item, idx) => (
            <Link
              key={idx}
              href="/resort#gallery"
              className="group relative block overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-700/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#b6e59c] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1.5">
                  {item.tag}
                </span>
                <h3 className="font-heading text-lg font-bold leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                ↗
              </div>
            </Link>
          ))}
        </div>

        {/* Events and Tournaments Section */}
        <div className="reveal-slow rounded-3xl border border-stone-200 bg-[#fbfcf9] p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
                Host Your Occasions
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3 mb-4">
                Events and tournaments
              </h3>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                Golf tournaments, corporate retreats, and sports meets run on the estate, which has a cricket ground, four football turfs, a baseball field, and several courts.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Company outings, family gatherings, and club events can use the banquet-style dining, the lakeside concert zone (MP Centre), and the barbecue areas.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-sm"
              >
                <span>Plan an event</span>
                <span>→</span>
              </Link>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <Image
                src="/images/high-angle-view-golf-course-by-lake (2).webp"
                alt="Tournament day at golf course"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-xs sm:text-sm font-semibold flex items-center justify-between">
                <span>Championship Tournament Arena</span>
                <span className="text-[#b6e59c]">Corporate &amp; Club</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities at a Glance */}
        <div className="reveal-slow">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Estate Overview
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
              Facilities at a glance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-heading text-base font-bold text-[#14261c] mb-3 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#66b447]" />
                  <span>{fac.title}</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                  {fac.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#66b447] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
