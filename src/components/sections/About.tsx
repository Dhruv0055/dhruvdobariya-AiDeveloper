import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "../ui/Icons";
import { Magnetic } from "../ui/Magnetic";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const principles = [
  {
    number: "01",
    title: "Intelligent Systems & AI",
    desc: "Connecting large language models, agentic workflows, and retrieval systems to solve real-world problems with low latency."
  },
  {
    number: "02",
    title: "High-Craft Web Engineering",
    desc: "Developing fast, responsive, and reliable web applications in Next.js & React with clean architectures and type-safety."
  },
  {
    number: "03",
    title: "Minimalist & Fluid UI Design",
    desc: "Crafting modern typography hierarchy, calm whitespace, and natural spring motion so every interface feels effortless."
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        index="01 // Background"
        title="Where artificial intelligence meets clean web craftsmanship."
        subtitle="I believe the best digital experiences are built on clean code, bold typography, and intuitive motion."
      />

      {/* Open Editorial Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="lg:col-span-7 space-y-6 text-base sm:text-lg text-light-subtext dark:text-dark-subtext leading-relaxed font-light"
        >
          <p>
            I’m <strong className="text-light-text dark:text-dark-text font-semibold">Dhruv Dobariya</strong>, an AI Web Developer & Designer based in India. I specialize in building high-performance modern web platforms, autonomous AI agent tools, and creative digital showcases.
          </p>
          <p>
            My work focuses on what truly matters: <span className="text-light-text dark:text-dark-text font-medium">ultra-fast loading speeds, clean responsive layouts, intuitive user journeys, and reliable cloud backends</span>.
          </p>
          <p>
            Whether engineering platforms like <em>The Body Lab Fitness</em> or crafting interactive web applications, I bring meticulous attention to every pixel and line of code.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Magnetic strength={15}>
              <a
                href="https://wa.me/918160925636"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </Magnetic>

            <Magnetic strength={15}>
              <a
                href="mailto:dhruvdobariya005@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:bg-light-card dark:hover:bg-dark-card text-light-text dark:text-dark-text font-mono text-xs font-semibold transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Send Gmail</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Minimal Details Column */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="border-l-2 border-accent/40 pl-6 space-y-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-light-subtext dark:text-dark-subtext block">
                Focus Areas
              </span>
              <p className="font-display font-light text-base text-light-text dark:text-dark-text mt-0.5">
                AI Integrations • Modern Web • UI/UX Design
              </p>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-light-subtext dark:text-dark-subtext block">
                Availability
              </span>
              <p className="font-display font-light text-emerald-500 flex items-center gap-1.5 mt-0.5 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open for freelance projects & collaborations
              </p>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-light-subtext dark:text-dark-subtext block">
                Direct Contact
              </span>
              <p className="font-mono text-xs text-light-text dark:text-dark-text mt-0.5 font-light">
                WhatsApp: +91 8160925636 • dhruvdobariya005@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3 Core Principles */}
      <div className="pt-8 border-t border-light-border dark:border-dark-border grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((item, idx) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.75, delay: idx * 0.12, ease: customEase }}
            className="space-y-2"
          >
            <span className="font-mono text-xs font-normal text-accent">
              {item.number}
            </span>
            <h3 className="font-display font-light text-lg text-light-text dark:text-dark-text">
              {item.title}
            </h3>
            <p className="text-sm text-light-subtext dark:text-dark-subtext leading-relaxed font-light">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
