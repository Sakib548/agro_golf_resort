"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Trophy, Car, CheckCircle2 } from "lucide-react";

interface AffiliationItem {
  name: string;
  category: "trade" | "sports" | "lifestyle";
  categoryLabel: string;
  role: string;
  badge: string;
  image: string;
  desc: string;
}

const affiliations: AffiliationItem[] = [
  // 1. National Trade & Apex Bodies
  {
    name: "FBCCI",
    category: "trade",
    categoryLabel: "Apex Trade Body",
    role: "Federation of Bangladesh Chambers of Commerce and Industry",
    badge: "National Apex",
    image: "/affiliation/fbcci.webp",
    desc: "Apex national chamber representing commercial trade, industry growth, and sovereign economic leadership across Bangladesh.",
  },
  {
    name: "REHAB",
    category: "trade",
    categoryLabel: "Real Estate Authority",
    role: "Real Estate & Housing Association of Bangladesh",
    badge: "Accredited Member",
    image: "/affiliation/rehab.webp",
    desc: "The sole recognized national trade organization ensuring ethical development, buyer protections, and land deed integrity.",
  },
  {
    name: "CIPS",
    category: "trade",
    categoryLabel: "Global Chartered Body",
    role: "Chartered Institute of Procurement & Supply",
    badge: "Global Standard",
    image: "/affiliation/cips.webp",
    desc: "Global chartered organization upholding the highest procurement ethics, transparent contracting, and supply chain governance.",
  },
  {
    name: "BARVIDA",
    category: "trade",
    categoryLabel: "Automotive Commerce",
    role: "Bangladesh Reconditioned Vehicles Importers & Dealers Association",
    badge: "Industry Partner",
    image: "/affiliation/barvia.webp",
    desc: "Apex automotive commerce association driving modern vehicle logistics, fleet safety, and nationwide dealership standards.",
  },
  {
    name: "DGDP",
    category: "trade",
    categoryLabel: "Procurement Authority",
    role: "Directorate General of Defence Purchase",
    badge: "Enlisted Vendor",
    image: "/affiliation/dgdp.webp",
    desc: "Fully accredited compliance and verified supplier credentialing under Bangladesh defense procurement standards.",
  },

  // 2. Championship Sports & Athletics
  {
    name: "Bangladesh Archery Federation",
    category: "sports",
    categoryLabel: "Olympic Sports Body",
    role: "National Governing Body for Archery in Bangladesh",
    badge: "Olympic Federation",
    image: "/affiliation/Archery.webp",
    desc: "Official national archery governing body; fostering world-standard archery ranges and tournament infrastructure at the resort.",
  },
  {
    name: "Bangladesh Volleyball Federation",
    category: "sports",
    categoryLabel: "National Sports Body",
    role: "BVF — Apex National Volleyball Governance",
    badge: "National Federation",
    image: "/affiliation/bvf.webp",
    desc: "Official volleyball authority partnering to develop championship turfs, collegiate tournaments, and youth fitness camps.",
  },
  {
    name: "Bangladesh Badminton Federation",
    category: "sports",
    categoryLabel: "National Sports Body",
    role: "National Badminton Governance & Tournament Circuit",
    badge: "National Affiliate",
    image: "/affiliation/bad.webp",
    desc: "Promoting tournament-grade indoor badminton facilities, training clinics, and resort leisure tournaments.",
  },
  {
    name: "Barishal Bulls & BPL",
    category: "sports",
    categoryLabel: "Cricket Franchise",
    role: "Bangladesh Premier League (BPL) Franchise",
    badge: "Franchise Partner",
    image: "/affiliation/barishalbulls.webp",
    desc: "Corporate patronage and franchise cricket team alignment within the prestigious Bangladesh Premier League.",
  },
  {
    name: "Sampan Golf Academy",
    category: "sports",
    categoryLabel: "Championship Academy",
    role: "Sampan Golf Academy & Club",
    badge: "In-House Excellence",
    image: "/affiliation/Sampan Golf Academy.webp",
    desc: "Professional golf coaching academy with certified instructors, junior pipelines, and championship fairway training.",
  },
  {
    name: "Shooters Shooting Club",
    category: "sports",
    categoryLabel: "Precision Shooting",
    role: "National Shooting Range & Club Affiliation",
    badge: "Club Reciprocity",
    image: "/affiliation/shoot.webp",
    desc: "Exclusive reciprocal shooting privileges and club facilities for verified resort and loyalty members.",
  },

  // 3. Luxury Lifestyle & Executive Lounges
  {
    name: "Mercedes-Benz Club",
    category: "lifestyle",
    categoryLabel: "Elite Automotive",
    role: "Mercedes-Benz Club Bangladesh",
    badge: "Luxury Circle",
    image: "/affiliation/mercedes.webp",
    desc: "Elite automotive circle partnership hosting scenic rallies, clubhouse gatherings, and luxury lifestyle events.",
  },
  {
    name: "Express Highway Club & Lounge",
    category: "lifestyle",
    categoryLabel: "Executive Lounge",
    role: "EHCL — Premium Highway Hospitality & Suites",
    badge: "Flagship Network",
    image: "/affiliation/EHCl.webp",
    desc: "5-star luxury highway oasis offering presidential suites, gourmet dining, gym, and VIP lounge reciprocity.",
  },
  {
    name: "PABX & Telecom Network",
    category: "trade",
    categoryLabel: "Telecom Logistics",
    role: "National Telecommunications & Interconnect Partner",
    badge: "Infrastructure",
    image: "/affiliation/pabx.webp",
    desc: "Enterprise telecommunications infrastructure ensuring continuous high-speed data connectivity across the resort.",
  },
];

export default function AffiliationSection() {
  const [activeTab, setActiveTab] = useState<"all" | "trade" | "sports" | "lifestyle">("all");

  const filtered =
    activeTab === "all" ? affiliations : affiliations.filter((a) => a.category === activeTab);

  return (
    <section id="affiliations" className="py-20 sm:py-24 bg-[#ffffff] text-[#14261c] border-t border-stone-200/90 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 size-[450px] rounded-full bg-emerald-100/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 size-[450px] rounded-full bg-amber-100/35 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold text-[#0b4a32] border border-emerald-200/60 mb-3">
              <ShieldCheck className="size-3.5" />
              <span>Institutional Standing</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14261c] tracking-tight leading-tight">
              Institutional Affiliations
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
              Strategic partnerships across national apex trade councils, Olympic sports governing federations, and prestigious executive clubs reinforcing the Sampan ecosystem.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-[#fbfcf9] p-3.5 rounded-2xl border border-stone-200 shadow-sm">
            <div className="size-11 rounded-xl bg-gradient-to-br from-[#0b4a32] to-[#14261c] text-white flex items-center justify-center font-heading font-extrabold text-lg">
              14+
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">Recognized Alliances</span>
              <span className="text-[11px] text-stone-500 font-medium">National &amp; Global Bodies</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-stone-200/80">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
              activeTab === "all"
                ? "bg-[#0b4a32] text-white shadow-md shadow-[#0b4a32]/10"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80"
            }`}
          >
            All Affiliations ({affiliations.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("trade")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "trade"
                ? "bg-[#0b4a32] text-white shadow-md shadow-[#0b4a32]/10"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80"
            }`}
          >
            <ShieldCheck className="size-3.5" />
            <span>National Trade &amp; Apex Bodies</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("sports")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "sports"
                ? "bg-[#0b4a32] text-white shadow-md shadow-[#0b4a32]/10"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80"
            }`}
          >
            <Trophy className="size-3.5" />
            <span>Sports Federations &amp; Academies</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("lifestyle")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "lifestyle"
                ? "bg-[#0b4a32] text-white shadow-md shadow-[#0b4a32]/10"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80"
            }`}
          >
            <Car className="size-3.5" />
            <span>Luxury &amp; Executive Clubs</span>
          </button>
        </div>

        {/* Affiliation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border border-stone-200/90 bg-[#fbfcf9] p-6 shadow-sm hover:shadow-lg hover:border-[#0b4a32]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Logo Frame with frosted background for clean contrast */}
                <div className="relative aspect-[16/10] w-full rounded-xl bg-white border border-stone-150 p-4 mb-4 flex items-center justify-center overflow-hidden group-hover:bg-emerald-50/20 transition-colors">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>

                {/* Badges & Category */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0b4a32] bg-emerald-100/70 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-400">
                    {item.categoryLabel}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#14261c] group-hover:text-[#0b4a32] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-stone-700 mt-0.5 mb-2 line-clamp-1">
                  {item.role}
                </p>
                <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-stone-200/70 flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                <CheckCircle2 className="size-3.5 text-[#66b447]" />
                <span>Officially Affiliated Partner</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
