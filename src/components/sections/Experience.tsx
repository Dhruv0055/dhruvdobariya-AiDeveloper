import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { experiences } from "../../data/experience";
import { Briefcase, GraduationCap, CheckCircle2, MapPin } from "lucide-react";

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        index="05 // Trajectory & Background"
        title="Experience & educational timeline."
        subtitle="A track record of engineering scalable web systems, leading generative AI implementations, and mastering human-centered UI design."
      />

      <div className="relative pl-6 sm:pl-10 space-y-12 border-l border-light-border dark:border-dark-border">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: customEase }}
            className="relative group"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-light-surface dark:bg-dark-surface border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            {/* Content Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-light-border-hover dark:hover:border-dark-border-hover transition-all duration-300 space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-accent dark:text-accent-light px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs text-light-subtext dark:text-dark-subtext flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-light-subtext dark:text-dark-subtext">
                    {exp.company}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-subtext dark:text-dark-subtext w-fit">
                  {exp.type === "Work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-light-subtext dark:text-dark-subtext leading-relaxed font-light">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 pt-2">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-light-subtext dark:text-dark-subtext">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-light-border/60 dark:border-dark-border/60 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-subtext dark:text-dark-subtext"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
