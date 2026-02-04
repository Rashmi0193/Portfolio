
const PROFILE = {
  name: "Rashmi Purandare",
  headline: "Software Engineer • I Build It. I Test It. I Ship It",
  location: "Bay Area, CA",
  summary:
    "I build modern React experiences, integrate APIs and ship reliable features end-to-end.",
  ctaPrimary: { label: "View Projects", href: "#projects" },
  ctaSecondary: { label: "Contact", href: "#contact" },
};

const LINKS = {
  email: "mailto:purandarerashmi1@gmail.com",
  github: "https://github.com/Rashmi0193",
  linkedin: "https://www.linkedin.com/in/rashmi-purandare-01rp/",
  resume: "/Resume- Rashmi Purandare.pdf",
};

const SKILLS = [
  "Java",
  "Python",
  "JavaScript",
  "SQL",
  "React",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "FastAPI",
  "Flask",
  "REST APIs",
  "Docker",
  "Kubernetes (GKE)",
  "GCP",
  "AWS (EC2, S3)",
  "PostgreSQL",
  "MySQL",
  "Postman",
  "TestNG",
  "CI/CD",
  "Git",
  "Agile",
];

const PROJECTS = [
  {
    title: "SentinelAI - AI-powered IP protection platform ",
    desc: "Using image similarity (CLIP + pHash) with FastAPI and a modern React UI system designed to safeguard creators’ intellectual property online. With the rise of generative AI and rapid content remixing, creators face unprecedented challenges in protecting their original work. SentinelAI provides an automated way to detect edited, cropped, recolored or AI-generated variations of an image across the web..",
    tags: ["React", "FastAPI", "Postgres", "AWS", "AI"],
    href: "https://github.com/Bhuwan980/SentinelAI",
  },
  {
    title: "Amazon Product Search Testing (Selenium + TestNG)",
    desc: "Designed structured manual test cases and built Selenium WebDriver automation in Java with TestNG for regression. Performed cross-browser testing, logged defects with severity/impact and added data-driven assertions to validate filters, sorting and price accuracy.",
    tags: ["Java", "Selenium", "TestNG", "Manual Testing", "Automation"],
    href: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "BirthdayMessaging.io",
    time: "May 2025 – Dec 2025",
  },
  {
    role: "Data Analyst",
    company: "P R Sales Corporation Pvt. Ltd.",
    time: "Jan 2017 – Nov 2020",
  },
  {
    role: "Jr. Software Developer",
    company: "Vaze Placement Services",
    time: "Jan 2015 – Dec 2016",
  },
];

export default function App() {
  return (
<div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-100 text-zinc-900 selection:bg-amber-200/80">
      <BackgroundFX />

      <div className="mx-auto w-full max-w-5xl px-6 py-10 lg:px-8">
        <Navbar />

        <Hero />

        <Section id="education" title="Education" subtitle="Academic background.">
          <div className="rounded-2xl border border-amber-100/80 bg-amber-50/70 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <div className="font-semibold">Master of Science in Computer Science</div>
                <div className="text-sm text-zinc-600">
                  San Francisco Bay University (CGPA: 3.73) • Fremont, CA
                </div>
              </div>
              <div className="text-sm text-zinc-500">May 2024 – Dec 2025</div>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="A few things I’ve built recently.">
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tools I’m comfortable shipping with.">
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Where I’ve applied my skills in real projects.">
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <ExperienceItem key={`${e.role}-${e.company}`} {...e} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s connect.">
          <div className="max-w-3xl text-zinc-700">
            <p>
              If you’re hiring for Software Engineering / QA roles (California or remote), I’d love to connect.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <GhostButton href={LINKS.email}>Email</GhostButton>
            <GhostButton href={LINKS.linkedin} newTab>
              LinkedIn
            </GhostButton>
            <GhostButton href={LINKS.github} newTab>
              GitHub
            </GhostButton>
            <GhostButton href={LINKS.resume} download>
              Resume
            </GhostButton>
          </div>

          <footer className="mt-14 border-t border-zinc-200/80 pt-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} {PROFILE.name} • Built with React + Tailwind
          </footer>
        </Section>
      </div>
    </div>
  );
}

function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-amber-300/55 blur-3xl" />
        <div className="absolute top-24 left-1/3 h-[240px] w-[420px] -translate-x-1/2 rounded-full bg-rose-300/45 blur-3xl" />
        <div className="absolute top-40 right-0 h-[260px] w-[520px] rounded-full bg-orange-300/50 blur-3xl" />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.2] [background-image:linear-gradient(to_right,rgba(120,53,15,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,53,15,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />
    </>
  );
}

function Navbar() {
  return (
    <header className="sticky top-4 z-50">
      <div className="rounded-2xl border border-amber-100/80 bg-amber-50/80 px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {PROFILE.name}
        </h1>


          <nav className="hidden items-center gap-3 text-sm text-zinc-600 sm:flex">
            <NavLink href="#education">Education</NavLink>
            <NavSeparator />
            <NavLink href="#projects">Projects</NavLink>
            <NavSeparator />
            <NavLink href="#skills">Skills</NavLink>
            <NavSeparator />
            <NavLink href="#experience">Experience</NavLink>
            <NavSeparator />
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <a
            href={LINKS.resume}
            download
            className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/80"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="mt-14" id="top">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600">
          <span className="rounded-full border border-amber-100/80 bg-amber-50/90 px-3 py-1 shadow-sm">
            {PROFILE.headline}
          </span>
          <span className="rounded-full bg-amber-50/90 px-3 py-1 shadow-sm">{PROFILE.location}</span>
        </div>

        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Building clean, reliable products — {" "}
          <span className="bg-gradient-to-tr from-stone-900 via-amber-800 to-rose-700 bg-clip-text text-transparent">
  from UI to backend.
</span>
        </h1>

        <p className="max-w-2xl text-zinc-600">{PROFILE.summary}</p>
        <p className="text-sm font-medium text-zinc-600">
          Currently seeking Software Engineer / QA  roles.
        </p>

      </div>
    </main>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mt-24 scroll-mt-28 border-t border-amber-200/90 pt-8 pt-10">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-zinc-500">{subtitle}</p> : null}
      </div>

      <div className="mt-8 space-y-6">{children}</div>
    </section>
  );
}

function NavLink({ href, children }) {
  return (
    <a className="transition hover:text-zinc-900" href={href}>
      {children}
    </a>
  );
}

function NavSeparator() {
  return <span className="text-zinc-400">•</span>;
}

function ProjectCard({ title, desc, tags, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-amber-100/80 bg-amber-50/70 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/80"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-zinc-500 transition group-hover:text-zinc-800">↗</span>
        </div>
        <p className="mt-2 text-sm text-zinc-600">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>
    </a>
  );
}

function ExperienceItem({ role, company, time, bullets }) {
  return (
    <div className="rounded-2xl border border-amber-100/80 bg-amber-50/70 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <div>
          <div className="font-semibold">{role}</div>
          <div className="text-sm text-zinc-600">{company}</div>
        </div>
        <div className="text-sm text-zinc-500">{time}</div>
      </div>

    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-900">{children}</span>;
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white
      border border-zinc-900 transition hover:bg-zinc-800 active:scale-[0.98]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
>
      {children}
    </a>
  );
}

function GhostButton({ href, children, newTab, download }) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      download={download}
      className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900
      border border-zinc-300 shadow-sm transition hover:bg-zinc-100 active:scale-[0.98]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
>
      {children}
    </a>
  );
}
