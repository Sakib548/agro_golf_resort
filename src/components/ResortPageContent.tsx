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
  UtensilsCrossed,
  Music,
  Map,
  FileText,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  ArrowRight,
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "sports" | "stay" | "agro" | "leisure" | "docs";
  src: string;
  tag: string;
  desc?: string;
  featured?: boolean;
}

const galleryPhotos: GalleryPhoto[] = [
  // ==========================================
  // CHAPTER 01: ELITE SPORTS & ATHLETICS
  // ==========================================
  {
    id: "sp-1",
    title: "Championship Fairway Golf Swing",
    category: "sports",
    src: "/images/golf-swing-action.webp",
    tag: "9-Hole Golf Course",
    desc: "Player executing a dynamic tee-off drive over the lake hazard in afternoon golden sunlight across Moulvibazar contours.",
    featured: true,
  },
  {
    id: "sp-2",
    title: "Tournament Putting Green & Pin",
    category: "sports",
    src: "/images/golf-putting-green.webp",
    tag: "Putting Action",
    desc: "Golfer lining up a tournament birdie putt towards the yellow flagstick with partner and golf cart alongside.",
  },
  {
    id: "sp-3",
    title: "Golf Academy Tiered Driving Range",
    category: "sports",
    src: "/images/golf-driving-range.webp",
    tag: "Driving Range",
    desc: "Covered luxury driving range bays with automated ball targets spanning a misty valley with certified coaching.",
  },
  {
    id: "sp-4",
    title: "Championship 9-Hole Golf Course",
    category: "sports",
    src: "/images/GOLF.webp",
    tag: "Championship Fairway",
    desc: "Nine holes with scenic water ponds, short & long driving ranges, and professional trainers.",
    featured: true,
  },
  {
    id: "sp-5",
    title: "Championship Lake-View Fairway",
    category: "sports",
    src: "/images/high-angle-view-golf-course-by-lake (2).webp",
    tag: "Water Hazards",
    desc: "Aerial view of championship fairways contoured around natural water bodies and preserved tea mounds.",
  },
  {
    id: "sp-6",
    title: "International Golf Green & Contours",
    category: "sports",
    src: "/images/golf-vehicle-fiesld.webp",
    tag: "Golf Greens",
    desc: "Undulating fairways surrounded by Moulvibazar's natural tea valley topography and cart trails.",
  },
  {
    id: "sp-7",
    title: "Sunset Putting Green & Golf Cart",
    category: "sports",
    src: "/images/scenic-villa-overlooking-golf-course-(2).webp",
    tag: "Sunset Green",
    desc: "Evening putting green with golf bag and cart positioned along the lakeside villa contour.",
  },
  {
    id: "sp-8",
    title: "Modern Golf Course Clubhouse",
    category: "sports",
    src: "/images/modern-architecture-golf-course-clubhouses.webp",
    tag: "Golf Clubhouse",
    desc: "Luxury clubhouse facilities with player lounges, pro shop, locker suites, and fairway terrace viewpoints.",
  },
  // {
  //   id: "sp-9",
  //   title: "FIFA Football Turfs & Tournaments",
  //   category: "sports",
  //   src: "/images/Football-.webp",
  //   tag: "4 Football Turfs",
  //   desc: "4 high-grade FIFA-specification turfs for professional tournaments, friendly derbies, and corporate matches.",
  // },
  {
    id: "sp-10",
    title: "Full-Sized Soccer Tournament Arena",
    category: "sports",
    src: "/images/soccer-field-with-soccer-field-withs-soccer-field-background.webp",
    tag: "Tournament Arena",
    desc: "Expansive green playing grounds equipped for multi-tier sports leagues and athletic events.",
  },
  {
    id: "sp-11",
    title: "Tennis, Basketball & Multi-Courts",
    category: "sports",
    src: "/images/basketball.webp",
    tag: "Athletic Courts",
    desc: "Lawn tennis, basketball, badminton, volleyball, and baseball practice fields with floodlights.",
  },
  {
    id: "sp-12",
    title: "Badminton & Volleyball Courts",
    category: "sports",
    src: "/images/Badminton.webp",
    tag: "Court Sports",
    desc: "Regulation courts with shock-absorbing surfaces for dynamic daily games and club competitions.",
  },
  {
    id: "sp-13",
    title: "High-Tech Fitness Gymnasium",
    category: "sports",
    src: "/images/gym.webp",
    tag: "Fitness Center",
    desc: "International standard gym with state-of-the-art cardio, free weights, and certified athletic trainers.",
  },
  {
    id: "sp-14",
    title: "Billiards & Executive Games Lounge",
    category: "sports",
    src: "/images/Billiards-and-cards.webp",
    tag: "Club Games",
    desc: "Indoor billiards, snooker, table games, and executive cards room for relaxed evenings.",
  },
  {
    id: "sp-15",
    title: "Regulation Volleyball Arena",
    category: "sports",
    src: "/images/Volleyball.webp",
    tag: "Volleyball Court",
    desc: "Championship regulation court with shock-absorbing outdoor flooring, high-intensity floodlighting, and tournament seating.",
  },
  {
    id: "sp-16",
    title: "Modern Fitness Studio & Cardio Suite",
    category: "sports",
    src: "/images/modern-luxury-gym-training-room (1).webp",
    tag: "Fitness Studio",
    desc: "State-of-the-art cardiovascular studio, selectorized resistance machines, free weights, and certified athletic coaching.",
  },

  // ==========================================
  // CHAPTER 02: STAY — LUXURY VILLAS & COTTAGES
  // ==========================================
  {
    id: "st-1",
    title: "Lakeside Luxury Waterfront Villas",
    category: "stay",
    src: "/images/lakeside-villas.webp",
    tag: "Lakeside Villas",
    desc: "Waterfront private villas overlooking natural ponds with timber viewing decks, open patios, and glass walls.",
    featured: true,
  },
  {
    id: "st-2",
    title: "Authentic Shan Thatched Eco-Cottages",
    category: "stay",
    src: "/images/Sampan-Agro-&-Golf-Resort 1.webp",
    tag: "Shan Cottages",
    desc: "Authentic thatched eco-cottages blending rustic heritage with 5-star climate-controlled luxury.",
    featured: true,
  },
  {
    id: "st-3",
    title: "Fairway Overlook Luxury Villas",
    category: "stay",
    src: "/images/scenic-villa-overlooking-golf-course.webp",
    tag: "Golf Villas",
    desc: "Exclusive villas situated along fairway edges offering private balcony views of the greens and morning tee-offs.",
  },
  {
    id: "st-4",
    title: "Presidential Bedroom Master Suite",
    category: "stay",
    src: "/images/Room-Web-image.webp",
    tag: "Presidential Suite",
    desc: "Spacious master suites featuring panoramic fairway views, king bed, smart lighting, and personal butler service.",
  },
  {
    id: "st-5",
    title: "Executive Cottage Bedroom Interiors",
    category: "stay",
    src: "/images/Room-Web-image3.webp",
    tag: "Cottage Interior",
    desc: "Natural wood accents, climate control, artisanal handcrafted furnishings, and tranquil garden views.",
  },
  {
    id: "st-6",
    title: "Scenic Villa Living Room & Lounge",
    category: "stay",
    src: "/images/Room-Web-image7.webp",
    tag: "Living Room",
    desc: "Family living suites designed for leisurely gatherings, equipped with entertainment systems and tea verandas.",
  },
  {
    id: "st-7",
    title: "Deluxe Resort Guest Quarters",
    category: "stay",
    src: "/images/Room-Web-image2.webp",
    tag: "Guest Suites",
    desc: "Warm ambient interiors crafted with sustainable natural textures, organic linens, and ensuite spa baths.",
  },
  {
    id: "st-8",
    title: "Cozy Family Suite & Juvenile Quarters",
    category: "stay",
    src: "/images/small-juvenile-bedroom-arrangement.webp",
    tag: "Family Suites",
    desc: "Thoughtfully configured multi-bed arrangements suited for family vacations and corporate retreats.",
  },
  {
    id: "st-9",
    title: "Traditional Thatched Shan Cottages & Veranda",
    category: "stay",
    src: "/images/Sampan-Agro-&-Golf-Resort-2.webp",
    tag: "Shan Eco-Cottages",
    desc: "Authentic handcrafted thatched Bengali eco-cottages engineered with natural ventilation for cool summers, private tea veranda, and garden views.",
    featured: true,
  },
  {
    id: "st-10",
    title: "Lakeside Thatched Eco-Villas",
    category: "stay",
    src: "/images/Sampan-Agro-&-Golf-Resort-3.webp",
    tag: "Waterfront Cottages",
    desc: "Thatched eco-villas nestled along natural water contours with timber viewing decks and garden walking trails.",
    featured: true,
  },
  {
    id: "st-11",
    title: "Estate Garden Walkways & Thatched Cottages",
    category: "stay",
    src: "/images/Sampan-Agro-&-Golf-Resort-4.webp",
    tag: "Garden Cottages",
    desc: "Manicured stone pathways weaving through lush greenery, connecting private cottages under swaying tropical palms.",
  },
  {
    id: "st-12",
    title: "Executive Thatched Resort Living Quarters",
    category: "stay",
    src: "/images/Sampan-Agro-&-Golf-Resort-5.webp",
    tag: "Executive Cottages",
    desc: "Spacious private cottage enclaves blending rustic Bengali heritage architecture with 5-star climate-controlled luxury.",
  },
  {
    id: "st-13",
    title: "Tranquil Thatched Cottage Courtyard",
    category: "stay",
    src: "/images/Sampan-Agro-&-Golf-Resort-6.webp",
    tag: "Eco Retreat",
    desc: "Secluded open-air courtyard offering serene estate vistas, native birdsong, and tranquil morning tea relaxation.",
  },
  {
    id: "st-14",
    title: "Deluxe Thatched Cottage King Bedroom",
    category: "stay",
    src: "/images/Room-Web-image1.webp",
    tag: "King Bedroom",
    desc: "Warm ambient wood finishes, king-size bed, luxury organic linens, and panoramic garden windows.",
  },
  {
    id: "st-15",
    title: "Modern Cottage En-Suite Bathroom & Quarters",
    category: "stay",
    src: "/images/Room-Web-image4.webp",
    tag: "Cottage Suite",
    desc: "Contemporary designer fixtures, natural ventilation, and spa amenities in private guest suites.",
  },
  {
    id: "st-16",
    title: "Artisanal Wooden Guest Bedroom Suite",
    category: "stay",
    src: "/images/Room-Web-image5.webp",
    tag: "Guest Quarters",
    desc: "Artisanal handcrafted furnishings, quiet climate control, and peaceful views across resort fairways.",
  },
  {
    id: "st-17",
    title: "Luxury Resort Twin Bedroom Suite",
    category: "stay",
    src: "/images/Room-Web-image6.webp",
    tag: "Twin Suite",
    desc: "Thoughtfully appointed twin bed arrangements ideal for family vacations, corporate retreats, and sports teams.",
  },
  {
    id: "st-18",
    title: "Minimalist Resort Master Bedroom & Private Terrace",
    category: "stay",
    src: "/images/Room-Web-image8.webp",
    tag: "Master Bedroom",
    desc: "Expansive modern master bedroom with direct private terrace access facing the morning sunrise.",
  },
  {
    id: "st-19",
    title: "Panoramic Balcony Villa Guest Bedroom",
    category: "stay",
    src: "/images/Room-Web-image9.webp",
    tag: "Balcony Bedroom",
    desc: "Floor-to-ceiling glass sliding doors opening onto private balcony overlooking landscaped estate fairways.",
  },
  {
    id: "st-20",
    title: "Contemporary Wood-Paneled Villa Interior",
    category: "stay",
    src: "/images/white-wall-wooden-bedroom-interior-3d-rendering (1).webp",
    tag: "Contemporary Suite",
    desc: "Scandinavian-inspired minimalist retreat with natural oak paneling, integrated storage, and plush bedding.",
  },

  // ==========================================
  // CHAPTER 03: NATURE & AGRO-ECOSYSTEM
  // ==========================================
  {
    id: "ag-1",
    title: "Golden Paddy Farmland",
    category: "agro",
    src: "/images/rice_fields.webp",
    tag: "Paddy Farmland",
    desc: "Expansive seasonal paddy fields preserved in harmony with the resort landscape, reflecting rural green acreage.",
    featured: true,
  },
  {
    id: "ag-2",
    title: "Emerald & Golden Wheat Fields",
    category: "agro",
    src: "/images/wheat_fields.webp",
    tag: "Wheat Farmland",
    desc: "Rolling golden wheat fields weaving between the water bodies and fairways, providing scenic walking horizons.",
    featured: true,
  },
  {
    id: "ag-3",
    title: "Moulvibazar Heritage Tea Garden",
    category: "agro",
    src: "/images/tea_garden.webp",
    tag: "Tea Enclave",
    desc: "Lush rolling green tea contours and terraced slopes paying homage to Moulvibazar's world-renowned tea heritage.",
  },
  {
    id: "ag-4",
    title: "Commercial Agro Farms & Orchards",
    category: "agro",
    src: "/images/Argo.webp",
    tag: "Commercial Agro",
    desc: "Mango, dragon fruit, malta, and citrus orchards generating sustainable commercial yields and organic fresh fruit.",
  },
  {
    id: "ag-5",
    title: "Sweet Summer Mango Orchards",
    category: "agro",
    src: "/images/mango.webp",
    tag: "Mango Groves",
    desc: "Rows of thriving mango trees flowering in spring and yielding sweet, chemical-free harvests every summer.",
  },
  {
    id: "ag-6",
    title: "Sweet Pineapple Terraces",
    category: "agro",
    src: "/images/pineapple.webp",
    tag: "Pineapple Terraces",
    desc: "Sweet Honey Queen pineapple plantations cultivated naturally for estate dining and guests.",
  },
  {
    id: "ag-7",
    title: "Fragrant Sweet Litchi Orchards",
    category: "agro",
    src: "/images/lichi.webp",
    tag: "Litchi Orchards",
    desc: "Vibrant sweet litchi groves producing rich clusters of succulent fruit in early monsoon.",
  },
  {
    id: "ag-8",
    title: "Citrus & Lemon Groves",
    category: "agro",
    src: "/images/lemon.webp",
    tag: "Citrus Groves",
    desc: "Aromatic Kagoji lemon and indigenous citrus trees supplying farm-to-table culinary delicacies.",
  },
  {
    id: "ag-9",
    title: "Black Jamun Natural Groves",
    category: "agro",
    src: "/images/jaam.webp",
    tag: "Jamun Trees",
    desc: "Deep purple Black Jamun trees providing shaded trails, natural biodiversity, and antioxidant fruit yields.",
  },
  {
    id: "ag-10",
    title: "Farm-Fresh Organic Vegetables",
    category: "agro",
    src: "/images/man-farmer-with-homemade-vegetables.webp",
    tag: "Organic Produce",
    desc: "Chemical-free vegetables harvested daily by local agriculturalists for the resort's gourmet kitchens.",
  },
  {
    id: "ag-11",
    title: "Equestrian Club & Horseback Trails",
    category: "agro",
    src: "/images/Horse-Riding.webp",
    tag: "Horseback Trails",
    desc: "Guided horseback trails winding through orchards, farmland borders, and lakeside grassy loops.",
  },
  {
    id: "ag-12",
    title: "Scenic Cycling & Jogging Paths",
    category: "agro",
    src: "/images/Cycling.webp",
    tag: "Cycling Paths",
    desc: "Miles of paved, tree-shaded loops winding across the 100+ acre grounds for morning cardio and cycling.",
  },
  {
    id: "ag-13",
    title: "Freshwater Lake Angling & Fishing",
    category: "agro",
    src: "/images/Fishing.webp",
    tag: "Lake Angling",
    desc: "Stocked natural freshwater ponds offering tranquil catch-and-release sport angling from wooden piers.",
  },
  {
    id: "ag-14",
    title: "Smart Agro Machinery & Sunset Cultivation",
    category: "agro",
    src: "/images/smart-tractor-soybean-corn-field-sunset-3d-render.webp",
    tag: "Smart Farming",
    desc: "High-tech smart agricultural machinery cultivating commercial farmland acreage during picturesque sunsets.",
  },
  {
    id: "ag-15",
    title: "Precision Crop Care & Scientific Cultivation",
    category: "agro",
    src: "/images/tractor-spraying-pesticides-soybean-field-with-sprayer-sunsets.webp",
    tag: "Precision Agro",
    desc: "Modern precision agricultural care ensuring bountiful, sustainable, chemical-free harvests across the 100+ acre estate.",
  },
  {
    id: "ag-16",
    title: "Fresh Organic Harvest & Table Produce",
    category: "agro",
    src: "/images/vegetables-table-garden-sunlight.webp",
    tag: "Fresh Harvest",
    desc: "Pesticide-free vegetables, herbs, and seasonal fruits picked daily from our agricultural plots for resort dining.",
  },

  // ==========================================
  // CHAPTER 04: AQUATIC LEISURE & HOSPITALITY
  // ==========================================
  {
    id: "le-1",
    title: "4 Luxury Resort Swimming Pools",
    category: "leisure",
    src: "/images/Swimming-Pool.webp",
    tag: "4 Swimming Pools",
    desc: "Temperature-controlled swimming pools, infinity lap pool, and children's splash pool surrounded by loungers.",
    featured: true,
  },
  {
    id: "le-2",
    title: "10 Natural Ponds & Kayaking Docks",
    category: "leisure",
    src: "/images/Boating-and-Kayaking.webp",
    tag: "Boating & Kayak",
    desc: "Calm water bodies for paddle boating, tandem kayaking, and sunset dinghy rides under open skies.",
    featured: true,
  },
  {
    id: "le-3",
    title: "Grand Entrance Gateway & Fountains",
    category: "leisure",
    src: "/images/3.webp",
    tag: "Grand Gateway",
    desc: "Majestic daytime entrance portal featuring cascading fountain waterways, tropical palm promenade, and drop tower.",
  },
  {
    id: "le-4",
    title: "Night Illumination Grand Gateway",
    category: "leisure",
    src: "/images/4.webp",
    tag: "Night Ambiance",
    desc: "Stunning night illumination with full moon, shimmering fountains, and glowing neon resort attractions.",
  },
  {
    id: "le-5",
    title: "Aerial 3D Master View & Amusement Park",
    category: "leisure",
    src: "/images/1.webp",
    tag: "3D Master View",
    desc: "Architectural aerial rendering showing signature resort hotel, water park, central lake, and golf fairways.",
  },
  {
    id: "le-6",
    title: "Farm-to-Table Gourmet Restaurant",
    category: "leisure",
    src: "/images/Restaurant.webp",
    tag: "Gourmet Dining",
    desc: "Multi-cuisine restaurant preparing fresh organic dishes with seasonal estate harvests, dairy, and fresh fish.",
  },
  {
    id: "le-7",
    title: "Private Fireside Dining Lounge",
    category: "leisure",
    src: "/images/restaurant-table-12-persons-with-blue-chairs-fireplace-white-brick-walls-wide-window.webp",
    tag: "Private Dining",
    desc: "Private 12-person dining salon and cozy fireside banquet lounge for VIP gatherings and celebrations.",
  },
  {
    id: "le-8",
    title: "Private Cinema & 3D Movie Theater",
    category: "leisure",
    src: "/images/Movie-Theater.webp",
    tag: "Movie Theater",
    desc: "Acoustic surround-sound screening room for major sporting events, film premieres, and corporate viewings.",
  },
  {
    id: "le-9",
    title: "Executive 3D Cine Lounge",
    category: "leisure",
    src: "/images/view-3d-cinema-theatre-room.webp",
    tag: "Cine Lounge",
    desc: "Plush leather reclining chairs with cinematic 4K projection for exclusive member movie nights.",
  },
  {
    id: "le-10",
    title: "Spiritual Mosque & Prayer Sanctum",
    category: "leisure",
    src: "/images/Mosque.webp",
    tag: "Prayer Facilities",
    desc: "Serene, beautifully ventilated separate prayer halls for men and women set amid calm greenery.",
  },
  {
    id: "le-11",
    title: "Amusement Park & Kids' Gaming Zone",
    category: "leisure",
    src: "/images/Amusement-Park.webp",
    tag: "Kids & Family",
    desc: "Ferris wheel, carousel, bumper cars, and indoor gaming arcade providing wholesome entertainment for children.",
  },
  {
    id: "le-12",
    title: "European Wellness Salon & Spa",
    category: "leisure",
    src: "/images/Salon-and-Spa.webp",
    tag: "Spa & Wellness",
    desc: "Holistic therapeutic massages, herbal steam bath, Swedish sauna, and premium salon grooming.",
  },
  {
    id: "le-13",
    title: "Sunset Outdoor Clubhouse Lounge",
    category: "leisure",
    src: "/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp",
    tag: "Clubhouse Lounge",
    desc: "Open-air sunset terrace with plush sofa seating facing the western sky across the golf fairways.",
  },
  {
    id: "le-14",
    title: "Executive Library & Reading Sanctuary",
    category: "leisure",
    src: "/images/reading-lounge.webp",
    tag: "Reading Lounge",
    desc: "Quiet reading sanctuary with curated books, private workspaces, high-speed WiFi, and garden vistas.",
  },
  {
    id: "le-15",
    title: "Lakeside Infinity Pool & Sunset Loungers",
    category: "leisure",
    src: "/images/umbrella-chair-around-swimming-pool-resort-hotel-leisure-travel-vacation-neary-sea-ocean-beach-sunset-sunrise-time.webp",
    tag: "Poolside Sunset",
    desc: "Plush poolside sun loungers under parasols overlooking shimmering waters during serene golden hour sunsets.",
    featured: true,
  },
  {
    id: "le-16",
    title: "Family Theme Park & Roller Coaster",
    category: "leisure",
    src: "/images/Amusement-Park-1.webp",
    tag: "Amusement Rides",
    desc: "Family amusement park attractions, roller coaster, and open-air thrill zones for children and adults.",
  },
  {
    id: "le-17",
    title: "Children's Adventure Wonderland & Rides",
    category: "leisure",
    src: "/images/Amusement-Park-2.webp",
    tag: "Theme Park",
    desc: "Engaging and safe amusement park rides, carousel, and whimsical play areas for visiting families.",
  },
  {
    id: "le-18",
    title: "Executive Corporate Boardroom & Conference Hall",
    category: "leisure",
    src: "/images/Conference-Room.webp",
    tag: "Conference Hall",
    desc: "State-of-the-art audiovisual presentation technology, ergonomic seating, and high-speed fiber connectivity for corporate summits.",
  },
  {
    id: "le-19",
    title: "VIP Secure Parking Plaza & Valet Services",
    category: "leisure",
    src: "/images/Car-Parking-Facilities.webp",
    tag: "Parking Plaza",
    desc: "Expansive well-lit vehicle parking infrastructure with 24/7 security surveillance and dedicated valet service desk.",
  },
  {
    id: "le-20",
    title: "Shaded Vehicle Parking Bays & EV Facilities",
    category: "leisure",
    src: "/images/Car-Parking-Facilities-1.webp",
    tag: "EV & Parking",
    desc: "Eco-friendly shaded parking bays surrounded by manicured green hedges, with EV vehicle charging stations.",
  },
  {
    id: "le-21",
    title: "Scenic Central Lake Promenade & Water Bodies",
    category: "leisure",
    src: "/images/lake-surrounded-by-greenery-blue-sky-sunlight-daytime.webp",
    tag: "Central Lake",
    desc: "One of 10 preserved natural freshwater lakes reflecting clear blue skies, bordered by lush tropical foliage and walking trails.",
  },
  {
    id: "le-22",
    title: "Waterfront Resort Architectural Facade",
    category: "leisure",
    src: "/images/Web-1.webp",
    tag: "Waterfront View",
    desc: "Architectural elevation of the primary resort hospitality complex overlooking water reflection pools.",
  },
  {
    id: "le-23",
    title: "Lakeside Resort Grounds & Walking Corridors",
    category: "leisure",
    src: "/images/Web-2.webp",
    tag: "Resort Grounds",
    desc: "Masterfully contoured landscaping uniting recreational waterfronts with natural greenery and shaded promenades.",
  },

  // ==========================================
  // CHAPTER 05: MASTERPLAN & ARCHITECTURAL BLUEPRINTS
  // ==========================================
  {
    id: "dc-1",
    title: "Official 100+ Acre Masterplan Blueprint",
    category: "docs",
    src: "/images/2.webp",
    tag: "Masterplan Blueprint",
    desc: "Architectural top-down masterplan layout showing signature 'S' curve resort, ponds, amphitheatre, and fairways.",
    featured: true,
  },
  {
    id: "dc-2",
    title: "Official 3D Master Aerial View & Waterpark",
    category: "docs",
    src: "/images/1.webp",
    tag: "3D Master View",
    desc: "Aerial rendering showing signature resort hotel, water park, central lake, and championship golf fairways.",
    featured: true,
  },
  {
    id: "dc-3",
    title: "Waterfront Resort Architectural Elevation",
    category: "docs",
    src: "/images/Web-1.webp",
    tag: "Architectural Elevation",
    desc: "Architectural schematic showing multi-tier hospitality wings, glass facades, and waterfront promenade.",
  },
  {
    id: "dc-4",
    title: "Landscape Topography & Zonal Contours",
    category: "docs",
    src: "/images/Web-2.webp",
    tag: "Topography Layout",
    desc: "Detailed topographical survey layout mapping natural tea mounds, water bodies, and sports turfs.",
  },
];

interface ChapterMeta {
  id: "sports" | "stay" | "agro" | "leisure" | "docs";
  chapterNum: string;
  titleEn: string;
  tagline: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  Icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const chapters: ChapterMeta[] = [
  {
    id: "sports",
    chapterNum: "01",
    titleEn: "Elite Sports & Athletics Arena",
    tagline: "International Standard Championship Facilities",
    accentColor: "#0b4a32",
    badgeBg: "bg-emerald-100 text-[#0b4a32] border-emerald-300",
    badgeText: "9-Hole Golf · 4 Football Turfs · FIFA Standard",
    Icon: Flag,
    highlights: [
      "9-Hole International Golf Course with water hazards",
      "Short & Long Covered Driving Ranges with trainers",
      "4 FIFA-Specification Football Turfs for corporate matches",
      "Tennis, Basketball, Badminton, Volleyball & Baseball",
      "High-Tech Gymnasium & Executive Billiards Lounge",
    ],
  },
  {
    id: "stay",
    chapterNum: "02",
    titleEn: "Living & Stays — Shan Cottages & Luxury Villas",
    tagline: "Authentic Handcrafted Cottages & Waterfront Living",
    accentColor: "#b8892b",
    badgeBg: "bg-amber-100 text-[#b8892b] border-amber-300",
    badgeText: "Shan Cottages · Waterfront Villas · Presidential Suites",
    Icon: Home,
    highlights: [
      "Traditional thatched Bengali Shan eco-cottages",
      "Modern multi-bedroom waterfront luxury villas",
      "Presidential suites with butler service & fairway vistas",
      "Floor-to-ceiling panoramic glass facing natural ponds",
      "Private verandas, family lounges & 24/7 room service",
    ],
  },
  {
    id: "agro",
    chapterNum: "03",
    titleEn: "Nature, Farmlands & Working Agro Sanctuary",
    tagline: "100+ Acres of Commercial Farmland & Tea Gardens",
    accentColor: "#66b447",
    badgeBg: "bg-lime-100 text-[#559e38] border-lime-300",
    badgeText: "Paddy & Wheat Fields · Tea Garden · Tropical Orchards",
    Icon: Sprout,
    highlights: [
      "Golden paddy fields & wheat fields",
      "Moulvibazar heritage rolling tea garden contours",
      "Mango, pineapple, litchi, lemon & jamun orchards",
      "Fresh pesticide-free organic vegetables harvested daily",
      "Equestrian horseback riding trails & shaded cycling loops",
    ],
  },
  {
    id: "leisure",
    chapterNum: "04",
    titleEn: "Aquatic Leisure, 5-Star Dining & Wellness",
    tagline: "10 Natural Ponds, 4 Pools, Theme Park & Spa",
    accentColor: "#0284c7",
    badgeBg: "bg-sky-100 text-[#0284c7] border-sky-300",
    badgeText: "4 Pools · 10 Ponds · Farm-to-Table · Spa · Theme Park",
    Icon: Waves,
    highlights: [
      "4 swimming pools including infinity lap & kids' splash",
      "10 preserved natural freshwater ponds with kayaking docks",
      "Farm-to-table multi-cuisine restaurant & private fireside dining",
      "Acoustic cinema theater, library, theme park & executive boardroom",
      "MP Centre open-air lakeside concert amphitheatre & bonfire",
    ],
  },
  {
    id: "docs",
    chapterNum: "05",
    titleEn: "Masterplan, Architecture & Blueprints",
    tagline: "Official 100+ Acre Engineering Layout & 3D Master Visuals",
    accentColor: "#d9aa4a",
    badgeBg: "bg-yellow-100 text-[#b8892b] border-yellow-300",
    badgeText: "100+ Acre Blueprint · 3D Master Aerial · Topography Layout",
    Icon: Map,
    highlights: [
      "Official 100+ acre masterplan architectural drawing",
      "Signature 'S' curve resort layout & waterpark zones",
      "Preservation of 10 natural freshwater ponds",
      "Integrated zoning across sports, villas & farmlands",
      "Member Loyalty Cards & Deeds are in the Invest & Membership section",
    ],
  },
];

export default function ResortPageContent() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Active list for lightbox navigation
  const currentPhotoList =
    activeTab === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeTab);

  const selectedIndex = selectedPhoto
    ? currentPhotoList.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedPhoto(currentPhotoList[selectedIndex - 1]);
    } else if (selectedIndex === 0) {
      setSelectedPhoto(currentPhotoList[currentPhotoList.length - 1]);
    }
  }, [selectedIndex, currentPhotoList]);

  const handleNext = useCallback(() => {
    if (selectedIndex >= 0 && selectedIndex < currentPhotoList.length - 1) {
      setSelectedPhoto(currentPhotoList[selectedIndex + 1]);
    } else if (selectedIndex === currentPhotoList.length - 1) {
      setSelectedPhoto(currentPhotoList[0]);
    }
  }, [selectedIndex, currentPhotoList]);

  // Keyboard navigation for lightbox
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

  const scrollToChapter = (chapterId: string) => {
    setActiveTab("all");
    setTimeout(() => {
      const el = document.getElementById(`chapter-${chapterId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <div className="bg-[#f6f8f2] text-[#14261c] relative selection:bg-[#66b447]/30 selection:text-[#0b4a32]">
      {/* Background ambient lighting glows for luxurious glass refraction */}
      <div className="absolute top-20 right-0 size-[600px] rounded-full bg-emerald-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-[45%] left-0 size-[650px] rounded-full bg-lime-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-[75%] right-0 size-[600px] rounded-full bg-amber-100/35 blur-3xl pointer-events-none" />

      {/* ========================================================
          1. HERO & 3D AERIAL BANNER
         ======================================================== */}
      <section className="relative bg-[#07291c] text-white pt-12 pb-20 overflow-hidden border-b border-emerald-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-bold text-[#b6e59c] border border-white/15 mb-4">
              <span className="size-2 rounded-full bg-[#66b447] animate-pulse" />
              <span>Podunapur, Moulvibazar Sadar &bull; 100+ Acres</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 leading-none">
              The Resort
            </h1>
            <p className="text-emerald-100/90 text-base sm:text-xl leading-relaxed max-w-2xl font-light">
              An architectural masterwork divided into five distinct chapters — championship sports, authentic thatched cottages, working farmlands, serene natural lakes, and deeded land ownership.
            </p>
          </div>

          {/* 3D Master Aerial View Container */}
          <div className="relative aspect-[21/9] sm:aspect-[21/10] w-full rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/40 group">
            <Image
              src="/images/1.webp"
              alt="Official 3D Aerial View of Sampan Agro & Golf Resort estate"
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

            {/* Floating Glass Banner */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glassmorphism-dark rounded-2xl p-5 sm:p-7 shadow-2xl flex flex-col sm:flex-row sm:items-end justify-between gap-5 text-white border border-white/20">
              <div className="max-w-2xl">
                <span className="inline-block text-[11px] uppercase font-extrabold tracking-wider text-[#b6e59c] bg-white/15 backdrop-blur-md px-3 py-1 rounded-full mb-2">
                  Official 3D Master Aerial Overview
                </span>
                <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  100+ Acres of Championship Golf, Waterparks, 10 Ponds &amp; Luxury Stays
                </h2>
                <p className="text-emerald-100/80 text-xs sm:text-sm mt-1 hidden sm:block">
                  Discover the estate&apos;s divided chapters below, or jump directly to any zone.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="#gallery"
                  className="rounded-xl bg-[#66b447] px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-[#06210f] hover:bg-[#77c955] transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  Explore Divided Gallery ↓
                </a>
                <a
                  href="#zones"
                  className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  Masterplan Zones ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SIGNATURE EXPERIENCES (THE 4 PILLARS)
         ======================================================== */}
      <section className="py-20 border-b border-stone-200/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Core Lifestyle Pillars
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
              Signature Experiences
            </h2>
            <p className="text-stone-600 text-base mt-2">
              Four harmonized ways to experience the serene beauty of rural Moulvibazar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#0b4a32] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="size-12 rounded-xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center mb-4 text-[#0b4a32]">
                <Flag className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Golf on the Water
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nine holes with natural ponds across the estate, short and long driving ranges, and professional PGA-standard trainers.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#66b447] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="size-12 rounded-xl bg-lime-100/80 border border-lime-200 flex items-center justify-center mb-4 text-[#559e38]">
                <UtensilsCrossed className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Farm to Table
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Mango, dragon fruit, and malta freshly plucked from our orchards, plus dairy and organic produce, served in the resort restaurant.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#b8892b] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="size-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center mb-4 text-[#b8892b]">
                <Music className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Lakeside Evenings
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Concerts at the MP Centre, evening bonfires, sizzling barbecue zones, 3D cinema, and starlit open-air music.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl border-l-4 !border-l-[#0284c7] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="size-12 rounded-xl bg-sky-100/80 border border-sky-200 flex items-center justify-center mb-4 text-[#0284c7]">
                <Waves className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#14261c] mb-2">
                Aquatics &amp; Wellness
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Premium European spa and salon, 4 swimming pools, 10 natural ponds, gym, and tranquil trails winding through greenery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. STAY IN LUXURY VILLAS & SHAN COTTAGES
         ======================================================== */}
      <section className="py-20 border-b border-stone-200/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glassmorphism rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8892b] bg-amber-100 px-3.5 py-1 rounded-full">
                  Heritage Living
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3 mb-4">
                  Stay in Thatched Cottages &amp; Waterfront Villas
                </h2>
                <p className="text-stone-600 text-base leading-relaxed mb-4">
                  Experience authentic rural serenity in handcrafted <strong className="text-stone-900 font-semibold">thatched Shan cottages</strong> that stay naturally cool during summer, alongside waterfront luxury villas with floor-to-ceiling glass looking onto the natural ponds.
                </p>
                <p className="text-stone-600 text-base leading-relaxed mb-6">
                  Qualified buyers can acquire a full cottage or villa with <strong className="text-stone-900 font-semibold">100% Sub-Kabula deed registration</strong>, while guests enjoy five-star hotel service, presidential suites, and priority golf tee times.
                </p>

                <div className="grid grid-cols-2 gap-4 text-center mb-8">
                  <div className="rounded-2xl border border-stone-200/90 bg-white p-4 shadow-sm">
                    <span className="block font-heading text-xl sm:text-2xl font-bold text-[#0b4a32]">
                      100% Sub-Kabula
                    </span>
                    <span className="text-xs text-stone-500 font-medium">Deeded Villa Ownership</span>
                  </div>
                  <div className="rounded-2xl border border-stone-200/90 bg-white p-4 shadow-sm">
                    <span className="block font-heading text-xl sm:text-2xl font-bold text-[#b8892b]">
                      Managed 24/7
                    </span>
                    <span className="text-xs text-stone-500 font-medium">By Sampan Group</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/invest"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-md"
                  >
                    <span>Villa Ownership Options</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3.5 text-xs uppercase tracking-wider font-bold text-stone-800 hover:bg-stone-50 transition-colors shadow-sm"
                  >
                    <span>Book a Site Inspection</span>
                  </Link>
                </div>
              </div>

              {/* 4 Multi-Perspective Photo Mosaic */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div
                  onClick={() =>
                    setSelectedPhoto(
                      galleryPhotos.find((p) => p.src === "/images/lakeside-villas.webp") || null
                    )
                  }
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200 cursor-pointer"
                >
                  <Image
                    src="/images/lakeside-villas.webp"
                    alt="Lakeside villas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#b6e59c] block">
                      Waterfront
                    </span>
                    <span className="font-heading text-sm font-bold">Lakeside Luxury Villas</span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto(
                      galleryPhotos.find(
                        (p) => p.src === "/images/Sampan-Agro-%26-Golf-Resort%201.webp"
                      ) || null
                    )
                  }
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200 cursor-pointer"
                >
                  <Image
                    src="/images/Sampan-Agro-%26-Golf-Resort%201.webp"
                    alt="Authentic Shan thatched cottages"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#b6e59c] block">
                      Authentic Heritage
                    </span>
                    <span className="font-heading text-sm font-bold">Shan Thatched Cottages</span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto(
                      galleryPhotos.find((p) => p.src === "/images/Room-Web-image.webp") || null
                    )
                  }
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200 cursor-pointer"
                >
                  <Image
                    src="/images/Room-Web-image.webp"
                    alt="Presidential suite"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#b6e59c] block">
                      5-Star Comfort
                    </span>
                    <span className="font-heading text-sm font-bold">Presidential Suite</span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto(
                      galleryPhotos.find(
                        (p) =>
                          p.src === "/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp"
                      ) || null
                    )
                  }
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200 cursor-pointer"
                >
                  <Image
                    src="/images/cozy-outdoor-golf-clubhouse-seating-sunset.webp"
                    alt="Sunset lounge"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#b6e59c] block">
                      Fairway View
                    </span>
                    <span className="font-heading text-sm font-bold">Sunset Terrace Lounge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. 100+ ACRE MASTERPLAN BLUEPRINT CALLOUT
         ======================================================== */}
      <section className="py-20 border-b border-stone-200/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
            Engineering Layout
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3 mb-3">
            Masterplan of the 100+ Acre Estate
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mx-auto mb-8">
            Engineered around 10 preserved natural ponds, tea valley slopes, 9 championship golf holes, FIFA-standard sports turfs, and thriving organic agro-farmlands.
          </p>

          <div className="relative aspect-[21/9] sm:aspect-[16/8] w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-300 bg-stone-900 flex items-center justify-center group">
            <Image
              src="/images/2.webp"
              alt="Official 3D Masterplan drawing of the 100+ acre estate"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-10 text-white">
              <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 max-w-2xl text-left shadow-2xl border border-white/20">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-wider font-bold text-[#b6e59c] mb-2.5">
                  <Map className="size-4" />
                  <span>Official Masterplan Blueprint Drawing</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                  100+ Acre Architectural Drawing
                </h3>
                <p className="text-emerald-100/90 text-xs sm:text-sm mt-1.5 mb-5 leading-relaxed">
                  Top-down masterplan featuring the signature &ldquo;S&rdquo; curved resort complex, amphitheatre, waterpark, 10 natural ponds, and championship 9-hole golf grounds.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPhoto(
                        galleryPhotos.find((p) => p.src === "/images/2.webp") || null
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-[#66b447] px-5 py-3 text-xs uppercase tracking-wider font-bold text-[#06210f] hover:bg-[#77c955] transition-all shadow-md active:scale-95"
                  >
                    <Search className="size-4" />
                    <span>Enlarge Masterplan</span>
                  </button>
                  <a
                    href="/brochure.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-5 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all"
                  >
                    <FileText className="size-4" />
                    <span>View Brochure ↗</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-5 py-3 text-xs uppercase tracking-wider font-bold text-white hover:bg-white/20 transition-all"
                  >
                    <span>Request Blueprint PDF</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. THE MASTER DIVIDED GALLERY (BASED ON TEXTS / ZONES)
         ======================================================== */}
      <section id="gallery" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Gallery Headline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
                Divided Photo Gallery
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14261c] mt-3">
                Estate &amp; Zone Gallery
              </h2>
              <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
                Divided across five thematic chapters based on the master texts — from championship sports fields and thatched Shan cottages to golden wheat &amp; paddy fields.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <span className="text-xs font-bold text-stone-600 bg-white border border-stone-200 px-4 py-2 rounded-full shadow-sm">
                Showing {currentPhotoList.length} Curated Photos
              </span>
            </div>
          </div>

          {/* Quick-Jump / Filter Pill Dock */}
          <div className="sticky top-20 z-30 bg-[#f6f8f2]/95 backdrop-blur-md py-4 mb-14 border-y border-stone-200/80 shadow-xs">
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === "all"
                      ? "bg-[#0b4a32] text-white shadow-md scale-105"
                      : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                >
                  <Sparkles className="size-4" />
                  <span>All Chapters</span>
                  <span className="opacity-70 text-[11px]">({galleryPhotos.length})</span>
                </button>

                {chapters.map((ch) => {
                  const isActive = activeTab === ch.id;
                  const count = galleryPhotos.filter((p) => p.category === ch.id).length;
                  const ChapterIcon = ch.Icon;

                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => {
                        if (activeTab === "all") {
                          scrollToChapter(ch.id);
                        } else {
                          setActiveTab(ch.id);
                        }
                      }}
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${isActive
                          ? "bg-[#0b4a32] text-white shadow-md scale-105 font-bold"
                          : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                        }`}
                    >
                      <ChapterIcon className="size-3.5 shrink-0" />
                      <span>{ch.chapterNum}. {ch.titleEn.split("—")[0].split("&")[0].trim()}</span>
                      <span className="opacity-60 text-[11px]">({count})</span>
                    </button>
                  );
                })}
              </div>

              {activeTab !== "all" && (
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className="shrink-0 text-xs font-bold text-[#0b4a32] hover:text-[#66b447] underline underline-offset-4 ml-auto"
                >
                  Show All Chapters
                </button>
              )}
            </div>
          </div>

          {/* ========================================================
              DIVIDED CHAPTERS RENDERING (In All Mode or Filtered Mode)
             ======================================================== */}
          {activeTab === "all" ? (
            <div className="space-y-24">
              {chapters.map((ch) => {
                const photos = galleryPhotos.filter((p) => p.category === ch.id);
                if (photos.length === 0) return null;

                const featuredPhotos = photos.filter((p) => p.featured);
                const standardPhotos = photos.filter((p) => !p.featured);

                return (
                  <div
                    key={ch.id}
                    id={`chapter-${ch.id}`}
                    className="scroll-mt-36 pt-4 border-t border-stone-200/90 first:border-t-0"
                  >
                    {/* Chapter Header Banner */}
                    <div className="glassmorphism rounded-3xl p-6 sm:p-8 mb-8 border border-stone-200/90 shadow-sm">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="max-w-3xl">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#0b4a32] bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
                              Chapter {ch.chapterNum}
                            </span>
                            <span className="text-xs uppercase font-bold tracking-wider text-stone-500 font-sans">
                              {photos.length} Curated Photos
                            </span>
                          </div>

                          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14261c] leading-tight">
                            {ch.titleEn}
                          </h3>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {ch.highlights.slice(0, 3).map((hl, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 text-xs text-stone-700 bg-white/80 border border-stone-200 px-3 py-1 rounded-full shadow-2xs"
                              >
                                <Check className="size-3 text-[#66b447]" />
                                <span>{hl}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveTab(ch.id)}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#0b4a32] px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white hover:bg-[#155a40] transition-colors shadow-sm"
                          >
                            <span>Focus This Zone</span>
                            <ArrowRight className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Layout: Featured Showcase + Complementary Grid */}
                    <div className="space-y-6">
                      {/* Featured Panoramic Hero Row (If Available) */}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                                <div className="absolute top-4 left-4">
                                  <span className="inline-block text-[11px] uppercase font-extrabold tracking-wider text-[#b6e59c] bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                                    ★ Featured {photo.tag}
                                  </span>
                                </div>

                                <div className="absolute top-4 right-4 size-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Eye className="size-4" />
                                </div>
                              </div>

                              <div className="p-5 sm:p-6 bg-white rounded-b-[1.4rem]">
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

                      {/* Standard Asymmetrical Card Grid */}
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
            /* Single Focused Category View */
            <div>
              {chapters
                .filter((ch) => ch.id === activeTab)
                .map((ch) => {
                  const photos = galleryPhotos.filter((p) => p.category === ch.id);
                  return (
                    <div key={ch.id} className="space-y-8">
                      {/* Chapter Overview Box */}
                      <div className="glassmorphism rounded-3xl p-8 border border-stone-200/90 shadow-sm">
                        <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#0b4a32] bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                          Focusing Chapter {ch.chapterNum}
                        </span>
                        <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3 mb-2">
                          {ch.titleEn}
                        </h3>
                        <p className="text-stone-600 text-base max-w-3xl leading-relaxed mb-6">
                          {ch.tagline}. Review our curated photo documentation below or open any image to view in high resolution with specifications.
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {ch.highlights.map((hl, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 text-xs text-stone-700 bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-2xs"
                            >
                              <Check className="size-3.5 text-[#66b447]" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Photo Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {photos.map((photo) => (
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
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          6. ZONES (THE 4 CARDS WITH DETAILED BULLETS MATCHING HTML)
         ======================================================== */}
      <section id="zones" className="py-20 border-t border-stone-200/90 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b4a32] bg-emerald-100 px-3.5 py-1 rounded-full">
              Zoning Breakdown
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#14261c] mt-3">
              Masterplan Zones
            </h2>
            <p className="text-stone-600 text-base mt-2">
              The 100+ acre masterplan is structured into 4 specialized zones with world-class athletic, agricultural, and leisure infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Zone 1: Elite sports and athletics */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#0b4a32] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-12 rounded-xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-[#0b4a32]">
                  <Flag className="size-6" />
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
                  <span>Short and long driving ranges with professional trainers</span>
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

            {/* Zone 2: Aquatic leisure and wellness */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#0284c7] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-12 rounded-xl bg-sky-100/80 border border-sky-200 flex items-center justify-center text-[#0284c7]">
                  <Waves className="size-6" />
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
              </ul>
            </div>

            {/* Zone 3: Entertainment and hospitality */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#b8892b] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-[#b8892b]">
                  <Home className="size-6" />
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
                  <span>Luxury waterfront villas and authentic <strong>thatched cottages</strong></span>
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
                  <span>Men&apos;s and women&apos;s separate prayer rooms (Mosque)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#b8892b] font-bold text-base">•</span>
                  <span><strong>MP Centre:</strong> A lakeside open-air concert and event zone</span>
                </li>
              </ul>
            </div>

            {/* Zone 4: Nature and agro-ecosystem */}
            <div className="glassmorphism rounded-3xl border-l-4 !border-l-[#66b447] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200/80">
                <div className="size-12 rounded-xl bg-lime-100/80 border border-lime-200 flex items-center justify-center text-[#66b447]">
                  <Sprout className="size-6" />
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
                  <span>Commercial agro farm: tea garden, mango, jamun, pineapple, litchi, lemon, and dragon fruit orchards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#66b447] font-bold text-base">•</span>
                  <span>Golden paddy fields &amp; wheat fields</span>
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
                  <span>Picnic lawns, evening bonfire, and barbecue zones</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Booking & Enquiry CTA Banner */}
          <div className="glassmorphism-dark rounded-3xl text-white p-8 sm:p-12 shadow-2xl border border-emerald-500/25">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-block text-xs uppercase tracking-widest text-[#b6e59c] font-bold bg-white/10 px-3.5 py-1 rounded-full mb-3">
                  Site Visit &amp; Tours
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  Experience The Resort in Person
                </h3>
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  Walk through the nine-hole course, view our authentic thatched cottages, taste fresh farm-to-table harvests, and meet our senior property counselors at Podunapur, Moulvibazar.
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

      {/* ========================================================
          7. HIGH-RESOLUTION INTERACTIVE LIGHTBOX MODAL WITH ARROWS
         ======================================================== */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0b3a28] rounded-3xl overflow-hidden border border-emerald-600/40 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#07291c] text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#b6e59c] bg-white/10 px-3 py-1 rounded-full">
                  {selectedPhoto.tag}
                </span>
                <span className="text-xs text-emerald-200/70 font-mono">
                  {selectedIndex + 1} of {currentPhotoList.length}
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

            {/* Main Stage with Left / Right Arrows */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                priority
                className="object-contain"
              />

              {/* Prev Button */}
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

              {/* Next Button */}
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

            {/* Bottom Caption & Action Deck */}
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
  );
}
