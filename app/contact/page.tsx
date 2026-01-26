"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_s2w6a9g",
        "template_r8nrz5u",
        formRef.current,
        "ZEsOZ9wRmP-NN5vzk",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          formRef.current?.reset();
          alert("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section className="max-w-xl mx-auto">
      <div className="mb-5">
        <h2 className="text-center text-2xl md:text-5xl font-bold mb-4">
          Contact Me
        </h2>
        <p className="text-center text-2xl md:text-3xl text-blue-500 mb-6">
          Any question ? Just write me a message!
        </p>
      </div>
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-3 rounded"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-3 rounded"
        />
        <label htmlFor="title">Subject</label>
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="border p-3 rounded"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-3 rounded min-h-30"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
