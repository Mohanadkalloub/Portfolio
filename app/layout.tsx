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
  description:
    "Mohanad Kalloub — Full Stack Developer with experience in Supply Chain, Logistics & Operations, Information Management, and Coordination. Open to remote & local work. Based in Gaza.",
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
