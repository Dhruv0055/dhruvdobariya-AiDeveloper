import type { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Senior AI Web Engineer & Designer",
    company: "Autonomous AI Studio",
    location: "Remote",
    type: "Work",
    description: "Leading the development of intelligent generative web interfaces, multi-agent workflow systems, and production RAG applications with high-fidelity frontend craft.",
    achievements: [
      "Architected real-time multi-agent canvas application handling 100k+ monthly workflow executions.",
      "Engineered hybrid search RAG pipeline decreasing citation retrieval latency by 45%.",
      "Designed and implemented unified design system across 4 web platforms with strict accessibility standards."
    ],
    tech: ["React", "TypeScript", "Next.js", "FastAPI", "LangChain", "Tailwind CSS", "Figma"]
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack AI Developer",
    company: "Cognitive Tech Lab",
    location: "Remote / Hybrid",
    type: "Work",
    description: "Built scalable web applications integrated with OpenAI, Claude, and Gemini APIs, focusing on responsive UI micro-interactions and low-latency streaming.",
    achievements: [
      "Pioneered streaming generative UI components delivering sub-100ms first-token render times.",
      "Integrated vector database search across 5M+ knowledge documents with hybrid ranking.",
      "Mentored junior engineers in TypeScript best practices, design token workflows, and Framer Motion."
    ],
    tech: ["TypeScript", "Next.js", "Python", "Qdrant", "PostgreSQL", "Tailwind CSS"]
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
