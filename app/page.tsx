import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Mohanad Kalloub
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-500 mb-6">
            Front End & Mobile App Developer
          </h2>

          <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-8">
            I am a Front End & Mobile App Developer with over 3 years of
            experience building scalable and high-performance web and mobile
            applications. I specialize in React, Next.js, TypeScript, and React
            Native, with a strong focus on clean code, performance, and user
            experience.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="w-full rounded-lg md:w-1/2 flex justify-center md:justify-end ">
          <Image
            src="/images/me_home.jpeg"
            width={350}
            height={350}
            alt="Mohanad Kalloub"
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="mt-24">
        <h3 className="text-3xl font-bold mb-10">What I Do</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold mb-2 dark:text-white">
              Frontend Development
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Building modern, fast, and responsive user interfaces.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold mb-2 dark:text-white">
              React & Next.js
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Creating scalable applications using best practices.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold mb-2 dark:text-white">
              Mobile Development (React Native)
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Building cross-platform mobile applications using React Native
              with a focus on performance, usability, and scalable architecture.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold mb-2 dark:text-white">
              Back End Development (Node.js)
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Building scalable and robust server-side applications using
              Node.js, focusing on APIs, database integration, and server
              performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h3 className="text-3xl font-bold mb-6">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "TailwindCSS",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
            "Git & GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-sm font-medium
              bg-blue-100 text-blue-800
              dark:bg-blue-900 dark:text-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-32 text-center">
        <h3 className="text-3xl font-bold mb-4">Want to work together?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
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
