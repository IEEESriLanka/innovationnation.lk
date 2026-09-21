"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ activePage }: { activePage: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (page: string) =>
    activePage === page ? "text-white hover:text-white" : "hover:text-white";

  const getMobileLinkClass = (page: string) =>
    activePage === page ? "text-[#bc71ff]" : "text-white/80 hover:text-white";

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[100] px-6 py-8 md:px-16 lg:px-24 flex items-center justify-between">
        <Link href="/" className="relative z-[100]">
          <Image
            src="/logo.png"
            alt="INSL logo"
            width={120}
            height={42}
            className="object-contain w-[80px] h-auto md:w-[120px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
          <Link href="/" className={`${getLinkClass("home")} transition-colors`}>Home</Link>
          <Link href="/about-us" className={`${getLinkClass("about")} transition-colors`}>About Us</Link>
          <Link href="/events" className={`${getLinkClass("events")} transition-colors`}>Events</Link>
          <Link href="/partners" className={`${getLinkClass("partners")} transition-colors`}>Partners</Link>
          <Link href="/team" className={`${getLinkClass("team")} transition-colors`}>Our Team</Link>
          <Link href="/glimpse-of-insl" className={`${getLinkClass("glimpse")} transition-colors`}>Glimpse of INSL</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[100] flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-white block transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-[2px] bg-white block transition-all"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-white block transition-all"
          />
        </button>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#0c0325] flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-xl font-bold tracking-[0.2em] uppercase">
              <Link href="/" onClick={() => setIsOpen(false)} className={`${getMobileLinkClass("home")} transition-colors`}>Home</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)} className={`${getMobileLinkClass("about")} transition-colors`}>About Us</Link>
              <Link href="/events" onClick={() => setIsOpen(false)} className={`${getMobileLinkClass("events")} transition-colors`}>Events</Link>
              <Link href="/partners" onClick={() => setIsOpen(false)} className={`${getMobileLinkClass("partners")} transition-colors`}>Partners</Link>
              <Link href="/team" onClick={() => setIsOpen(false)} className={`${getMobileLinkClass("team")} transition-colors`}>Team</Link>
              <Link href="/glimpse-of-insl" onClick={() => setIsOpen(false)} className={`${getMobileLinkClass("glimpse")} transition-colors`}>Glimpse of INSL</Link>
            </nav>
            <div className="absolute bottom-10 left-0 w-full flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-[#4b32a8] to-[#bc71ff] rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
