import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dedicated team behind IEEE Innovation Nation Sri Lanka 2026.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
