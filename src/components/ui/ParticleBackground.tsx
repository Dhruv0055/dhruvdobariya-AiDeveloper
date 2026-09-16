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

    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
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
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.25 + 0.15,
        color: color,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";

      // Draw particles with glowing trails
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interactive mouse gravity repulsion/pull
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 1.2;
          p.x -= (dxMouse / distMouse) * force;
          p.y -= (dyMouse / distMouse) * force;
        }

        // Draw glowing particle point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = isDark ? 4 : 2;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with subtle glowing links
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * (isDark ? 0.14 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? "rgba(96, 165, 250," : "rgba(37, 99, 235,";
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect particles near the mouse cursor for a subtle magnetic web effect
        if (distMouse < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isDark ? "rgba(59, 130, 246," : "rgba(37, 99, 235,";
          ctx.globalAlpha = (1 - distMouse / mouse.radius) * (isDark ? 0.22 : 0.14);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

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
