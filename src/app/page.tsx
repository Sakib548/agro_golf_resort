import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import DayTimelineSection from "@/components/DayTimelineSection";
import GlimpsesSection from "@/components/GlimpsesSection";
import AffiliationSection from "@/components/AffiliationSection";
import EndorsementBar from "@/components/EndorsementBar";

interface PortalCardItem {
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  badge: string;
  action: string;
  image?: string;
  isTriImage?: boolean;
  triImages?: {
    label: string;
    position: string;
    src: string;
  }[];
}

const portalCards: PortalCardItem[] = [
  {
    title: "The Resort & Masterplan",
    subtitle: "Championship Sports, Cottages & Farmlands",
    desc: "Explore our 9-hole golf course, baseball diamond, championship football turfs, authentic thatched cottages, divided photo gallery, and 4 specialized masterplan zones.",
    href: "/resort",
    badge: "Masterplan",
    image: "/images/2.webp",
    action: "Explore The Resort & Gallery",
  },
  {
    title: "Sampan Express Highway Inn & Complex",
    subtitle: "Tri-Development: Trade Emporium • Highway Inn • Condominium",
    desc: "A flagship landmark on the national highway corridor uniting Sampan Trade Emporium on the left, the luxury 24/7 Express Highway Inn at the center, and Sampan Condominium on the right.",
    href: "/portfolio",
    badge: "3-in-1 Landmark",
    action: "Explore Integrated Complex",
    isTriImage: true,
    triImages: [
      {
        label: "Trade Emporium",
        position: "Left Flank",
        src: "/images/portfolio/trade.webp",
      },
      {
        label: "Express Highway Inn",
        position: "Center Landmark",
        src: "/images/portfolio/express-highway-inn.webp",
      },
      {
        label: "Condominium",
        position: "Right Flank",
        src: "/images/portfolio/condo.webp",
      },
    ],
  },
  {
    title: "Sampan Metro Square",
    subtitle: "Commercial & Business High-Rise",
    desc: "A state-of-the-art commercial high-rise development featuring modern corporate office floors, a premium retail atrium, and institutional-grade business infrastructure.",
    href: "/portfolio",
    badge: "Commercial High-Rise",
    image: "/images/portfolio/metro.webp",
    action: "Explore Metro Square",
  },
  {
    title: "Sampan Highway Inn",
    subtitle: "Completed & Actively Operating Benchmark",
    desc: "Our flagship highway stopover on the Dhaka–Khulna Highway serving over 5,000 travelers daily with 24/7 dining, motel suites, VVIP executive lounge, and fueling station.",
    href: "/portfolio",
    badge: "5,000+ Daily Visitors",
    image: "/images/sampan_highway.webp",
    action: "View Operating Benchmark",
  },
];

export default function Home() {
  return (
    <div className="relative bg-[#EEF1DE] text-[#134630] selection:bg-[#708564]/30 selection:text-[#134630]">
      {/* 1. Hero & Key Metrics */}
      <HeroSection />

      {/* 2. Daily Experience Timeline & Why Owners Choose It */}
      <DayTimelineSection />

      {/* 3. Glimpses of the estate, Events & Tournaments, Facilities at a glance */}
      <GlimpsesSection />

      {/* 5. Sleek Hub: Explore Dedicated Sections */}
      <section className="py-20 bg-[#FBFAF6] border-t border-[#708564]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-slow flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#EEF1DE] px-3.5 py-1 rounded-full border border-[#708564]/20">
                Estate &amp; Developments Directory
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#134630] mt-3">
                Explore the project in depth
              </h2>
              <p className="text-[#134630]/75 text-base sm:text-lg mt-3 max-w-2xl">
                Discover our flagship resort masterplan alongside Sampan Group&apos;s proven commercial, hospitality, and residential landmarks across Bangladesh.
              </p>
            </div>

            <div className="shrink-0 flex gap-3">
              <a
                href="/brochure.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#708564]/30 bg-[#FBFAF6] px-5 py-3 text-xs uppercase tracking-wider font-bold text-[#134630] hover:bg-[#EEF1DE] transition-colors shadow-xs"
              >
                <FileText className="size-4" />
                <span>View Master Brochure</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {portalCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="bento-card neo-hairline group relative overflow-hidden p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {card.isTriImage && card.triImages ? (
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 shadow-xs border border-[#708564]/20 bg-stone-900 grid grid-cols-3 gap-1 p-1">
                      {card.triImages.map((tri) => (
                        <div key={tri.label} className="relative h-full w-full overflow-hidden rounded-xl">
                          <Image
                            src={tri.src}
                            alt={tri.label}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                            sizes="(max-width: 768px) 33vw, 20vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                          <div className="absolute bottom-2 left-1.5 right-1.5 text-white">
                            <p className="font-heading text-[10px] sm:text-xs font-bold leading-tight truncate mt-0.5">
                              {tri.label}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                        <span className="inline-block rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#EEF1DE] border border-white/10 shadow-xs">
                          {card.badge}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 shadow-xs border border-[#708564]/20 bg-[#EEF1DE]">
                      <Image
                        src={card.image!}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#EEF1DE]">
                          {card.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  <span className="text-xs uppercase font-bold text-[#708564] tracking-wider block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#134630] mb-2 group-hover:text-[#42732E] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#134630]/70 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#708564]/20 flex items-center justify-between text-xs font-bold text-[#42732E] group-hover:text-[#365e25] transition-colors">
                  <span>{card.action}</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Site Visit & Booking Banner */}
          {/* <div className="reveal-slow rounded-3xl bg-[#134630] text-white p-8 sm:p-12 shadow-xl border border-[#708564]/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-block text-xs uppercase tracking-widest text-[#134630] font-bold bg-[#EEF1DE] px-3.5 py-1 rounded-full mb-3">
                  Schedule Your Inspection
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  Plan your visit to Podunapur, Moulvibazar
                </h3>
                <p className="text-[#EEF1DE]/90 text-sm sm:text-base leading-relaxed">
                  Walk the 100+ acre grounds in person. Inspect our natural ponds, championship golf contours, and thriving mango orchards with our senior advisory team.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#42732E] px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#708564] transition-all shadow-md active:scale-95 text-center"
                >
                  <span>Book Guided Site Visit</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/invest"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all text-center"
                >
                  <span>See Ownership Options</span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* 6. Institutional Affiliations */}
      <AffiliationSection />

      {/* 7. Endorsement Bar */}
      <EndorsementBar />
    </div>
  );
}
