import type { Metadata } from "next";
import ResortPageContent from "@/components/ResortPageContent";

export const metadata: Metadata = {
  title: "The Resort & Masterplan | Sampan Agro & Golf Resort",
  description:
    "Explore the 100+ acre estate: 9-hole international golf on the water, luxury lakeside villas & শণ (Shan) cottages, divided gallery, farm-to-table dining, and 4 masterplan zones.",
};

export default function ResortPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <ResortPageContent />
    </div>
  );
}
