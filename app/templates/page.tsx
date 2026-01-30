import { projects } from "@/data/data";
import Link from "next/link";

export default function Templates() {
  return (
    <section className="flex flex-wrap gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="
            flex flex-col justify-between
            w-full sm:w-[48%] md:w-[31%] xl:w-[23%]
            p-6 rounded-xl border
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-700
            transition-transform duration-300
            hover:shadow-lg hover:scale-105
          "
        >
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block"
          >
            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">
              {project.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {project.stack}
            </p>
          </Link>

          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-auto inline-block text-sm font-medium text-center
                text-white bg-blue-600 hover:bg-blue-700
                rounded-md px-4 py-2 transition
              "
            >
              View Code
            </Link>
          )}
        </div>
      ))}
    </section>
  );
}
