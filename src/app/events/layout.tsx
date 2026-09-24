import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Discover upcoming and past events, workshops, and competitions by INSL.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
