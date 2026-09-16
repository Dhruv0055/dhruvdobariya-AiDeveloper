/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter Tight", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Geist", "Inter Tight", "Space Grotesk", "sans-serif"],
        heading: ["Geist", "Inter Tight", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      colors: {
        dark: {
          bg: "#090A0C",
          surface: "#111317",
          card: "#16181F",
          muted: "#1E212B",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.18)",
          text: "#F3F4F6",
          subtext: "#94A3B8"
        },
        light: {
          bg: "#FAFAF9",
          surface: "#FFFFFF",
          card: "#F4F4F5",
          muted: "#E4E4E7",
          border: "rgba(0, 0, 0, 0.07)",
          "border-hover": "rgba(0, 0, 0, 0.16)",
          text: "#0F172A",
          subtext: "#64748B"
        },
        accent: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
          subtle: "rgba(59, 130, 246, 0.08)",
          glow: "rgba(59, 130, 246, 0.25)",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
          subtle: "rgba(37, 211, 102, 0.1)"
        }
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        }
      }
    },
  },
  plugins: [],
};
