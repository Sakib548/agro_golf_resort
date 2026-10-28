import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import AffiliationSection from "@/components/AffiliationSection";

export const metadata: Metadata = {
  title: "About The Project & Vision",
  description:
    "Discover Sampan Agro & Golf Resort along Dhaka-Sylhet Highway: 100+ acres uniting championship golf, natural ponds, and organic farming by Sampan Group.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <AffiliationSection />
    </>
  );
}
