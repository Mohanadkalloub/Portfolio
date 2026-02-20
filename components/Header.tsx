"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = "Home" | "About" | "Works" | "Templates" | "Contact";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    "Home",
    "About",
    "Works",
    "Templates",
    "Contact",
  ];

  const getHref = (item: NavItem): string =>
    item === "Home" ? "/" : `/${item.toLowerCase()}`;

  const isActive = (href: string): boolean => pathname === href;

  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-500">
          Mohanad Kalloub<span className="text-primary">.</span>
        </Link>

        <ul className="hidden md:flex gap-6 font-medium">
          {navItems.map((item: NavItem) => {
            const href = getHref(item);

            return (
              <li key={item}>
                <Link
                  href={href}
                  className={`text-lg transition ${
                    isActive(href)
                      ? "text-primary font-semibold border-b-2 border-primary text-blue-500"
                      : "hover:text-primary"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium">
          {navItems.map((item: NavItem) => {
            const href = getHref(item);

            return (
              <li key={item}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg ${
                    isActive(href)
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
