import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partners",
  description: "Meet the official partners and sponsors who are making IEEE Innovation Nation Sri Lanka 2026 possible.",
};

export default function Partners() {
  const partnersData = [
    { files: ['investment-partner.png'], title: 'Official Investment Partner', bgWhite: true },
    { files: ['knowledge-partner.png'], title: 'Exclusive Knowledge Partner' },
    { files: ['official-digital-media-partner.png'], title: 'Official Digital Media Partner' },
    { files: ['regional-partner-1.png', 'regional-partner-2.png', 'regional-partner-3.png'], title: 'Regional Partners' }
  ];

  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      {/* Navbar/Header */}
      <Header activePage="partners" />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 text-center">
            Our <span className="text-[#bc71ff]">Partners</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed text-center mb-24">
            We are proud to collaborate with industry leaders and organizations who share our vision of empowering the next generation of innovators.
          </p>

          <div className="w-full flex flex-col gap-24">
            {partnersData.map((partnerGroup, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="mb-12 flex flex-col items-center">
                  <p className="text-[#bc71ff] text-sm md:text-base uppercase tracking-widest text-center font-bold">
                    {partnerGroup.title}
                  </p>
                  <div className="w-16 h-px bg-[#bc71ff]/50 mt-4" />
                </div>

                <div className="flex gap-12 md:gap-16 items-center justify-center flex-wrap">
                  {partnerGroup.files.map((file, fileIdx) => (
                    <div key={fileIdx} className={`relative w-48 md:w-64 h-24 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 ${partnerGroup.bgWhite ? 'bg-white rounded-2xl p-6 shadow-[0_0_30px_rgba(188,113,255,0.15)]' : ''}`}>
                      <Image
                        src={`/partners/${file}`}
                        alt={`${partnerGroup.title} ${fileIdx + 1}`}
                        fill
                        className="object-contain rounded-2xl"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer activePage="partners" />
    </main>
  );
}
