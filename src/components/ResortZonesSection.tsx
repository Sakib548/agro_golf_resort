"use client";

import { useState } from "react";
import Image from "next/image";
import { Flag, Waves, Home, Sprout, UtensilsCrossed, Music, Sparkles, Map, Check } from "lucide-react";

interface ZoneData {
  id: string;
  name: string;
  tagline: string;
  Icon: React.ComponentType<{ className?: string }>;
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
    Icon: Flag,
    color: "#42732E",
    image: "/images/GOLF.webp",
    description:
      "A complete athletic enclave engineered for world-class competition and everyday wellness. Featuring our 9-hole golf course, baseball field, cricket ground, championship football turfs, tennis, and courts.",
    amenities: [
      "9-hole international golf course with water hazards",
      "Baseball court & diamond practice field",
      "Full-sized international cricket ground",
      "4 championship-specification football turfs & matches",
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
    Icon: Waves,
    color: "#708564",
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
    Icon: Home,
    color: "#134630",
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
    Icon: Sprout,
    color: "#42732E",
    image: "/images/Argo.webp",
    description:
      "A 100+ acre working agricultural sanctuary featuring lush mango gardens, seasonal golden paddy and wheat fields, dragon fruit orchards, and dairy farming.",
    amenities: [
      "Sweet mango gardens & malta groves",
      "Golden paddy fields & wheat fields",
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
    <section id="resort" className="py-24 bg-[#F7F5EE] text-[#134630]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-slow max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#FFFFFF] border border-[#708564]/30 px-3.5 py-1 rounded-full">
            Masterplan Zones
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#134630] mt-3">
            The resort
          </h2>
          <p className="text-[#134630]/80 text-base sm:text-lg mt-3 leading-relaxed">
            The 100+ acre estate is thoughtfully divided into four specialized zones, each engineered around distinct lifestyle and recreational experiences.
          </p>
        </div>

        {/* 4 Signature Experiences Cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card-glass p-7 transition-all duration-300">
            <div className="icon-glass size-14 mb-5">
              <Flag className="size-6 text-[#2B5738]" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#143224] mb-1.5">Golf on the Water</h3>
            <p className="text-[#143224]/80 text-xs sm:text-sm leading-relaxed">
              9 holes weaving across sparkling ponds, short &amp; long driving ranges, and professional trainers.
            </p>
          </div>

          <div className="card-glass p-7 transition-all duration-300">
            <div className="icon-glass size-14 mb-5">
              <UtensilsCrossed className="size-6 text-[#7B8F7D]" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#143224] mb-1.5">Farm to Table</h3>
            <p className="text-[#143224]/80 text-xs sm:text-sm leading-relaxed">
              Mango, dragon fruit, and malta freshly plucked, plus dairy and organic produce served in the restaurant.
            </p>
          </div>

          <div className="card-glass p-7 transition-all duration-300">
            <div className="icon-glass size-14 mb-5">
              <Music className="size-6 text-[#143224]" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#143224] mb-1.5">Lakeside Evenings</h3>
            <p className="text-[#143224]/80 text-xs sm:text-sm leading-relaxed">
              Live concerts at the MP Centre, evening bonfires, sizzling barbecue zones, and a private movie theatre.
            </p>
          </div>

          <div className="card-glass p-7 transition-all duration-300">
            <div className="icon-glass size-14 mb-5">
              <Sparkles className="size-6 text-[#2B5738]" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#143224] mb-1.5">Holistic Wellness</h3>
            <p className="text-[#143224]/80 text-xs sm:text-sm leading-relaxed">
              Premium spa and salon, 4 swimming pools, high-standard gym, and quiet nature trails through greenery.
            </p>
          </div>
        </div>

        {/* Interactive Zone Explorer Tabs */}
        <div className="reveal-slow rounded-3xl border border-[#708564]/20 bg-[#FFFFFF] p-6 sm:p-10 shadow-sm mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#708564]/20 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#42732E]">
                Explore By Zone
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#134630] mt-1">
                Interactive Zone Explorer
              </h3>
            </div>

            {/* Zone Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {resortZones.map((z) => {
                const isActive = activeZone === z.id;
                const ZoneIcon = z.Icon;
                return (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${isActive
                      ? "bg-[#42732E] text-white shadow-md scale-105"
                      : "bg-[#F7F5EE] text-[#134630] hover:bg-[#708564]/20"
                      }`}
                  >
                    <ZoneIcon className="size-4" />
                    <span>{z.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Zone Detail Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Zone Visual */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#708564]/20">
              <Image
                src={currentZone.image}
                alt={currentZone.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block text-xs uppercase font-bold tracking-wider text-[#F7F5EE] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full mb-1">
                  {currentZone.tagline}
                </span>
                <h4 className="font-heading text-2xl font-bold">{currentZone.name}</h4>
              </div>
            </div>

            {/* Zone Content & Amenities */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#42732E] bg-[#F7F5EE] px-3 py-1 rounded-full font-semibold">
                Zone Highlights
              </span>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold text-[#134630] mt-2 mb-3">
                {currentZone.name}
              </h4>
              <p className="text-[#134630]/80 text-sm sm:text-base leading-relaxed mb-6">
                {currentZone.description}
              </p>

              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#134630] mb-3">
                Included Facilities &amp; Amenities:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentZone.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#134630]/85">
                    <Check className="size-4 text-[#42732E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#708564]/20 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#42732E] px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#134630] transition-colors shadow-sm"
                >
                  <span>Book Site Tour for this Zone</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stay & Villas Showcase */}
        <div className="reveal-slow rounded-3xl border border-[#708564]/20 bg-[#FFFFFF] p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#F7F5EE] px-3 py-1 rounded-full">
                Accommodations
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#134630] mt-3 mb-4">
                Stay in luxury villas &amp; cottages
              </h3>
              <p className="text-[#134630]/80 text-base leading-relaxed mb-4">
                Experience authentic Bengali heritage in handcrafted <strong className="text-[#134630] font-semibold">thatched cottages</strong>, or unwind in modern multi-bedroom waterfront villas. Qualified buyers can acquire a full cottage or villa with 100% Sub-Kabula deed registration, while guests enjoy 5-star hotel service.
              </p>
              <p className="text-[#134630]/80 text-base leading-relaxed mb-6">
                Featured facilities include presidential suites with golf panoramas, organic farm-to-table breakfast, room service, private plunge pools, and priority access to golf tee times.
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl border border-[#708564]/20 bg-white p-4">
                  <span className="block font-heading text-xl font-bold text-[#42732E]">Sub-Kabula</span>
                  <span className="text-xs text-[#134630]/70 font-medium">Deed Ownership</span>
                </div>
                <div className="rounded-xl border border-[#708564]/20 bg-white p-4">
                  <span className="block font-heading text-xl font-bold text-[#134630]">Managed</span>
                  <span className="text-xs text-[#134630]/70 font-medium">By Sampan Group</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#708564]/20">
              <Image
                src="/images/lakeside-villas.webp"
                alt="Luxury cottages and lakeside villas"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-xs sm:text-sm font-semibold flex items-center justify-between">
                <span>Lakeside Villa Living &bull; Dhaka-Sylhet Highway</span>
                <span className="text-[#F7F5EE]">100% Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Masterplan Map Callout */}
        <div className="reveal-slow rounded-3xl border border-[#708564]/30 bg-[#134630] p-8 sm:p-12 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#F7F5EE] px-3.5 py-1 rounded-full font-semibold">
            Engineering Layout
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 mb-3">
            Masterplan of the 100+ Acre Estate
          </h3>
          <p className="text-[#F7F5EE]/80 text-base max-w-2xl mx-auto mb-8">
            Engineered around 10 natural water ponds, tea plantation contours, championship golf holes, and sustainable organic farmlands.
          </p>

          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-inner border border-[#708564]/40 bg-stone-900 flex items-center justify-center">
            <Image
              src="/images/golf-hero.webp"
              alt="Resort Masterplan Aerial View"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[#134630]/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-white">
              <div className="size-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mb-3 shadow-lg">
                <Map className="size-7 text-white" />
              </div>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold">100+ Acre Masterplan Drawing</h4>
              <p className="text-[#F7F5EE]/90 text-xs sm:text-sm max-w-lg mt-1 mb-5">
                Official layout maps and architectural floorplans available for review at our Bashundhara Head Office or on-site in Moulvibazar.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#42732E] px-6 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#708564] transition-all shadow-md"
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
