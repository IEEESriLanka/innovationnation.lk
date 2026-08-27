"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ambassadors from "./data.json";

export default function AmbassadorsPage() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      
      {/* Navbar/Header (Simple logo placement) */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-16 lg:px-24">
        <Image
          src="/logo.png"
          alt="INSL logo"
          width={120}
          height={42}
          className="object-contain"
          priority
        />
      </header>

      {/* Ambassadors Section (Reference 3 style) */}
      <section className="relative w-full overflow-hidden min-h-screen pt-40 pb-32">
        {/* Background Split */}
        <div className="absolute top-0 left-0 w-full h-[45%] lg:h-[50%] bg-[#0c0325] z-0" />
        <div className="absolute bottom-0 left-0 w-full h-[55%] lg:h-[50%] bg-[#4b32a8] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-4"
            >
              Meet Our Ambassadors
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#d7cff9] font-light text-lg md:text-xl max-w-2xl"
            >
              Program Ambassadors of Innovation Nation Sri Lanka representing various universities and institutes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {ambassadors.map((member, idx) => (
              <motion.div
                key={`${member.name}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#1a1a24] h-full"
              >
                {/* Image Top Half */}
                <div className="relative w-full aspect-[4/3] bg-[#0c0325]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition || 'center' }}
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

    </main>
  );
}
