export default function ThemeToggle({ theme, setTheme }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm hover:border-cyan-400 hover:text-cyan-600 transition-colors dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-100"
      aria-label="Toggle color theme"
      type="button"
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${theme === "dark" ? "bg-amber-400" : "bg-indigo-500"}`}
        aria-hidden
      />
      {nextTheme.toUpperCase()} MODE
    </button>
  );
}
