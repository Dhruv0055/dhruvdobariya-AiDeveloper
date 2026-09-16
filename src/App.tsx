import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { ParticleBackground } from "./components/ui/ParticleBackground";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { AiAssistant } from "./components/sections/AiAssistant";
import { Contact } from "./components/sections/Contact";

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      syncTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.4 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text selection:bg-accent selection:text-white transition-colors duration-300 overflow-x-hidden font-sans">
        {/* Top Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-50 origin-left pointer-events-none shadow-[0_0_8px_var(--color-accent-glow)]"
          style={{ scaleX }}
        />

        {/* Ambient Neural Particle Canvas */}
        <ParticleBackground />

        {/* Floating Minimal Navbar */}
        <Navbar />

        {/* Main Content Sections with Viewport Fade-ins on each element */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <AiAssistant />
          <Contact />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
