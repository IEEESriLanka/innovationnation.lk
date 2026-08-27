import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
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
          <Link href="/about-us" className="text-white hover:text-white transition-colors">About Us</Link>
          <Link href="#" className="hover:text-white transition-colors">Events</Link>
          <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
           <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
             About <span className="text-[#bc71ff]">Us</span>
           </h1>
           <p className="text-white/70 text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-16">
             Innovation Nation Sri Lanka (INSL) is the premier entrepreneurial competition organized by IEEE Young Professionals Sri Lanka. We are dedicated to building a robust innovation and entrepreneurial culture among university students nationwide.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 group">
               <Image src="/slideshow/1.jpg" alt="About Image 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 mt-12 group">
               <Image src="/slideshow/2.jpg" alt="About Image 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {["Vision", "Mission", "Impact"].map((title, idx) => (
                <div key={idx} className="bg-[#150d2c] p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-[#bc71ff] text-xl font-bold uppercase tracking-widest mb-4">{title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {title === "Vision" && "To be the leading platform for nurturing tech-driven entrepreneurship in Sri Lanka, fostering a culture where student innovations transform into globally competitive startups."}
                    {title === "Mission" && "To equip university students with the essential skills, mentorship, and resources needed to develop sustainable business models and confidently pitch to potential investors."}
                    {title === "Impact" && "Over the years, INSL has impacted thousands of students, incubated numerous successful startups, and built a massive network of industry experts and aspiring entrepreneurs."}
                  </p>
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
              <Link href="#" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Events</Link>
              <Link href="/partners" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Partners</Link>
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
