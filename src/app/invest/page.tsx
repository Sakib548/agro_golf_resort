import type { Metadata } from "next";
import InvestSection from "@/components/InvestSection";

export const metadata: Metadata = {
  title: "Ownership & Revenue | Sampan Agro & Golf Resort",
  description:
    "Share ownership from ৳2.50 lakh for 1 shotok of land with 100% Sub-Kabula registration. Dual income streams from commercial agro-yield and hospitality operations.",
};

export default function InvestPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <InvestSection />
    </div>
  );
}
