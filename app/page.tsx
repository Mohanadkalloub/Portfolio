"use client";

import { useState, type ReactNode } from "react";

const FULL_NAME = "Mohanad Kalloub";
const EMAIL = "kalloubmohanad1@gmail.com";
const PHONE_DISPLAY = "+972-595372607";
const WHATSAPP = "https://wa.me/972595372607";
const CALENDLY = "https://calendly.com/mohanadkalloub";
const GITHUB = "https://github.com/Mohanadkalloub";
const LINKEDIN = "https://www.linkedin.com/in/mohanadkalloub/";
const RESUME_SOFTWARE = "/Mohanad-Kalloub-CV.pdf";
const RESUME_OPERATIONS = "/Mohanad-Kalloub-CV-Operations.pdf";
const HERO_PHOTO = "/images/01.png";
const ABOUT_PHOTO = "/images/01.png";

type Page = "home" | "about" | "contact";

const stats = [
  { value: "5+", label: "Years shipping production apps" },
  { value: "100+", label: "Web & mobile screens delivered" },
  { value: "4", label: "Payment providers integrated" },
  { value: "24/7", label: "Solar power & high-speed internet" },
];

const services = [
  {
    title: "Full-stack development",
    body: "React, Next.js and React Native on the front end, with Node.js, Express, NestJS and TypeScript over MongoDB and PostgreSQL. REST APIs, secure authentication and clean, modular architecture.",
  },
  {
    title: "AI-powered products",
    body: "LLM features built on OpenAI and Anthropic APIs and wired into real application workflows. I ship daily with Claude Code and Cursor to move faster without compromising quality.",
  },
  {
    title: "Real-time & delivery",
    body: "Real-time features over WebSockets, multi-provider payments with Stripe and PayPal, and Docker with GitHub Actions CI/CD to AWS.",
  },
  {
    title: "Operations & logistics",
    body: "Procurement, logistics and data management for humanitarian emergency response in Gaza. That covers suppliers and quotations, deliveries, inventory, field data and reporting.",
  },
];

const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "Angular", "React Native", "Expo", "TypeScript", "JavaScript", "Redux Toolkit", "React Query", "Tailwind CSS", "Material UI"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express.js", "Python (FastAPI)", "REST API design", "Modular architecture", "Dependency injection", "Auth & authorization", "Role-based access", "Secure sessions"],
  },
  {
    group: "Async & messaging",
    items: ["Celery", "RabbitMQ", "Message queues", "Event-driven architecture", "Background jobs", "WebSockets", "Real-time services"],
  },
  {
    group: "Databases & ORMs",
    items: ["PostgreSQL", "MongoDB", "Schema design", "Queries", "Migrations", "Data-access patterns", "Prisma"],
  },
  {
    group: "DevOps & cloud",
    items: ["Docker", "GitHub Actions CI/CD", "AWS (S3, CloudFront)", "Linux", "DNS", "HTTPS/SSL", "Production troubleshooting"],
  },
  {
    group: "Testing & quality",
    items: ["Jest", "Cypress", "Unit / integration / E2E", "Code review", "Git", "GitHub"],
  },
  {
    group: "Integrations",
    items: ["Stripe", "PayPal", "JawwalPay", "PalPay", "Subscription checkout", "Multi-provider payments"],
  },
  {
    group: "AI services",
    items: ["OpenAI API", "Anthropic API", "LLM workflows"],
  },
  {
    group: "Operations & logistics",
    items: ["Procurement", "Supplier management", "Quotation comparison", "Delivery coordination", "Inventory management", "Documentation", "Field data collection", "Reporting"],
  },
  {
    group: "Tooling",
    items: ["Claude Code", "Claude Design", "Cursor", "GitHub Copilot", "Jira (Agile/Scrum)", "Figma"],
  },
];

const experiences = [
  {
    period: "Jan 2024 – Aug 2026",
    title: "Procurement, Supply Chain & Data Management · Arben",
    bullets: [
      "Managed procurement, supply chain, logistics and data activities for local and international organisations in Gaza throughout the emergency, owning the cycle from request through delivery.",
      "Ran the full procurement cycle: processed purchase requests, sourced suppliers, compared quotations, and followed purchase orders through to delivery and confirmation.",
      "Maintained procurement, inventory, fleet and asset trackers, ran data quality checks against source documents, and kept audit-ready records and stock reconciliations.",
      "Collected field monitoring data and prepared regular activity reports, coordinating daily between suppliers, partner organisations and field teams under access, supply and connectivity constraints.",
    ],
  },
  {
    period: "Jan 2026 – Aug 2026",
    title: "Full Stack Developer (NestJS) · Taskly",
    bullets: [
      "Built a full-stack task management platform end to end for a client using Next.js, NestJS, and PostgreSQL, owning features from architecture through deployment with a focus on clean, modular architecture and reusable components.",
      "Designed and implemented a secure authentication system — signup/login, secure session handling, and a complete forgot-password and reset flow.",
      "Built RESTful APIs with NestJS using modular architecture and dependency injection, with Prisma for schema modelling, migrations, and type-safe database access.",
      "Set up GitHub Actions pipelines for automated testing, build, and deployment to a Dockerised production environment.",
    ],
  },
  {
    period: "Jul 2025 – Dec 2025",
    title: "Full Stack Developer (React Native) · Be Home App",
    bullets: [
      "Enabled real-time data synchronisation across clients using WebSockets and Firebase, significantly increasing engagement.",
      "Spearheaded development of 20+ mobile screens, designed with Claude Design and built with Claude Code, improving scalability and user experience.",
      "Improved application performance by 30% through Redux Toolkit and component-level optimisations, raising maintainability.",
    ],
  },
  {
    period: "Jan 2024 – May 2025",
    title: "Freelance Full Stack Developer (Node.js) · Real Estate Platform",
    bullets: [
      "Built scalable Next.js applications, reducing page load times by 25% and increasing organic traffic by 15%.",
      "Developed reusable UI component libraries, improving development efficiency by 30% across the codebase.",
    ],
  },
  {
    period: "May 2023 – Oct 2023",
    title: "Frontend Engineer (React & React Native) · Dash.ps",
    bullets: [
      "Developed 30+ screens and core features across web and mobile — user authentication, admin and user dashboards, forms, and real-time data updates.",
      "Improved the subscription checkout flow with multi-provider payment gateway integration (Stripe, PayPal, JawwalPay, PalPay), increasing successful transactions and overall conversion.",
    ],
  },
  {
    period: "May 2022 – Apr 2023",
    title: "Freelance Frontend Engineer · Book Store Platform",
    bullets: [
      "Developed 25+ responsive screens and reusable UI components in React and TypeScript, ensuring type safety and reducing UI bugs across the codebase.",
      "Managed complex application state with Redux Toolkit, improving data consistency across product listings, cart, and user sessions while reducing unnecessary re-renders.",
    ],
  },
];

const education = [
  {
    period: "Sep 2020 – Jul 2024",
    title: "B.Sc. Information Technology · Islamic University of Gaza",
  },
];

const testimonials = [
  {
    relationship: "Client",
    name: "Ahmad El-Hoss",
    title: "Technical leader driving innovative financial solutions",
    linkedin: "https://www.linkedin.com/in/ahmadelhoss/",
    quotes: [
      "I’ve had the pleasure of working with Mohanad, and I can confidently say he is an excellent developer. He has a strong ability to understand complex requirements and deliver exactly what was discussed, with precision and efficiency. Beyond his development skills, Mohanad has a great eye for designing app pages and a solid grasp of handling data, data structures, and navigation. His blend of technical expertise and design sense makes him a standout contributor to any project.",
    ],
  },
  {
    relationship: "Mentor",
    name: "Marco Spinello",
    title: "Technical writer at Booking.com",
    linkedin: "https://www.linkedin.com/in/marco-spinello/",
    quotes: [
      "Mohanad is a reliable and resilient frontend engineer. His React work demonstrates sound judgment around component boundaries, reusable and typed interfaces, performance, and maintainability. He also understands the importance of deliberate error handling in Node.js applications.",
      "Mohanad takes feedback seriously: he listens carefully, asks relevant follow-up questions, turns advice into actionable items, and follows through.",
      "I recommend Mohanad to any team looking for a dependable React engineer with Node.js experience and clear communication skills.",
    ],
  },
  {
    relationship: "Mentor",
    name: "Mafalda Johannsen",
    title: "Turning ABM signal into pipeline @ N.Rich",
    linkedin: "https://www.linkedin.com/in/mafalda-johannsen/",
    quotes: [
      "I've had the pleasure of mentoring Mohanad, and he's consistently impressed me with his focus, organization, and drive. He's the kind of person who doesn't just meet targets, he pushes past them, bringing genuine initiative to everything he takes on. Beyond his strong technical skills, what stands out most is his commitment to constantly improving and learning. He'd be a real asset to any team, and I recommend him without hesitation.",
    ],
  },
  {
    relationship: "Mentor",
    name: "Roberto Ponte",
    title: "Non Executive Director · Former CHRO",
    linkedin: "https://www.linkedin.com/in/roberto-ponte-5b15a0/",
    quotes: [
      "Mohanad is an ambitious professional, who comes across as a relationship builder and effective, accurate communicator in English. These traits make him a strong bet as a reliable team player for developer roles and more in the IT space. He is fully equipped, contractually and logistically, for international remote work, and has demonstrated solid full-stack skills and remarkable resilience delivering for clients from challenging circumstances.",
    ],
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="section-label">{children}</h2>;
}

function HomePage({ onContact }: { onContact: () => void }) {
  return (
    <>
      <section
        style={{
          padding: "96px 0 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Full Stack Developer · React, Next.js, Node.js
          </div>
          <h1
            style={{
              fontSize: "clamp(40px, 5.4vw, 64px)",
              lineHeight: 1.08,
              margin: "0 0 28px",
              letterSpacing: "-0.025em",
              maxWidth: "16ch",
            }}
          >
            I build AI-powered web and mobile products.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              maxWidth: "54ch",
              margin: "0 0 32px",
              color: "var(--text-78)",
            }}
          >
            Palestinian Full Stack Developer based in Gaza, working across two
            worlds: building software products with React, Next.js and Node.js,
            and supporting humanitarian operations on the ground in
            procurement, logistics and data management. Available for remote and
            local opportunities.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" onClick={onContact} className="btn btn-primary">
              Get in touch
            </button>
            <a href={RESUME_SOFTWARE} className="btn btn-secondary" download>
              Software CV
            </a>
            <a href={RESUME_OPERATIONS} className="btn btn-secondary" download>
              Operations CV
            </a>
          </div>
        </div>
        <div
          className="photo"
          role="img"
          aria-label={FULL_NAME}
          style={{
            aspectRatio: "4 / 5",
            backgroundImage: `url("${HERO_PHOTO}")`,
            backgroundSize: "contain",
          }}
        />
      </section>

      <section
        style={{
          padding: "72px 0 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 40,
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section style={{ paddingTop: 72 }}>
        <SectionLabel>What I do</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s) => (
            <div key={s.title} className="card" style={{ padding: 26 }}>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  const facts = ["Based in Gaza", "Arabic & English (fluent)", PHONE_DISPLAY];

  return (
    <>
      <section
        style={{
          padding: "88px 0 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div
          className="photo"
          role="img"
          aria-label={FULL_NAME}
          style={{
            aspectRatio: "1 / 1",
            backgroundImage: `url("${ABOUT_PHOTO}")`,
            backgroundSize: "cover",
          }}
        />
        <div>
          <div className="eyebrow">About</div>
          <h1 className="page-title">
            Full Stack Developer — software products &amp; humanitarian
            operations
          </h1>
          <p className="lead">
            I&apos;m a Palestinian Full Stack Developer based in Gaza, working
            across two worlds: building software products and supporting
            humanitarian operations on the ground.
          </p>
          <p className="lead">
            I started learning web and mobile development in 2021, began
            freelancing in 2022 and joined a company as a developer in 2023. In
            2025 I started working with a UK client building with React Native,
            and in 2026 I completed TAP&apos;s programme.
          </p>
          <p className="lead">
            My stack is React, Next.js and React Native on the front end, with
            Node.js, Express, TypeScript, MongoDB and PostgreSQL on the back end,
            plus REST APIs, WebSockets, Docker, CI/CD and AWS. I build
            AI-powered products on OpenAI and Anthropic LLM APIs, and use Claude
            Code and Cursor daily to ship faster without compromising quality.
          </p>
          <p className="lead">
            When the war began, my work expanded into humanitarian emergency
            response. With local and international organisations in Gaza I
            moved into operations, procurement, logistics and data management:
            managing suppliers, comparing quotations, coordinating deliveries,
            maintaining inventory and documentation, collecting field data and
            preparing reports under extremely difficult conditions.
          </p>
          <p className="lead" style={{ margin: 0 }}>
            I&apos;m looking for the right next step: a remote role in software
            and AI-powered products, a local role with an international
            organisation in Gaza, or any position where my technical and
            operational experience can make a real difference. I&apos;m fully
            set up for remote work, with 24/7 solar-powered electricity, stable
            high-speed internet and a reliable workspace.
          </p>
          <div
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}
          >
            {facts.map((f, i) => (
              <span key={f} style={{ display: "contents" }}>
                {i > 0 && (
                  <span style={{ color: "var(--color-divider)" }}>·</span>
                )}
                <span style={{ fontSize: 15, color: "var(--text-65)" }}>{f}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 72 }}>
        <SectionLabel>Skills &amp; tools</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 28,
          }}
        >
          {skills.map((s) => (
            <div key={s.group} className="card" style={{ padding: 24 }}>
              <h3 className="card-kicker">{s.group}</h3>
              <div
                style={{
                  display: "flex",
                  gap: "6px 14px",
                  flexWrap: "wrap",
                  lineHeight: 1.6,
                }}
              >
                {s.items.map((item) => (
                  <span
                    key={item}
                    style={{ fontSize: 15, color: "var(--text-72)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 72 }}>
        <SectionLabel>Experience</SectionLabel>
        <div>
          {experiences.map((exp) => (
            <div key={exp.title} className="exp-row">
              <div className="exp-period">{exp.period}</div>
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {exp.title}
                </h3>
                <ul className="exp-list">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <a href={RESUME_SOFTWARE} className="btn btn-secondary" download>
            Software CV (PDF)
          </a>
          <a href={RESUME_OPERATIONS} className="btn btn-secondary" download>
            Operations CV (PDF)
          </a>
        </div>
      </section>

      <section style={{ paddingTop: 72 }}>
        <SectionLabel>Education</SectionLabel>
        <div>
          {education.map((ed) => (
            <div key={ed.title} className="exp-row">
              <div className="exp-period">{ed.period}</div>
              <h3
                style={{
                  fontSize: 20,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {ed.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 72 }}>
        <SectionLabel>Testimonials</SectionLabel>
        <div style={{ display: "grid", gap: 20 }}>
          {testimonials.map((t) => (
            <figure key={t.name} className="card testimonial">
              <figcaption
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <span
                  style={{
                    alignSelf: "start",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color:
                      t.relationship === "Client"
                        ? "var(--color-accent-700)"
                        : "var(--text-50)",
                  }}
                >
                  {t.relationship}
                </span>
                <div
                  style={{
                    fontSize: 20,
                    lineHeight: 1.2,
                    marginTop: 10,
                    fontWeight: 500,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.45,
                    color: "var(--text-60)",
                  }}
                >
                  {t.title}
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 14, marginTop: 10 }}
                >
                  LinkedIn →
                </a>
              </figcaption>
              <div className="testimonial-quotes">
                {t.quotes.map((q, i) => (
                  <blockquote key={i}>{q}</blockquote>
                ))}
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const channels = [
    { label: "Book a call", value: "Schedule 30 minutes on Calendly", href: CALENDLY, external: true },
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP, external: true },
  ];

  return (
    <section
      style={{
        padding: "88px 0 72px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
        gap: 64,
        alignItems: "start",
      }}
    >
      <div>
        <div className="eyebrow">Contact</div>
        <h1 className="page-title">Tell me what you are building</h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            margin: "0 0 32px",
            color: "var(--text-78)",
          }}
        >
          Open to remote roles in software and AI-powered products, local roles
          with international organisations in Gaza, and any position where
          technical and operational experience can make a real difference.
          Fully set up for remote work with 24/7 solar-powered electricity and
          stable high-speed internet, and payments handled through RemotePass.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="card contact-card"
          >
            <span>
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--text-50)",
                  marginBottom: 6,
                }}
              >
                {c.label}
              </span>
              <span
                style={{ fontSize: 21, fontWeight: 500, overflowWrap: "anywhere" }}
              >
                {c.value}
              </span>
            </span>
            <span style={{ fontSize: 20, color: "var(--color-accent-700)" }}>
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [page, setPage] = useState<Page>("home");

  const go = (next: Page) => () => {
    setPage(next);
    window.scrollTo(0, 0);
  };

  const tabs: { id: Page; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="site-header">
        <div
          className="container"
          style={{
            paddingBlock: 20,
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div className="brand">{FULL_NAME}</div>
          <nav style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={go(t.id)}
                className="nav-tab"
                aria-current={page === t.id ? "page" : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main
        className="container"
        style={{ flex: 1, width: "100%", paddingBottom: 96 }}
      >
        {page === "home" && <HomePage onContact={go("contact")} />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
      </main>

      <footer className="site-footer">
        <div
          className="container"
          style={{
            paddingBlock: 32,
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            alignItems: "center",
            fontSize: 14,
            color: "var(--text-55)",
          }}
        >
          <span style={{ marginRight: "auto" }}>
            © {new Date().getFullYear()} {FULL_NAME}
          </span>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </footer>
    </div>
  );
}
