"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Resort", href: "/resort" },
  { label: "Invest & Membership", href: "/invest" },
  { label: "Sampan Group", href: "https://www.sampangroup.com.bd/", isExternal: true },
  // { label: "Our Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top-Sticking, Edge-to-Edge Luxury Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-[#FBFAF6]/95 backdrop-blur-md border-b border-[#708564]/20 shadow-xs py-2.5 sm:py-3"
          : "bg-[#FBFAF6]/90 backdrop-blur-md border-b border-[#708564]/15 py-3 sm:py-3.5"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:opacity-95"
          >
            <div className="relative flex size-10 sm:size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-xs ring-2 ring-[#708564]/30 transition-all duration-300 group-hover:scale-105 group-hover:ring-[#42732E]">
              <Image
                src="/images/agroandgolf.webp"
                alt="Sampan Agro & Golf Resort Logo"
                width={44}
                height={44}
                priority
                className="size-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#134630] leading-none">
                Sampan
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#42732E] font-semibold mt-0.5">
                Agro &amp; Golf Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${isActive
                    ? "bg-[#42732E] text-white shadow-xs font-bold"
                    : "text-[#134630]/80 hover:text-[#134630] hover:bg-[#EEF1DE]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#708564]/30 bg-[#FBFAF6] text-[#134630] shadow-xs transition-all duration-300 hover:bg-[#EEF1DE] lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Sleek Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-20 left-4 right-4 rounded-3xl border border-[#708564]/30 bg-[#FBFAF6] p-6 shadow-2xl transition-all duration-300 text-[#134630] ${mobileMenuOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-6 opacity-0 scale-95"
            }`}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm uppercase tracking-wider font-semibold transition-colors ${isActive
                    ? "bg-[#42732E] text-white font-bold shadow-xs"
                    : "text-[#134630] hover:bg-[#EEF1DE]"
                    }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs">→</span>
                </Link>
              );
            })}

            {/* Mobile CTAs - Commented out for now */}
            {/*
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#42732E] py-3 text-center text-xs uppercase tracking-wider font-bold text-white hover:bg-[#134630] shadow-sm active:scale-98"
              >
                <span>Book Site Visit</span>
              </Link>
              <Link
                href="/invest"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 py-3 text-center text-xs uppercase tracking-wider font-bold text-white"
              >
                <span>Invest &amp; Membership (From ৳2.50L)</span>
              </Link>
              <a
                href="/brochure.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 py-2.5 text-center text-xs uppercase tracking-wider font-bold text-white"
              >
                <span>View Master Brochure ↗</span>
              </a>
            </div>
            */}
          </div>
        </div>
      </div>
    </>
  );
}
