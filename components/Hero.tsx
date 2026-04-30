export default function Hero() {
  return (
    <section className="rounded-lg min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-600 to-gray-900 text-white px-12 md:px-20 pt-24 pb-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="font-semibold text-base md:text-lg lg:text-xl leading-relaxed">
            I'm Mohanad Kalloub — a Frontend-Focused Full-Stack Developer with
            5+ years of experience building scalable, high-performance web and
            mobile applications.
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            I specialize in React.js, Next.js, and React Native with Expo for
            cross-platform mobile, backed by solid full-stack experience with
            Node.js, NestJS, REST APIs, and GraphQL. My stack also includes
            TypeScript, Redux Toolkit, React Query, and AWS — covering
            everything from pixel-perfect UIs to complete end-to-end products.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I've worked with startups and remote teams to design, build, and
            launch production-ready products across ecommerce, healthcare, and
            education platforms. My work involves building complex UI systems,
            real-time features (WebRTC, WebSockets), and optimizing performance
            to deliver seamless user experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I also leverage AI-powered workflows to improve code quality and
            speed up delivery — always focused on clean architecture, scalable
            code, and shipping products that make a real impact.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/01.png"
            alt="Frontend and Mobile Developer"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
