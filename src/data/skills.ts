export interface SimpleSkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export const simpleSkills: SimpleSkillGroup[] = [
  {
    category: "Modern Web & Frontend",
    icon: "layout",
    description: "Crafting blazing fast, responsive, and tactile web applications.",
    skills: [
      "React & Next.js 15",
      "TypeScript (Strict)",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Architecture",
      "HTML5 & Semantic Web"
    ]
  },
  {
    category: "Full-Stack & Cloud",
    icon: "database",
    description: "Scalable web backends, database integrations, and robust cloud deployments.",
    skills: [
      "Node.js & Next.js API",
      "RESTful APIs",
      "Supabase & PostgreSQL",
      "WebSockets & Realtime",
      "Vercel Cloud Deployment",
      "Python (FastAPI)"
    ]
  },
  {
    category: "UI/UX & Design Systems",
    icon: "pen-tool",
    description: "Bespoke design systems, typography hierarchy, and visual storytelling.",
    skills: [
      "Figma UI/UX Design",
      "Design Systems",
      "Mobile-First Layouts",
      "Micro-Interactions",
      "Editorial Aesthetics"
    ]
  },
  {
    category: "Performance & Workflow",
    icon: "sparkles",
    description: "Sub-second load times, SEO optimization, and modern developer tooling.",
    skills: [
      "SEO Optimization",
      "Vite & Build Tooling",
      "Git & GitHub",
      "AI-Assisted Workflows",
      "Cross-Browser Testing"
    ]
  }
];

export const toolsMarquee = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Framer Motion",
  "Vercel",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "Responsive UI",
  "Google Antigravity",
  "Claude AI",
  "ChatGPT",
  "Git & GitHub"
];
