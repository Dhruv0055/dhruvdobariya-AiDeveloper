import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

export type AccentColor = "blue" | "emerald" | "violet" | "amber" | "rose" | "cyan";

export interface ColorPreset {
  id: AccentColor;
  name: string;
  color: string;
  glow: string;
}

export const colorPresets: ColorPreset[] = [
  { id: "blue", name: "Electric Blue", color: "#3B82F6", glow: "rgba(59, 130, 246, 0.35)" },
  { id: "emerald", name: "Neon Emerald", color: "#10B981", glow: "rgba(16, 185, 129, 0.35)" },
  { id: "violet", name: "Royal Violet", color: "#8B5CF6", glow: "rgba(139, 92, 246, 0.35)" },
  { id: "amber", name: "Warm Amber", color: "#F59E0B", glow: "rgba(245, 158, 11, 0.35)" },
  { id: "rose", name: "Vibrant Rose", color: "#F43F5E", glow: "rgba(244, 63, 94, 0.35)" },
  { id: "cyan", name: "Cyber Cyan", color: "#06B6D4", glow: "rgba(6, 182, 212, 0.35)" }
];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  currentPreset: ColorPreset;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dhruv_theme") as Theme;
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark";
    }
    return "dark";
  });

  const [accentColor, setAccentColorState] = useState<AccentColor>(() => {
    if (typeof window !== "undefined") {
      const savedColor = localStorage.getItem("dhruv_accent") as AccentColor;
      if (savedColor && colorPresets.some((p) => p.id === savedColor)) {
        return savedColor;
      }
    }
    return "blue";
  });

  const currentPreset = colorPresets.find((p) => p.id === accentColor) || colorPresets[0];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("dhruv_theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-accent-dynamic", currentPreset.color);
    root.style.setProperty("--color-accent-glow", currentPreset.glow);
    localStorage.setItem("dhruv_accent", accentColor);
  }, [accentColor, currentPreset]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, setAccentColor, currentPreset }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
