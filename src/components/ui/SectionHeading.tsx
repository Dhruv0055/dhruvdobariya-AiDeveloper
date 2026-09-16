import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  subtitle,
  align = "left"
}) => {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}`}>
      {/* Index Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.6, ease: customEase }}
        className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="font-mono text-[11px] font-normal tracking-widest text-accent uppercase">
          {index}
        </span>
        <span className="h-px w-6 bg-accent/40" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.7, delay: 0.08, ease: customEase }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-light-text dark:text-dark-text leading-[1.18]"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.75, delay: 0.16, ease: customEase }}
          className="mt-4 text-base sm:text-lg text-light-subtext dark:text-dark-subtext font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
