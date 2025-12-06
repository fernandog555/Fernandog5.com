const projects = [
  {
    title: "Study Spots @ UTD",
    description:
      "FastAPI + PostgreSQL web app that helps UTD students discover, review, and save study locations with category filters, auth, and a custom REST API.",
    tech: ["FastAPI", "PostgreSQL", "React", "Tailwind"],
    link: "https://github.com/fernandog555/UTD_StudySpots",
    live: "https://utd-studyspots-1.onrender.com/",
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio built with React, Vite, and Tailwind featuring theme toggle, gradients, and project highlights.",
    tech: ["React", "Vite", "Tailwind"],
    link: "https://github.com/fernandog555/Fernandog5.com",
    live: "https://fernandog5-portfolio.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12 space-y-2">
        <p className="text-xs font-semibold tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
          SELECTED WORK
        </p>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Projects</h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          A snapshot of what I&apos;ve been building and exploring lately.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="relative overflow-hidden p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-200/30 via-white/20 to-purple-200/30 dark:from-cyan-500/12 dark:via-transparent dark:to-purple-500/15" />
            <div className="relative flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-200">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-cyan-200/70 dark:border-cyan-800 bg-cyan-50/60 dark:bg-cyan-900/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 bg-white/80 text-cyan-600 font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow hover:bg-[#e6f5ff] hover:text-cyan-700 hover:border-cyan-300 dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-cyan-200 dark:hover:bg-[#0f1b38] dark:hover:text-cyan-100 dark:hover:border-cyan-400"
                >
                  View Live ↗
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 bg-white/80 text-cyan-600 font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow hover:bg-[#e6f5ff] hover:text-cyan-700 hover:border-cyan-300 dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-cyan-200 dark:hover:bg-[#0f1b38] dark:hover:text-cyan-100 dark:hover:border-cyan-400"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
