"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Mohanad Kalloub<span className="text-primary">.</span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {["Home", "About", "Work", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-primary text-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/works" onClick={() => setOpen(false)}>
              Works
            </Link>
          </li>
          <li>
            <Link href="/templates" onClick={() => setOpen(false)}>
              Templates
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
