import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";
import { WhatsAppIcon } from "../ui/Icons";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Footer: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-light-border dark:border-dark-border bg-light-surface/40 dark:bg-dark-surface/40 pt-16 pb-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 0.8, ease: customEase }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-light-border dark:border-dark-border">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-light-text dark:text-dark-text">
              Dhruv Dobariya
            </h3>
            <p className="text-sm text-light-subtext dark:text-dark-subtext max-w-sm leading-relaxed font-light">
              AI Web Developer & Designer. Architecting modern web applications, autonomous workflows, and high-impact digital products.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border font-mono text-[11px] text-light-text dark:text-dark-text">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Gujarat, India (IST) • {time || "10:30 AM"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-light-subtext dark:text-dark-subtext">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-light-subtext dark:text-dark-subtext hover:text-accent dark:hover:text-accent-light transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-light-subtext dark:text-dark-subtext hover:text-accent dark:hover:text-accent-light transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#projects" className="text-light-subtext dark:text-dark-subtext hover:text-accent dark:hover:text-accent-light transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#ai-assistant" className="text-light-subtext dark:text-dark-subtext hover:text-accent dark:hover:text-accent-light transition-colors">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light-subtext dark:text-dark-subtext hover:text-accent dark:hover:text-accent-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links: Direct WhatsApp & Email */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-light-subtext dark:text-dark-subtext">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/918160925636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-xs font-mono font-medium"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp: +91 8160925636</span>
              </a>
              <a
                href="mailto:dhruvdobariya005@gmail.com"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:bg-light-muted dark:hover:bg-dark-muted text-light-text dark:text-dark-text transition-colors text-xs font-mono"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">dhruvdobariya005@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light-subtext dark:text-dark-subtext">
          <p>© {new Date().getFullYear()} Dhruv Dobariya. Built with clean code & calm motion.</p>

          <Magnetic strength={20}>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:bg-light-muted dark:hover:bg-dark-muted text-light-text dark:text-dark-text font-mono transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </footer>
  );
};
