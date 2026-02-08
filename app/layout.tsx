import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mohanad Kalloub",
    template: "%s | Mohanad Kalloub",
  },
  description: "Frontend & Mobile Developer – React, Next.js, React Native",
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
        className={`${inter.variable} ${fira.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-sans`}
      >
        <Header />
        <main className="grow container mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
