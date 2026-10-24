import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07291c] text-[#cfe0c9] pt-16 pb-12 border-t border-emerald-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-11 rounded-full bg-white p-0.5 shadow-sm overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/agroandgolf.webp"
                  alt="Sampan Agro & Golf Resort"
                  width={44}
                  height={44}
                  className="size-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white block leading-tight">
                  Sampan Agro &amp; Golf Resort
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#66b447] font-semibold">
                  Luxury of Nature with Leisure
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm mb-4">
              A flagship eco-tourism and sports championship estate by <strong className="text-white font-semibold">Sampan Developments Ltd</strong> (Sampan Group). 100+ acres uniting 9-hole international golf, organic agriculture, and deeded sub-kabula land ownership.
            </p>

            <p className="text-xs text-emerald-300/80 font-mono">
              Site: Dhaka-Sylhet Highway
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home Overview</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About &amp; Vision</Link></li>
              <li><Link href="/resort" className="hover:text-white transition-colors">Resort Zones &amp; Masterplan</Link></li>
              <li><Link href="/#gallery" className="hover:text-white transition-colors">Photo Gallery &amp; Brochure</Link></li>
              <li><Link href="/invest" className="hover:text-white transition-colors">Invest &amp; Membership</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Visit &amp; Contact Desk</Link></li>
            </ul>
          </div>

          {/* Corporate Addresses */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact &amp; Offices
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-emerald-200/80">
              <div>
                <strong className="text-white block font-medium">Head Office:</strong>
                <span>Sampan 21st Century, House-284, Block-B, Road-1/A, Bashundhara R/A, Dhaka</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Resort Grounds:</strong>
                <span>Dhaka-Sylhet Highway</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Hotlines:</strong>
                <span className="block">+88 01906-896327 </span>
                <span className="block">+88 013 2966 9701</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Email:</strong>
                <span>contact@sampangolfresort.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Fine Print */}
        <div className="pt-8 text-[11px] text-emerald-300/60 leading-relaxed space-y-2">
          {/* <p>
            Renderings, photographic representations, architectural sketches, and masterplan illustrations demonstrate planned and envisioned resort facilities. Actual land allocation and specifications are governed strictly by the executed and registered Sub-Kabula deeds and purchase agreements.
          </p> */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4  text-emerald-200/50">
            <p>© 2026 Sampan Agro &amp; Golf Resort. A project of Sampan Developments Ltd / Sampan Group. All rights reserved.</p>
            <p>Designed with luxury standards &bull; Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
