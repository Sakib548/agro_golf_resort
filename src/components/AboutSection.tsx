"use client";

import Image from "next/image";
import { Eye, Target, Lightbulb, Leaf, Award, Users, Users2, Flag, TrendingUp, Building2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-10 sm:pt-14 pb-20 sm:pb-24 bg-[#F7F5EE] text-[#134630] relative overflow-hidden">
      {/* Ambient background light glows */}
      <div className="absolute top-20 -left-40 size-96 rounded-full bg-[#708564]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 size-96 rounded-full bg-[#42732E]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 size-96 rounded-full bg-[#708564]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="hero-reveal max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#708564]/30">
            Visionary Estate
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#134630] mt-3">
            About the project
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Sampan Agro &amp; Golf Resort is an exclusive green sanctuary spanning <strong className="font-semibold text-[#134630]">100+ acres</strong> along Dhaka-Sylhet Highway. It brings together world-class hospitality, an elite sports ecosystem, and high-yield commercial agro-farming in a unified estate.
          </p>
        </div>

        {/* Feature Wide Banner with Floating Glass Card */}
        <div className="reveal-slow relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-14 shadow-2xl border border-[#708564]/30">
          <Image
            src="/images/golf-hero.webp"
            alt="Sampan Agro & Golf Resort Landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto max-w-2xl">
            <div className="rounded-2xl p-5 sm:p-7 text-white bg-[#134630]/90 backdrop-blur-md border border-[#708564]/40">
              <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#F7F5EE] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-2 border border-white/15">
                Dhaka-Sylhet Highway
              </span>
              <h3 className="font-heading text-xl sm:text-3xl font-bold leading-tight text-[#FFFFFF]">
                Where untouched nature meets five-star luxury.
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1.5">
                Preserving 10 natural water ponds while creating Bangladesh&apos;s foremost agro-tourism and championship golf retreat.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillar Summary Cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl border border-[#708564]/20 border-l-4 !border-l-[#42732E] bg-[#FFFFFF] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xs">
            <span className="text-xs uppercase font-bold text-[#42732E] tracking-wider">The Project</span>
            <h4 className="font-heading text-xl font-bold text-[#134630] mt-2 mb-2">Sampan Developments Ltd</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Developed by Sampan Developments Ltd under the flagship umbrella of <strong className="text-stone-900 font-semibold">Sampan Group</strong>, renowned for infrastructure and hospitality execution.
            </p>
          </div>

          <div className="rounded-2xl border border-[#708564]/20 border-l-4 !border-l-[#708564] bg-[#FFFFFF] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xs">
            <span className="text-xs uppercase font-bold text-[#708564] tracking-wider">The Location</span>
            <h4 className="font-heading text-xl font-bold text-[#134630] mt-2 mb-2">Dhaka-Sylhet Highway</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Nestled amidst the serene rolling topography and tea valleys of Moulvibazar Sadar, spanning an expansive 100+ acres with direct highway connectivity.
            </p>
          </div>

          <div className="rounded-2xl border border-[#708564]/20 border-l-4 !border-l-[#134630] bg-[#FFFFFF] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xs">
            <span className="text-xs uppercase font-bold text-[#134630] tracking-wider">The Positioning</span>
            <h4 className="font-heading text-xl font-bold text-[#134630] mt-2 mb-2">Integrated Eco-Luxury</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Luxury ecotourism, an international golf ecosystem, commercial agricultural yield, and genuine freehold land sub-kabula deed backing.
            </p>
          </div>
        </div>

        {/* Vision & Mission - High End Panels */}
        <div className="reveal-slow grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="card-glass-dark p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-[#2B5738]/40 blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="icon-glass-dark size-14 mb-6">
              <Eye className="size-6 text-[#F7F5EE]" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#F7F5EE] font-bold">
              Our Vision
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4 text-[#FFFFFF]">
              Urban comfort in every corner of the nation
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              To bring world-class standards of living, recreational infrastructure, and economic opportunity to every region of Bangladesh by uniting sustainable business with pioneering green technology.
            </p>
          </div>

          <div className="card-glass p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-[#7B8F7D]/20 blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="icon-glass size-14 mb-6">
              <Target className="size-6 text-[#2B5738]" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#2B5738] font-bold">
              Our Mission
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4 text-[#143224]">
              Integrity, innovation, and environmental harmony
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              To execute every venture with transparent governance, uplift local communities with job opportunities, and build enduring assets that fuel national economic vitality while preserving the pristine natural ecosystem.
            </p>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="reveal-slow mb-20">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#143224] mb-8 text-center">
            What guides the group
          </h3>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-glass p-7 transition-all duration-300">
              <div className="icon-glass size-14 mb-5">
                <Lightbulb className="size-6 text-[#2B5738]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Innovation</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Smart irrigation, precision agriculture, and modern hospitality operations implemented across every acre.
              </p>
            </div>

            <div className="card-glass p-7 transition-all duration-300">
              <div className="icon-glass size-14 mb-5">
                <Leaf className="size-6 text-[#7B8F7D]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Sustainability</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                10 zero-waste natural ponds, 100% organic fruit farming, and zero-carbon walking zones anchor the layout.
              </p>
            </div>

            <div className="card-glass p-7 transition-all duration-300">
              <div className="icon-glass size-14 mb-5">
                <Award className="size-6 text-[#143224]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Excellence</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                International standard 9-hole golf architecture, luxury villa specifications, and fine dining service.
              </p>
            </div>

            <div className="card-glass p-7 transition-all duration-300">
              <div className="icon-glass size-14 mb-5">
                <Users className="size-6 text-[#2B5738]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Community</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Transforming rural land into engines of local employment, skill development, and proud national benchmarks.
              </p>
            </div>
          </div>
        </div>

        {/* Who the resort is for */}
        <div className="reveal-slow card-glass p-8 sm:p-12 mb-20">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#143224] font-bold bg-[#FFFFFF]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/60">
              Audience
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#143224] mt-2">
              Who the resort is for
            </h3>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-glass p-6 transition-all duration-300">
              <div className="icon-glass size-13 mb-4">
                <Users2 className="size-5.5 text-[#2B5738]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Families</h4>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Kids&apos; club, dedicated shallow children&apos;s pool, gaming arcade, picnic lawns, and serene organic gardens.
              </p>
            </div>

            <div className="card-glass p-6 transition-all duration-300">
              <div className="icon-glass size-13 mb-4">
                <Flag className="size-5.5 text-[#7B8F7D]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Golfers &amp; Athletes</h4>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                9-hole course, dual driving ranges, certified pros, cricket stadium, 4 football turfs, gym, and tennis courts.
              </p>
            </div>

            <div className="card-glass p-6 transition-all duration-300">
              <div className="icon-glass size-13 mb-4">
                <TrendingUp className="size-5.5 text-[#143224]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Investors</h4>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                100% Sub-Kabula deed freehold land shares, villa ownership, hands-off hotel management, and dual payouts.
              </p>
            </div>

            <div className="card-glass p-6 transition-all duration-300">
              <div className="icon-glass size-13 mb-4">
                <Building2 className="size-5.5 text-[#2B5738]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#143224] mb-2">Corporate Teams</h4>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Annual retreats, executive strategy summits, golf invitationals, banquet dining, and amphitheatre concerts.
              </p>
            </div>
          </div>
        </div>

        {/* Our approach to the land */}
        <div className="reveal-slow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#708564]/30">
            <Image
              src="/images/agro-orchard.webp"
              alt="Natural ponds and organic farm preservation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-xs uppercase font-bold text-[#F7F5EE]">Ecosystem First</span>
              <p className="text-sm font-semibold">10 Natural Ponds &bull; Organic Orchards &bull; Eco Park</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#708564]/30">
              Environmental Design
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#134630] mt-3 mb-4">
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
                <span className="size-2 rounded-full bg-[#42732E]" />
                100% Organic agriculture, dairy, and exotic fruit orchards
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#42732E]" />
                Expansive botanical eco-park and year-round floral gardens
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#42732E]" />
                Miles of hiking, cycling, and horseback-riding trails
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
