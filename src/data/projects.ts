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
    id: "the-body-lab-fitness",
    title: "The Body Lab Fitness",
    tagline: "Premier Luxury Fitness & Athletic Training Platform",
    category: "Web Applications",
    featured: true,
    year: "2024",
    description: "Modern web application for Surat's premier luxury fitness centre with official Hammer Strength & Life Fitness equipment setup.",
    longDescription: "A high-performance digital experience engineered for The Body Lab Fitness brand. Features high-energy typography, dynamic facilities overview (Hammer Strength, Steam & Spa, 1-on-1 Mentors), membership sign-up pipelines, and WhatsApp desk integration.",
    highlights: [
      "High-energy visual layout tailored for luxury fitness branding",
      "Official Hammer Strength & Life Fitness facility showcases",
      "Steam & Spa, Personal Training & Nutrition schedules",
      "Integrated WhatsApp Desk & membership conversion flow"
    ],
    metrics: ["Surat's Premier Gym", "Luxury Facilities", "100% Mobile Optimized"],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://thebodylabfitness-4n9zp8pmr-dhruv-dobariya.vercel.app/",
    image: "/projects/body-lab-fitness.png",
    accentColor: "#EF4444"
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
