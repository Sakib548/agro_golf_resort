"use client";

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
  return (
    <section id="membership" className="py-24 bg-[#f6f8f2] text-[#14261c] border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="hero-reveal max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
            Elite Privileges
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
            Membership and partner privileges
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Members and owners receive personalized physical credentials: an encoded loyalty card, a formal membership certificate, and for land owners, an official certificate of share.
          </p>
        </div>

        {/* 3 Physical Credential Cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="size-12 rounded-xl bg-emerald-100 text-[#0b4a32] flex items-center justify-center text-2xl mb-4 font-bold">
              💳
            </div>
            <span className="text-xs uppercase font-bold text-[#66b447] tracking-wider">
              Physical Credential
            </span>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mt-1 mb-2">
              Numbered Loyalty Card
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Durable chip &amp; QR-encoded card unlocking priority bookings, golf tee reservations, and group partner discounts across Bangladesh.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="size-12 rounded-xl bg-amber-100 text-[#b8892b] flex items-center justify-center text-2xl mb-4 font-bold">
              📜
            </div>
            <span className="text-xs uppercase font-bold text-[#b8892b] tracking-wider">
              Club Accreditation
            </span>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mt-1 mb-2">
              Certificate of Member
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Confirms full privileges at resort sports facilities, guided seasonal events, and invitations to private golf invitationals.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="size-12 rounded-xl bg-blue-100 text-[#0b4a32] flex items-center justify-center text-2xl mb-4 font-bold">
              🏛️
            </div>
            <span className="text-xs uppercase font-bold text-[#0b4a32] tracking-wider">
              Title Proof
            </span>
            <h3 className="font-heading text-xl font-bold text-[#14261c] mt-1 mb-2">
              Certificate of Share
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Issued alongside the registered 100% Sub-Kabula deed, verifying your exact shotok allocation in the 100+ acre estate.
            </p>
          </div>
        </div>

        {/* Visual Card Showcase Banner */}
        <div className="reveal-slow rounded-3xl bg-gradient-to-br from-[#07291c] via-[#0b3a28] to-[#07291c] text-white p-8 sm:p-12 mb-20 shadow-xl border border-emerald-900/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#b6e59c] font-bold">
                Exclusive Access
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Two tiers of membership designed for flexibility
              </h3>
              <div className="space-y-4 text-emerald-100 text-sm">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <h4 className="font-heading text-base font-bold text-white mb-1">
                    1. Golf &amp; Wellness Club Membership
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    Designed for avid golfers and wellness seekers wanting full access to championship fairways, ranges, pools, and spa without purchasing real land.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <h4 className="font-heading text-base font-bold text-white mb-1">
                    2. Express Highway Club &amp; Lounge Membership
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    Automatically bundled complimentary with land share and villa acquisitions, unlocking the entire nationwide Sampan roadside amenity network.
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Physical Card Render */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-[1.58/1] rounded-2xl bg-gradient-to-tr from-[#051c13] via-[#0d3b2a] to-[#1a5e42] p-6 text-white shadow-2xl border border-emerald-400/30 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute right-0 top-0 size-32 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-sm font-bold tracking-tight">SAMPAN</span>
                    <span className="block text-[8px] uppercase tracking-widest text-[#66b447]">Agro &amp; Golf Resort</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-300 border border-amber-300/40 px-2 py-0.5 rounded">
                    VIP ELITE
                  </span>
                </div>

                <div className="my-2">
                  <div className="text-[9px] uppercase tracking-wider text-emerald-200/70">Membership No</div>
                  <div className="font-mono text-sm tracking-widest text-white">SAGR • 8920 • 2026</div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-emerald-200/70">Cardholder</div>
                    <div className="text-xs font-semibold text-white">HONORED MEMBER</div>
                  </div>
                  <div className="size-8 rounded bg-white/90 p-1 flex items-center justify-center text-[10px] text-stone-900 font-bold">
                    QR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Privileges Table */}
        <div className="reveal-slow mb-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full">
              Reciprocal Privileges
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#14261c] mt-2">
              National partner privileges
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Your Sampan credentials grant exclusive discounts across affiliate clubs, luxury auto partners, and hospitality properties.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full min-w-[580px] text-left border-collapse text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-heading text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Partner &amp; Affiliate</th>
                  <th className="p-4 sm:p-5">Exclusive Benefit</th>
                  <th className="p-4 sm:p-5 text-right">Network Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {partnersData.map((row) => (
                  <tr key={row.partner} className="hover:bg-stone-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-stone-900">
                      {row.partner}
                    </td>
                    <td className="p-4 sm:p-5 text-stone-600">
                      {row.benefit}
                    </td>
                    <td className="p-4 sm:p-5 text-right">
                      <span className="inline-block bg-emerald-50 text-[#0b4a32] border border-emerald-900/10 text-xs font-semibold px-2.5 py-1 rounded-full">
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
    </section>
  );
}
