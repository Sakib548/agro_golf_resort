"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  title: string;
  category: "all" | "sports" | "agro" | "stay" | "leisure" | "docs";
  src: string;
  tag: string;
  desc?: string;
}

const galleryItems: GalleryItem[] = [
  // Sports & Games
  {
    title: "Championship 9-Hole Golf Fairway",
    category: "sports",
    src: "/images/GOLF.webp",
    tag: "Golf Course",
    desc: "Scenic golf course with water bodies and greens.",
  },
  {
    title: "Football Fields & Turfs",
    category: "sports",
    src: "/images/Football-.webp",
    tag: "Sports Arena",
    desc: "FIFA-standard turf for tournament play and corporate matches.",
  },
  {
    title: "Badminton & Volleyball Courts",
    category: "sports",
    src: "/images/Badminton.webp",
    tag: "Court Games",
    desc: "Well-lit competitive courts for day and evening games.",
  },
  {
    title: "Lawn Tennis & Basketball",
    category: "sports",
    src: "/images/basketball.webp",
    tag: "Ball Courts",
    desc: "Full-sized multi-sport courts for tennis, basketball, and baseball.",
  },
  {
    title: "Modern Fitness & Training Gym",
    category: "sports",
    src: "/images/gym.webp",
    tag: "Health & Fitness",
    desc: "Cardio, weight training, and certified physical trainers.",
  },
  {
    title: "Billiards & Executive Games Lounge",
    category: "sports",
    src: "/images/Billiards-and-cards.webp",
    tag: "Club Games",
    desc: "Snooker, billiards, table games, and indoor club activities.",
  },

  // Agro, Fields & Nature
  {
    title: "Organic Agro Farms & Orchards",
    category: "agro",
    src: "/images/Argo.webp",
    tag: "Commercial Agro",
    desc: "Lush plantations of mango, dragon fruit, malta, and organic greens.",
  },
  {
    title: "Moulvibazar Tea Garden Enclave",
    category: "agro",
    src: "/images/tea_garden.webp",
    tag: "Tea Garden",
    desc: "Lush rolling green tea contours reflecting Moulvibazar's authentic tea heritage.",
  },
  {
    title: "Sweet Pineapple Terraces",
    category: "agro",
    src: "/images/pineapple.webp",
    tag: "Pineapple Groves",
    desc: "Honey Queen pineapple fields yielding juicy estate harvests for guests and dining.",
  },
  {
    title: "Fragrant Litchi Orchards",
    category: "agro",
    src: "/images/lichi.webp",
    tag: "Litchi Orchard",
    desc: "Vibrant sweet litchi groves flowering in spring and harvested fresh across the agro grounds.",
  },
  {
    title: "Citrus & Satkora Lemon Groves",
    category: "agro",
    src: "/images/lemon.webp",
    tag: "Lemon & Satkora",
    desc: "Kagoji lemon and indigenous Sylheti Satkora citrus groves for farm-to-table culinary dishes.",
  },
  {
    title: "Organic Mango Orchards",
    category: "agro",
    src: "/images/mango.webp",
    tag: "Mango Orchard",
    desc: "Sweet summer mango harvests spanning sunlit groves throughout the agro-zones.",
  },
  {
    title: "Black Jamun (Jaam) Groves",
    category: "agro",
    src: "/images/jaam.webp",
    tag: "Jaam Groves",
    desc: "Deep purple Black Jamun trees providing natural shade and organic fruit yields.",
  },
  {
    title: "Paddy & Wheat Farmland Topography",
    category: "agro",
    src: "/images/rice_fields.webp",
    tag: "Crop Fields",
    desc: "Golden paddy (ধান ক্ষেত) and emerald wheat fields (গম ক্ষেত) spanning the estate.",
  },
  {
    title: "Fresh Harvests & Organic Vegetables",
    category: "agro",
    src: "/images/man-farmer-with-homemade-vegetables.webp",
    tag: "Farm to Table",
    desc: "Fresh, pesticide-free produce served daily across resort restaurants.",
  },
  {
    title: "Horse Riding Trails",
    category: "agro",
    src: "/images/Horse-Riding.webp",
    tag: "Equestrian",
    desc: "Horse riding through shaded trails and open countryside meadows.",
  },
  {
    title: "Recreational Lake Angling & Fishing",
    category: "agro",
    src: "/images/Fishing.webp",
    tag: "Ponds & Lakes",
    desc: "10 natural ponds stocked for tranquil fishing and angling.",
  },
  {
    title: "Estate Nature Cycling Trails",
    category: "agro",
    src: "/images/Cycling.webp",
    tag: "Eco Trails",
    desc: "Paved cycling and jogging loops winding through orchards and waterways.",
  },

  // Stay & Cottages
  {
    title: "Eco Cottages & Thatch Pavilions",
    category: "stay",
    src: "/images/Sampan-Agro-%26-Golf-Resort%201.webp",
    tag: "Cottages",
    desc: "Traditional thatched eco-cottages blending rustic charm with 5-star comfort.",
  },
  {
    title: "Scenic Waterfront Villas",
    category: "stay",
    src: "/images/lakeside-villas.webp",
    tag: "Lakeside Villas",
    desc: "Private waterfront villas overlooking natural ponds with wooden decks.",
  },
  {
    title: "Presidential Luxury Bedroom Suites",
    category: "stay",
    src: "/images/Room-Web-image.webp",
    tag: "Suite Living",
    desc: "King beds, panoramic glass vistas, smart climate control, and butler service.",
  },
  {
    title: "Executive Cottage Bedroom Interiors",
    category: "stay",
    src: "/images/Room-Web-image3.webp",
    tag: "Bedrooms",
    desc: "Finely appointed eco-luxury interiors designed for restful retreats.",
  },
  {
    title: "Resort Living Rooms & Verandas",
    category: "stay",
    src: "/images/Room-Web-image7.webp",
    tag: "Lounge Areas",
    desc: "Spacious family suites with private balconies looking over the fairways.",
  },

  // Dining & Leisure
  {
    title: "Crystal Clear Resort Swimming Pools",
    category: "leisure",
    src: "/images/Swimming-Pool.webp",
    tag: "Aquatics",
    desc: "4 luxury swimming pools including heated and separate kids' splash areas.",
  },
  {
    title: "Boating & Pond Kayaking Docks",
    category: "leisure",
    src: "/images/Boating-and-Kayaking.webp",
    tag: "Lake Adventures",
    desc: "Kayaks, pedal boats, and traditional dinghies across calm ponds.",
  },
  {
    title: "Farm-to-Table Gourmet Restaurant",
    category: "leisure",
    src: "/images/Restaurant.webp",
    tag: "Gastronomy",
    desc: "Multi-cuisine dining featuring fresh organic meat, poultry, and dairy.",
  },
  {
    title: "Private Cinema & Movie Theater",
    category: "leisure",
    src: "/images/Movie-Theater.webp",
    tag: "Entertainment",
    desc: "Surround sound cinema screening films and sporting tournaments.",
  },
  {
    title: "Resort Mosque & Prayer Sanctum",
    category: "leisure",
    src: "/images/Mosque.webp",
    tag: "Prayer Facilities",
    desc: "Spacious and peaceful separate prayer facilities for men and women.",
  },
  {
    title: "Amusement Park & Kids' Gaming Zone",
    category: "leisure",
    src: "/images/Amusement-Park.webp",
    tag: "Kids & Family",
    desc: "Rides, arcade games, and playground zones for children of all ages.",
  },
  {
    title: "Holistic Wellness Salon & Spa",
    category: "leisure",
    src: "/images/Salon-and-Spa.webp",
    tag: "Wellness",
    desc: "Therapeutic massage treatments, herbal steam rooms, and salon care.",
  },

  // Documents & Certificates
  {
    title: "Official Member Loyalty Card",
    category: "docs",
    src: "/images/loyalty-card-permanent-member.webp",
    tag: "Loyalty Card",
    desc: "Exclusive card granting partner discounts and VIP resort privileges.",
  },
  {
    title: "Certificate of Member",
    category: "docs",
    src: "/images/certificate-of-member.webp",
    tag: "Membership",
    desc: "Formal certificate recognizing full privileges and club entry.",
  },
  {
    title: "Certificate of Share (100% Sub-Kabula)",
    category: "docs",
    src: "/images/certificate-of-share.webp",
    tag: "Deed & Title",
    desc: "Land ownership certificate backing physical sub-kabula deed registration.",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#ffffff] text-[#14261c] border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-slow flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Photo Showcase
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
              Estate &amp; Facilities Gallery
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              Explore authentic glimpses of our 100+ acre grounds — from international sports courts and eco-cottages to golden wheat and paddy fields.
            </p>
          </div>

          {/* Quick Brochure CTA Button */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="/brochure.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-5 py-3 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#12583d] transition-all hover:scale-105"
            >
              <span>📄 View Official Brochure</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-stone-100 mb-10">
          {[
            { id: "all", label: "All Photos", count: galleryItems.length },
            { id: "sports", label: "Golf & Sports Arena", count: 6 },
            { id: "agro", label: "Agro, Wheat & Paddy Fields", count: 6 },
            { id: "stay", label: "Cottages & Villas", count: 5 },
            { id: "leisure", label: "Dining, Pools & Leisure", count: 7 },
            { id: "docs", label: "Cards & Certificates", count: 3 },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0b4a32] text-white shadow-md scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200/80"
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 opacity-60 text-[11px]">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Image Grid with Staggered Reveal */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200/90 bg-[#fbfcf9] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-700/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              </div>

              {/* Card Meta */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#b6e59c] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1">
                  {item.tag}
                </span>
                <h4 className="font-heading text-sm font-bold leading-snug line-clamp-2">
                  {item.title}
                </h4>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                🔍
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Highlight Callout Box - Slow Reveal */}
        <div className="reveal-slow mt-16 rounded-3xl bg-gradient-to-br from-[#07291c] via-[#0b3a28] to-[#07291c] text-white p-8 sm:p-12 shadow-xl border border-emerald-900/40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#b6e59c] bg-white/10 px-3.5 py-1 rounded-full mb-3">
                Official Documentation
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-3">
                View the complete original project brochure
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-3">
                Access the official brochure pages online. Note: Newer facilities—such as our <strong className="text-white font-semibold">Baseball diamond</strong>, <strong className="text-white font-semibold">FIFA football fields</strong>, <strong className="text-white font-semibold">Tennis &amp; Cricket grounds</strong>, authentic <strong className="text-white font-semibold">cottages</strong>, and expansive <strong className="text-white font-semibold">Wheat &amp; Paddy fields</strong>—are our latest masterplan expansions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-emerald-200/80">
                <span className="bg-white/10 px-3 py-1 rounded-full">✓ 38MB High-Res Brochure</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">✓ Complete Masterplan Drawings</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">✓ Free Online Preview</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="/brochure.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#66b447] px-7 py-3.5 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Open Brochure in New Tab</span>
                <span>↗</span>
              </a>
              <a
                href="/Sampan%20Agro%20Golf%20Resort%20.html"
                download="Sampan-Agro-Golf-Resort-Brochure.html"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/15 transition-all"
              >
                <span>Download File</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0b3a28] rounded-2xl overflow-hidden border border-emerald-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 text-white bg-gradient-to-t from-[#07291c] to-[#0b3a28]">
                <span className="text-xs uppercase font-bold text-[#b6e59c] tracking-widest block mb-1">
                  {selectedImage.tag}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.desc && (
                  <p className="text-emerald-100/80 text-sm leading-relaxed">
                    {selectedImage.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
