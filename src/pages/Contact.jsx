export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-10 space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-cyan-500 dark:text-cyan-300 select-none">LET&apos;S CONNECT</p>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white select-none">Contact</h2>
        <p className="text-neutral-700 dark:text-neutral-200/90 select-none">
          Reach out for collaboration, opportunities, or just to say hi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ContactCard
          title="Direct"
          items={[
            { href: "/Resume.pdf", label: "Resume (PDF)", Icon: DocumentIcon },
            { href: "mailto:floresfernando2005@gmail.com", label: "floresfernando2005@gmail.com", Icon: MailIcon },
            { href: null, label: "Dallas, TX (open to remote/hybrid)", Icon: MapPinIcon },
          ]}
        />

        <ContactCard
          title="Links"
          items={[
            { href: "https://github.com/fernandog555", label: "GitHub", Icon: GithubIcon },
            { href: "https://linkedin.com/in/fernandoflores5", label: "LinkedIn", Icon: LinkedinIcon },
            { href: "https://instagram.com/big._.fern", label: "Instagram", Icon: InstagramIcon },
          ]}
        />
      </div>
    </section>
  );
}

function ContactCard({ title, items }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/90 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/70 p-6 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/35 via-white/20 to-purple-200/35 dark:from-cyan-500/12 dark:via-transparent dark:to-purple-500/15 pointer-events-none" />
      <div className="relative space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/85 text-sm font-semibold text-neutral-800 shadow-sm dark:bg-neutral-800/80 dark:text-white">
            {title}
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/50 via-cyan-300/50 to-transparent" />
        </div>

        <div className="space-y-3">
          {items.map(({ href, label, Icon }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-neutral-200/80 bg-white/70 px-4 py-3 text-neutral-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow hover:bg-[#e6f5ff] hover:text-cyan-700 hover:border-cyan-300 dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-neutral-100 dark:hover:bg-[#0f1b38] dark:hover:text-cyan-100 dark:hover:border-cyan-400"
              >
                <Icon className="text-neutral-800 dark:text-neutral-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-100" />
                <span className="font-semibold">{label}</span>
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-neutral-200/80 bg-white/70 px-4 py-3 text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-neutral-100"
              >
                <Icon className="text-neutral-700 dark:text-neutral-200" />
                <span className="font-semibold">{label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function ContactLink({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-neutral-200/80 bg-white/60 px-4 py-3 text-neutral-800 shadow-sm hover:-translate-y-0.5 hover:shadow transition dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-100"
    >
      <Icon />
      <span className="font-semibold">{label}</span>
    </a>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-cyan-500 ${className}`}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function DocumentIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-indigo-500 ${className}`}
      aria-hidden="true"
    >
      <path d="M7 2h7l5 5v11a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function MapPinIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-purple-500 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 21s-6-5.14-6-10a6 6 0 1 1 12 0c0 4.86-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function GithubIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-neutral-900 dark:text-neutral-100 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.9 10.96.58.1.79-.25.79-.56v-2.17c-3.22.7-3.89-1.4-3.89-1.4-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.57-.3-5.28-1.29-5.28-5.73 0-1.27.46-2.31 1.18-3.12-.12-.3-.51-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.62 1.65.24 2.87.12 3.17.73.81 1.17 1.85 1.17 3.12 0 4.45-2.71 5.43-5.29 5.72.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-[#0a66c2] ${className}`}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.81 0-2.09 1.41-2.09 2.86v5.49H9.46V9h3.41v1.56h.05c.48-.91 1.64-1.87 3.37-1.87 3.6 0 4.26 2.37 4.26 5.45v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-[#d946ef] ${className}`}
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
    </svg>
  );
}
