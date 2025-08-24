import React, { useEffect, useState } from "react";
import "@/css/ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.body.className = stored;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.body.className = defaultTheme;
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
