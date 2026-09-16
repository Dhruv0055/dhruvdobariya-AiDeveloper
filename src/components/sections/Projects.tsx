import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectModal } from "../ui/ProjectModal";
import { ProjectThumbnail } from "../ui/ProjectThumbnail";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { ExternalLink, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ProjectCardProps {
  project: Project;
  idx: number;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yMockup = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const isEven = idx % 2 === 1;
  const isLive = Boolean(project.liveUrl);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, ease: customEase }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
    >
      {/* Image / Mockup Column with Parallax Depth Float */}
      <motion.div
        style={{ y: yMockup }}
        className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        onClick={() => onSelect(project)}
      >
        <div className="group cursor-pointer relative rounded-3xl overflow-hidden bg-[#0F1015] border border-light-border dark:border-white/10 shadow-2xl hover:border-accent/50 transition-all duration-500">
          {project.image ? (
            <>
              <div className="flex items-center justify-between px-4 py-3 bg-light-card/80 dark:bg-black/60 border-b border-light-border dark:border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <div className="px-3 py-0.5 rounded-full bg-light-surface/60 dark:bg-white/5 border border-light-border dark:border-white/10 text-[10px] font-mono text-light-subtext dark:text-dark-subtext truncate max-w-[200px]">
                  {project.liveUrl?.replace("https://", "").replace("/", "")}
                </div>

                <div className="w-6" />
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <ProjectThumbnail
              projectId={project.id}
              title={project.title}
            />
          )}
        </div>
      </motion.div>

      {/* Text Info Column */}
      <div className={`lg:col-span-5 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-normal text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            0{idx + 1} // {project.category}
          </span>

          {isLive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live App
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-[10px]">
              <Clock className="w-3 h-3 text-amber-500" />
              Featured Architecture
            </span>
          )}
        </div>

        <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-light-text dark:text-dark-text tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-light-subtext dark:text-dark-subtext leading-relaxed font-light">
          {project.description}
        </p>

        {/* Key Highlight Bullets */}
        <div className="space-y-2 pt-1">
          {project.highlights.slice(0, 2).map((highlight, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-light-subtext dark:text-dark-subtext">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="font-light">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-subtext dark:text-dark-subtext font-light"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTA Buttons */}
        <div className="flex items-center gap-3 pt-4">
          {isLive ? (
            <Magnetic strength={15}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-light-text text-light-bg dark:bg-white dark:text-dark-bg font-mono text-xs font-normal hover:opacity-90 transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-xs font-normal">
              <Clock className="w-3.5 h-3.5" />
              <span>Architecture Preview</span>
            </span>
          )}

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border hover:bg-light-card dark:hover:bg-dark-card text-light-text dark:text-dark-text font-mono text-xs font-normal transition-colors cursor-pointer"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        index="03 // Featured Works"
        title="Recent live projects & applications."
        subtitle="Explore recent production platforms, web systems, and full-stack software built with performance, responsiveness, and clean motion."
      />

      {/* Spacious Editorial Showcase List with Parallax Float */}
      <div className="space-y-20 sm:space-y-28">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            idx={idx}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
