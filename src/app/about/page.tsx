import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About The Project & Vision",
  description:
    "Discover Sampan Agro & Golf Resort in Podunapur, Moulvibazar Sadar: 100+ acres uniting championship golf, natural ponds, and organic farming by Sampan Group.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <AboutSection />
    </div>
  );
}
