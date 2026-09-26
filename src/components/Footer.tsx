import Image from "next/image";
import Link from "next/link";

export default function Footer({ activePage }: { activePage?: string }) {
  const getLinkClass = (page: string) =>
    activePage === page
      ? "text-[#bc71ff] hover:text-[#bc71ff] transition-colors text-sm font-light"
      : "text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light";

  return (
    <footer className="relative w-full bg-[#0c0325] pt-20 pb-10 px-6 md:px-16 lg:px-24 border-t border-[#bc71ff]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        
        {/* Brand/Logo Area */}
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="flex items-center gap-8">
            <Image
              src="/logo.png"
              alt="INSL logo"
              width={100}
              height={35}
              className="object-contain opacity-90"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[#d7cff9]/80 font-light text-[10px] tracking-widest uppercase">
                A national project of
              </span>
              <Image
                src="/partners/organized-by.png"
                alt="YPSL Logo"
                width={240}
                height={84}
                className="object-contain opacity-90"
              />
            </div>
          </div>
          <p className="text-[#d7cff9]/60 font-light text-sm leading-relaxed max-w-sm">
            Empowering the next generation of Sri Lankan entrepreneurs. Join us in building a nation of innovation.
          </p>
        </div>

        {/* Links Area */}
        <div className="flex flex-wrap gap-16 lg:gap-32">
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-2">Explore</h4>
            <Link href="/" className={getLinkClass("home")}>Home</Link>
            <Link href="/about-us" className={getLinkClass("about")}>About Us</Link>
            <Link href="/events" className={getLinkClass("events")}>Events</Link>
            <Link href="/partners" className={getLinkClass("partners")}>Partners</Link>
            <Link href="/team" className={getLinkClass("team")}>Team</Link>
            <Link href="/glimpse-of-insl" className={getLinkClass("glimpse")}>Glimpse of INSL</Link>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-2">Connect</h4>
            <Link href="/contact-us" className={getLinkClass("contact")}>Contact Us</Link>
            <a href="https://www.facebook.com/IEEEINSL/" target="_blank" rel="noopener noreferrer" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Facebook</a>
            <a href="https://www.linkedin.com/company/ieeeinsl/" target="_blank" rel="noopener noreferrer" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">LinkedIn</a>
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
  );
}
