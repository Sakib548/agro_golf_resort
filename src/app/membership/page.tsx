import type { Metadata } from "next";
import MembershipSection from "@/components/MembershipSection";

export const metadata: Metadata = {
  title: "Membership & Partner Privileges | Sampan Agro & Golf Resort",
  description:
    "Loyalty cards, certificates of member, certificates of share, high-tier golf and wellness club tiers, and partner privileges with national hotel and club networks.",
};

export default function MembershipPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <MembershipSection />
    </div>
  );
}
