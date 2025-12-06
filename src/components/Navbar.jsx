import ThemeToggle from "./ThemeToggle";

export default function Navbar({ setPage, theme, setTheme }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 backdrop-blur-md bg-white/85 dark:bg-neutral-950/75 border-b border-neutral-200/70 dark:border-neutral-800/80">
        <button
          onClick={() => setPage("home")}
          className="text-base font-semibold tracking-[0.24em] text-neutral-800 dark:text-neutral-200"
        >
          FERNANDO FLORES
        </button>

        <div className="flex items-center gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          <button onClick={() => setPage("home")} className="hover:text-cyan-500 transition-colors">
            HOME
          </button>
          <button onClick={() => setPage("projects")} className="hover:text-cyan-500 transition-colors">
            PROJECTS
          </button>
          <button onClick={() => setPage("contact")} className="hover:text-cyan-500 transition-colors">
            CONTACT
          </button>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
}
