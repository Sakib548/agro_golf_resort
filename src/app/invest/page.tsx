import type { Metadata } from "next";
import InvestSection from "@/components/InvestSection";
import MembershipSection from "@/components/MembershipSection";
import AffiliationSection from "@/components/AffiliationSection";

export const metadata: Metadata = {
  title: "Invest & Membership | Sampan Agro & Golf Resort",
  description:
    "Explore deeded land shares from ৳2.50 lakh with 100% Sub-Kabula registration, dual agro & hospitality revenues, and exclusive golf and highway club memberships with nationwide partner privileges.",
};

export default function InvestPage() {
  return (
    <div>
      <InvestSection />
      <MembershipSection />
      <AffiliationSection />
    </div>
  );
}
