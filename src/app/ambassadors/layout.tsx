import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambassadors",
  description: "Meet our university ambassadors driving the entrepreneurial culture across Sri Lanka.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
