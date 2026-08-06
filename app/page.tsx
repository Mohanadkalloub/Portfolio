import Image from "next/image";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaRegCalendarCheck,
  FaQuoteLeft,
} from "react-icons/fa";

const LINKEDIN = "https://www.linkedin.com/in/mohanad-kalloub-17ba35223/";
const EMAIL = "kalloubmohanad1@gmail.com";
const PHONE_DISPLAY = "+972-595372607";
const WHATSAPP = "https://wa.me/972595372607";
const CALENDLY = "https://calendly.com/mohanadkalloub";

interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    role: "Supply Chain, Operations & Logistics · Information Management · Communication & Coordination",
    company: "Self-Employed",
    type: "Self-employed",
    period: "Jan 2024 – Present · 2 yrs 8 mos",
    location: "Gaza · On-site",
    bullets: [
      "Supply Chain — Sourced and supplied goods to local organizations, managing the full cycle from purchasing to delivery under constant shortages and price volatility.",
      "Operations & Logistics — Planned and executed deliveries across disrupted routes, adjusting daily as access and availability changed, while maintaining accurate inventory and goods records.",
      "Information Management — Handled data entry, archiving, and record verification alongside a small team, keeping information accurate and retrievable for decisions.",
      "Communication & Coordination — Coordinated between suppliers, clients, and partner organizations in Arabic and English to keep commitments met despite frequent disruptions.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Be Home",
    type: "Contract",
    period: "Jul 2025 – Dec 2025 · 6 mos",
    location: "London Area, United Kingdom · Remote",
    bullets: [
      "Built 20+ mobile screens end to end, owning features from API integration through to UI.",
      "Fixed performance issues on list-heavy screens by restructuring state with Redux Toolkit and applying render optimizations for noticeably smoother scrolling.",
      "Implemented real-time data sync with WebSockets and Firebase.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dash",
    type: "Full-time",
    period: "May 2023 – Oct 2023 · 6 mos",
    location: "Gaza, Gaza Strip · On-site",
    bullets: ["React.js, React Native, and more."],
  },
  {
    role: "Frontend Developer",
    company: "Book Store Platform",
    type: "Freelance",
    period: "May 2022 – Apr 2023 · 1 yr",
    location: "Remote",
    bullets: [
      "Built 25+ responsive screens and reusable UI components in React and TypeScript, improving type safety and reducing UI bugs.",
      "Managed complex state with Redux Toolkit across product listings, cart, and sessions, improving consistency and cutting unnecessary re-renders.",
    ],
  },
];

interface Recommendation {
  name: string;
  title: string;
  relationship: string;
  quote: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Ahmad El-Hoss",
    title: "Technical leader driving innovative financial solutions",
    relationship: "Client · Sep 2025",
    quote:
      "I've had the pleasure of working with Mohanad, and I can confidently say he is an excellent developer. He has a strong ability to understand complex requirements and deliver exactly what was discussed, with precision and efficiency. Beyond his development skills, Mohanad has a great eye for designing app pages and a solid grasp of handling data, data structures, and navigation. His blend of technical expertise and design sense makes him a standout contributor to any project.",
  },
  {
    name: "Mafalda Johannsen",
    title: "Ambassador @ SDRs of Germany · Podcast Host · Trainer · Published Author",
    relationship: "Mentor · Jul 2026",
    quote:
      "I've had the pleasure of mentoring Mohanad, and he's consistently impressed me with his focus, organization, and drive. He's the kind of person who doesn't just meet targets, he pushes past them, bringing genuine initiative to everything he takes on. Beyond his strong technical skills, what stands out most is his commitment to constantly improving and learning. He'd be a real asset to any team, and I recommend him without hesitation.",
  },
  {
    name: "Roberto Ponte",
    title: "Non Executive Director · Mentor · HR Faculty · Former CHRO",
    relationship: "Mentor · Jul 2026",
    quote:
      "Mohanad is an ambitious professional, who comes across as a relationship builder and effective, accurate communicator in English. These traits make him a strong bet as a reliable team player for developer roles and more in the IT space. He is fully equipped, contractually and logistically, for international remote work, and has demonstrated solid full-stack skills and remarkable resilience delivering for clients from challenging circumstances. He also brings experience in product management and development, contributing beyond code to how products are shaped and delivered.",
  },
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      {/* Intro */}
      <section className="flex flex-col items-center text-center">
        <div className="relative h-32 w-32 sm:h-36 sm:w-36">
          <Image
            src="/images/01.png"
            alt="Mohanad Kalloub"
            fill
            priority
            className="rounded-full object-cover shadow-md"
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Mohanad Kalloub
        </h1>
        <p className="mt-3 text-balance text-base text-blue-600 dark:text-blue-400">
          Full Stack Developer · Supply Chain, Logistics &amp; Operations ·
          Information Management · Coordination &amp; Communication · Open to
          Remote &amp; Local Work
        </p>
      </section>

      {/* About */}
      <section className="mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          About
        </h2>
        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
          I&apos;m Mohanad. What I do — with precision and high performance:
        </p>
        <ul className="mt-4 space-y-3 leading-relaxed text-gray-600 dark:text-gray-300">
          <li className="flex gap-3">
            <span aria-hidden>✅</span>
            <span>
              3+ years building web and mobile applications with React, Next.js,
              React Native, Node.js, TypeScript, and AI.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden>✅</span>
            <span>
              2+ years in Supply Chain, Logistics &amp; Operations · Information
              Management · Coordination &amp; Communication.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden>✅</span>
            <span>Fluent in both Arabic and English.</span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden>✅</span>
            <span>
              Available for remote work with 24/7 electricity and internet — and
              for local work with international organizations. Based in Gaza.
            </span>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Experience
        </h2>
        <div className="mt-6 space-y-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="border-l-2 border-gray-200 pl-5 dark:border-gray-800"
            >
              <h3 className="font-semibold leading-snug text-foreground">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {exp.company} · {exp.type}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {exp.period} · {exp.location}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="text-blue-500">
                      ▪
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Recommendations
        </h2>
        <div className="mt-6 space-y-6">
          {recommendations.map((rec) => (
            <article
              key={rec.name}
              className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
            >
              <FaQuoteLeft className="text-xl text-blue-500/40" />
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                {rec.quote}
              </p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {initials(rec.name)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{rec.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {rec.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {rec.relationship}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          href={`${LINKEDIN}details/recommendations/`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-blue-600 transition hover:underline dark:text-blue-400"
        >
          <FaLinkedinIn />
          See all recommendations on LinkedIn
        </a>
      </section>

      {/* Contact */}
      <section className="mt-14 border-t border-gray-200 pt-10 dark:border-gray-800">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Let&apos;s Connect
        </h2>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaEnvelope className="text-lg" />
            {EMAIL}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaWhatsapp className="text-lg" />
            {PHONE_DISPLAY} (Phone / WhatsApp)
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaRegCalendarCheck className="text-lg" />
            Book a Call
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaLinkedinIn className="text-lg" />
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mohanad Kalloub
      </footer>
    </main>
  );
}
