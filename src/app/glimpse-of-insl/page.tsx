"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const images2024 = [
  "/slideshow/1.jpg",
  "/slideshow/2.jpg",
  "/slideshow/3.jpg",
  "/slideshow/4.jpg",
  "/slideshow/5.jpg",
  "/slideshow/6.jpg",
  "/slideshow/7.jpg",
  "/slideshow/8.jpg",
  "/slideshow/9.jpg",
  "/slideshow/10.jpg",
  "/slideshow/11.jpg",
  "/slideshow/12.jpg",
  "/slideshow/13.jpg",
  "/slideshow/15.jpg",
  "/slideshow/16.jpg",
  "/slideshow/17.jpg",

  "/slideshow/18.jpg",
  "/slideshow/19.jpg",
  "/slideshow/20.jpg",
  "/slideshow/21.jpg",
  "/slideshow/22.jpg",
  "/slideshow/23.jpg",
  "/slideshow/24.jpg",
  "/slideshow/25.jpg",
  "/slideshow/26.jpg",
  "/slideshow/27.jpg",
  "/slideshow/28.jpg",
  "/slideshow/29.jpg",
  "/slideshow/30.jpg",
];

const images2025 = [
  "/past/2025/624708230_1557371086388041_7999270379826382386_n.jpg",
  "/past/2025/624913826_1557371083054708_5204295995649973312_n.jpg",
  "/past/2025/625080932_1557372143054602_7649988925350448475_n.jpg",
  "/past/2025/625170237_1557372443054572_2910114480869540702_n.jpg",
  "/past/2025/625365977_1557371433054673_7724104276091939730_n.jpg",
  "/past/2025/625515304_1557371629721320_5413614417321410777_n.jpg",
  "/past/2025/625637448_1557371613054655_6865157513991849749_n.jpg",
  "/past/2025/625637448_1557372036387946_5279643306489247387_n.jpg",
  "/past/2025/625684369_1557371886387961_7037556923774913643_n.jpg",
  "/past/2025/625776563_1557371326388017_9183141472665767436_n.jpg",
  "/past/2025/625842835_1557371189721364_7657884827571297859_n.jpg",
  "/past/2025/625894462_1557371666387983_2610511549432878935_n.jpg",
  "/past/2025/625983575_1557371503054666_8927001285977571572_n.jpg",
  "/past/2025/626065580_1557371446388005_7332004015795587569_n.jpg",
  "/past/2025/626072275_1557372086387941_9199958617957768630_n.jpg",
  "/past/2025/626157770_1557371986387951_8909837478570907912_n.jpg",
  "/past/2025/626223288_1557371313054685_8915636634225762539_n.jpg",
  "/past/2025/626429608_1557372196387930_3439983106044038600_n.jpg",
  "/past/2025/626722340_1557371079721375_4660265574303064262_n.jpg",
  "/past/2025/626768984_1557372023054614_534831983440641162_n.jpg",
  "/past/2025/626793782_1557371156388034_4630064201922739000_n.jpg",
  "/past/2025/626829801_1557371806387969_8127157902537548377_n.jpg",
  "/past/2025/626838975_1557371776387972_8134948744993874421_n.jpg",
  "/past/2025/626842332_1557371739721309_2806615378779960653_n.jpg",
  "/past/2025/626871988_1557371913054625_191492560779358584_n.jpg",
  "/past/2025/627240594_1557371279721355_7251569019885173501_n.jpg",
  "/past/2025/627395639_1557371369721346_4595612605931131285_n.jpg",
  "/past/2025/627395697_1557371853054631_9101724115153709427_n.jpg",
  "/past/2025/627419603_1557372146387935_6430946020325411960_n.jpg",
  "/past/2025/627985783_1557371196388030_2987391519957971679_n.jpg",
];

export default function GlimpseOfInsl() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      {/* Navbar/Header */}
      <Header activePage="glimpse" />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-[#bc71ff] text-center"
          >
            A Glimpse of <span className="text-white">INSL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed text-center"
          >
            Relive the best moments of innovation, entrepreneurship, and collaboration from past years of INSL.
          </motion.p>
        </div>
      </section>

      {/* 2025 Section */}
      <section className="relative w-full py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">2025</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#bc71ff]/50 to-transparent"></div>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
            {images2025.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="relative w-full overflow-hidden rounded-3xl group break-inside-avoid shadow-[0_10px_30px_rgba(0,0,0,0.3)] bg-[#0c0325]"
              >
                {/* We use width and height arbitrarily high because w-full and h-auto will scale it down preserving natural aspect ratio */}
                <Image
                  src={src}
                  alt={`INSL 2025 memory ${index + 1}`}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0325]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Section */}
      <section className="relative w-full py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">2024</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#bc71ff]/50 to-transparent"></div>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
            {images2024.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="relative w-full overflow-hidden rounded-3xl group break-inside-avoid shadow-[0_10px_30px_rgba(0,0,0,0.3)] bg-[#0c0325]"
              >
                {/* We use width and height arbitrarily high because w-full and h-auto will scale it down preserving natural aspect ratio */}
                <Image
                  src={src}
                  alt={`INSL 2024 memory ${index + 1}`}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0325]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer activePage="glimpse" />
    </main>
  );
}
