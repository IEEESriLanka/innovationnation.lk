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
  const partnersData: { title: string; logos: { file: string; name: string }[] }[] = [
    { title: 'Organized By', logos: [{ file: 'ypsl.png', name: 'IEEE Young Professionals Sri Lanka' }] },
    { title: 'Chapter Collaboration', logos: [{ file: 'mtt-s.png', name: 'IEEE MTT-S' }] },
    { title: 'Associate Partner', logos: [{ file: 'kanli.png', name: 'KANLI' }] },
    { title: 'Leisure Partner', logos: [{ file: 'pearl-bay.png', name: 'Pearl Bay' }] },
    { title: 'Investment Partner', logos: [{ file: 'lankan-angel-network.png', name: 'Lankan Angel Network' }] },
    { title: 'Knowledge and Innovation Partner', logos: [{ file: 'slasscom.png', name: 'SLASSCOM' }] },
    { title: 'Knowledge Partner', logos: [{ file: 'generation-alpha.png', name: 'Generation Alpha' }] },
    {
      title: 'Ecosystem Partners',
      logos: [
        { file: 'gew-sri-lanka.png', name: 'Global Entrepreneurship Week Sri Lanka' },
        { file: 'trace.png', name: 'TRACE' },
        { file: 'angelx.png', name: 'AngelX' },
      ],
    },
    { title: 'Community Partner', logos: [{ file: 'startup-grind-colombo.png', name: 'Startup Grind Colombo' }] },
    { title: 'Digital Media Partner', logos: [{ file: 'startup-sri-lanka.png', name: 'Startup Sri Lanka' }] },
    {
      title: 'Digital Outreach Partners',
      logos: [
        { file: 'vyapara.png', name: 'Vyapara' },
        { file: 'youngthare.png', name: 'Youngthare' },
      ],
    },
    {
      title: 'Regional Partners',
      logos: [
        { file: 'central-startup-hub.png', name: 'Central Startup Hub' },
        { file: 'uva-startup-hub.png', name: 'Uva Startup Hub' },
        { file: 'wayamba-startup-hub.png', name: 'Wayamba Startup Hub' },
      ],
    },
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

          <div className="w-full flex flex-wrap justify-center gap-x-12 gap-y-16">
            {partnersData.map((group) => (
              <div key={group.title} className="flex flex-col items-center">
                <div className="mb-6 flex flex-col items-center">
                  <p className="text-[#bc71ff] text-sm md:text-base uppercase tracking-widest text-center font-bold">
                    {group.title}
                  </p>
                  <div className="w-16 h-px bg-[#bc71ff]/50 mt-4" />
                </div>

                <div className="flex gap-6 items-center justify-center flex-wrap">
                  {group.logos.map((logo) => (
                    <div
                      key={logo.file}
                      className="relative w-48 md:w-56 h-28 bg-white rounded-2xl p-4 shadow-[0_0_30px_rgba(188,113,255,0.15)] hover:scale-105 transition-transform duration-300"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={`/partners/${logo.file}`}
                          alt={logo.name}
                          fill
                          sizes="224px"
                          className="object-contain"
                          unoptimized
                        />
                      </div>
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
