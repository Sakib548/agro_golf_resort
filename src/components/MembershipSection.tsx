"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, Award, Landmark, Eye, X, ZoomIn, ShieldCheck, Sparkles, Check } from "lucide-react";

interface CredentialPreview {
  title: string;
  badge: string;
  src: string;
  desc: string;
  highlights: string[];
}

const credentialsData: CredentialPreview[] = [
  {
    title: "Official Member Loyalty Card",
    badge: "VIP Permanent Member Card",
    src: "/images/loyalty-card-permanent-member.webp",
    desc: "Encoded physical loyalty card with dedicated member number, granting 10% to 50% exclusive discounts across Sampan Group hotels, motels, and nationwide partner clubs.",
    highlights: [
      "10%–50% Room & Dining Discounts across Sampan Hotels",
      "QR-code verification & member tracking",
      "Priority tee-times at Sampan 9-Hole Golf Course",
      "Complimentary Express Highway Club & Lounge access",
    ],
  },
  {
    title: "Official Member Card (Club Access)",
    badge: "Sports & Club Access Card",
    src: "/images/Member Card.jpg.webp",
    desc: "Personalized membership card recognizing full club privileges across all athletic grounds, sports tournaments, fitness suites, and dining lounges.",
    highlights: [
      "Full access to 9-hole golf course and driving ranges",
      "Priority booking for 4 championship football turfs and courts",
      "Exclusive invitations to private tournaments and galas",
      "Family access to swimming pools and amusement amenities",
    ],
  },
  {
    title: "Official Certificate of Member",
    badge: "Club Accreditation Certificate",
    src: "/images/Certificate of Member.jpg.webp",
    desc: "Official laminated club certificate issued by Sampan Agro & Golf Resort, confirming accredited lifetime membership standing and recognized club rights.",
    highlights: [
      "Issued by Sampan Group executive board",
      "Unique registered membership registration number",
      "Valid for reciprocal partner golf and shooting clubs",
      "Formal documentation for corporate and personal records",
    ],
  },
  {
    title: "Official Certificate of Share",
    badge: "Deeded 100% Sub-Kabula Proof",
    src: "/images/Certificate.jpg.webp",
    desc: "Permanent title proof issued alongside registered 100% Sub-Kabula deed, verifying your exact fractional shotok (decimal) ownership in the 100+ acre estate.",
    highlights: [
      "Backed by government Land Sub-Registry Sub-Kabula deed",
      "Authentic security seal and board signatures",
      "Guarantees dual annual dividend payouts (agro + hospitality)",
      "Transferable and inheritable freehold property title",
    ],
  },
];

const partnersData = [
  {
    partner: "Sampan Group Hotels & Motels",
    benefit: "10% to 50% discount on all room stays and motel dining",
    badge: "Direct Group Asset",
  },
  {
    partner: "Arunima Resort Golf Club",
    benefit: "10% to 30% reciprocal green fee and resort booking discount",
    badge: "Golf Partner",
  },
  {
    partner: "Shooters Shooting Club",
    benefit: "Affiliated sporting privileges and member lane booking",
    badge: "Sports Partner",
  },
  {
    partner: "Express Highway Club and Lounge",
    benefit: "VIP lounge access, priority parking, and loyalty privileges",
    badge: "Highway Network",
  },
  {
    partner: "Sampan Auto, Mart & Filling Stations",
    benefit: "Privilege points and discounted vehicle services",
    badge: "Service Network",
  },
  {
    partner: "REHAB & Corporate Affiliates",
    benefit: "Recognized real estate member standing & priority investor desk",
    badge: "Real Estate Board",
  },
  {
    partner: "Mercedes-Benz Bangladesh (MOU)",
    benefit: "Exclusive premium customer privileges and promotional offerings",
    badge: "Luxury Partner MOU",
  },
];

export default function MembershipSection() {
  const [selectedCredential, setSelectedCredential] = useState<CredentialPreview | null>(null);
  const [activeCardTab, setActiveCardTab] = useState<"permanent" | "member">("permanent");

  return (
    <section id="membership" className="py-24 bg-[#EEF1DE] text-[#134630] border-t border-[#708564]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="hero-reveal max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#FBFAF6] px-3.5 py-1 rounded-full border border-[#708564]/30">
            Elite Privileges &amp; Physical Cards
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#134630] mt-3">
            Membership and loyalty credentials
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Members and deeded land owners receive physical, encoded credentials: the official VIP loyalty card, membership card, certified membership certificate, and the registered Certificate of Share.
          </p>
        </div>

        {/* ========================================================
            PHYSICAL CREDENTIALS GRID (FEATURING REAL CARD IMAGES)
           ======================================================== */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Official Numbered Loyalty Card */}
          <div className="rounded-3xl border border-[#708564]/20 bg-[#FBFAF6] p-6 sm:p-7 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 mb-5 border border-[#708564]/30 shadow-md">
                <Image
                  src="/images/loyalty-card-permanent-member.webp"
                  alt="Official Member Loyalty Card"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <ZoomIn className="size-3.5" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credentialsData[0])}
                  className="absolute inset-0 cursor-pointer"
                  aria-label="Enlarge Official Member Loyalty Card"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-extrabold text-[#42732E] tracking-wider bg-[#EEF1DE] px-2.5 py-0.5 rounded-full border border-[#708564]/20">
                  Physical Loyalty Card
                </span>
                <span className="text-[11px] font-mono font-bold text-[#42732E]">10%–50% Off</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">
                Official VIP Loyalty Card
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Encoded permanent member loyalty card unlocking 10% to 50% discount privileges across all Sampan Group hotels, motels, and nationwide partner resorts.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCredential(credentialsData[0])}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#EEF1DE] border border-[#708564]/30 hover:bg-[#42732E] hover:text-white px-4 py-2.5 text-xs font-bold text-[#134630] transition-all shadow-xs"
            >
              <Eye className="size-3.5" />
              <span>Inspect Loyalty Card Details</span>
            </button>
          </div>

          {/* Card 2: Certificate of Member */}
          <div className="rounded-3xl border border-[#708564]/20 bg-[#FBFAF6] p-6 sm:p-7 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 mb-5 border border-[#708564]/30 shadow-md">
                <Image
                  src="/images/Certificate of Member.jpg.webp"
                  alt="Certificate of Member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <ZoomIn className="size-3.5" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credentialsData[2])}
                  className="absolute inset-0 cursor-pointer"
                  aria-label="Enlarge Certificate of Member"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-extrabold text-[#708564] tracking-wider bg-[#EEF1DE] px-2.5 py-0.5 rounded-full border border-[#708564]/20">
                  Club Accreditation
                </span>
                <span className="text-[11px] font-mono font-bold text-[#134630]">Accredited</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">
                Certificate of Member
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Formal laminated accreditation certificate recognizing full sporting rights, priority golf tee bookings, and VIP tournament invitations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCredential(credentialsData[2])}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#EEF1DE] border border-[#708564]/30 hover:bg-[#42732E] hover:text-white px-4 py-2.5 text-xs font-bold text-[#134630] transition-all shadow-xs"
            >
              <Eye className="size-3.5" />
              <span>Inspect Certificate Details</span>
            </button>
          </div>

          {/* Card 3: Certificate of Share (Sub-Kabula) */}
          <div className="rounded-3xl border border-[#708564]/20 bg-[#FBFAF6] p-6 sm:p-7 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 mb-5 border border-[#708564]/30 shadow-md">
                <Image
                  src="/images/Certificate.jpg.webp"
                  alt="Certificate of Share (Sub-Kabula)"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <ZoomIn className="size-3.5" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credentialsData[3])}
                  className="absolute inset-0 cursor-pointer"
                  aria-label="Enlarge Certificate of Share"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-extrabold text-[#42732E] tracking-wider bg-[#EEF1DE] px-2.5 py-0.5 rounded-full border border-[#708564]/20">
                  100% Sub-Kabula Title
                </span>
                <span className="text-[11px] font-mono font-bold text-[#708564]">Deeded Share</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#134630] mb-2">
                Certificate of Share
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Issued alongside the registered 100% Sub-Kabula deed, verifying your exact shotok (decimal) land share in the 100+ acre resort estate.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCredential(credentialsData[3])}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#EEF1DE] border border-[#708564]/30 hover:bg-[#42732E] hover:text-white px-4 py-2.5 text-xs font-bold text-[#134630] transition-all shadow-xs"
            >
              <Eye className="size-3.5" />
              <span>Inspect Share Deed Details</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            PREMIUM CARD SHOWCASE BANNER WITH AUTHENTIC CARD IMAGES
           ======================================================== */}
        <div className="reveal-slow rounded-3xl bg-[#134630] text-white p-8 sm:p-12 mb-20 shadow-xl border border-[#708564]/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#EEF1DE] font-bold">
                Physical Card Accreditation
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Two tiers of membership designed for flexibility
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                Whether you join as an active golf member or acquire deeded land shares, your physical card credentials unlock unprecedented hospitality and leisure privileges across Bangladesh.
              </p>

              <div className="space-y-4 text-emerald-100 text-sm">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading text-base font-bold text-white">
                      1. Golf &amp; Wellness Club Membership Card
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#EEF1DE] bg-white/10 px-2.5 py-0.5 rounded-full">
                      Club Tier
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Designed for avid golfers and wellness seekers wanting full access to championship fairways, covered driving ranges, swimming pools, gym, and spa without purchasing real land.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading text-base font-bold text-white">
                      2. Express Highway Club VIP Loyalty Card
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#EEF1DE] bg-white/10 px-2.5 py-0.5 rounded-full">
                      VIP Elite Tier
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Automatically bundled complimentary with all land share and villa acquisitions, unlocking 10%–50% discounts across Sampan Group hotels, motels, and roadside VIP lounges nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Real Card Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Card Switcher Pills */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 mb-6 shadow-md">
                <button
                  type="button"
                  onClick={() => setActiveCardTab("permanent")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCardTab === "permanent"
                      ? "bg-[#42732E] text-white shadow-md"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  VIP Loyalty Card
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCardTab("member")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCardTab === "member"
                      ? "bg-[#42732E] text-white shadow-md"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  Club Member Card
                </button>
              </div>

              {/* Realistic Physical Card Render with Glow */}
              <div
                onClick={() =>
                  setSelectedCredential(
                    activeCardTab === "permanent" ? credentialsData[0] : credentialsData[1]
                  )
                }
                className="w-full max-w-md aspect-[1.58/1] rounded-2xl overflow-hidden relative shadow-2xl border-2 border-[#708564]/40 group cursor-pointer transition-transform duration-500 hover:scale-105"
              >
                <Image
                  src={
                    activeCardTab === "permanent"
                      ? "/images/loyalty-card-permanent-member.webp"
                      : "/images/Member Card.jpg.webp"
                  }
                  alt={
                    activeCardTab === "permanent"
                      ? "Official VIP Member Loyalty Card"
                      : "Official Club Member Card"
                  }
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end justify-between p-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#EEF1DE] block">
                      {activeCardTab === "permanent" ? "VIP ELITE CARD" : "MEMBER STANDING"}
                    </span>
                    <span className="font-heading text-sm font-bold text-white">
                      {activeCardTab === "permanent"
                        ? "Sampan Agro & Golf Resort Loyalty Card"
                        : "Official Club Member Card"}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-900 bg-white/95 px-3 py-1.5 rounded-xl shadow-md">
                    <ZoomIn className="size-3.5" />
                    <span>Zoom</span>
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-stone-300 text-center mt-3">
                *Click the card to inspect full high-resolution credentials, security seal, and perks.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Privileges Table */}
        <div className="reveal-slow mb-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#FBFAF6] px-3.5 py-1 rounded-full border border-[#708564]/30">
              Reciprocal Privileges
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#134630] mt-2">
              National partner privileges
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Your Sampan credentials grant exclusive discounts across affiliate clubs, luxury auto partners, and hospitality properties.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] shadow-sm">
            <table className="w-full min-w-[580px] text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#EEF1DE] border-b border-[#708564]/20 text-[#134630] font-heading text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Partner &amp; Affiliate</th>
                  <th className="p-4 sm:p-5">Exclusive Benefit</th>
                  <th className="p-4 sm:p-5 text-right">Network Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#708564]/10 text-stone-700">
                {partnersData.map((row) => (
                  <tr key={row.partner} className="hover:bg-[#EEF1DE]/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#134630]">
                      {row.partner}
                    </td>
                    <td className="p-4 sm:p-5 text-stone-600">
                      {row.benefit}
                    </td>
                    <td className="p-4 sm:p-5 text-right">
                      <span className="inline-block bg-[#EEF1DE] text-[#42732E] border border-[#708564]/20 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================
          HIGH-RESOLUTION CREDENTIAL LIGHTBOX MODAL
         ======================================================== */}
      {selectedCredential && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={() => setSelectedCredential(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#134630] rounded-3xl overflow-hidden border border-[#708564]/40 shadow-2xl flex flex-col max-h-[92vh] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#708564]/30 bg-[#134630]">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#EEF1DE] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {selectedCredential.badge}
                </span>
                <span className="text-xs text-[#EEF1DE]/80 font-semibold hidden sm:inline">
                  Verified Physical Credential
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                className="size-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-950 flex items-center justify-center p-2">
              <Image
                src={selectedCredential.src}
                alt={selectedCredential.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-[#134630] border-t border-[#708564]/30 space-y-3">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FBFAF6]">
                  {selectedCredential.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  {selectedCredential.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#708564]/20">
                {selectedCredential.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#EEF1DE]">
                    <Check className="size-3.5 text-[#42732E] shrink-0" />
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
