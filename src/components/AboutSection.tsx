"use client";

import Image from "next/image";
import { Eye, Target, Lightbulb, Leaf, Award, Users, Users2, Flag, TrendingUp, Building2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-10 sm:pt-14 pb-20 sm:pb-24 bg-gradient-to-b from-[#f8faf6] via-white to-[#f4f7f0] text-[#14261c] relative overflow-hidden">
      {/* Ambient background light glows for glassmorphism refraction */}
      <div className="absolute top-20 -left-40 size-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 size-96 rounded-full bg-lime-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 size-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="hero-reveal max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100/70 px-3.5 py-1 rounded-full">
            Visionary Estate
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
            About the project
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Sampan Agro &amp; Golf Resort is an exclusive green sanctuary spanning <strong className="font-semibold text-emerald-950">100+ acres</strong> in Podunapur, Moulvibazar Sadar. It brings together world-class hospitality, an elite sports ecosystem, and high-yield commercial agro-farming in a unified estate.
          </p>
        </div>

        {/* Feature Wide Banner with Floating Glass Card */}
        <div className="reveal-slow relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-14 shadow-2xl border border-stone-200/80">
          <Image
            src="/images/lakeside-villas.webp"
            alt="Sampan Agro & Golf Resort Landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto max-w-2xl">
            <div className="glassmorphism-dark rounded-2xl p-5 sm:p-7 text-white">
              <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#b6e59c] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-2">
                Podunapur, Moulvibazar
              </span>
              <h3 className="font-heading text-xl sm:text-3xl font-bold leading-tight">
                Where untouched nature meets five-star luxury.
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm mt-1.5">
                Preserving 10 natural water ponds while creating Bangladesh&apos;s foremost agro-tourism and championship golf retreat.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillar Summary Cards - Glassmorphism */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#66b447] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1">
            <span className="text-xs uppercase font-bold text-[#0b4a32] tracking-wider">The Project</span>
            <h4 className="font-heading text-xl font-bold text-[#14261c] mt-2 mb-2">Sampan Developments Ltd</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Developed by Sampan Developments Ltd under the flagship umbrella of <strong className="text-stone-900 font-semibold">Sampan Group</strong>, renowned for infrastructure and hospitality execution.
            </p>
          </div>

          <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#b8892b] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1">
            <span className="text-xs uppercase font-bold text-[#b8892b] tracking-wider">The Location</span>
            <h4 className="font-heading text-xl font-bold text-[#14261c] mt-2 mb-2">Podunapur, Moulvibazar</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Nestled amidst the serene rolling topography and tea valleys of Moulvibazar Sadar, spanning an expansive 100+ acres with direct highway connectivity.
            </p>
          </div>

          <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#0b4a32] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1">
            <span className="text-xs uppercase font-bold text-[#0b4a32] tracking-wider">The Positioning</span>
            <h4 className="font-heading text-xl font-bold text-[#14261c] mt-2 mb-2">Integrated Eco-Luxury</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Luxury ecotourism, an international golf ecosystem, commercial agricultural yield, and genuine freehold land sub-kabula deed backing.
            </p>
          </div>
        </div>

        {/* Vision & Mission - High End Glass Panels */}
        <div className="reveal-slow grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glassmorphism-dark rounded-3xl text-white p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-emerald-500/15 blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="size-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
              <Eye className="size-6 text-[#b6e59c]" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#b6e59c] font-bold">
              Our Vision
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4 text-white">
              Urban comfort in every corner of the nation
            </h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              To bring world-class standards of living, recreational infrastructure, and economic opportunity to every region of Bangladesh by uniting sustainable business with pioneering green technology.
            </p>
          </div>

          <div className="glassmorphism rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-lime-400/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="size-12 rounded-xl bg-emerald-100/80 backdrop-blur-md border border-emerald-200 flex items-center justify-center mb-6 text-[#0b4a32]">
              <Target className="size-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#0b4a32] font-bold">
              Our Mission
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4 text-[#14261c]">
              Integrity, innovation, and environmental harmony
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              To execute every venture with transparent governance, uplift local communities with job opportunities, and build enduring assets that fuel national economic vitality while preserving the pristine natural ecosystem.
            </p>
          </div>
        </div>

        {/* Guiding Principles - Frosted Glass Cards */}
        <div className="reveal-slow mb-20">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#14261c] mb-8 text-center">
            What guides the group
          </h3>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-center justify-center mb-3">
                <Lightbulb className="size-5 text-amber-600" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Innovation</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Smart irrigation, precision agriculture, and modern hospitality operations implemented across every acre.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-lime-50/80 border border-lime-200/70 flex items-center justify-center mb-3">
                <Leaf className="size-5 text-[#559e38]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Sustainability</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                10 zero-waste natural ponds, 100% organic fruit farming, and zero-carbon walking zones anchor the layout.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-center justify-center mb-3">
                <Award className="size-5 text-amber-600" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Excellence</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                International standard 9-hole golf architecture, luxury villa specifications, and fine dining service.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-emerald-50/80 border border-emerald-200/70 flex items-center justify-center mb-3">
                <Users className="size-5 text-[#0b4a32]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Community</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Transforming rural land into engines of local employment, skill development, and proud national benchmarks.
              </p>
            </div>
          </div>
        </div>

        {/* Who the resort is for - Glass Container & Cards */}
        <div className="reveal-slow glassmorphism rounded-3xl p-8 sm:p-12 mb-20">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#0b4a32] font-bold bg-emerald-100/80 px-3 py-1 rounded-full">
              Audience
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              Who the resort is for
            </h3>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 text-[#0b4a32]">
                <Users2 className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Families</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Kids&apos; club, dedicated shallow children&apos;s pool, gaming arcade, picnic lawns, and serene organic gardens.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center mb-3 text-[#559e38]">
                <Flag className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Golfers &amp; Athletes</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                9-hole course, dual driving ranges, certified pros, cricket stadium, 4 football turfs, gym, and tennis courts.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3 text-[#b8892b]">
                <TrendingUp className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Investors</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                100% Sub-Kabula deed freehold land shares, villa ownership, hands-off hotel management, and dual payouts.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 text-blue-800">
                <Building2 className="size-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Corporate Teams</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Annual retreats, executive strategy summits, golf invitationals, banquet dining, and amphitheatre concerts.
              </p>
            </div>
          </div>
        </div>

        {/* Our approach to the land */}
        <div className="reveal-slow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-stone-200">
            <Image
              src="/images/agro-orchard.webp"
              alt="Natural ponds and organic farm preservation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-xs uppercase font-bold text-[#b6e59c]">Ecosystem First</span>
              <p className="text-sm font-semibold">10 Natural Ponds &bull; Organic Orchards &bull; Eco Park</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Environmental Design
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#14261c] mt-3 mb-4">
              Our approach to the land
            </h3>
            <p className="text-stone-600 text-base leading-relaxed mb-4">
              Rather than bulldozing natural waterways, Sampan Agro &amp; Golf Resort preserves all ten natural ponds and builds organically around them. 
            </p>
            <p className="text-stone-600 text-base leading-relaxed mb-6">
              Commercial agriculture is not an afterthought pushed to the perimeter — it forms the living, breathing heart of daily resort life with farm-to-table dining, organic honey and dairy, and seasonal fruit harvests.
            </p>
            <ul className="space-y-2 text-stone-700 text-sm font-medium">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#66b447]" />
                100% Organic agriculture, dairy, and exotic fruit orchards
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#66b447]" />
                Expansive botanical eco-park and year-round floral gardens
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#66b447]" />
                Miles of hiking, cycling, and horseback-riding trails
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
