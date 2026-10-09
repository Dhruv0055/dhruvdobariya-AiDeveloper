import type { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Lead Full-Stack Web Developer & Designer",
    company: "Digital Product Studio",
    location: "Remote",
    type: "Work",
    description: "Leading the development of high-performance modern web platforms, bespoke client architectures, and production full-stack applications with high-fidelity frontend craft.",
    achievements: [
      "Architected real-time web applications handling 100k+ monthly active visitor sessions.",
      "Engineered optimized Next.js 15 SSR/SSG pipelines decreasing initial page load times by 45%.",
      "Designed and implemented unified design systems across multiple web platforms with strict accessibility standards."
    ],
    tech: ["React", "TypeScript", "Next.js 15", "Node.js", "Tailwind CSS", "Figma", "Vercel"]
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Web Developer",
    company: "Modern Web Labs",
    location: "Remote / Hybrid",
    type: "Work",
    description: "Built scalable web applications, custom API integrations, and responsive client platforms focusing on high conversion, fluid micro-interactions, and sub-second load speeds.",
    achievements: [
      "Pioneered responsive UI component libraries delivering sub-100ms interaction response times.",
      "Integrated database schemas and secure RESTful endpoints for booking and clinic platforms.",
      "Mentored junior developers in TypeScript best practices, design tokens, and clean responsive CSS."
    ],
    tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "Tailwind CSS", "REST APIs"]
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer & UI Designer",
    company: "Creative Digital Agency",
    location: "Hybrid",
    type: "Work",
    description: "Crafted bespoke, interactive portfolio and web platforms for high-growth tech startups with emphasis on motion design and typography.",
    achievements: [
      "Delivered 12+ custom client web experiences achieving average 98+ Google Lighthouse scores.",
      "Introduced modern component architectures and Framer Motion animation standardizations."
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Figma", "GSAP", "REST APIs"]
  },
  {
    period: "2020 — 2024",
    role: "B.S. in Computer Science & Engineering",
    company: "University Academic Program",
    location: "India",
    type: "Education",
    description: "Focused coursework in Distributed Systems, Artificial Intelligence, Human-Computer Interaction (HCI), Algorithms, and Software Architecture.",
    achievements: [
      "Graduated with First Class Distinction.",
      "Led university Hackathon AI division and organized campus technical workshops."
    ],
    tech: ["Algorithms", "Data Structures", "AI Systems", "Database Design", "HCI"]
  }
];
