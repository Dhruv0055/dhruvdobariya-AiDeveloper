import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, Bot } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: customEase },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Top Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-light-border dark:border-dark-border bg-light-surface/60 dark:bg-dark-surface/60 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="font-mono text-xs font-medium tracking-tight text-light-text dark:text-dark-text">
              AI Web Developer & UI Designer
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-light-border dark:border-dark-border bg-light-surface/40 dark:bg-dark-surface/40 backdrop-blur-md text-light-subtext dark:text-dark-subtext font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Antigravity • Lovable • Claude AI • ChatGPT • Astra</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-light-text dark:text-dark-text leading-[1.08]">
            Architecting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-text via-accent to-light-text dark:from-white dark:via-blue-400 dark:to-neutral-400 font-normal">
              intelligent interfaces
            </span>{" "}
            & quiet craft.
          </h1>
        </motion.div>

        {/* Subtitle / Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-light-subtext dark:text-dark-subtext max-w-2xl font-light leading-relaxed"
        >
          Hi, I’m <span className="font-normal text-light-text dark:text-dark-text">Dhruv Dobariya</span>.
          I engineer full-stack web architectures, orchestrate autonomous AI agent workflows, and design high-conviction digital products with calm, fluid motion.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
          <Magnetic strength={20}>
            <a
              href="#projects"
              data-cursor="View"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-light-text text-light-bg dark:bg-white dark:text-dark-bg font-normal text-sm hover:opacity-90 shadow-xl shadow-black/10 dark:shadow-white/5 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Magnetic>

          <Magnetic strength={20}>
            <a
              href="#ai-assistant"
              data-cursor="Ask AI"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:bg-light-card dark:hover:bg-dark-card text-light-text dark:text-dark-text font-normal text-sm transition-all duration-200"
            >
              <Bot className="w-4 h-4 text-accent" />
              <span>Talk with AI Clone</span>
            </a>
          </Magnetic>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          variants={itemVariants}
          className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-light-border dark:border-dark-border"
        >
          <div>
            <p className="font-display font-light text-2xl sm:text-3xl text-light-text dark:text-dark-text">
              3+
            </p>
            <p className="text-[11px] font-mono font-normal text-light-subtext dark:text-dark-subtext uppercase tracking-wider mt-1">
              Years Crafting
            </p>
          </div>
          <div>
            <p className="font-display font-light text-2xl sm:text-3xl text-light-text dark:text-dark-text">
              15+
            </p>
            <p className="text-[11px] font-mono font-normal text-light-subtext dark:text-dark-subtext uppercase tracking-wider mt-1">
              AI & Web Apps
            </p>
          </div>
          <div>
            <p className="font-display font-light text-2xl sm:text-3xl text-light-text dark:text-dark-text">
              &lt;100ms
            </p>
            <p className="text-[11px] font-mono font-normal text-light-subtext dark:text-dark-subtext uppercase tracking-wider mt-1">
              Stream Latency
            </p>
          </div>
          <div>
            <p className="font-display font-light text-2xl sm:text-3xl text-light-text dark:text-dark-text">
              100%
            </p>
            <p className="text-[11px] font-mono font-normal text-light-subtext dark:text-dark-subtext uppercase tracking-wider mt-1">
              Type-Safe Standard
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-light-subtext dark:text-dark-subtext hover:text-light-text dark:hover:text-dark-text transition-colors group"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-light-subtext/70 dark:text-dark-subtext/70">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border border-light-border dark:border-dark-border flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
