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
    <section className="flex flex-col md:flex-row items-center gap-6">
      <div>
        <h2 className="font-semibold text-[20px] p-2">
          I’m a Full-Stack and Mobile Developer with over 3 years of experience
          in building high-performance web and mobile applications using
          Next.js, Node.js, TypeScript, React Native, and Expo, with a strong
          belief in clean architecture and user-centered design.
        </h2>
        <div className="mt-5 flex flex-col md:flex-row space-x-3">
          <Link
            href="https://github.com/Mohanadkalloub"
            target="_blank"
            className="p-3 rounded-full text-2xl 
             hover:scale-110 hover:shadow-lg 
            transition-transform duration-200"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohanad-kalloub-17ba35223/"
            target="_blank"
            className="p-3 rounded-full text-2xl 
             hover:scale-110 hover:shadow-lg 
            transition-transform duration-200"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=972595372607&text&type=phone_number&app_absent=0"
            target="_blank"
            className="p-3 rounded-full text-2xl 
             hover:scale-110 hover:shadow-lg 
            transition-transform duration-200"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://www.instagram.com/mohanad_kalloub/"
            target="_blank"
            className="p-3 rounded-full text-2xl 
             hover:scale-110 hover:shadow-lg 
            transition-transform duration-200"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/mohanad.kalloub/"
            target="_blank"
            className="p-3 rounded-full text-2xl 
             hover:scale-110 hover:shadow-lg 
            transition-transform duration-200"
          >
            <FaFacebook />
          </Link>
        </div>
        <Link
          href="/Mohanad Mohammad Kalloub Front End & Mobile App Developer.pdf"
          download
          className="inline-flex items-center gap-2 mt-5 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition "
        >
          <FaDownload />
          Download CV
        </Link>
      </div>
      <Image
        src="/images/me.png"
        alt="Mohanad Kalloub"
        width={400}
        height={400}
        className="rounded-lg object-cover shadow-lg mt-5"
      />
    </section>
  );
}
