import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply theme class to HTML
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const backgroundClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0c1024] via-[#0f1533] to-[#181035]"
      : "bg-gradient-to-b from-[#eef6ff] via-[#e8f0ff] to-[#dfe9ff]";

  const glowClass =
    theme === "dark"
      ? "bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.32),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.22),transparent_36%),radial-gradient(circle_at_60%_65%,rgba(168,85,247,0.18),transparent_42%)]"
      : "bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.28),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.24),transparent_36%),radial-gradient(circle_at_60%_65%,rgba(168,85,247,0.16),transparent_46%)]";

  return (
    <div className={`min-h-screen text-neutral-100 transition-colors ${backgroundClass}`}>
      <div className={`pointer-events-none fixed inset-0 -z-10 ${glowClass}`} />

      <Navbar setPage={setPage} theme={theme} setTheme={setTheme} />

      <main className="pt-24 pb-16">
        {page === "home" && <Home setPage={setPage} />}
        {page === "projects" && <Projects setPage={setPage} />}
        {page === "contact" && <Contact setPage={setPage} />}
      </main>

      <footer className="pb-6 text-center text-xs text-neutral-600 dark:text-neutral-400">
        © Fernando Flores 2025
      </footer>
    </div>
  );
}
