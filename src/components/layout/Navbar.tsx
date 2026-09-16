import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";
import { WhatsAppIcon } from "../ui/Icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "AI Assistant", href: "#ai-assistant" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "projects", "ai-assistant", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-8 py-3.5 transition-all duration-300">
        <nav
          className={`flex items-center justify-between gap-3 sm:gap-4 py-2 px-3 sm:px-6 rounded-2xl w-full max-w-5xl transition-all duration-300 ${
            scrolled
              ? "bg-light-surface/90 dark:bg-dark-surface/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 border border-light-border/60 dark:border-white/5"
              : "bg-transparent"
          }`}
        >
          {/* Brand Logo with full name Dhruv Dobariya */}
          <Magnetic strength={12}>
            <a
              href="#"
              className="flex items-center gap-2.5 font-display text-sm sm:text-base text-light-text dark:text-dark-text group shrink-0"
            >
              <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-mono font-medium shadow-md group-hover:scale-105 transition-transform">
                DD
              </span>
              <span className="font-light tracking-tight text-light-text dark:text-dark-text">
                Dhruv Dobariya
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-light tracking-wide transition-colors rounded-full ${
                    isActive
                      ? "text-light-text dark:text-dark-text font-normal"
                      : "text-light-subtext dark:text-dark-subtext hover:text-light-text dark:hover:text-dark-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-light-card dark:bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Tools: WhatsApp, Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 relative">
            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/918160925636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-xs font-mono font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full hover:bg-light-card dark:hover:bg-white/5 text-light-text dark:text-dark-text transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-full hover:bg-light-card dark:hover:bg-white/5 text-light-text dark:text-dark-text"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-40 p-5 rounded-2xl bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl shadow-2xl border border-light-border dark:border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <a
                href="https://wa.me/918160925636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-xl mb-2 font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp: +91 8160925636</span>
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-light-text dark:text-dark-text hover:bg-light-card dark:hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-light-subtext dark:text-dark-subtext" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
