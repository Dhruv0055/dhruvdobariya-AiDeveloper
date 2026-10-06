import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "praval-jewels",
    title: "Praval Jewels",
    tagline: "Luxury Certified & Hallmarked Fine Jewellery Platform",
    category: "Web Applications",
    featured: true,
    year: "2024",
    description: "An opulent digital luxury showcase for certified gold, diamond, and silver jewellery featuring live bullion rates, price calculator, and VIP store appointments.",
    longDescription: "A bespoke e-commerce and brand showcase designed for Praval Jewels. Built with editorial luxury aesthetics, live gold/silver rate ticker feeds, interactive jewellery price calculation modules, curated collection showcases, and VIP showroom appointment booking.",
    highlights: [
      "Live Gold & Silver rate ticker integration (24K, 22K, 18K Gold & 925 Silver)",
      "Interactive jewellery price calculator with hallmark certification details",
      "VIP showroom visit booking & store direction pipeline",
      "Ultra-smooth responsive luxury aesthetics and fluid animation"
    ],
    metrics: ["100% Hallmark Certified", "Live Rate Ticker", "High-End Luxury UX"],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://praval-jewels-one.vercel.app/",
    image: "/projects/praval-jewels.png",
    accentColor: "#D97706"
  },
  {
    id: "ryqon-digitals",
    title: "Ryqon Digitals",
    tagline: "Full-Stack Web, Mobile Apps & Growth Marketing Agency",
    category: "Web Applications",
    featured: true,
    year: "2024",
    description: "A high-conversion digital agency platform engineered for Ryqon Digitals, delivering custom full-stack web architectures, mobile apps, and data-driven marketing growth.",
    longDescription: "Engineered for Ryqon Digitals to showcase full-stack development and synchronized growth marketing. Features sub-second load performance, Next.js 15 architectures, cross-platform mobile services, performance marketing funnels, and verified growth metrics (+3.8x Avg ROAS).",
    highlights: [
      "Next.js 15 & React full-stack responsive web platform with sub-second loading speeds",
      "Cross-platform mobile applications showcase (Flutter & React Native)",
      "High-ROAS performance marketing and lead generation funnel integration",
      "Interactive case study modules, client review carousel, and instant CTA booking"
    ],
    metrics: ["+3.8x Avg ROAS", "Sub-Second Load", "Next.js 15 / Flutter"],
    techStack: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ryqon-digitals.vercel.app/",
    image: "/projects/ryqon-digitals.png",
    accentColor: "#2563EB"
  },
  {
    id: "mahadev-fitness",
    title: "Mahadev Fitness Gym",
    tagline: "Surat's 5.0★ Premier Strength, Hypertrophy & Olympic Weightlifting Facility",
    category: "Web Applications",
    featured: true,
    year: "2025",
    description: "A high-performance modern web platform for Surat's 5.0★ premier fitness center at Mansarovar Society, Yogi Chowk. Features Olympic free weight zones, class schedules, and direct WhatsApp onboarding.",
    longDescription: "A modern, high-conversion web platform engineered for Mahadev Fitness Gym located at Mansarovar Society, Yogi Chowk, Surat. Built with high-octane athletic visuals, comprehensive Olympic strength & free-weight equipment showcases, dynamic morning/evening batch schedules (5:30 AM & 5:00 PM), verified 5.0★ Google review integrations, and instant WhatsApp desk conversion pipelines.",
    highlights: [
      "High-octane responsive visual architecture engineered for premier athletic gym branding",
      "Heavy Olympic free weights, strength zones & certified trainer showcases",
      "Dynamic morning & evening shift schedules (5:30 AM & 5:00 PM batches)",
      "Instant 1-click WhatsApp desk integration & membership conversion funnel"
    ],
    metrics: ["5.0★ Rated (100+ Reviews)", "Olympic Strength Zone", "100% Mobile Optimized"],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://mahadevfitness-five.vercel.app/",
    image: "/projects/mahadev-fitness.png",
    imagePosition: "object-left-top",
    accentColor: "#FF2626"
  },
  {
    id: "qr-cafe-management",
    title: "QR Cafe & Dine Management",
    tagline: "Contactless QR Ordering, Kitchen POS & Cafe Operations Suite",
    category: "Web Applications",
    featured: true,
    year: "2024",
    description: "A full-stack dining platform enabling patrons to scan dynamic table QR codes for instant digital menus and ordering, paired with real-time Kitchen Display Systems (KDS).",
    longDescription: "Engineered to eliminate order delays and streamline restaurant workflows. Guests scan table-specific QR codes to explore categorized visual menus, customize orders, and pay instantly without downloading an app. The kitchen receives real-time ticket sync via WebSockets, while managers access live revenue analytics and inventory tracking.",
    highlights: [
      "Dynamic table-specific QR code menus with instant zero-install web app",
      "Real-time Kitchen Display System (KDS) & automated KOT ticket generation",
      "Digital billing, split-check calculations, and daily sales analytics",
      "Live table occupancy tracker and inventory stock alerts"
    ],
    metrics: ["0s App Download Required", "40% Faster Table Turnover", "Real-Time WebSocket Sync"],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    accentColor: "#F59E0B"
  },
  {
    id: "dhruv-portfolio",
    title: "Dhruv Dobariya Showcase",
    tagline: "Video Post-Production & Visual Storytelling Showcase",
    category: "Creative Showcase",
    featured: true,
    year: "2024",
    description: "Official portfolio of Dhruv Dobariya highlighting high-retention Reels, commercial brand films, and DaVinci Resolve color grading.",
    longDescription: "A high-conversion showcase engineered to present commercial video editing, social media retention editing, and visual storytelling. Built with responsive layouts, modern dark aesthetics, fast performance, and direct WhatsApp contact channels.",
    highlights: [
      "High-retention video editing and commercial film showcase",
      "DaVinci Resolve color grading and spatial sound design highlights",
      "Fast 24-48h client turnaround workflow integration",
      "Direct WhatsApp lead generation channel"
    ],
    metrics: ["10M+ Client Views", "24-48H Turnaround", "100% Client Satisfaction"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://dhruvdobariya-portfolio.vercel.app/",
    image: "/projects/dhruv-portfolio.png",
    accentColor: "#3B82F6"
  }
];
