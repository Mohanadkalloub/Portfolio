export default function Hero() {
  return (
    <section className="rounded-lg min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          I build real web apps — not templates.
        </h1>

        <p className="text-lg text-gray-300">
          Custom dashboards, business systems, and interactive web applications
          built to solve real problems.
        </p>

        <a
          href="/works"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          View my work
        </a>
      </div>
    </section>
  );
}
