import Link from "next/link";
import { apps } from "@/data/data";

export default function Works() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Real Applications I’ve Built
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          These are not templates or static pages. Each project focuses on real
          interaction, state management, and business logic.
        </p>
      </div>

      <section className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
        {apps.map((app) => (
          <div
            key={app.title}
            className="border rounded-2xl p-8 hover:shadow-lg transition flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold mb-3">{app.title}</h2>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 mb-4">
              {app.status}
            </span>

            <div className="mb-4">
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                Problem:
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {app.problem}
              </p>

              <p className="font-semibold text-gray-700 dark:text-gray-300">
                Solution:
              </p>
              <p className="text-gray-600 dark:text-gray-400">{app.solution}</p>
            </div>

            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
              {app.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <Link
              href={app.href}
              target="_blank"
              className="mt-4 inline-block font-semibold text-blue-500 hover:underline"
            >
              View application →
            </Link>
          </div>
        ))}
      </section>

      <section className="mt-24 text-center">
        <h3 className="text-3xl font-bold mb-4">Want something like this?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          I build custom web and mobile applications tailored to real business
          needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Let’s talk
        </Link>
      </section>
    </main>
  );
}
