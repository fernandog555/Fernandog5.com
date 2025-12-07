export default function Home({ setPage }) {
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-10 px-6 text-center">
      <div className="flex flex-col items-center gap-5 pt-4">
        <div className="w-28 h-28 rounded-full border border-cyan-400/70 bg-gradient-to-br from-cyan-300/60 to-indigo-500/50 shadow-lg shadow-cyan-200/40 dark:shadow-cyan-900/50 overflow-hidden">
          <img src="/IMG_1894.JPG" alt="Fernando Flores headshot" className="h-full w-full object-cover" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            SOFTWARE ENGINEERING STUDENT @ UTD
          </p>
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white">
            Hi, I&apos;m <span className="text-cyan-500">Fernando Flores</span>
          </h1>
        </div>

        <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-300">
          I&apos;m a software engineering student who loves building thoughtful web experiences,
          reliable backend services, and systems-level tools. I enjoy turning ambiguous problems
          into clean, performant code.
        </p>

        <div className="relative overflow-hidden max-w-3xl text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-200/35 via-white/20 to-purple-200/35 dark:from-cyan-500/12 dark:via-transparent dark:to-purple-500/15" />
          <div className="relative">
          <p className="font-semibold text-neutral-900 dark:text-white mb-2">Career Summary</p>
          <p>
            Junior Software Engineering student with systems-engineering background focused on backend development,
            process optimization, and data-driven solutions. Experienced delivering user-focused tools, implementing
            efficient algorithms, and applying Agile practices.
          </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-cyan-700 dark:text-cyan-200">
          <span className="rounded-full border border-cyan-200/70 dark:border-cyan-800 px-4 py-2 bg-cyan-50/60 dark:bg-cyan-900/30">
            Full-stack React + Vite
          </span>
          <span className="rounded-full border border-cyan-200/70 dark:border-cyan-800 px-4 py-2 bg-cyan-50/60 dark:bg-cyan-900/30">
            FastAPI + PostgreSQL
          </span>
          <span className="rounded-full border border-cyan-200/70 dark:border-cyan-800 px-4 py-2 bg-cyan-50/60 dark:bg-cyan-900/30">
            Systems & OS curiosity
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 w-full max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 p-5 text-left shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-200/35 via-white/20 to-purple-200/35 dark:from-cyan-500/12 dark:via-transparent dark:to-purple-500/15" />
            <div className="relative">
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-600 dark:text-cyan-300 mb-2">
              EDUCATION
            </p>
            <p className="font-semibold text-neutral-900 dark:text-white">B.S. Software Engineering</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">University of Texas at Dallas — Est. May 2027</p>
            <p className="mt-2 font-semibold text-neutral-900 dark:text-white">A.S. Software Programming</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Dallas College — May 2023</p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              Relevant: Data Structures & Algos, OS, Database Systems, Systems Programming (UNIX), Probability & Stats.
            </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 p-5 text-left shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-200/35 via-white/20 to-purple-200/35 dark:from-cyan-500/12 dark:via-transparent dark:to-purple-500/15" />
            <div className="relative">
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-600 dark:text-cyan-300 mb-2">
              SKILLS
            </p>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
              <li><span className="font-semibold text-neutral-900 dark:text-white">Languages:</span> Java, Python, C/C++, SQL, JavaScript</li>
              <li><span className="font-semibold text-neutral-900 dark:text-white">Web/Backend:</span> FastAPI, Node.js, React, Tailwind, REST</li>
              <li><span className="font-semibold text-neutral-900 dark:text-white">Data/DB:</span> PostgreSQL, SQL design, ER modeling, indexing</li>
              <li><span className="font-semibold text-neutral-900 dark:text-white">Tools:</span> Git/GitHub, Docker, Linux/Unix, Bash, Agile/Scrum</li>
              <li><span className="font-semibold text-neutral-900 dark:text-white">Other:</span> Sprint planning, tech writing, English/Spanish (fluent)</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="my-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 to-transparent dark:from-transparent dark:via-cyan-300/80 dark:to-transparent rounded-full shadow-[0_0_12px_rgba(59,130,246,0.35)]" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-sm mx-auto">
          <button
            onClick={() => setPage("projects")}
            className="px-6 py-3 rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-800 font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow hover:bg-[#e6f5ff] hover:text-cyan-700 hover:border-cyan-300 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:bg-[#0f1b38] dark:hover:text-cyan-100 dark:hover:border-cyan-400"
          >
            PROJECTS
          </button>

          <button
            onClick={() => setPage("contact")}
            className="px-6 py-3 rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-800 font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow hover:bg-[#e6f5ff] hover:text-cyan-700 hover:border-cyan-300 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:bg-[#0f1b38] dark:hover:text-cyan-100 dark:hover:border-cyan-400"
            type="button"
          >
            CONTACT ME
          </button>
        </div>
      </div>

    </section>
  );
}
