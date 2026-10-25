"use client";

import { useState } from "react";
import Image from "next/image";
import { Sprout, Building, Check, ZoomIn, Eye, X, ShieldCheck, CreditCard } from "lucide-react";

interface CredentialItem {
  title: string;
  badge: string;
  src: string;
  desc: string;
  highlights: string[];
}

const investCredentials: CredentialItem[] = [
  {
    title: "Official Member Loyalty Card",
    badge: "Permanent VIP Member Card",
    src: "/images/loyalty-card-permanent-member.webp",
    desc: "Every fractional land shareholder automatically receives this physical, chip & QR-encoded loyalty card unlocking 10% to 50% discount privileges across all Sampan Group hotels, motels, and nationwide partner resorts.",
    highlights: [
      "10% to 50% discount on all Sampan room stays and restaurant dining",
      "Complimentary Express Highway Club VIP Lounge access",
      "Reciprocal discount privileges at Arunima Resort Golf Club",
      "Priority tee reservation rights at Sampan 9-Hole Golf Course",
    ],
  },
  {
    title: "Registered Certificate of Share",
    badge: "100% Sub-Kabula Title Proof",
    src: "/images/Certificate.jpg.webp",
    desc: "Permanent registered share title certificate issued alongside the official 100% Sub-Kabula deed recorded with the local Land Sub-Registry Office in your name.",
    highlights: [
      "100% Sub-Kabula registered freehold land ownership",
      "Guarantees dual annual dividend payouts (agro harvests + resort bookings)",
      "Official security seal & board of directors authentication",
      "Transferable, inheritable, and legally protected tangible real asset",
    ],
  },
  {
    title: "Official Certificate of Member",
    badge: "Club Standing Accreditation",
    src: "/images/Certificate of Member.jpg.webp",
    desc: "Accredited membership certification verifying full access to the 9-hole golf course, driving ranges, sports arenas, private VIP dining, and event invitations.",
    highlights: [
      "Lifetime golf and recreational sporting facilities access",
      "Exclusive invitations to seasonal golf tournaments and investor meets",
      "Access to 4 swimming pools, fitness gymnasium, and wellness spa",
      "Recognized corporate affiliation standing across partner clubs",
    ],
  },
];

export default function InvestSection() {
  const [sharesCount, setSharesCount] = useState<number>(1);
  const [selectedDoc, setSelectedDoc] = useState<CredentialItem | null>(null);
  const pricePerShare = 250000; // ৳2.50 Lakh

  const totalInvestment = sharesCount * pricePerShare;

  return (
    <section id="invest" className="bg-[#f6f8f2] text-[#14261c] pb-24">
      {/* Top Gold Banner Highlight */}
      <div className="bg-gradient-to-r from-[#07291c] via-[#0b4a32] to-[#07291c] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#b6e59c] bg-white/10 px-3.5 py-1 rounded-full mb-3">
              Fractional Land Ownership
            </span>
            <p className="text-emerald-100/90 text-sm sm:text-base">
              Share ownership starts from
            </p>
            <div className="font-heading text-4xl sm:text-6xl font-extrabold text-[#d9aa4a] mt-1 mb-2">
              ৳2.50 Lakh
            </div>
            <p className="text-emerald-200/80 text-xs sm:text-sm max-w-xl">
              For a fractional share equal to <strong className="text-white font-semibold">1 shotok (decimal)</strong> of land, backed by 100% Sub-Kabula deed registration in your name.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-xl bg-[#66b447] px-6 py-3 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md"
            >
              Calculate Shares &amp; Perks
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all"
            >
              Ask For Share Plan
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        {/* Section Intro */}
        <div className="reveal-slow max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
            Wealth Generation
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
            Ownership and revenue
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            The resort combines real tangible property security with two distinct passive income streams. Operations, upkeep, and harvests are handled 100% by Sampan Group.
          </p>
        </div>

        {/* 2 Revenue Streams Breakdown */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="size-12 rounded-xl bg-lime-100 text-[#0b4a32] flex items-center justify-center mb-4">
              <Sprout className="size-6 text-[#559e38]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#66b447]">
              Income Stream 1
            </span>
            <h3 className="font-heading text-2xl font-bold text-[#14261c] mt-1 mb-3">
              Commercial Agro-Yield
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Continuous agricultural revenue derived from high-value commercial orchards (sweet mango, dragon fruit, and malta), organic vegetables, freshwater fish farming, and dairy operations.
            </p>
            <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-700 font-medium">
              Harvested and commercialized annually by Sampan Agro division.
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="size-12 rounded-xl bg-amber-100 text-[#b8892b] flex items-center justify-center mb-4">
              <Building className="size-6 text-[#b8892b]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b8892b]">
              Income Stream 2
            </span>
            <h3 className="font-heading text-2xl font-bold text-[#14261c] mt-1 mb-3">
              Hospitality &amp; Sports Revenue
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Cashflow generated from luxury villa and cottage bookings, presidential suite stays, 9-hole golf green fees, sports tournament registrations, corporate retreats, and restaurant dining.
            </p>
            <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-700 font-medium">
              Managed under Sampan Hospitality&apos;s proven operational infrastructure.
            </div>
          </div>
        </div>

        {/* Interactive Share Calculator Widget */}
        <div id="calculator" className="reveal-slow rounded-3xl border border-emerald-900/20 bg-gradient-to-br from-white via-[#fcfdfa] to-emerald-50/40 p-8 sm:p-12 shadow-md mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Interactive Estimator
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              Calculate your land share holding
            </h3>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              Select how many shotoks (decimals) of deeded land you wish to acquire to view total investment and associated perks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
                  Number of Shotoks / Decimals ({sharesCount} {sharesCount === 1 ? "Share" : "Shares"})
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSharesCount((prev) => Math.max(1, prev - 1))}
                    className="size-12 rounded-xl border border-stone-300 bg-white text-xl font-bold text-stone-800 hover:bg-stone-100 transition-colors shadow-sm flex items-center justify-center active:scale-95"
                  >
                    –
                  </button>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={sharesCount}
                    onChange={(e) => setSharesCount(Number(e.target.value))}
                    className="w-full accent-[#0b4a32] cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setSharesCount((prev) => Math.min(10, prev + 1))}
                    className="size-12 rounded-xl border border-stone-300 bg-white text-xl font-bold text-stone-800 hover:bg-stone-100 transition-colors shadow-sm flex items-center justify-center active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Quick select pills */}
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 5, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSharesCount(num)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      sharesCount === num
                        ? "bg-[#0b4a32] text-white shadow-sm"
                        : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {num} {num === 1 ? "Shotok" : "Shotoks"}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-2 text-xs sm:text-sm text-stone-700">
                <div className="flex justify-between pb-2 border-b border-stone-100">
                  <span className="text-stone-500">Rate per Shotok (Decimal):</span>
                  <span className="font-bold text-stone-900">৳2,50,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-100">
                  <span className="text-stone-500">Registered Land Deeded:</span>
                  <span className="font-bold text-[#0b4a32]">{sharesCount} Decimal(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Deed Type:</span>
                  <span className="font-bold text-[#66b447]">100% Sub-Kabula Freehold</span>
                </div>
              </div>
            </div>

            {/* Calculated Card */}
            <div className="lg:col-span-6 rounded-3xl bg-[#07291c] text-white p-8 shadow-xl border border-emerald-900/40 relative overflow-hidden">
              <div className="absolute right-0 top-0 size-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs uppercase tracking-widest text-[#b6e59c] font-bold">
                Estimated Investment
              </span>
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#d9aa4a] mt-1 mb-4">
                ৳{(totalInvestment / 100000).toFixed(2)} Lakh
              </div>
              <p className="text-xs text-emerald-100/80 mb-6">
                Total for {sharesCount} shotok(s) of physical estate land with registered sub-kabula deed.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-emerald-100 mb-8 border-t border-emerald-800/60 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-[#66b447] shrink-0" />
                  <span>100% Sub-Kabula deed registration in your name</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-[#66b447] shrink-0" />
                  <span>Dual annual payouts: Agro harvest + Hospitality yield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-[#66b447] shrink-0" />
                  <span>Free 2-Night, 3-Day stay package at Sampan Eco &amp; Agro Resort</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-[#66b447] shrink-0" />
                  <span>Official Member Loyalty Card unlocking 10%–50% group discounts</span>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center rounded-xl bg-[#66b447] py-3 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md active:scale-98"
              >
                <span>Reserve {sharesCount} Share(s) Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            OFFICIAL CREDENTIALS & LOYALTY CARDS SHOWCASE
           ======================================================== */}
        <div className="reveal-slow rounded-3xl border border-stone-200/90 bg-white p-8 sm:p-12 shadow-sm mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
                Physical Credentials
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
                Cards and certificates you receive
              </h3>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
                Every land investor and registered club member receives authentic physical documentation backed by lawful sub-kabula deed registration and the VIP member loyalty card.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4a32] bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
                <ShieldCheck className="size-4 text-[#66b447]" />
                <span>100% Deeded Ownership</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investCredentials.map((cred, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-[#fbfcf9] p-5 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-900 mb-4 border border-stone-200">
                    <Image
                      src={cred.src}
                      alt={cred.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="inline-flex items-center gap-1 text-[11px] text-white font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                        <ZoomIn className="size-3" />
                        <span>Enlarge Credential</span>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedDoc(cred)}
                      className="absolute inset-0 cursor-pointer"
                      aria-label={`Enlarge ${cred.title}`}
                    />
                  </div>

                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#0b4a32] bg-emerald-100 px-2.5 py-0.5 rounded-full mb-2">
                    {cred.badge}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-[#14261c] mb-1.5">
                    {cred.title}
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    {cred.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDoc(cred)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-white border border-stone-300 hover:bg-[#0b4a32] hover:text-white px-3 py-2 text-xs font-bold text-stone-800 transition-all shadow-xs"
                >
                  <Eye className="size-3.5" />
                  <span>Inspect Physical Document</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Compare Your Options Table */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Transparent Framework
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              Compare your ownership options
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full min-w-[620px] text-left border-collapse text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-heading text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-[#0b4a32] font-bold">Land Share</th>
                  <th className="p-4 sm:p-5 text-[#b8892b] font-bold">Cottage or Villa</th>
                  <th className="p-4 sm:p-5 text-stone-700 font-bold">Club Membership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">What you get</td>
                  <td className="p-4 sm:p-5">Fractional land share (from 1 shotok)</td>
                  <td className="p-4 sm:p-5">A full private cottage or villa</td>
                  <td className="p-4 sm:p-5">Access to golf, wellness and private dining</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Registration</td>
                  <td className="p-4 sm:p-5">
                    <span className="inline-block bg-emerald-100 text-[#0b4a32] text-xs font-bold px-2.5 py-1 rounded-full">
                      100% Sub-Kabula
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="inline-block bg-emerald-100 text-[#0b4a32] text-xs font-bold px-2.5 py-1 rounded-full">
                      100% Sub-Kabula
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="inline-block bg-stone-100 text-stone-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      Loyalty Card &amp; Certificate
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Physical Cards</td>
                  <td className="p-4 sm:p-5 font-medium text-[#0b4a32]">Share Deed + VIP Loyalty Card</td>
                  <td className="p-4 sm:p-5 font-medium text-[#0b4a32]">Villa Deed + VIP Loyalty Card</td>
                  <td className="p-4 sm:p-5 font-medium text-stone-700">Club Member Card</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Managed by</td>
                  <td className="p-4 sm:p-5 font-medium">Sampan Group</td>
                  <td className="p-4 sm:p-5 font-medium">Sampan Group</td>
                  <td className="p-4 sm:p-5 font-medium">Sampan Group</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Annual Return</td>
                  <td className="p-4 sm:p-5">Dual Yield (Agro + Hospitality)</td>
                  <td className="p-4 sm:p-5">Full Rental Pool Revenue</td>
                  <td className="p-4 sm:p-5">Exclusive Member Privileges</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Resort Access</td>
                  <td className="p-4 sm:p-5">VIP Access &amp; Discounts</td>
                  <td className="p-4 sm:p-5">Full Private Access &amp; Stays</td>
                  <td className="p-4 sm:p-5">Member Priority Access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How Buying Works (4-step Roadmap) */}
        <div className="reveal-slow mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Acquisition Process
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              How buying works in 4 simple steps
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Transparent, lawful, and backed by complete legal documentation vetted by counsel.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="size-8 rounded-full bg-[#0b4a32] text-white flex items-center justify-center font-bold text-xs mb-4">
                1
              </span>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Enquire</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Contact the Sampan sales desk, request the official share prospectus, payment schedule, and terms.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="size-8 rounded-full bg-[#0b4a32] text-white flex items-center justify-center font-bold text-xs mb-4">
                2
              </span>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Visit the Site</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Experience the 100+ acre estate at Podunapur, Moulvibazar Sadar, inspecting ponds, orchards, and golf contours.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="size-8 rounded-full bg-[#0b4a32] text-white flex items-center justify-center font-bold text-xs mb-4">
                3
              </span>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Choose Option</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Select your desired land share count (e.g. 1 shotok+), luxury cottage/villa, or golf club membership.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="size-8 rounded-full bg-[#66b447] text-[#06210f] flex items-center justify-center font-bold text-xs mb-4">
                4
              </span>
              <h4 className="font-heading text-lg font-bold text-[#14261c] mb-2">Sign &amp; Register</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Complete purchase agreement, settle milestone payments, and receive your 100% Sub-Kabula deed and VIP loyalty card.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Ownership Cards */}
        <div className="reveal-slow rounded-3xl border border-stone-200 bg-[#fbfcf9] p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Privileges
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              Exclusive benefits of ownership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5 text-[#66b447]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#14261c] text-sm sm:text-base">100% Sub-Kabula Land Deed</h5>
                  <p className="text-stone-600 text-xs sm:text-sm">Permanent registered ownership recorded with the sub-registry office.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5 text-[#66b447]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#14261c] text-sm sm:text-base">10% to 50% Off Stays</h5>
                  <p className="text-stone-600 text-xs sm:text-sm">Substantial discounts across all Sampan Group hotels, motels, and lounges via VIP loyalty card.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5 text-[#66b447]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#14261c] text-sm sm:text-base">Complimentary Resort Stay</h5>
                  <p className="text-stone-600 text-xs sm:text-sm">Free 2-night, 3-day holiday package at Sampan Eco &amp; Agro Resort, Kashiani.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5 text-[#66b447]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#14261c] text-sm sm:text-base">Express Highway Club &amp; Lounge</h5>
                  <p className="text-stone-600 text-xs sm:text-sm">Exclusive loyalty card granting VIP privileges across national highway rest stops.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5 text-[#66b447]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#14261c] text-sm sm:text-base">10% to 30% Off Arunima Resort</h5>
                  <p className="text-stone-600 text-xs sm:text-sm">Reciprocal discount privileges at Arunima Resort Golf Club.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5 text-[#66b447]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#14261c] text-sm sm:text-base">Shooters Shooting Club Affiliation</h5>
                  <p className="text-stone-600 text-xs sm:text-sm">Affiliated sporting privileges at Shooters Shooting Club.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-stone-400 text-xs mt-6 text-center">
            *Returns depend on real agricultural yield and hospitality occupancy. Confirm official deed documents, agreements, and installment schedules with the sales desk prior to execution.
          </p>
        </div>
      </div>

      {/* High-Resolution Document Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#07291c] rounded-3xl overflow-hidden border border-emerald-600/40 shadow-2xl flex flex-col max-h-[92vh] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#051f15]">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#b6e59c] bg-white/10 px-3 py-1 rounded-full">
                  {selectedDoc.badge}
                </span>
                <span className="text-xs text-emerald-200/80 font-semibold hidden sm:inline">
                  Verified Physical Credential
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="size-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-950 flex items-center justify-center p-2">
              <Image
                src={selectedDoc.src}
                alt={selectedDoc.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-gradient-to-t from-[#051f15] to-[#07291c] border-t border-emerald-900/60 space-y-3">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {selectedDoc.title}
                </h3>
                <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 leading-relaxed">
                  {selectedDoc.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-emerald-900/40">
                {selectedDoc.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-emerald-200">
                    <Check className="size-3.5 text-[#66b447] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
