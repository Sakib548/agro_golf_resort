import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sampan Agro & Golf Resort — Luxury of Nature with Leisure",
    template: "%s | Sampan Agro & Golf Resort",
  },
  description:
    "A 100+ acre green resort in Dhaka-Sylhet Highway by Sampan Group: 9-hole international golf, a working organic agro farm, lakeside villas, and secure land ownership with 100% sub-kabula registration.",
  keywords: [
    "Sampan Agro Golf Resort",
    "Moulvibazar golf resort",
    "Sampan Group",
    "Sub-kabula land share",
    "Agro tourism Bangladesh",
    "Luxury golf resort Moulvibazar",
    "Dhaka-Sylhet Highway",
  ],
  icons: {
    icon: [
      { url: "/images/agroandgolf.webp" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/agroandgolf.webp",
    apple: "/apple-icon.png",
  },
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
      className="antialiased"
    >
      <head>
        <link rel="icon" href="/images/agroandgolf.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen flex flex-col bg-[#F7F5EE] text-[#143224] antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <div className="flex-1 min-h-screen flex flex-col">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
