export default function Hero() {
  return (
    <section className="rounded-lg min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-3xl font-bold leading-tight">
            Frontend & Mobile App Developer
          </h1>
          <p className="text-lg text-gray-300">
            I build real, production-ready web and mobile applications using
            <span className="text-white font-semibold"> React.js</span>,
            <span className="text-white font-semibold"> Next.js</span>,
            <span className="text-white font-semibold"> React Native</span>, and
            <span className="text-white font-semibold"> TypeScript</span>.
            <br />I focus on clean architecture, smooth user experiences, and
            solving real business problems — not demo or template-based
            projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/works"
              className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              View my work
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/me_home.jpeg"
            alt="Frontend and Mobile Developer"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
