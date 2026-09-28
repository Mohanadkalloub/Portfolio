import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohanad Kalloub",
  description:
    "Mohanad Kalloub — Full Stack Developer (React, Next.js, Node.js) based in Gaza, building AI-powered products, with operations, procurement, logistics and data management experience in humanitarian emergency response. Available for remote and local opportunities.",
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
        className={`${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
