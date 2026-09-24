import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the IEEE Innovation Nation Sri Lanka 2026 team for inquiries and partnerships.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
