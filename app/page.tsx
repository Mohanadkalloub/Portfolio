import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Hero />
      <p className="text-sm text-gray-500 mt-4 text-center">
        Real apps with live interactions — dashboards, systems, and tools.
      </p>

      <section className="mt-24">
        <h3 className="text-3xl font-bold mb-10">What I Build</h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl">
            <h4 className="text-xl font-semibold mb-2">
              Interactive Web Applications
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Custom web apps with real functionality, state management, and
              business logic — not static pages.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="text-xl font-semibold mb-2">der
              Business Dashboards & Internal Tools
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Admin panels, analytics dashboards, and internal tools built to
              manage real data.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Mobile Apps</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Cross-platform mobile apps using React Native with a focus on
              performance and UX.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-32">
        <h3 className="text-3xl font-bold mb-6">
          Real Products, Not Templates
        </h3>

        <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-6">
          Each project I build focuses on real user interaction, state
          management, and business logic — the kind of functionality you won’t
          get from templates.
        </p>
        <Link
          href="/work"
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View real applications
        </Link>
      </section>
      <section className="mt-32">
        <h3 className="text-3xl font-bold mb-4">Want to work together?</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
          I’m open to new opportunities and collaborations.
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
