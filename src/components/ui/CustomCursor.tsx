import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check target element
      const target = e.target as HTMLElement;
      if (!target) return;

      const customText = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (customText) {
        setCursorText(customText);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }

      const isClickable = target.closest("button, a, input, textarea, [role='button']");
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 80 : isPointer ? 32 : 12,
          height: isHovered ? 80 : isPointer ? 32 : 12,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.95)" : isPointer ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.9)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.3 }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold tracking-wider uppercase text-black font-sans select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
