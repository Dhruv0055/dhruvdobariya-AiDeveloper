import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000, radius: 180 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const particleCount = Math.min(Math.floor((width * height) / 30000), 42);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    const colorsDark = ["#3B82F6", "#60A5FA", "#818CF8", "#38BDF8"];
    const colorsLight = ["#2563EB", "#3B82F6", "#6366F1", "#0284C7"];

    for (let i = 0; i < particleCount; i++) {
      const isDark = theme === "dark";
      const colorPalette = isDark ? colorsDark : colorsLight;
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.25 + 0.15,
        color: color,
      });
    }

    const maxDist = 130;
    const maxDistSq = maxDist * maxDist;
    const mouseRadiusSq = mouse.radius * mouse.radius;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";
      const strokeColorDark = "rgba(96, 165, 250,";
      const strokeColorLight = "rgba(37, 99, 235,";
      const baseStroke = isDark ? strokeColorDark : strokeColorLight;

      // Draw particles and connect nearby links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interactive mouse repulsion/pull
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;

        if (distMouseSq < mouseRadiusSq && distMouseSq > 0) {
          const distMouse = Math.sqrt(distMouseSq);
          const force = (1 - distMouse / mouse.radius) * 1.1;
          p.x -= (dxMouse / distMouse) * force;
          p.y -= (dyMouse / distMouse) * force;
        }

        // Draw particle point (No heavy shadowBlur software filter)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * (isDark ? 0.12 : 0.07);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = baseStroke;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to mouse if near
        if (distMouseSq < mouseRadiusSq) {
          const distMouse = Math.sqrt(distMouseSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = baseStroke;
          ctx.globalAlpha = (1 - distMouse / mouse.radius) * (isDark ? 0.2 : 0.12);
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <>
      {/* Background Animated Gradient Aura (Subtle 20-25% intensity) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] bg-blue-500/6 dark:bg-blue-600/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[50%] right-[10%] w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/7 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[25%] w-[400px] h-[400px] bg-emerald-500/4 dark:bg-emerald-600/5 rounded-full blur-[130px] animate-pulse" />
      </div>

      {/* Interactive Neural Canvas - Soft 25% Visibility */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-25 transition-opacity duration-500"
      />
    </>
  );
};
