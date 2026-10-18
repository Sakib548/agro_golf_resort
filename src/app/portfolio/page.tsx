import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";

export const metadata: Metadata = {
  title: "Track Record & Sampan Group Portfolio",
  description:
    "Explore operating benchmarks by Sampan Group: Sampan Highway Inn (5,000+ visitors daily), Sampan Eco & Agro in Kashiani, and ongoing Dhaka projects.",
};

export default function PortfolioPage() {
  return <PortfolioSection />;
}
