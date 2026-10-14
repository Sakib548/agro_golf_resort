import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sampan Agro & Golf Resort — Luxury of Nature with Leisure",
    template: "%s | Sampan Agro & Golf Resort",
  },
  description:
    "A 100+ acre green estate in Podunapur, Moulvibazar Sadar by Sampan Group: 9-hole international golf, a working organic agro farm, lakeside villas, and secure land ownership with 100% sub-kabula registration.",
  keywords: [
    "Sampan Agro Golf Resort",
    "Moulvibazar golf resort",
    "Sampan Group",
    "Sub-kabula land share",
    "Agro tourism Bangladesh",
    "Luxury golf resort Moulvibazar",
    "Podunapur Moulvibazar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hind+Siliguri:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen flex flex-col bg-[#f6f8f2] text-[#14261c] antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <div className="flex-1 min-h-screen flex flex-col">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
