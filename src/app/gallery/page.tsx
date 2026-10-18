import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "Photo Gallery & Official Brochure",
  description:
    "View authentic photos of the golf course, sports courts, cottages, wheat and paddy fields, pools, and access the official 38MB brochure.",
};

export default function GalleryPage() {
  return <GallerySection />;
}
