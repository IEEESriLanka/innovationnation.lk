import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Innovation Nation Sri Lanka 2026 | IEEE INSL",
    template: "%s | INSL 2026",
  },
  description: "Empowering the next generation of Sri Lankan entrepreneurs. Join IEEE Innovation Nation Sri Lanka to build an innovation and entrepreneurial culture among university students.",
  keywords: ["INSL", "Innovation Nation Sri Lanka", "IEEE", "Entrepreneurship", "Sri Lanka", "Startups", "University Students", "Competition", "2026"],
  openGraph: {
    title: "Innovation Nation Sri Lanka 2026",
    description: "Empowering the next generation of Sri Lankan entrepreneurs. Join IEEE Innovation Nation Sri Lanka.",
    url: "https://insl.lk",
    siteName: "Innovation Nation Sri Lanka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovation Nation Sri Lanka 2026",
    description: "Empowering the next generation of Sri Lankan entrepreneurs. Join IEEE Innovation Nation Sri Lanka.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
