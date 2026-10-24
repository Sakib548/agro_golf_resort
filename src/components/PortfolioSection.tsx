"use client";

import Image from "next/image";
import { Briefcase, Sprout, CreditCard, MapPin } from "lucide-react";

const ongoingProjects = [
  {
    name: "Sampan Express Highway Inn",
    category: "Highway Hospitality",
    location: "Major National Highway Corridor",
    desc: "Luxury highway stopover with presidential suites, gym, filling station, EV charging, and 24/7 super shop.",
  },
  {
    name: "Sampan 21st Century",
    category: "Commercial & Residential",
    location: "Bashundhara R/A, Block A, beside NSU",
    desc: "Premier commercial and corporate hub in Dhaka's prestigious Bashundhara university zone.",
  },
  {
    name: "Sampan Taj",
    category: "Luxury Development",
    location: "Bashundhara R/A, Block F, beside AIUB",
    desc: "High-spec modern residential and commercial property adjacent to American International University.",
  },
  {
    name: "Sampan Niketon",
    category: "Urban Residential",
    location: "Gulshan, beside Ahsanullah University (AUST)",
    desc: "Exclusive urban condominiums in one of Dhaka's most central and prime commercial zones.",
  },
  {
    name: "Sampan Trade Emporium",
    category: "Commercial Hub",
    location: "Dhaka Commercial District",
    desc: "Multi-storied trade centre and corporate headquarters facilitating enterprise commerce.",
  },
  {
    name: "Sampan Condominium",
    category: "Gated Living",
    location: "Prime Urban Suburb",
    desc: "Master-planned residential community with green parks, club facilities, and 24/7 smart security.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-10 sm:pt-14 pb-20 sm:pb-24 bg-[#ffffff] text-[#14261c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="hero-reveal max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
            Proven Performance
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
            Sampan Group&apos;s track record
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Sampan Agro &amp; Golf Resort is built on solid ground. Sampan Group already operates successful high-cashflow hospitality, retail, and agro projects across Bangladesh.
          </p>
        </div>

        {/* Feature Hero Card of Sampan Highway Inn */}
        <div className="reveal-slow relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-14 shadow-lg border border-stone-200">
          <Image
            src="/images/sampan_highway.jpg"
            alt="Sampan Highway Inn - Operating Project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 text-white max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#b6e59c] bg-emerald-950/80 px-3 py-1 rounded-full mb-2">
              Completed &bull; Daily Operations
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Sampan Highway Inn &bull; Dhaka–Khulna Highway
            </h3>
            <p className="text-emerald-100/90 text-xs sm:text-sm mt-1">
              Serving 5,000+ travelers every single day with 24/7 dining, lodging, fuel, and retail services.
            </p>
          </div>
        </div>

        {/* Operating Projects Detailed Cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl border border-stone-200 bg-[#fbfcf9] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#0b4a32] tracking-wider">Highway Hospitality</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-[#0b4a32] px-2.5 py-0.5 rounded-full">
                  Completed &amp; Running
                </span>
              </div>
              <h4 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Sampan Highway Inn
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Located on the high-traffic Dhaka–Khulna Highway. Full capital expenditure recovered rapidly. Features motel rooms, VVIP lounge, fueling station, prayer halls, 24/7 towing, Sampan Mart, and Mini Sampan.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200/80 text-xs font-bold text-[#0b4a32]">
              24/7 Full-Service Highway Stopover
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-[#fbfcf9] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#66b447] tracking-wider">Agrotourism</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-[#0b4a32] px-2.5 py-0.5 rounded-full">
                  Completed &amp; Running
                </span>
              </div>
              <h4 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Sampan Eco and Agro
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Located in Goalgram, Kashiani. Seamlessly integrates certified organic agriculture, natural lakes, and eco-friendly guest cottages with modern hospitality. Golf resort owners receive a complimentary 2-night stay here.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200/80 text-xs font-bold text-[#66b447]">
              Commercial Organic Mango &amp; Dairy Farm
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-[#fbfcf9] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#b8892b] tracking-wider">Luxury Oasis</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-[#b8892b] px-2.5 py-0.5 rounded-full">
                  Operating
                </span>
              </div>
              <h4 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Express Highway Inn
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Full-service highway complex with presidential suites, gourmet fine dining, gym, billiards, beauty salon, EV vehicle charging, and corporate banquet facilities.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200/80 text-xs font-bold text-[#b8892b]">
              Full Loyalty Club &amp; Executive Suites
            </div>
          </div>
        </div>

        {/* In Numbers Stats Strip */}
        <div className="reveal-slow rounded-3xl border border-stone-200 bg-[#07291c] text-white p-8 sm:p-12 mb-20 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b6e59c]">
              Scale In Numbers
            </span>
            <h3 className="font-heading text-3xl font-bold mt-1">
              Operational Strength
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
            <div className="p-2">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#66b447] block">5,000+</span>
              <span className="text-xs sm:text-sm text-emerald-100/80 font-medium">Daily Visitors at Highway Inn</span>
            </div>
            <div className="p-2">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#d9aa4a] block">24/7</span>
              <span className="text-xs sm:text-sm text-emerald-100/80 font-medium">Round-the-Clock Highway Operations</span>
            </div>
            <div className="p-2">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#66b447] block">3</span>
              <span className="text-xs sm:text-sm text-emerald-100/80 font-medium">Running Hospitality Projects</span>
            </div>
            <div className="p-2">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white block">6+</span>
              <span className="text-xs sm:text-sm text-emerald-100/80 font-medium">Active Ongoing Developments</span>
            </div>
          </div>
        </div>

        {/* What Carries Over to the Golf Resort */}
        <div className="reveal-slow mb-20">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#14261c] mb-6">
            What carries over to the golf resort
          </h3>
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="size-11 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center mb-3 text-[#0b4a32]">
                <Briefcase className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Operating Experience</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Management systems tested across hotel rooms, dining halls, convenience retail, and fueling stations operated in unison.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="size-11 rounded-xl bg-lime-50 border border-lime-100/80 flex items-center justify-center mb-3 text-[#559e38]">
                <Sprout className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Agro Know-How</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Sampan Eco and Agro already harvests and distributes commercial produce, guaranteeing seasoned agricultural management.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="size-11 rounded-xl bg-amber-50 border border-amber-100/80 flex items-center justify-center mb-3 text-[#b8892b]">
                <CreditCard className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Shared Membership Network</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Owners immediately enjoy reciprocal VIP access across Express Highway Club, lounges, and all sister properties.
              </p>
            </div>
          </div>
        </div>

        {/* Ongoing Projects Grid */}
        <div className="reveal-slow">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Development Pipeline
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              Ongoing group developments
            </h3>
          </div>

          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-stone-200/90 bg-[#fbfcf9] p-6 shadow-sm hover:border-[#0b4a32]/40 transition-colors"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b4a32] block mb-1">
                  {p.category}
                </span>
                <h4 className="font-heading text-lg font-bold text-[#14261c] mb-1">
                  {p.name}
                </h4>
                <p className="text-xs font-semibold text-stone-500 mb-2 flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-stone-400 shrink-0" />
                  <span>{p.location}</span>
                </p>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
