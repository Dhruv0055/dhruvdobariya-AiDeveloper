import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../types";
import { X, CheckCircle2, Cpu, Zap, Layers, Sparkles, ArrowUpRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll and hide floating navbar when modal is open
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 dark:bg-black/90 backdrop-blur-xl transition-opacity cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
          className="relative w-full max-w-3xl max-h-[88vh] flex flex-col bg-light-surface dark:bg-[#111317] border border-light-border dark:border-white/10 rounded-3xl shadow-2xl z-10 overflow-hidden"
        >
          {/* Sticky Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-light-border dark:border-white/10 bg-light-surface/95 dark:bg-[#111317]/95 backdrop-blur-md z-20 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-normal text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                {project.category}
              </span>
              <span className="font-mono text-[11px] text-light-subtext dark:text-dark-subtext">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full hover:bg-light-card dark:hover:bg-white/10 text-light-subtext dark:text-dark-subtext hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-7"
          >
            {/* Title & Tagline */}
            <div>
              <h2 className="font-display font-light text-2xl sm:text-4xl text-light-text dark:text-dark-text tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-light-subtext dark:text-dark-subtext mt-1.5 font-light">
                {project.tagline}
              </p>
            </div>

            {/* Screenshot / Mockup Preview */}
            {project.image ? (
              <div className="rounded-2xl overflow-hidden border border-light-border dark:border-white/10 shadow-lg bg-black/40">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-light-card/90 dark:bg-black/60 border-b border-light-border dark:border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  {project.liveUrl && (
                    <span className="font-mono text-[10px] text-light-subtext dark:text-dark-subtext truncate max-w-[220px]">
                      {project.liveUrl.replace("https://", "").replace("/", "")}
                    </span>
                  )}
                  <div className="w-6" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover object-top max-h-[360px]"
                />
              </div>
            ) : null}

            {/* Overview & Description */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-light-subtext dark:text-dark-subtext flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Overview & Impact
              </h3>
              <p className="text-sm sm:text-base text-light-text/90 dark:text-dark-text/90 leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-light-subtext dark:text-dark-subtext flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Key Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-light-card/60 dark:bg-white/5 border border-light-border dark:border-white/10 text-center"
                  >
                    <span className="font-mono font-medium text-xs sm:text-sm text-light-text dark:text-dark-text block">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features & Architecture Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-light-subtext dark:text-dark-subtext flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-accent" />
                Architecture & Key Features
              </h3>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-light-card/40 dark:bg-white/[0.02] border border-light-border/60 dark:border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-light-text/80 dark:text-dark-text/80 font-light leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="space-y-3 pb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-light-subtext dark:text-dark-subtext flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                Engineering Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-normal bg-light-card dark:bg-white/5 border border-light-border dark:border-white/10 text-light-text dark:text-dark-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Bottom Action Bar */}
          <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-4 border-t border-light-border dark:border-white/10 bg-light-surface/95 dark:bg-[#111317]/95 backdrop-blur-md shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-light-border dark:border-white/10 hover:bg-light-card dark:hover:bg-white/5 text-xs font-mono font-normal text-light-subtext dark:text-dark-subtext hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Close Case Study
            </button>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-normal bg-accent text-white hover:opacity-90 shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]"
              >
                <span>Launch Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="font-mono text-xs text-amber-500/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Featured Architecture (Not Live)
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
