import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohanad Kalloub",
  description: "Frontend-Focused Full-Stack Developer — React, Next.js, React Native",
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
        className={`${inter.variable} antialiased min-h-screen bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
