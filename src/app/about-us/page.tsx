import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about IEEE Innovation Nation Sri Lanka 2026, our vision, mission, and the impact we make in the startup ecosystem.",
};

export default function AboutUs() {
  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      {/* Navbar/Header */}
      <Header activePage="about" />

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
      <Footer activePage="about" />
    </main>
  );
}
