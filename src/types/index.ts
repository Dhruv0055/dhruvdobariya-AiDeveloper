export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Web Applications" | "AI & Agents" | "Creative Showcase";
  featured: boolean;
  year: string;
  description: string;
  longDescription: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}

export interface ExperienceItem { period: string; role: string; company: string; location: string; type: string; description: string; achievements: string[]; tech: string[]; }
