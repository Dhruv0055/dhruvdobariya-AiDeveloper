export interface SimpleSkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export const simpleSkills: SimpleSkillGroup[] = [
  {
    category: "AI & Autonomous Tools",
    icon: "bot",
    description: "Cutting-edge agentic workflows, LLM orchestration, and rapid AI builders.",
    skills: [
      "Google Antigravity",
      "Claude 3.5 AI",
      "ChatGPT (GPT-4o)",
      "Lovable AI Builder",
      "Immergent AI Workflows",
      "LangChain & Agents"
    ]
  },
  {
    category: "Modern Frontend",
    icon: "layout",
    description: "Crafting blazing fast, accessible, and fluid web applications.",
    skills: [
      "React & Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Interactive Canvas"
    ]
  },
  {
    category: "Backend & Data Cloud",
    icon: "database",
    description: "Scalable cloud services, vector databases, and real-time APIs.",
    skills: [
      "Python (FastAPI)",
      "DataStax Astra DB",
      "Node.js",
      "Supabase & PostgreSQL",
      "WebSockets & REST"
    ]
  },
  {
    category: "UI/UX & Creative Craft",
    icon: "pen-tool",
    description: "Bespoke design systems, typography hierarchy, and visual storytelling.",
    skills: [
      "Figma UI Design",
      "Design Systems",
      "DaVinci Resolve",
      "Responsive Layouts"
    ]
  }
];

export const toolsMarquee = [
  "Google Antigravity",
  "Claude 3.5 AI",
  "ChatGPT (GPT-4o)",
  "Lovable AI",
  "Immergent",
  "DataStax Astra DB",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "LangChain",
  "Figma",
  "Framer Motion",
  "Supabase",
  "PostgreSQL"
];
