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
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 md:px-0">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-semibold text-base md:text-lg lg:text-xl leading-relaxed">
          I’m a Full-Stack and Mobile Developer with over 3 years of experience
          in building high-performance web and mobile applications using
          Next.js, Node.js, TypeScript, React Native, and Expo, with a strong
          belief in clean architecture and user-centered design.
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
            href="/Mohanad Mohammad Kalloub Front End & Mobile App Developer.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            <FaDownload />
            Download CV
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/me.png"
          alt="Mohanad Kalloub"
          width={350}
          height={350}
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
