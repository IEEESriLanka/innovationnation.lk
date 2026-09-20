"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: 'Hasidu Fernando',
    role: 'Chair',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 70 144 0168',
    email: 'hasidu.chamoditha234@gmail.com',
    image: '/hasidu.png',
    imagePosition: 'center 20%',
  },
  {
    name: 'Shafkhan Mohammed',
    role: 'Vice Chair - Program',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 76 450 5146',
    email: 'shafkhan@ieee.org',
    image: '/shafkan.png',
    imagePosition: 'center 15%',
  },
  {
    name: 'Sanugi Wickramasinghe',
    role: 'Vice Chair - Secretary Team',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 71 654 2724',
    email: 'sanugidwickramasinghe@gmail.com',
    image: '/sanugi.jpg',
    imagePosition: 'center 20%',
  },
  {
    name: 'Tiromi Gunarathne',
    role: 'Vice Chair - Finance Team',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 70 373 3484',
    email: 'gwtiromigunarathne@gmail.com',
    image: '/tiromi.jpeg',
    imagePosition: 'center 20%',
  },
  {
    name: 'Tharusha Jayasooriya',
    role: 'Vice Chair - PV Team',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 72 810 3079',
    email: 'tharushamjayasooriya@gmail.com',
    image: '/tharusha.jpg',
    imagePosition: 'center 20%',
  }
];

export default function Team() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      {/* Navbar/Header */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-16 lg:px-24 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="INSL logo"
            width={120}
            height={42}
            className="object-contain"
            priority
          />
        </Link>
        <nav className="hidden lg:flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
          <Link href="#" className="hover:text-white transition-colors">Events</Link>
          <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
          <Link href="/team" className="text-white hover:text-white transition-colors">Team</Link>
          <Link href="/glimpse-of-insl" className="hover:text-white transition-colors">Glimpse of INSL</Link>
        </nav>
      </header>

      {/* Meet the Team */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-40 pb-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              People Behind INSL 2026
            </h2>
            <p className="text-[#d7cff9] font-light text-lg">
              Meet the core organizing committee shaping the future of technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#1a1a24] w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              >
                {/* Image Top Half */}
                <div className="relative w-full aspect-[4/3] bg-[#0c0325]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>

                {/* Content Bottom Half */}
                <div className="p-8 md:p-10 bg-[#1f1f2e] flex flex-col flex-1 border-t-2 border-[#bc71ff]/50">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#d7cff9] text-sm mb-6 font-medium">{member.role}</p>

                  <p className="text-white/70 text-sm font-light mb-6 flex-1">
                    {member.organization}
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-white/50 font-light mt-auto">
                    <span>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="relative w-full bg-[#0c0325] pt-20 pb-10 px-6 md:px-16 lg:px-24 border-t border-[#bc71ff]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
          
          {/* Brand/Logo Area */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Image
              src="/logo.png"
              alt="INSL logo"
              width={160}
              height={56}
              className="object-contain opacity-90"
            />
            <p className="text-[#d7cff9]/60 font-light text-sm leading-relaxed">
              Empowering the next generation of Sri Lankan entrepreneurs. Join us in building a nation of innovation.
            </p>
          </div>

          {/* Links Area */}
          <div className="flex flex-wrap gap-16 lg:gap-32">
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-2">Explore</h4>
              <Link href="/" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Home</Link>
              <Link href="/about-us" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">About Us</Link>
              <Link href="#" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Events</Link>
              <Link href="/partners" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Partners</Link>
              <Link href="/team" className="text-[#bc71ff] hover:text-[#bc71ff] transition-colors text-sm font-light">Team</Link>
              <Link href="/glimpse-of-insl" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Glimpse of INSL</Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-2">Connect</h4>
              <a href="#" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Contact Us</a>
              <a href="#" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Facebook</a>
              <a href="#" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">LinkedIn</a>
              <a href="#" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} IEEE Innovation Nation Sri Lanka. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-white/30 text-xs font-light tracking-wide">
            <a href="#" className="hover:text-[#bc71ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#bc71ff] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
