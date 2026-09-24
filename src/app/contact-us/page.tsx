"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      {/* Navbar/Header */}
      <Header activePage="contact" />

      {/* Hero / Contact Section */}
      <ContactSection isHero={true} />


      {/* Footer Section */}
      <Footer activePage="contact" />
    </main>
  );
}
