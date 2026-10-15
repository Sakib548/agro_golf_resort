"use client";

import { useState } from "react";
import Image from "next/image";

interface ZoneData {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  image: string;
  amenities: string[];
  description: string;
}

const resortZones: ZoneData[] = [
  {
    id: "sports",
    name: "Elite Sports & Athletics",
    tagline: "International Standard Championship Facilities",
    icon: "⛳",
    color: "#0b4a32",
    image: "/images/GOLF.webp",
    description:
      "A complete athletic enclave engineered for world-class competition and everyday wellness. Featuring our 9-hole golf course, baseball field, cricket ground, FIFA football turfs, tennis, and courts.",
    amenities: [
      "9-hole international golf course with water hazards",
      "Baseball court & diamond practice field",
      "Full-sized international cricket ground",
      "4 FIFA-specification football turfs & matches",
      "Lawn tennis, basketball & badminton courts",
      "Volleyball court & sports training pavilion",
      "Billiards, snooker & executive cards lounge",
      "International standard high-tech gymnasium",
    ],
  },
  {
    id: "aquatics",
    name: "Aquatic Leisure & Wellness",
    tagline: "10 Natural Ponds & 4 Luxury Pools",
    icon: "🏊",
    color: "#0284c7",
    image: "/images/Swimming-Pool.webp",
    description:
      "Serene water bodies meet rejuvenation. Unwind in 4 luxury swimming pools (including heated and children's pools), paddle across 10 natural ponds, or relax in the spa.",
    amenities: [
      "4 swimming pools (Infinity, Heated, Lap & Kids)",
      "10 preserved pristine natural ponds",
      "Private boating, pedal boats & kayaking docks",
      "Recreational angling and freshwater fishing",
      "Premium European-style wellness spa & sauna",
      "Full-service luxury grooming salon",
      "Poolside cabanas & juice bar lounge",
    ],
  },
  {
    id: "hospitality",
    name: "Entertainment & Hospitality",
    tagline: "Eco-Cottages, Luxury Villas & Amphitheatre",
    icon: "🏡",
    color: "#b8892b",
    image: "/images/Room-Web-image.webp",
    description:
      "Five-star hospitality blending authentic rustic eco-cottages with modern luxury villas, gourmet farm dining, private cinema, and amusement park.",
    amenities: [
      "Traditional eco-cottages with thatched roof architecture",
      "Luxury waterfront private villas & lakeside cottages",
      "Presidential suites with butler service & panoramic views",
      "Organic farm-to-table gourmet restaurant",
      "Private cinema & 3D movie theater",
      "Amusement park & children's gaming arcade",
      "Executive library & quiet reading lounge",
      "Dedicated separate men's & women's prayer rooms",
      "MP Centre: Open-air lakeside amphitheatre & concert zone",
    ],
  },
  {
    id: "nature",
    name: "Nature & Agro-Ecosystem",
    tagline: "Wheat & Paddy Fields, Mango Gardens & Orchards",
    icon: "🌱",
    color: "#66b447",
    image: "/images/Argo.webp",
    description:
      "A 100+ acre working agricultural sanctuary featuring lush mango gardens, seasonal golden paddy and wheat fields, dragon fruit orchards, and dairy farming.",
    amenities: [
      "Sweet mango gardens (আমের বাগান) & malta groves",
      "Golden paddy fields (ধান ক্ষেত) & wheat fields (গম ক্ষেত)",
      "Dragon fruit trellises & commercial organic agriculture",
      "Fresh dairy farm & apiary for organic honey",
      "Lush botanical eco-park & perennial flower gardens",
      "Miles of scenic cycling & jogging trails",
      "Equestrian club & horseback riding trails",
      "Family picnic lawns, bonfire & barbecue zones",
    ],
  },
];

export default function ResortZonesSection() {
  const [activeZone, setActiveZone] = useState<string>("sports");

  const currentZone = resortZones.find((z) => z.id === activeZone) || resortZones[0];

  return (
    <section id="resort" className="py-24 bg-[#f6f8f2] text-[#14261c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-slow max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
            Masterplan Zones
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
            The resort
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            The 100+ acre estate is thoughtfully divided into four specialized zones, each engineered around distinct lifestyle and recreational experiences.
          </p>
        </div>

        {/* 4 Signature Experiences Cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl border-l-4 border-l-[#0b4a32] border border-stone-200 bg-white p-6 shadow-sm">
            <span className="text-2xl mb-2 block">🏌️</span>
            <h3 className="font-heading text-lg font-bold text-[#14261c] mb-1">Golf on the Water</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              9 holes weaving across sparkling ponds, short &amp; long driving ranges, and professional trainers.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-l-[#66b447] border border-stone-200 bg-white p-6 shadow-sm">
            <span className="text-2xl mb-2 block">🥗</span>
            <h3 className="font-heading text-lg font-bold text-[#14261c] mb-1">Farm to Table</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Mango, dragon fruit, and malta freshly plucked, plus dairy and organic produce served in the restaurant.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-l-[#b8892b] border border-stone-200 bg-white p-6 shadow-sm">
            <span className="text-2xl mb-2 block">🎶</span>
            <h3 className="font-heading text-lg font-bold text-[#14261c] mb-1">Lakeside Evenings</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Live concerts at the MP Centre, evening bonfires, sizzling barbecue zones, and a private movie theatre.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-l-[#0284c7] border border-stone-200 bg-white p-6 shadow-sm">
            <span className="text-2xl mb-2 block">🧖</span>
            <h3 className="font-heading text-lg font-bold text-[#14261c] mb-1">Holistic Wellness</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Premium spa and salon, 4 swimming pools, high-standard gym, and quiet nature trails through greenery.
            </p>
          </div>
        </div>

        {/* Interactive Zone Explorer Tabs */}
        <div className="reveal-slow rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-sm mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#66b447]">
                Explore By Zone
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#14261c] mt-1">
                Interactive Zone Explorer
              </h3>
            </div>

            {/* Zone Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {resortZones.map((z) => {
                const isActive = activeZone === z.id;
                return (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${isActive
                      ? "bg-[#0b4a32] text-white shadow-md scale-105"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80"
                      }`}
                  >
                    <span>{z.icon}</span>
                    <span>{z.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Zone Detail Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Zone Visual */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <Image
                src={currentZone.image}
                alt={currentZone.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block text-xs uppercase font-bold tracking-wider text-[#b6e59c] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full mb-1">
                  {currentZone.tagline}
                </span>
                <h4 className="font-heading text-2xl font-bold">{currentZone.name}</h4>
              </div>
            </div>

            {/* Zone Content & Amenities */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
                Zone Highlights
              </span>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold text-[#14261c] mt-2 mb-3">
                {currentZone.name}
              </h4>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {currentZone.description}
              </p>

              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-stone-900 mb-3">
                Included Facilities &amp; Amenities:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentZone.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <span className="text-[#66b447] font-bold text-base leading-none">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-sm"
                >
                  <span>Book Site Tour for this Zone</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stay & Villas Showcase */}
        <div className="reveal-slow rounded-3xl border border-stone-200 bg-[#fbfcf9] p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8892b] bg-amber-100/80 px-3 py-1 rounded-full">
                Accommodations
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#14261c] mt-3 mb-4">
                Stay in luxury villas &amp; cottages
              </h3>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                Experience authentic Bengali heritage in handcrafted <strong className="text-stone-900 font-semibold">thatched cottages</strong>, or unwind in modern multi-bedroom waterfront villas. Qualified buyers can acquire a full cottage or villa with 100% Sub-Kabula deed registration, while guests enjoy 5-star hotel service.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Featured facilities include presidential suites with golf panoramas, organic farm-to-table breakfast, room service, private plunge pools, and priority access to golf tee times.
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl border border-stone-200 bg-white p-4">
                  <span className="block font-heading text-xl font-bold text-[#0b4a32]">Sub-Kabula</span>
                  <span className="text-xs text-stone-500 font-medium">Deed Ownership</span>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-4">
                  <span className="block font-heading text-xl font-bold text-[#b8892b]">Managed</span>
                  <span className="text-xs text-stone-500 font-medium">By Sampan Group</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src="/images/lakeside-villas.webp"
                alt="Luxury cottages and lakeside villas"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-xs sm:text-sm font-semibold flex items-center justify-between">
                <span>Lakeside Villa Living &bull; Podunapur</span>
                <span className="text-[#66b447]">100% Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Masterplan Map Callout */}
        <div className="reveal-slow rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
            Engineering Layout
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#14261c] mt-3 mb-3">
            Masterplan of the 100+ Acre Estate
          </h3>
          <p className="text-stone-600 text-base max-w-2xl mx-auto mb-8">
            Engineered around 10 natural water ponds, tea plantation contours, championship golf holes, and sustainable organic farmlands.
          </p>

          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-inner border border-stone-200 bg-stone-100 flex items-center justify-center">
            <Image
              src="/images/golf-hero.webp"
              alt="Resort Masterplan Aerial View"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#07291c]/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-white">
              <div className="size-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-3xl mb-3 shadow-lg">
                🗺️
              </div>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold">100+ Acre Masterplan Drawing</h4>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-lg mt-1 mb-5">
                Official layout maps and architectural floorplans available for review at our Bashundhara Head Office or on-site in Moulvibazar.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#66b447] px-6 py-3 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md"
              >
                <span>Request Detailed Masterplan PDF</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
