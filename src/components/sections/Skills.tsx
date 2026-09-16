import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { toolsMarquee } from "../../data/skills";
import { Sparkles, ArrowRight, Bot, Layout, Database, PenTool, type LucideIcon } from "lucide-react";

interface SkillTrack {
  id: string;
  category: string;
  subtitle: string;
  icon: LucideIcon;
  tools: string[];
  description: string;
}

const skillTracks: SkillTrack[] = [
  {
    id: "ai",
    category: "AI & Autonomous Agent Tools",
    subtitle: "LLM Orchestration • Agentic Workflows • Vector Search",
    icon: Bot,
    tools: [
      "Google Antigravity",
      "Claude 3.5 AI",
      "ChatGPT (GPT-4o)",
      "Lovable AI",
      "Immergent",
      "LangChain & Agents",
      "Prompt Engineering"
    ],
    description: "Architecting autonomous multi-agent systems, structured function-calling schemas, and low-latency generative pipelines."
  },
  {
    id: "frontend",
    category: "Modern Frontend Engineering",
    subtitle: "React 19 • Next.js 15 • Fluid Spring Motion",
    icon: Layout,
    tools: [
      "React & Next.js",
      "TypeScript (Strict)",
      "Tailwind CSS",
      "Framer Motion",
      "WebGL / Canvas",
      "Responsive Architecture"
    ],
    description: "Developing blazing fast, accessible, and tactile web interfaces with sub-100ms first-token renders and 60fps animations."
  },
  {
    id: "backend",
    category: "Backend & Data Cloud",
    subtitle: "FastAPI • Vector Databases • WebSockets",
    icon: Database,
    tools: [
      "Python (FastAPI)",
      "DataStax Astra DB",
      "Node.js",
      "Supabase & PostgreSQL",
      "WebSockets SSE",
      "RESTful APIs"
    ],
    description: "Engineering scalable async microservices, hybrid vector search pipelines, and real-time bidirectional WebSocket event streams."
  },
  {
    id: "design",
    category: "UI/UX & Creative Craft",
    subtitle: "Figma • Design Systems • Visual Storytelling",
    icon: PenTool,
    tools: [
      "Figma UI/UX",
      "Design Systems",
      "Typography Hierarchy",
      "DaVinci Resolve",
      "Micro-Interactions"
    ],
    description: "Designing quiet, high-conviction digital products with generous whitespace, refined editorial typography, and human-centered ergonomics."
  }
];

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Skills: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string>("ai");

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        index="02 // Technical Directory"
        title="Curated intelligence & engineering stack."
        subtitle="Specialized in combining multi-agent AI frameworks, enterprise cloud data stores, and fluid frontend architectures."
      />

      {/* Non-Boxy Line-Divided Directory List */}
      <div className="divide-y divide-light-border dark:divide-white/10 mb-20">
        {skillTracks.map((track, idx) => {
          const isOpen = activeTrack === track.id;
          const Icon = track.icon;

          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: smoothEase }}
              onClick={() => setActiveTrack(isOpen ? "" : track.id)}
              className="py-8 sm:py-10 cursor-pointer group transition-all"
            >
              {/* Row Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-normal text-accent">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display font-light text-2xl sm:text-3xl tracking-tight text-light-text dark:text-dark-text group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                        {track.category}
                      </h3>
                    </div>
                    <p className="font-mono text-xs font-light text-light-subtext dark:text-dark-subtext mt-1">
                      {track.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs font-mono text-light-subtext dark:text-dark-subtext group-hover:text-light-text dark:group-hover:text-dark-text transition-colors">
                    {isOpen ? "Collapse" : "Explore tools"}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-light-border dark:border-white/10 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? "rotate-90 bg-accent text-white border-accent" : "group-hover:border-accent text-light-subtext dark:text-dark-subtext"
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Expandable Non-Boxy Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="overflow-hidden pt-6 sm:pt-8 pl-0 sm:pl-14"
                  >
                    <p className="text-base text-light-subtext dark:text-dark-subtext leading-relaxed max-w-3xl mb-6 font-light">
                      {track.description}
                    </p>

                    {/* Floating Tool Pills */}
                    <div className="flex flex-wrap gap-2.5">
                      {track.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-light-surface dark:bg-white/5 text-light-text dark:text-dark-text border border-light-border dark:border-white/10 shadow-sm hover:border-accent/50 hover:bg-accent/10 transition-all"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Infinite Floating Marquee */}
      <div className="relative overflow-hidden py-8 border-y border-light-border dark:border-white/10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10" />

        <div className="flex w-max animate-marquee space-x-4">
          {[...toolsMarquee, ...toolsMarquee].map((tool, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold text-light-text dark:text-dark-text whitespace-nowrap bg-transparent hover:text-accent transition-colors"
            >
              <Sparkles className="w-3 h-3 text-accent" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
