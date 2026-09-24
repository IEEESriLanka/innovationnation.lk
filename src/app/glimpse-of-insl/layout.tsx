import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glimpse of INSL",
  description: "Relive the most memorable moments, inspiring pitches, and collaborative energy from our past events.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
