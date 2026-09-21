import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";

export default function Partners() {
  const partnersData = [
    { files: ['investment-partner.png'], title: 'Investment Partner', bgWhite: true },
    { files: ['knowledge-partner.png'], title: 'Knowledge Partner' },
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
      <footer className="relative w-full bg-[#0c0325] pt-20 pb-10 px-6 md:px-16 lg:px-24 border-t border-[#bc71ff]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
          <div className="flex flex-col gap-6 max-w-sm">
            <Image src="/logo.png" alt="INSL logo" width={160} height={56} className="object-contain opacity-90" />
            <p className="text-[#d7cff9]/60 font-light text-sm leading-relaxed">
              Empowering the next generation of Sri Lankan entrepreneurs. Join us in building a nation of innovation.
            </p>
          </div>
          <div className="flex flex-wrap gap-16 lg:gap-32">
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-2">Explore</h4>
              <Link href="/" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Home</Link>
              <Link href="/about-us" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">About Us</Link>
              <Link href="/events" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Events</Link>
              <Link href="/partners" className="text-[#bc71ff] hover:text-[#bc71ff] transition-colors text-sm font-light">Partners</Link>
              <Link href="/team" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Team</Link>
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
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light tracking-wide">&copy; {new Date().getFullYear()} IEEE Innovation Nation Sri Lanka. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
