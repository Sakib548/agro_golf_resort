"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Flag,
  Home,
  Waves,
  Sprout,
  FileCheck,
  UtensilsCrossed,
  Music,
  Map,
  FileText,
  Search,
  X,
} from "lucide-react";

interface GalleryPhoto {
  title: string;
  category: "sports" | "stay" | "leisure" | "agro" | "docs";
  src: string;
  tag: string;
  desc?: string;
}

const galleryPhotos: GalleryPhoto[] = [
  // 1. Elite Sports & Athletics
  {
    title: "Championship Fairway Golf Swing",
    category: "sports",
    src: "/images/golf-swing-action.webp",
    tag: "Golf Swing Action",
    desc: "Player executing a dynamic tee-off drive over the lake hazard in afternoon golden sunlight.",
  },
  {
    title: "Tournament Putting Green & Pin",
    category: "sports",
    src: "/images/golf-putting-green.webp",
    tag: "Putting Action",
    desc: "Golfer lining up a birdie putt towards the yellow flagstick with partner and golf cart alongside.",
  },
  {
    title: "Golf Academy Tiered Driving Range",
    category: "sports",
    src: "/images/golf-driving-range.webp",
    tag: "Driving Range",
    desc: "Covered luxury driving range bays with automated ball targets spanning a misty valley.",
  },
  {
    title: "Championship 9-Hole Golf Course",
    category: "sports",
    src: "/images/GOLF.webp",
    tag: "Golf Course",
    desc: "Nine holes with scenic water ponds, short & long driving ranges, and professional trainers.",
  },
  {
    title: "Championship Lake-View Fairway",
    category: "sports",
    src: "/images/high-angle-view-golf-course-by-lake (2).webp",
    tag: "Lake Fairways",
    desc: "Aerial view of championship fairways contoured around natural water hazards.",
  },
  {
    title: "International Golf Green & Contours",
    category: "sports",
    src: "/images/golf-vehicle-fiesld.webp",
    tag: "Golf Greens",
    desc: "Undulating fairways surrounded by Moulvibazar's natural tea valley topography.",
  },
  {
    title: "Sunset Putting Green & Golf Cart",
    category: "sports",
    src: "/images/scenic-villa-overlooking-golf-course-(2).webp",
    tag: "Sunset Green",
    desc: "Evening putting green with golf bag and cart positioned along the lakeside villa contour.",
  },
  {
    title: "Modern Golf Course Clubhouse",
    category: "sports",
    src: "/images/modern-architecture-golf-course-clubhouses.webp",
    tag: "Golf Clubhouse",
    desc: "Luxury clubhouse facilities with player lounges, pro shop, and terrace viewpoints.",
  },
  {
    title: "FIFA Football Turfs & Tournaments",
    category: "sports",
    src: "/images/Football-.webp",
    tag: "Football Turfs",
    desc: "4 high-grade FIFA-specification turfs for professional tournaments and corporate leagues.",
  },
  {
    title: "Tennis, Basketball & Multi-Courts",
    category: "sports",
    src: "/images/basketball.webp",
    tag: "Sports Courts",
    desc: "Lawn tennis, basketball, badminton, and baseball practice fields.",
  },
  {
    title: "High-Tech Fitness Gymnasium",
    category: "sports",
    src: "/images/gym.webp",
    tag: "Fitness Center",
    desc: "International standard gym with state-of-the-art cardio and strength equipment.",
  },
  {
    title: "Billiards & Executive Games Lounge",
    category: "sports",
    src: "/images/Billiards-and-cards.webp",
    tag: "Club Games",
    desc: "Indoor billiards, snooker, table games, and executive cards room.",
  },

  // 2. Stay: Luxury Villas & Cottages
  {
    title: "Lakeside Luxury Villas",
    category: "stay",
    src: "/images/lakeside-villas.webp",
    tag: "Lakeside Villas",
    desc: "Waterfront villas overlooking natural ponds with wooden decks and private verandas.",
  },
  {
    title: "Traditional Eco-Cottages",
    category: "stay",
    src: "/images/Sampan-Agro-%26-Golf-Resort%201.webp",
    tag: "Cottages",
    desc: "Authentic thatched eco-cottages blending rustic heritage with 5-star amenities.",
  },
  {
    title: "Presidential Bedroom Suite",
    category: "stay",
    src: "/images/Room-Web-image.webp",
    tag: "Presidential Suite",
    desc: "Spacious master suites featuring panoramic fairway views and personal butler service.",
  },
  {
    title: "Executive Cottage Bedroom Interiors",
    category: "stay",
    src: "/images/Room-Web-image3.webp",
    tag: "Cottage Interior",
    desc: "Natural wood accents, climate control, and artisanal handcrafted furnishings.",
  },
  {
    title: "Scenic Villa Living Room & Lounge",
    category: "stay",
    src: "/images/Room-Web-image7.webp",
    tag: "Living Room",
    desc: "Family living suites designed for leisurely gatherings and weekend retreats.",
  },
  {
    title: "Fairway Overlook Luxury Villas",
    category: "stay",
    src: "/images/scenic-villa-overlooking-golf-course (1).webp",
    tag: "Golf Villas",
    desc: "Exclusive villas situated along fairway edges offering private balcony views of the greens.",
  },

  // 3. Aquatic Leisure, Dining & Wellness
  {
    title: "4 Luxury Resort Swimming Pools",
    category: "leisure",
    src: "/images/Swimming-Pool.webp",
    tag: "Swimming Pool",
    desc: "Temperature-controlled swimming pools, infinity lap pool, and children's splash pool.",
  },
  {
    title: "10 Natural Ponds & Kayaking Docks",
    category: "leisure",
    src: "/images/Boating-and-Kayaking.webp",
    tag: "Boating & Kayak",
    desc: "Calm water bodies for paddle boating, kayaking, and serene shoreline walks.",
  },
  {
    title: "Farm-to-Table Gourmet Restaurant",
    category: "leisure",
    src: "/images/Restaurant.webp",
    tag: "Restaurant",
    desc: "Fresh organic meals prepared with seasonal estate harvests, poultry, and dairy.",
  },
  {
    title: "Private Cinema & 3D Movie Theater",
    category: "leisure",
    src: "/images/Movie-Theater.webp",
    tag: "Movie Theater",
    desc: "Acoustic surround-sound screening room for films, sporting events, and private viewings.",
  },
  {
    title: "Spiritual Mosque & Prayer Rooms",
    category: "leisure",
    src: "/images/Mosque.webp",
    tag: "Prayer Rooms",
    desc: "Serene, beautifully designed separate prayer spaces for men and women.",
  },
  {
    title: "Amusement Park & Kids' Club",
    category: "leisure",
    src: "/images/Amusement-Park.webp",
    tag: "Kids' Club",
    desc: "Outdoor rides, gaming arcade, and supervised play zones for younger guests.",
  },
  {
    title: "European Wellness Spa & Salon",
    category: "leisure",
    src: "/images/Salon-and-Spa.webp",
    tag: "Spa & Salon",
    desc: "Rejuvenating therapies, herbal steam rooms, sauna, and premium salon grooming.",
  },
  {
    title: "Sunset Outdoor Clubhouse Lounge",
    category: "leisure",
    src: "/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp",
    tag: "Clubhouse Lounge",
    desc: "Cozy open-air terrace with plush sofa seating facing the sunset across the fairways.",
  },
  {
    title: "Executive Library & Reading Lounge",
    category: "leisure",
    src: "/images/reading-lounge.webp",
    tag: "Reading Lounge",
    desc: "Quiet reading sanctuary with curated books, private workspaces, and garden views.",
  },
  {
    title: "Private Fireside Dining Lounge",
    category: "leisure",
    src: "/images/restaurant-table-12-persons-with-blue-chairs-fireplace-white-brick-walls-wide-window.webp",
    tag: "Dining Lounge",
    desc: "Private 12-person dining hall and fireside lounge for intimate celebrations.",
  },
  {
    title: "Aerial 3D Master View & Amusement Park",
    category: "leisure",
    src: "/images/1.webp",
    tag: "3D Aerial Master View",
    desc: "Official 3D architectural aerial rendering showing resort hotel, water park, lake, and golf grounds.",
  },
  {
    title: "Grand Entrance Gateway & Fountains",
    category: "leisure",
    src: "/images/3.webp",
    tag: "Grand Entrance",
    desc: "Majestic daytime entrance portal with cascading water fountains, drop tower, and palm tree promenade.",
  },
  {
    title: "Night Illumination Grand Gateway & Fountains",
    category: "leisure",
    src: "/images/4.webp",
    tag: "Night Entrance",
    desc: "Stunning night illumination with full moon, lit fountains, and glowing neon resort attractions.",
  },

  // 4. Nature, Agro-Ecosystem & Farmland
  {
    title: "Commercial Agro Farms & Orchards",
    category: "agro",
    src: "/images/Argo.webp",
    tag: "Commercial Agro",
    desc: "Mango, dragon fruit, and malta orchards producing high-value annual harvests.",
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
    title: "Paddy Fields",
    category: "agro",
    src: "/images/rice_fields.webp",
    tag: "Paddy",
    desc: "Scenic crop topographies woven organically into the estate.",
  },
  {
    title: "Golden Wheat Fields",
    category: "agro",
    src: "/images/wheat_fields.webp",
    tag: "Wheat",
    desc: "Scenic crop topographies woven organically into the estate.",
  },
  {
    title: "Farm-Fresh Organic Vegetables",
    category: "agro",
    src: "/images/man-farmer-with-homemade-vegetables.webp",
    tag: "Organic Farm",
    desc: "Chemical-free vegetables picked daily by local farmers for the resort kitchens.",
  },
  {
    title: "Equestrian Club & Horseback Trails",
    category: "agro",
    src: "/images/Horse-Riding.webp",
    tag: "Horse Riding",
    desc: "Guided horseback trails winding through orchards and lakeside green paths.",
  },
  {
    title: "Scenic Cycling & Jogging Paths",
    category: "agro",
    src: "/images/Cycling.webp",
    tag: "Cycling Trails",
    desc: "Paved, shaded fitness paths looping throughout the 100+ acre grounds.",
  },
  {
    title: "Freshwater Lake Angling & Fishing",
    category: "agro",
    src: "/images/Fishing.webp",
    tag: "Pond Fishing",
    desc: "Stocked freshwater ponds for peaceful catch-and-release sport angling.",
  },

  // 5. Official Documents & Member Cards
  {
    title: "Official Member Loyalty Card",
    category: "docs",
    src: "/images/loyalty-card-permanent-member.webp",
    tag: "Loyalty Card",
    desc: "Exclusive numbered loyalty card granting privileges across all partner networks.",
  },
  {
    title: "Certificate of Member",
    category: "docs",
    src: "/images/certificate-of-member.webp",
    tag: "Club Certificate",
    desc: "Formal certificate recognizing full privileges and club entry.",
  },
  {
    title: "Certificate of Share (100% Sub-Kabula)",
    category: "docs",
    src: "/images/certificate-of-share.webp",
    tag: "Share Certificate",
    desc: "Land ownership certificate backing physical sub-kabula deed registration.",
  },
  {
    title: "Official 100+ Acre Masterplan Drawing",
    category: "docs",
    src: "/images/2.webp",
    tag: "Masterplan Blueprint",
    desc: "Top-down architectural masterplan drawing showing signature 'S' resort complex, water rides, amphitheatre, and 100+ acre estate zones.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Facilities (Divided)", Icon: Sparkles, desc: "Complete visual tour divided by estate zones" },
  { id: "sports", label: "Golf & Sports Arena", Icon: Flag, desc: "9-hole championship course, driving ranges, FIFA turfs & gym" },
  { id: "stay", label: "Villas & Cottages", Icon: Home, desc: "Lakeside villas, presidential suites & authentic thatched cottages" },
  { id: "leisure", label: "Aquatics, Dining & Spa", Icon: Waves, desc: "4 pools, 10 natural ponds, farm-to-table dining & cinema" },
  { id: "agro", label: "Agro Orchards & Trails", Icon: Sprout, desc: "Organic fruit orchards, golden paddy fields & equestrian trails" },
  { id: "docs", label: "Cards & Certificates", Icon: FileCheck, desc: "Official member loyalty card & 100% sub-kabula deed certificates" },
];

export default function ResortPageContent() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos =
    activeTab === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeTab);

  return (
    <div className="bg-gradient-to-b from-[#f6f8f2] via-white to-[#f4f7f0] text-[#14261c] relative overflow-hidden">
      {/* Ambient background light glows for glassmorphism refraction */}
      <div className="absolute top-1/4 -right-48 size-[500px] rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -left-48 size-[500px] rounded-full bg-lime-100/40 blur-3xl pointer-events-none" />

      {/* 1. HERO / HEADER & AERIAL VIEW */}
      <section className="relative bg-[#07291c] text-white overflow-hidden pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="hero-reveal max-w-3xl mb-8">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#b6e59c] bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full mb-3">
              Podunapur, Moulvibazar Sadar &bull; 100+ Acres
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
              The resort
            </h1>
            <p className="text-emerald-100/90 text-base sm:text-xl leading-relaxed">
              The estate is zoned into four areas, each built around a different way to spend time outdoors. A sanctuary where luxury of nature meets leisure.
            </p>
          </div>

          {/* Aerial View Banner with Floating Frosted Glass Deck */}
          <div className="hero-reveal relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40">
            <Image
              src="/images/1.webp"
              alt="Official 3D Aerial View of the Sampan Agro & Golf Resort estate and amusement park"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glassmorphism-dark rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#b6e59c] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  Official 3D Aerial Master View
                </span>
                <p className="font-heading text-xl sm:text-2xl font-bold mt-1.5">
                  100+ Acres of Championship Golf, Amusement Park, Ponds &amp; Luxury Stays
                </p>
              </div>
              <div className="shrink-0 flex gap-3">
                <a
                  href="#gallery"
                  className="rounded-xl bg-[#66b447] px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md"
                >
                  View Gallery ↓
                </a>
                <a
                  href="#zones"
                  className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  Explore Zones ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE EXPERIENCES (4 CARDS MATCHING HTML) */}
      <section className="py-20 bg-transparent border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-slow max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Core Pillars
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
              Signature experiences
            </h2>
            <p className="text-stone-600 text-base mt-2">
              Four harmonized ways to experience the serene beauty of rural Moulvibazar.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#0b4a32] p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 text-[#0b4a32]">
                <Flag className="size-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Golf on the water
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nine holes with ponds across the estate, short and long driving ranges, and professional trainers.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#66b447] p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center mb-3 text-[#559e38]">
                <UtensilsCrossed className="size-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Farm to table
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Mango, dragon fruit, and malta from the orchards, and dairy and organic produce, served in the resort restaurant.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#b8892b] p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3 text-[#b8892b]">
                <Music className="size-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Lakeside evenings
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Concerts at the MP Centre, evening bonfires, barbecue zones, and a private movie theatre.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#0284c7] p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-3 text-[#0284c7]">
                <Sparkles className="size-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Wellness
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Premium spa and salon, temperature-controlled pool, gym, and quiet trails winding through greenery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAY (LUXURY VILLAS, COTTAGES, PRESIDENTIAL SUITES) - Frosted Glass Container */}
      <section className="py-20 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-slow glassmorphism rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8892b] bg-amber-100/80 px-3 py-1 rounded-full">
                  Accommodations
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3 mb-4">
                  Stay
                </h2>
                <p className="text-stone-600 text-base leading-relaxed mb-4">
                  Luxury villas and cottages sit within the estate. Owners can hold a cottage or villa outright, and guests can book stays. The brochure shows a presidential suite, restaurant, and gym as part of the resort.
                </p>
                <p className="text-stone-600 text-base leading-relaxed mb-6">
                  Experience authentic rustic Bengali <strong className="text-stone-900 font-semibold">thatched cottages</strong> that stay naturally cool in the summer, alongside waterfront luxury villas with floor-to-ceiling glass looking onto the ponds.
                </p>

                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                  <div className="glassmorphism rounded-xl p-4 shadow-sm">
                    <span className="block font-heading text-xl font-bold text-[#0b4a32]">100% Sub-Kabula</span>
                    <span className="text-xs text-stone-500 font-medium">Deeded Villa Ownership</span>
                  </div>
                  <div className="glassmorphism rounded-xl p-4 shadow-sm">
                    <span className="block font-heading text-xl font-bold text-[#b8892b]">Managed</span>
                    <span className="text-xs text-stone-500 font-medium">By Sampan Group</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/invest"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-sm"
                  >
                    <span>Villa Ownership Options</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-xs uppercase tracking-wider font-bold text-stone-800 hover:bg-stone-50 transition-colors"
                  >
                    <span>Book a Stay / Site Visit</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3.5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <Image
                    src="/images/lakeside-villas.webp"
                    alt="Lakeside villas"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-[11px] font-semibold text-center">
                    Lakeside Villas
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <Image
                    src="/images/Sampan-Agro-%26-Golf-Resort%201.webp"
                    alt="Eco cottages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-[11px] font-semibold text-center">
                    Eco Cottages
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <Image
                    src="/images/3.webp"
                    alt="Grand Entrance Gateway & Fountains"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-[11px] font-semibold text-center">
                    Grand Entrance Gateway
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <Image
                    src="/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp"
                    alt="Sunset lounge"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-[11px] font-semibold text-center">
                    Sunset Clubhouse Lounge
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <Image
                    src="/images/Room-Web-image.webp"
                    alt="Presidential suite"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-[11px] font-semibold text-center">
                    Presidential Suite
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <Image
                    src="/images/reading-lounge.webp"
                    alt="Reading lounge"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-[11px] font-semibold text-center">
                    Executive Reading Lounge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MASTERPLAN SECTION */}
      <section className="py-20 bg-transparent border-y border-stone-200/80">
        <div className="reveal-slow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100/80 px-3.5 py-1 rounded-full">
            100+ Acre Architectural Map
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3 mb-3">
            Masterplan
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mx-auto mb-8">
            Masterplan drawing of the 100+ acres, thoughtfully preserving 10 natural ponds, integrating international sports fields, organic farmlands, and villa zones.
          </p>

          <div className="relative aspect-[21/9] sm:aspect-[16/8] w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-300 bg-stone-900 flex items-center justify-center">
            <Image
              src="/images/2.webp"
              alt="Official 3D Masterplan drawing of the 100+ acre estate"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
              <div className="glassmorphism-dark rounded-2xl p-5 sm:p-7 max-w-2xl text-left shadow-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] mb-2.5">
                  <Map className="size-4" />
                  <span>Official 3D Masterplan Layout</span>
                </div>
                <h3 className="font-heading text-xl sm:text-3xl font-bold">
                  100+ Acre Masterplan Drawing
                </h3>
                <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 mb-4 leading-relaxed">
                  Top-down architectural masterplan featuring the signature &ldquo;S&rdquo; curved resort complex, amphitheatre, waterpark, 10 natural ponds, and championship 9-hole golf grounds.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPhoto({
                        title: "Official 100+ Acre Masterplan Drawing",
                        category: "docs",
                        src: "/images/2.webp",
                        tag: "Masterplan Blueprint",
                        desc: "Top-down architectural masterplan drawing showing signature 'S' resort complex, water rides, amphitheatre, and 100+ acre estate zones.",
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-[#66b447] px-4 sm:px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md active:scale-95"
                  >
                    <Search className="size-4" />
                    <span>Enlarge Masterplan</span>
                  </button>
                  <a
                    href="/brochure.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all"
                  >
                    <FileText className="size-4" />
                    <span>View Brochure ↗</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all"
                  >
                    <span>Request Blueprint</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIVIDED GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-[#f6f8f2] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-slow flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
                Curated Visuals
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#14261c] mt-3">
                Gallery
              </h2>
              <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-2xl">
                Explore divided photo categories covering our golf fairways, villas, dining pavilions, organic orchards, and official certificates.
              </p>
            </div>

            <div className="shrink-0">
              <span className="text-xs font-semibold text-stone-500 bg-white border border-stone-200 px-3.5 py-2 rounded-full">
                Showing {filteredPhotos.length} photos
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-stone-200/80 mb-10">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const count =
                tab.id === "all"
                  ? galleryPhotos.length
                  : galleryPhotos.filter((p) => p.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${isActive
                    ? "bg-[#0b4a32] text-white shadow-md scale-105"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                >
                  <tab.Icon className="size-4 shrink-0" />
                  <span>{tab.label}</span>
                  <span className="opacity-60 text-[11px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Divided Photo Grid */}
          {activeTab === "all" ? (
            <div className="space-y-14">
              {categoryTabs
                .filter((tab) => tab.id !== "all")
                .map((tab) => {
                  const photos = galleryPhotos.filter((p) => p.category === tab.id);
                  if (photos.length === 0) return null;

                  return (
                    <div key={tab.id} className="pt-2">
                      {/* Divided Section Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-6 border-b border-stone-200">
                        <div className="flex items-center gap-3">
                          <span className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100/80 text-[#0b4a32] flex items-center justify-center">
                            <tab.Icon className="size-5" />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#14261c]">
                                {tab.label}
                              </h3>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b4a32] bg-emerald-100/80 px-2 py-0.5 rounded-full">
                                {photos.length} Photos
                              </span>
                            </div>
                            <p className="text-xs text-stone-500 font-medium mt-0.5">
                              {tab.desc}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className="self-start sm:self-auto text-xs font-bold text-[#0b4a32] hover:text-[#66b447] transition-colors flex items-center gap-1"
                        >
                          <span>Focus category</span>
                          <span>→</span>
                        </button>
                      </div>

                      {/* Photo Grid for this Divided Zone */}
                      <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {photos.map((photo, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedPhoto(photo)}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-700/50"
                          >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                              <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#b6e59c] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1">
                                {photo.tag}
                              </span>
                              <h4 className="font-heading text-sm font-bold leading-snug line-clamp-2">
                                {photo.title}
                              </h4>
                            </div>

                            <div className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Search className="size-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-700/50"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#b6e59c] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1">
                      {photo.tag}
                    </span>
                    <h4 className="font-heading text-sm font-bold leading-snug line-clamp-2">
                      {photo.title}
                    </h4>
                  </div>

                  <div className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search className="size-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. ZONES (THE 4 CARDS WITH DETAILED BULLETS MATCHING HTML) */}
      <section id="zones" className="py-20 bg-transparent border-t border-stone-200/80 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-slow max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Zoning Breakdown
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
              Zones
            </h2>
            <p className="text-stone-600 text-base mt-2">
              The 100+ acre masterplan is structured into 4 specialized zones with world-class infrastructure.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Zone 1: Elite sports and athletics - Frosted Glass */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#0b4a32] p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0b4a32]">
                  <Flag className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0b4a32]">
                    Elite sports and athletics
                  </h3>
                  <span className="text-xs text-stone-500 font-semibold">Championship Athletic Enclave</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0b4a32] font-bold text-base">•</span>
                  <span><strong>9-hole international golf field</strong> with scenic water hazards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0b4a32] font-bold text-base">•</span>
                  <span>Short and long driving ranges with ball dispensing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0b4a32] font-bold text-base">•</span>
                  <span>Professional trainer facilities and academy clinics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0b4a32] font-bold text-base">•</span>
                  <span>Cricket ground, 4 football turfs, baseball field</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0b4a32] font-bold text-base">•</span>
                  <span>Lawn tennis, basketball, and badminton courts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0b4a32] font-bold text-base">•</span>
                  <span>International standard high-tech gymnasium</span>
                </li>
              </ul>
            </div>

            {/* Zone 2: Aquatic leisure and wellness - Frosted Glass */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#0284c7] p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                  <Waves className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0284c7]">
                    Aquatic leisure and wellness
                  </h3>
                  <span className="text-xs text-stone-500 font-semibold">10 Natural Ponds &amp; 4 Pools</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0284c7] font-bold text-base">•</span>
                  <span><strong>4 swimming pools</strong>, including temperature-controlled and kids&apos; pools</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0284c7] font-bold text-base">•</span>
                  <span><strong>10 natural ponds</strong> preserved across the landscape</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0284c7] font-bold text-base">•</span>
                  <span>Boating, pedal boats, and serene kayaking</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0284c7] font-bold text-base">•</span>
                  <span>Recreational freshwater angling and fishing piers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0284c7] font-bold text-base">•</span>
                  <span>Premium European-style salon and therapeutic spa</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0284c7] font-bold text-base">•</span>
                  <span>Poolside cabanas and juice bar lounge</span>
                </li>
              </ul>
            </div>

            {/* Zone 3: Entertainment and hospitality - Frosted Glass */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#b8892b] p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#b8892b]">
                  <Home className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#b8892b]">
                    Entertainment and hospitality
                  </h3>
                  <span className="text-xs text-stone-500 font-semibold">Villas, Dining &amp; Culture</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span>Luxury waterfront villas and authentic <strong>cottages</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span>Farm-to-table gourmet restaurant with indoor and open dining</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span>Movie theatre, executive library with quiet reading lounge</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span>Kids&apos; club, outdoor amusement park, and gaming arcade</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span>Super shop, pharmacy, and dedicated car parking</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span>Men&apos;s and women&apos;s separate prayer rooms (Mosque)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span><strong>MP Centre:</strong> A lakeside open-air concert and event zone</span>
                </li>
              </ul>
            </div>

            {/* Zone 4: Nature and agro-ecosystem - Frosted Glass */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#66b447] p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-11 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-[#66b447]">
                  <Sprout className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66b447]">
                    Nature and agro-ecosystem
                  </h3>
                  <span className="text-xs text-stone-500 font-semibold">100+ Acre Working Agro Sanctuary</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Commercial agro farm: tea garden, mango, jaam, pineapple, litchi, satkora lemon, and dragon fruit orchards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Golden paddy fields (ধান ক্ষেত) &amp; wheat fields (গম ক্ষেত)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Fresh dairy farm &amp; apiary for organic honey</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Cycling, hiking, and horseback riding trails</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Expansive flower gardens and botanical eco park</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Picnic lawns, evening bonfire, and barbecue zones</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Booking & Enquiry CTA Banner with Luxury Glass Tint */}
          <div className="reveal-slow glassmorphism-dark rounded-3xl text-white p-8 sm:p-12 shadow-2xl border border-emerald-500/25">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-block text-xs uppercase tracking-widest text-[#b6e59c] font-bold bg-white/10 px-3.5 py-1 rounded-full mb-3">
                  Site Visit &amp; Tours
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  Experience The Resort in person
                </h3>
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  Walk through the nine-hole course, view our cottages, taste fresh farm-to-table harvests, and meet our property counselors at Podunapur, Moulvibazar.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#66b447] px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md active:scale-95 text-center"
                >
                  <span>Book a Site Visit</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/invest"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all text-center"
                >
                  <span>See Ownership Options</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0b3a28] rounded-2xl overflow-hidden border border-emerald-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 text-white bg-gradient-to-t from-[#07291c] to-[#0b3a28]">
              <span className="text-xs uppercase font-bold text-[#b6e59c] tracking-widest block mb-1">
                {selectedPhoto.tag}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                {selectedPhoto.title}
              </h3>
              {selectedPhoto.desc && (
                <p className="text-emerald-100/80 text-sm leading-relaxed">
                  {selectedPhoto.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
