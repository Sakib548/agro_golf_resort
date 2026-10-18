"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Flag,
  Home,
  Waves,
  Sprout,
  FileCheck,
  Check,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export interface GalleryPhotoItem {
  id: string;
  title: string;
  category: "sports" | "stay" | "agro" | "leisure" | "docs";
  src: string;
  tag: string;
  desc?: string;
  featured?: boolean;
}

const allGalleryPhotos: GalleryPhotoItem[] = [
  // 1. Elite Sports & Athletics
  {
    id: "g-sp-1",
    title: "Championship Fairway Golf Swing",
    category: "sports",
    src: "/images/golf-swing-action.webp",
    tag: "9-Hole Golf Course",
    desc: "Player executing a dynamic tee-off drive over the lake hazard in afternoon golden sunlight.",
    featured: true,
  },
  {
    id: "g-sp-2",
    title: "Tournament Putting Green & Pin",
    category: "sports",
    src: "/images/golf-putting-green.webp",
    tag: "Putting Action",
    desc: "Golfer lining up a birdie putt towards the yellow flagstick with partner and golf cart alongside.",
  },
  {
    id: "g-sp-3",
    title: "Golf Academy Tiered Driving Range",
    category: "sports",
    src: "/images/golf-driving-range.webp",
    tag: "Driving Range",
    desc: "Covered luxury driving range bays with automated ball targets spanning a misty valley.",
  },
  {
    id: "g-sp-4",
    title: "Championship 9-Hole Golf Course",
    category: "sports",
    src: "/images/GOLF.webp",
    tag: "Championship Fairway",
    desc: "Nine holes with scenic water ponds, short & long driving ranges, and professional trainers.",
    featured: true,
  },
  {
    id: "g-sp-5",
    title: "Championship Lake-View Fairway",
    category: "sports",
    src: "/images/high-angle-view-golf-course-by-lake (2).webp",
    tag: "Water Hazards",
    desc: "Aerial view of championship fairways contoured around natural water hazards.",
  },
  {
    id: "g-sp-6",
    title: "International Golf Green & Contours",
    category: "sports",
    src: "/images/golf-vehicle-fiesld.webp",
    tag: "Golf Greens",
    desc: "Undulating fairways surrounded by Moulvibazar's natural tea valley topography.",
  },
  {
    id: "g-sp-7",
    title: "Sunset Putting Green & Golf Cart",
    category: "sports",
    src: "/images/scenic-villa-overlooking-golf-course-(2).webp",
    tag: "Sunset Green",
    desc: "Evening putting green with golf bag and cart positioned along the lakeside villa contour.",
  },
  {
    id: "g-sp-8",
    title: "Modern Golf Course Clubhouse",
    category: "sports",
    src: "/images/modern-architecture-golf-course-clubhouses.webp",
    tag: "Golf Clubhouse",
    desc: "Luxury clubhouse facilities with player lounges, pro shop, and terrace viewpoints.",
  },
  {
    id: "g-sp-9",
    title: "FIFA Football Turfs & Tournaments",
    category: "sports",
    src: "/images/Football-.webp",
    tag: "4 Football Turfs",
    desc: "4 high-grade FIFA-specification turfs for professional tournaments and corporate leagues.",
  },
  {
    id: "g-sp-10",
    title: "Full-Sized Soccer Tournament Arena",
    category: "sports",
    src: "/images/soccer-field-with-soccer-field-withs-soccer-field-background.webp",
    tag: "Tournament Arena",
    desc: "Expansive green playing grounds equipped for multi-tier sports leagues.",
  },
  {
    id: "g-sp-11",
    title: "Tennis, Basketball & Multi-Courts",
    category: "sports",
    src: "/images/basketball.webp",
    tag: "Athletic Courts",
    desc: "Lawn tennis, basketball, badminton, volleyball, and baseball practice fields.",
  },
  {
    id: "g-sp-12",
    title: "Badminton & Volleyball Courts",
    category: "sports",
    src: "/images/Badminton.webp",
    tag: "Court Sports",
    desc: "Regulation courts with shock-absorbing surfaces for dynamic daily games.",
  },
  {
    id: "g-sp-13",
    title: "High-Tech Fitness Gymnasium",
    category: "sports",
    src: "/images/gym.webp",
    tag: "Fitness Center",
    desc: "International standard gym with state-of-the-art cardio and strength equipment.",
  },
  {
    id: "g-sp-14",
    title: "Billiards & Executive Games Lounge",
    category: "sports",
    src: "/images/Billiards-and-cards.webp",
    tag: "Club Games",
    desc: "Indoor billiards, snooker, table games, and executive cards room.",
  },

  // 2. Stay — Cottages & Villas
  {
    id: "g-st-1",
    title: "Lakeside Luxury Waterfront Villas",
    category: "stay",
    src: "/images/lakeside-villas.webp",
    tag: "Lakeside Villas",
    desc: "Waterfront villas overlooking natural ponds with wooden decks and private verandas.",
    featured: true,
  },
  {
    id: "g-st-2",
    title: "Authentic Shan Thatched Eco-Cottages",
    category: "stay",
    src: "/images/Sampan-Agro-%26-Golf-Resort%201.webp",
    tag: "Shan Cottages",
    desc: "Authentic thatched eco-cottages blending rustic heritage with 5-star climate-controlled luxury.",
    featured: true,
  },
  {
    id: "g-st-3",
    title: "Fairway Overlook Luxury Villas",
    category: "stay",
    src: "/images/scenic-villa-overlooking-golf-course (1).webp",
    tag: "Golf Villas",
    desc: "Exclusive villas situated along fairway edges offering private balcony views of the greens.",
  },
  {
    id: "g-st-4",
    title: "Presidential Bedroom Master Suite",
    category: "stay",
    src: "/images/Room-Web-image.webp",
    tag: "Presidential Suite",
    desc: "Spacious master suites featuring panoramic fairway views, king bed, and personal butler service.",
  },
  {
    id: "g-st-5",
    title: "Executive Cottage Bedroom Interiors",
    category: "stay",
    src: "/images/Room-Web-image3.webp",
    tag: "Cottage Interior",
    desc: "Natural wood accents, climate control, and artisanal handcrafted furnishings.",
  },
  {
    id: "g-st-6",
    title: "Scenic Villa Living Room & Lounge",
    category: "stay",
    src: "/images/Room-Web-image7.webp",
    tag: "Living Room",
    desc: "Family living suites designed for leisurely gatherings and weekend retreats.",
  },
  {
    id: "g-st-7",
    title: "Deluxe Resort Guest Quarters",
    category: "stay",
    src: "/images/Room-Web-image2.webp",
    tag: "Guest Suites",
    desc: "Warm ambient interiors crafted with sustainable natural textures and ensuite spa baths.",
  },
  {
    id: "g-st-8",
    title: "Cozy Family Suite & Juvenile Quarters",
    category: "stay",
    src: "/images/small-juvenile-bedroom-arrangement.webp",
    tag: "Family Suites",
    desc: "Thoughtfully configured multi-bed arrangements suited for family vacations.",
  },

  // 3. Agro Farmlands & Nature
  {
    id: "g-ag-1",
    title: "Golden Paddy Farmland",
    category: "agro",
    src: "/images/rice_fields.webp",
    tag: "Paddy Farmland",
    desc: "Expansive seasonal paddy fields preserved in harmony with the resort landscape.",
    featured: true,
  },
  {
    id: "g-ag-2",
    title: "Emerald & Golden Wheat Fields",
    category: "agro",
    src: "/images/wheat_fields.webp",
    tag: "Wheat Farmland",
    desc: "Rolling golden wheat fields weaving between the water bodies and fairways.",
    featured: true,
  },
  {
    id: "g-ag-3",
    title: "Moulvibazar Heritage Tea Garden",
    category: "agro",
    src: "/images/tea_garden.webp",
    tag: "Tea Enclave",
    desc: "Lush rolling green tea contours reflecting Moulvibazar's authentic tea heritage.",
  },
  {
    id: "g-ag-4",
    title: "Commercial Agro Farms & Orchards",
    category: "agro",
    src: "/images/Argo.webp",
    tag: "Commercial Agro",
    desc: "Mango, dragon fruit, malta, and citrus orchards generating commercial yields.",
  },
  {
    id: "g-ag-5",
    title: "Sweet Summer Mango Orchards",
    category: "agro",
    src: "/images/mango.webp",
    tag: "Mango Groves",
    desc: "Rows of thriving mango trees yielding sweet, chemical-free harvests every summer.",
  },
  {
    id: "g-ag-6",
    title: "Sweet Pineapple Terraces",
    category: "agro",
    src: "/images/pineapple.webp",
    tag: "Pineapple Terraces",
    desc: "Sweet Honey Queen pineapple plantations cultivated naturally for estate dining.",
  },
  {
    id: "g-ag-7",
    title: "Fragrant Sweet Litchi Orchards",
    category: "agro",
    src: "/images/lichi.webp",
    tag: "Litchi Orchards",
    desc: "Vibrant sweet litchi groves producing rich clusters of succulent fruit.",
  },
  {
    id: "g-ag-8",
    title: "Citrus & Lemon Groves",
    category: "agro",
    src: "/images/lemon.webp",
    tag: "Citrus Groves",
    desc: "Aromatic Kagoji lemon and indigenous citrus trees supplying the kitchens.",
  },
  {
    id: "g-ag-9",
    title: "Black Jamun Natural Groves",
    category: "agro",
    src: "/images/jaam.webp",
    tag: "Jamun Trees",
    desc: "Deep purple Black Jamun trees providing shaded trails and antioxidant fruit yields.",
  },
  {
    id: "g-ag-10",
    title: "Farm-Fresh Organic Vegetables",
    category: "agro",
    src: "/images/man-farmer-with-homemade-vegetables.webp",
    tag: "Organic Produce",
    desc: "Chemical-free vegetables harvested daily by local agriculturalists for the resort kitchens.",
  },
  {
    id: "g-ag-11",
    title: "Equestrian Club & Horseback Trails",
    category: "agro",
    src: "/images/Horse-Riding.webp",
    tag: "Horseback Trails",
    desc: "Guided horseback trails winding through orchards and lakeside grassy loops.",
  },
  {
    id: "g-ag-12",
    title: "Scenic Cycling & Jogging Paths",
    category: "agro",
    src: "/images/Cycling.webp",
    tag: "Cycling Paths",
    desc: "Miles of paved, tree-shaded loops winding across the 100+ acre grounds.",
  },
  {
    id: "g-ag-13",
    title: "Freshwater Lake Angling & Fishing",
    category: "agro",
    src: "/images/Fishing.webp",
    tag: "Lake Angling",
    desc: "Stocked natural freshwater ponds offering tranquil catch-and-release sport angling.",
  },

  // 4. Aquatic Leisure, Dining & Wellness
  {
    id: "g-le-1",
    title: "4 Luxury Resort Swimming Pools",
    category: "leisure",
    src: "/images/Swimming-Pool.webp",
    tag: "4 Swimming Pools",
    desc: "Temperature-controlled swimming pools, infinity lap pool, and children's splash pool.",
    featured: true,
  },
  {
    id: "g-le-2",
    title: "10 Natural Ponds & Kayaking Docks",
    category: "leisure",
    src: "/images/Boating-and-Kayaking.webp",
    tag: "Boating & Kayak",
    desc: "Calm water bodies for paddle boating, tandem kayaking, and sunset dinghy rides.",
    featured: true,
  },
  {
    id: "g-le-3",
    title: "Grand Entrance Gateway & Fountains",
    category: "leisure",
    src: "/images/3.webp",
    tag: "Grand Gateway",
    desc: "Majestic daytime entrance portal featuring cascading fountain waterways and tropical palm promenade.",
  },
  {
    id: "g-le-4",
    title: "Night Illumination Grand Gateway",
    category: "leisure",
    src: "/images/4.webp",
    tag: "Night Ambiance",
    desc: "Stunning night illumination with full moon, shimmering fountains, and glowing neon resort attractions.",
  },
  {
    id: "g-le-5",
    title: "Aerial 3D Master View & Amusement Park",
    category: "leisure",
    src: "/images/1.webp",
    tag: "3D Master View",
    desc: "Architectural aerial rendering showing signature resort hotel, water park, central lake, and golf grounds.",
  },
  {
    id: "g-le-6",
    title: "Farm-to-Table Gourmet Restaurant",
    category: "leisure",
    src: "/images/Restaurant.webp",
    tag: "Gourmet Dining",
    desc: "Multi-cuisine restaurant preparing fresh organic dishes with seasonal estate harvests.",
  },
  {
    id: "g-le-7",
    title: "Private Fireside Dining Lounge",
    category: "leisure",
    src: "/images/restaurant-table-12-persons-with-blue-chairs-fireplace-white-brick-walls-wide-window.webp",
    tag: "Private Dining",
    desc: "Private 12-person dining salon and cozy fireside banquet lounge for VIP gatherings.",
  },
  {
    id: "g-le-8",
    title: "Private Cinema & 3D Movie Theater",
    category: "leisure",
    src: "/images/Movie-Theater.webp",
    tag: "Movie Theater",
    desc: "Acoustic surround-sound screening room for major sporting events and film viewings.",
  },
  {
    id: "g-le-9",
    title: "Spiritual Mosque & Prayer Sanctum",
    category: "leisure",
    src: "/images/Mosque.webp",
    tag: "Prayer Facilities",
    desc: "Serene, beautifully ventilated separate prayer halls for men and women set amid greenery.",
  },
  {
    id: "g-le-10",
    title: "Amusement Park & Kids' Gaming Zone",
    category: "leisure",
    src: "/images/Amusement-Park.webp",
    tag: "Kids & Family",
    desc: "Ferris wheel, carousel, bumper cars, and indoor gaming arcade for children.",
  },
  {
    id: "g-le-11",
    title: "European Wellness Salon & Spa",
    category: "leisure",
    src: "/images/Salon-and-Spa.webp",
    tag: "Spa & Wellness",
    desc: "Holistic therapeutic massages, herbal steam bath, Swedish sauna, and premium salon grooming.",
  },
  {
    id: "g-le-12",
    title: "Sunset Outdoor Clubhouse Lounge",
    category: "leisure",
    src: "/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp",
    tag: "Clubhouse Lounge",
    desc: "Open-air sunset terrace with plush sofa seating facing the golf fairways.",
  },
  {
    id: "g-le-13",
    title: "Executive Library & Reading Sanctuary",
    category: "leisure",
    src: "/images/reading-lounge.webp",
    tag: "Reading Lounge",
    desc: "Quiet reading sanctuary with curated books, private workspaces, and garden vistas.",
  },

  // 5. Official Documents & Member Cards
  {
    id: "g-dc-1",
    title: "Official Member Loyalty Card",
    category: "docs",
    src: "/images/loyalty-card-permanent-member.webp",
    tag: "Loyalty Card",
    desc: "Exclusive numbered loyalty card granting 10%–50% privileges across Sampan Group hotels.",
    featured: true,
  },
  {
    id: "g-dc-2",
    title: "Certificate of Member (Club Access)",
    category: "docs",
    src: "/images/certificate-of-member.webp",
    tag: "Club Certificate",
    desc: "Formal certificate recognizing full privileges and exclusive tournament entry.",
  },
  {
    id: "g-dc-3",
    title: "Certificate of Share (100% Sub-Kabula)",
    category: "docs",
    src: "/images/certificate-of-share.webp",
    tag: "Sub-Kabula Deed",
    desc: "Land ownership certificate backing physical sub-kabula deed registration for your estate share.",
    featured: true,
  },
  {
    id: "g-dc-4",
    title: "Official 100+ Acre Masterplan Blueprint",
    category: "docs",
    src: "/images/2.webp",
    tag: "Masterplan Blueprint",
    desc: "Architectural top-down masterplan layout showing signature 'S' curve resort, ponds, amphitheatre, and fairways.",
  },
];

const galleryChapters = [
  {
    id: "sports",
    num: "01",
    title: "Elite Sports & Athletics Arena",
    tag: "9-Hole Golf · 4 Football Turfs · FIFA Standard",
    Icon: Flag,
    accent: "#0b4a32",
  },
  {
    id: "stay",
    num: "02",
    title: "Living & Stays — Shan Cottages & Waterfront Villas",
    tag: "Shan Cottages · Waterfront Villas · Presidential Suites",
    Icon: Home,
    accent: "#b8892b",
  },
  {
    id: "agro",
    num: "03",
    title: "Nature, Farmlands & Working Agro Sanctuary",
    tag: "Paddy & Wheat Fields · Tea Garden · Tropical Orchards",
    Icon: Sprout,
    accent: "#66b447",
  },
  {
    id: "leisure",
    num: "04",
    title: "Aquatic Leisure, 5-Star Dining & Wellness",
    tag: "4 Pools · 10 Ponds · Farm-to-Table · Spa · MP Centre",
    Icon: Waves,
    accent: "#0284c7",
  },
  {
    id: "docs",
    num: "05",
    title: "Deeded Ownership, Certificates & VIP Cards",
    tag: "100% Sub-Kabula Deed · Member Card · Masterplan Blueprint",
    Icon: FileCheck,
    accent: "#d9aa4a",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhotoItem | null>(null);

  const currentList =
    activeTab === "all"
      ? allGalleryPhotos
      : allGalleryPhotos.filter((p) => p.category === activeTab);

  const selectedIndex = selectedPhoto
    ? currentList.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedPhoto(currentList[selectedIndex - 1]);
    } else if (selectedIndex === 0) {
      setSelectedPhoto(currentList[currentList.length - 1]);
    }
  }, [selectedIndex, currentList]);

  const handleNext = useCallback(() => {
    if (selectedIndex >= 0 && selectedIndex < currentList.length - 1) {
      setSelectedPhoto(currentList[selectedIndex + 1]);
    } else if (selectedIndex === currentList.length - 1) {
      setSelectedPhoto(currentList[0]);
    }
  }, [selectedIndex, currentList]);

  useEffect(() => {
    if (!selectedPhoto) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-[#f6f8f2] text-[#14261c] border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Divided Photo Showcase
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14261c] mt-3">
              Estate &amp; Facilities Gallery
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              Explore authentic glimpses across our 100+ acre grounds — divided by masterplan texts into championship sports, authentic thatched cottages, golden farmlands, and lakes.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="/brochure.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#12583d] transition-all hover:scale-105 active:scale-95"
            >
              <span>📄 View Official Brochure</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Quick Filter Pill Dock */}
        <div className="sticky top-20 z-20 bg-[#f6f8f2]/95 backdrop-blur-md py-4 mb-12 border-y border-stone-200/80">
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 scrollbar-none">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === "all"
                    ? "bg-[#0b4a32] text-white shadow-md scale-105"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Sparkles className="size-4" />
                <span>All Chapters</span>
                <span className="opacity-70 text-[11px]">({allGalleryPhotos.length})</span>
              </button>

              {galleryChapters.map((ch) => {
                const isActive = activeTab === ch.id;
                const count = allGalleryPhotos.filter((p) => p.category === ch.id).length;
                const ChapterIcon = ch.Icon;

                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setActiveTab(ch.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#0b4a32] text-white shadow-md scale-105 font-bold"
                        : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <ChapterIcon className="size-3.5 shrink-0" />
                    <span>{ch.num}. {ch.title.split("—")[0].split("&")[0].trim()}</span>
                    <span className="opacity-60 text-[11px]">({count})</span>
                  </button>
                );
              })}
            </div>

            {activeTab !== "all" && (
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className="shrink-0 text-xs font-bold text-[#0b4a32] hover:text-[#66b447] underline ml-auto"
              >
                Show All
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            CHAPTER RENDERING
           ======================================================== */}
        {activeTab === "all" ? (
          <div className="space-y-20">
            {galleryChapters.map((ch) => {
              const photos = allGalleryPhotos.filter((p) => p.category === ch.id);
              if (photos.length === 0) return null;

              const featuredPhotos = photos.filter((p) => p.featured);
              const standardPhotos = photos.filter((p) => !p.featured);

              return (
                <div key={ch.id} className="pt-2 border-t border-stone-200/90 first:border-t-0">
                  {/* Chapter Header */}
                  <div className="glassmorphism rounded-3xl p-6 sm:p-8 mb-8 border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                          Chapter {ch.num}
                        </span>
                        <span className="text-xs uppercase font-bold text-stone-500">
                          {photos.length} Photos
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#14261c]">
                        {ch.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveTab(ch.id)}
                      className="self-start md:self-auto inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-sm"
                    >
                      <span>Focus Zone</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>

                  {/* Asymmetrical Layout */}
                  <div className="space-y-6">
                    {featuredPhotos.length > 0 && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {featuredPhotos.map((photo) => (
                          <div
                            key={photo.id}
                            onClick={() => setSelectedPhoto(photo)}
                            className="bento-card neo-hairline group relative cursor-pointer overflow-hidden p-0"
                          >
                            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-900 rounded-t-[1.4rem]">
                              <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                              <div className="absolute top-4 left-4">
                                <span className="inline-block text-[11px] uppercase font-extrabold tracking-wider text-[#b6e59c] bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                                  ★ Featured {photo.tag}
                                </span>
                              </div>

                              <div className="absolute top-4 right-4 size-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Eye className="size-4" />
                              </div>
                            </div>

                            <div className="p-5 sm:p-6 bg-white">
                              <h4 className="font-heading text-lg sm:text-xl font-bold text-[#14261c] group-hover:text-[#0b4a32] transition-colors mb-1">
                                {photo.title}
                              </h4>
                              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                {photo.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {standardPhotos.map((photo) => (
                        <div
                          key={photo.id}
                          onClick={() => setSelectedPhoto(photo)}
                          className="bento-card neo-hairline group relative cursor-pointer overflow-hidden p-0 flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 rounded-t-[1.4rem]">
                              <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                              <div className="absolute top-3 left-3">
                                <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#b6e59c] bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                                  {photo.tag}
                                </span>
                              </div>

                              <div className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Eye className="size-4" />
                              </div>
                            </div>

                            <div className="p-4 bg-white rounded-b-[1.4rem]">
                              <h4 className="font-heading text-sm font-bold text-[#14261c] leading-snug line-clamp-2 group-hover:text-[#0b4a32] transition-colors mb-1">
                                {photo.title}
                              </h4>
                              <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                                {photo.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Focused Category Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentList.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="bento-card neo-hairline group relative cursor-pointer overflow-hidden p-0 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 rounded-t-[1.4rem]">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#b6e59c] bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        {photo.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="size-4" />
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-b-[1.4rem]">
                    <h4 className="font-heading text-sm font-bold text-[#14261c] leading-snug line-clamp-2 group-hover:text-[#0b4a32] transition-colors mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                      {photo.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Brochure Highlight Callout Box */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#07291c] via-[#0b3a28] to-[#07291c] text-white p-8 sm:p-12 shadow-2xl border border-emerald-900/40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#b6e59c] bg-white/10 px-3.5 py-1 rounded-full mb-3">
                Official Documentation
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-3">
                View the Complete Master Project Brochure
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-4">
                Access official masterplan blueprints, deed schedules, and project architectural drawings online.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-emerald-200/80">
                <span className="bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                  <Check className="size-3 text-[#b6e59c]" /> 38MB High-Res Brochure
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                  <Check className="size-3 text-[#b6e59c]" /> Complete Masterplan Drawings
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                  <Check className="size-3 text-[#b6e59c]" /> Free Online Preview
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="/brochure.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#66b447] px-7 py-3.5 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-lg hover:scale-105 active:scale-95 text-center"
              >
                <span>Open Brochure in New Tab</span>
                <span>↗</span>
              </a>
              <a
                href="/Sampan%20Agro%20Golf%20Resort%20.html"
                download="Sampan-Agro-Golf-Resort-Brochure.html"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/15 transition-all text-center"
              >
                <span>Download File</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Fullscreen Interactive Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#0b3a28] rounded-3xl overflow-hidden border border-emerald-600/40 shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#07291c] text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#b6e59c] bg-white/10 px-3 py-1 rounded-full">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-xs text-emerald-200/70 font-mono">
                    {selectedIndex + 1} of {currentList.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="size-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  priority
                  className="object-contain"
                />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg active:scale-90"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg active:scale-90"
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              <div className="p-6 bg-gradient-to-t from-[#051f15] to-[#07291c] text-white border-t border-emerald-900/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-0.5">
                      {selectedPhoto.title}
                    </h3>
                    {selectedPhoto.desc && (
                      <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
                        {selectedPhoto.desc}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#66b447] px-4 py-2 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all"
                    >
                      <span>Inquire About This</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
