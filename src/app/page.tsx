"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Figma asset URLs
const imgWhatWeOffer = "/final-pitch.jpg";
const slideshowImages = [
  "/slideshow/1.jpg",
  "/slideshow/2.jpg",
  "/slideshow/3.jpg",
  "/slideshow/4.jpg",
  "/slideshow/5.jpg",
  "/slideshow/6.jpg",
  "/slideshow/7.jpg",
  "/slideshow/8.jpg",
];

const competitionSteps = [
  {
    title: 'National Awareness Session',
    desc: 'Official launch of INSL 2026, introducing the program to university students across Sri Lanka. An expert-led online session engages a wide student audience and encourages inclusive involvement.'
  },
  {
    title: 'Road to INSL Program',
    desc: 'Prepares participants through awareness and guidance activities before the main competition begins. Builds early understanding of entrepreneurship and strengthens readiness for zonal-level participation.'
  },
  {
    title: 'Zonal Competitions',
    desc: 'Conducted across four zones covering all IEEE Student Branches in Sri Lanka, with Idea and Business stages. 3 teams per stage from each zone are selected, advancing 24 teams to the Quarter Finals.'
  },
  {
    title: 'Quarter Finals',
    desc: 'Top 24 teams participate in structured workshops to enhance innovation, business, and pitching skills. Evaluations from Idea and Business stages select 12 teams to progress with assigned mentors.'
  },
  {
    title: 'Semi Final',
    desc: 'Top 12 teams compete in Idea and Business stages, presenting refined business solutions to judges. The best 6 teams are selected to advance to the Final Pitch stage.'
  },
  {
    title: 'Final Pitch',
    desc: 'Top 6 teams deliver final refined pitches to a panel of expert judges. One winner will be selected for each stage: Idea Stage and Business Stage.'
  },
  {
    title: 'Investor Lounge',
    desc: 'Final stage connecting top startups with investors and industry leaders for exposure. Enables networking, funding opportunities, and potential partnerships for scaling ideas.'
  }
];

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
    role: 'Program Vice Chair',
    organization: 'IEEE Innovation Nation Sri Lanka 2026',
    phone: '(+94) 76 450 5146',
    email: 'shafkhan@ieee.org',
    image: '/shafkan.png',
    imagePosition: 'center 15%',
  },
];

const offers = [
  {
    title: 'Competition',
    description: 'To recognize achievements, talents, and innovative ideas at a national level',
    image: '/offers/competition.jpg'
  },
  {
    title: 'Workshops',
    description: '',
    image: '/offers/workshops.jpg'
  },
  {
    title: 'Innovation & Entrepreneurship',
    description: '',
    image: '/offers/innovation.jpg'
  },
  {
    title: 'Pitch Deck Mastery',
    description: '',
    image: '/offers/pitch-deck.jpg'
  },
  {
    title: 'Mentoring Sessions',
    description: 'One-on-one sessions with industry experts and domain specialists',
    image: '/offers/mentoring.jpg'
  },
  {
    title: 'Investment Opportunities',
    description: 'Access to investor networking and investor lounge opportunities',
    image: '/offers/investment.jpg'
  },
  {
    title: 'Weekly Deal Show',
    description: 'Potential competitors with fundable pitches will get the opportunity to feature in the Weekly Deal Show',
    image: '/offers/deal-show.jpg'
  }
];

export default function Home() {
  const [activeOffer, setActiveOffer] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let imageIndex = 0;
    let lastPos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const distance = Math.hypot(clientX - lastPos.x, clientY - lastPos.y);

      if (distance > 80) {
        lastPos = { x: clientX, y: clientY };

        const img = imagesRef.current[imageIndex % imagesRef.current.length];
        if (img) {
          img.style.left = `${clientX}px`;
          img.style.top = `${clientY}px`;

          // trigger reflow to restart animation
          img.classList.remove('trail-animate');
          void img.offsetWidth;
          img.classList.add('trail-animate');

          imageIndex++;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove as any);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove as any);
      }
    };
  }, []);

  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">

      {/* Navbar/Header */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-16 lg:px-24 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="INSL logo"
          width={120}
          height={42}
          className="object-contain"
          priority
        />
        <nav className="hidden lg:flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Events</a>
          <a href="#" className="hover:text-white transition-colors">Partners</a>
        </nav>

      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/rectangle137.png"
            alt="INSL Hero Background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 w-full h-full bg-[#0c0325]/30" />

        {/* Blend into next section's background color */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0c0325] via-[#0c0325]/80 to-transparent" />

        <div className="w-full flex flex-col z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-full text-white font-black uppercase tracking-tighter text-left"
          >
            <span className="text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.85]">
              INNOVATION NATION
            </span>
            <span className="text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.85] text-[#e9c7ff]">
              SRI LANKA 2026
            </span>
          </motion.h1>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={containerRef} className="relative w-full bg-[#0c0325] py-30 md:py-30 overflow-hidden cursor-crosshair">
        {/* Style for Image Trail */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .trail-image {
            position: fixed;
            width: 140px;
            height: 180px;
            object-fit: cover;
            border-radius: 12px;
            pointer-events: none;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
            z-index: 40;
            box-shadow: 0 20px 40px rgba(0,0,0,0.8);
            will-change: transform, opacity, left, top;
          }
          .trail-animate {
            animation: trailFade 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
          @keyframes trailFade {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(calc(-10deg + 20deg * var(--rand))); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(calc(-10deg + 20deg * var(--rand))); }
          }
        `}} />

        {/* Trail Images Array */}
        {slideshowImages.map((src, i) => (
          <img
            key={i}
            src={src}
            ref={el => { if (el) imagesRef.current[i] = el; }}
            className="trail-image"
            style={{ '--rand': Math.random() } as React.CSSProperties}
            alt=""
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col gap-6 md:gap-4">

            {/* Line 1 */}
            <div className="flex justify-start">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white/20">
                <span className="text-[#bc71ff] font-bold">build</span> an innovation
              </h2>
            </div>

            {/* Line 2 */}
            <div className="flex justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white/20 text-center">
                and entrepreneurial <span className="text-[#bc71ff] font-bold">culture</span>
              </h2>
            </div>

            {/* Line 3 */}
            <div className="flex justify-end">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white/20 text-right">
                <span className="text-[#bc71ff] font-bold">among</span> university students
              </h2>
            </div>

          </div>

          {/* Subtext blocks */}
          <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-end">
            <div className="flex items-start gap-4 md:gap-6 max-w-sm">
              <div className="w-12 md:w-16 h-px bg-[#bc71ff] mt-2.5 md:mt-3 shrink-0" />
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Join hundreds of students who have transformed their ideas into reality through our nation-wide ecosystem.
              </p>
            </div>

            <div className="flex items-start gap-4 md:gap-6 max-w-sm justify-self-end text-right flex-row-reverse">
              <div className="w-12 md:w-16 h-px bg-[#bc71ff] mt-2.5 md:mt-3 shrink-0" />
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Much more than just a competition. This is a complete toolkit for succeeding in entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Does INSL Offer Section (Accordion Gallery) */}
      <section className="relative w-full py-24 md:py-32 bg-[#0c0325] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-[#bdafff]"
          >
            What Does INSL Offer?
          </motion.h2>
        </div>

        <div className="w-full flex flex-col md:flex-row h-[800px] md:h-[600px] shadow-[0_0_50px_rgba(12,3,37,0.8)]">
          {offers.map((item, index) => {
            const isActive = activeOffer === index;
            return (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0 group"
                onClick={() => setActiveOffer(index)}
                animate={{
                  flex: isActive ? "5 1 0%" : "1 1 0%"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Inactive overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'} bg-[#0c0325]/80 group-hover:bg-[#0c0325]/60`} />

                  {/* Active overlay (Purple gradient) */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-[#4b32a8]/90 via-[#4b32a8]/50 to-transparent`} />
                </div>

                {/* Content */}
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                      >
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                        <div className="w-16 h-1 bg-[#bc71ff] mb-6" />
                        {item.description && (
                          <p className="text-white/90 text-sm md:text-lg font-light leading-relaxed max-w-md">
                            {item.description}
                          </p>
                        )}
                      </motion.div>
                    ) : (
                      <>
                        {/* Desktop Inactive Text (Vertical) */}
                        <div className="hidden md:flex absolute inset-0 items-end justify-center pb-12">
                          <h3
                            className="text-white/80 font-bold text-xl uppercase tracking-widest whitespace-nowrap group-hover:text-white transition-colors"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                          >
                            {item.title}
                          </h3>
                        </div>
                        {/* Mobile Inactive Text (Horizontal) */}
                        <div className="flex md:hidden absolute inset-0 items-center justify-center">
                          <h3 className="text-white/80 font-bold text-sm uppercase tracking-widest whitespace-nowrap group-hover:text-white transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Competition Structure Section */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#0c0325] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-32 relative">

          {/* Mobile/Tablet heading */}
          <div className="lg:hidden mb-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider"
            >
              Competition Structure
            </motion.h2>
          </div>

          {/* Huge Vertical Heading for Desktop */}
          <div className="hidden lg:flex w-auto shrink-0 relative items-stretch">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[4rem] xl:text-[6rem] 2xl:text-[6rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#bc71ff] to-[#4b32a8] whitespace-nowrap sticky top-32 leading-none"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Structure <br />
              Competition
            </motion.h2>
          </div>

          <div className="flex-1 flex flex-col gap-10 ">
            {competitionSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-6 md:gap-8 group"
              >
                <div className="text-2xl md:text-3xl font-light text-[#4b32a8] group-hover:text-[#bc71ff] transition-colors mt-1">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-[#d7cff9]/80 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea vs Business Stage Section */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#0c0325]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Idea Stage Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#150d2c] to-[#150d2c]/50 p-10 md:p-14 rounded-[2rem] border border-[#bc71ff]/20 hover:border-[#bc71ff]/50 transition-colors"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-[#e9c7ff] mb-8">Idea Stage</h3>
            <div className="space-y-4 text-[#d7cff9] font-light leading-relaxed">
              <p>Have an idea but haven&apos;t started developing yet?</p>
              <p>Join the Idea Stage, we will help you and turn your concept into reality.</p>
              <p>Just bring your idea and let&apos;s build it together.</p>
            </div>
          </motion.div>

          {/* Business Stage Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#150d2c] to-[#150d2c]/50 p-10 md:p-14 rounded-[2rem] border border-[#8e74f3]/20 hover:border-[#8e74f3]/50 transition-colors"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-[#bdafff] mb-8">Business Stage</h3>
            <div className="space-y-4 text-[#d7cff9] font-light leading-relaxed">
              <p>Have an idea but haven&apos;t started developing yet?</p>
              <p>Join the Idea Stage, we will help you and turn your concept into reality.</p>
              <p>Just bring your idea and let&apos;s build it together.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Official Partners Section */}
      <section className="relative w-full py-24 bg-[#150d2c]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16 text-white">
            Official Partners
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
            <div className="flex flex-col items-center">
              <p className="text-[#bc71ff] text-sm uppercase tracking-widest mb-6">Organized by</p>
              <div className="relative w-48 md:w-64 h-20 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/ypsl-logo-white.png"
                  alt="IEEE Young Professionals Sri Lanka"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="w-full md:w-px h-px md:h-24 bg-white/10" />
            <div className="flex flex-col items-center">
              <p className="text-[#bc71ff] text-sm uppercase tracking-widest mb-6">Investment Partner</p>
              <div className="relative w-48 md:w-64 h-20 bg-white rounded-xl p-4">
                <Image
                  src="/lan-logo-full.png"
                  alt="Lankan Angel Network"
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team (Reference 3 style) */}
      <section className="relative w-full overflow-hidden">
        {/* Background Split */}
        <div className="absolute top-0 left-0 w-full h-[55%] bg-[#0c0325] z-0" />
        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-[#4b32a8] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-24 pb-32">

          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              People Behind INSL 2026
            </h2>
            <p className="text-[#d7cff9] font-light text-lg">
              Meet the core organizing committee shaping the future of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#1a1a24]"
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

    </main>
  );
}
