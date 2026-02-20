import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="mt-[50] flex flex-col-reverse md:flex-row items-center gap-10 px-4 md:px-0">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-semibold text-base md:text-lg lg:text-xl leading-relaxed">
          I’m Mohanad Kalloub, a Front-End and Mobile Developer passionate about
          building apps that work smoothly and make sense to real users. With
          over 3 years of experience, I specialize in React, Next.js, and React
          Native, delivering high-performance web and cross-platform mobile
          applications.
          <p className="mt-5">
            I’ve worked on a variety of mobile and web applications,
            implementing real-time features like WebRTC calls, socket
            communication, and dynamic dashboards. I collaborate closely with
            backend teams and use clean, scalable architecture with
            styled-components for maintainable UI. My goal is to create apps
            that are reliable, user-friendly, and impactful across diverse
            domains and ideas.
          </p>
        </h2>

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            href="https://github.com/Mohanadkalloub"
            target="_blank"
            className="p-3 rounded-full text-2xl hover:scale-110 hover:shadow-lg transition"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mohanad-kalloub-17ba35223/"
            target="_blank"
            className="p-3 rounded-full text-2xl hover:scale-110 hover:shadow-lg transition"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=972595372607"
            target="_blank"
            className="p-3 rounded-full text-2xl hover:scale-110 hover:shadow-lg transition"
          >
            <FaWhatsapp />
          </Link>

          <Link
            href="https://www.instagram.com/mohanad_kalloub/"
            target="_blank"
            className="p-3 rounded-full text-2xl hover:scale-110 hover:shadow-lg transition"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.facebook.com/mohanad.kalloub/"
            target="_blank"
            className="p-3 rounded-full text-2xl hover:scale-110 hover:shadow-lg transition"
          >
            <FaFacebook />
          </Link>
        </div>
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            href="/Mohanad Kalloub.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Read My Resume
          </Link>
          <Link
            href="/Mohanad Kalloub.pdf"
            download
            className="mx-3 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            <FaDownload /> Download My Resume
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
          <Image
            src="/images/me.png"
            alt="Mohanad Kalloub"
            fill
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
