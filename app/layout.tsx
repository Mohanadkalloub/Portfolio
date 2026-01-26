import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohanad Kalloub",
    template: "%s | Mohanad Kalloub",
  },
  description: "Full Stack Developer – Portfolio of Mohanad Kalloub",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        {/* ===== Header / Navbar ===== */}
        <header className="border-b">
          <nav className="container mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold">
              Mohanad Kalloub<span className="text-primary">.</span>
            </Link>

            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-primary text-2xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary text-2xl">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary text-2xl">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary text-2xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ===== Main Content ===== */}
        <main className="grow container mx-auto px-6 py-10">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="border-t">
          <div className="container mx-auto px-6 py-6 text-center text-xl text-muted-foreground">
            © {new Date().getFullYear()} Mohanad Kalloub. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
