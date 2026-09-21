"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import eventData from "@/lib/events.json";

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
    month: 'April',
    desc: 'Official launch of INSL 2026, introducing INSL to undergraduates across Sri Lanka.'
  },
  {
    title: 'Zonal Competitions',
    month: 'June - August',
    desc: 'The first stage, where teams compete within their zones'
  },
  {
    title: 'Workshop Series',
    month: 'September - October',
    desc: '04 sessions focused on Pitching, Unit Economics, Building a Business, and Marketing.'
  },
  {
    title: 'Quarter Finals',
    month: 'October',
    desc: 'Selected teams advance to the Semi-Finals.'
  },
  {
    title: 'Semi-Finals',
    month: 'November',
    desc: 'Top teams compete for a place in the Grand Finale'
  },
  {
    title: 'Finals & Investor Lounge',
    month: 'December',
    desc: 'Finalists pitch to industry experts and investors on a national platform'
  }
];



const offers = [
  {
    title: 'National-Level Competition',
    description: 'Showcase your innovative ideas and compete on a national stage.',
    image: '/offers/competition.jpg'
  },
  {
    title: 'Expert-Led Workshops',
    description: 'Gain practical knowledge and skills from industry professionals.',
    image: '/offers/workshops.jpg'
  },
  {
    title: 'Personalized Mentorship',
    description: 'Receive one-on-one guidance from domain specialists to refine your business.',
    image: '/offers/mentoring.jpg'
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with like-minded peers, experienced founders, and industry leaders.',
    image: '/offers/innovation.jpg'
  },
  {
    title: 'Investment Opportunities',
    description: 'Pitch your startup to potential investors and secure funding to scale your idea.',
    image: '/offers/investment.jpg'
  }
];

export default function Home() {
  const [activeOffer, setActiveOffer] = useState(0);

  const recentEvents = [...(eventData.initialEvents || [])]
    .map((ev: any) => ({
      ...ev,
      dateObj: new Date(ev.startDate || ev.createdAt),
    }))
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
    .slice(0, 4);

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
      <Header activePage="home" />

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

      {/* Competition Timeline Section */}
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
              Competition Timeline
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
              Timeline <br />
              Competition
            </motion.h2>
          </div>

          <div className="flex-1 flex flex-col relative py-4">
            {/* Vertical connector line */}
            <div className="absolute left-6 md:left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#4b32a8] via-[#bc71ff]/30 to-[#0c0325] hidden sm:block z-0" />

            {competitionSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 group relative pb-10 last:pb-0"
              >
                {/* Number indicator */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-[#0c0325] border-2 border-[#4b32a8] group-hover:border-[#bc71ff] flex items-center justify-center text-lg md:text-xl font-bold text-[#4b32a8] group-hover:text-[#bc71ff] transition-all duration-300 shadow-[0_0_15px_rgba(75,50,168,0.2)] group-hover:shadow-[0_0_25px_rgba(188,113,255,0.4)]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content Card */}
                <div className="flex flex-col flex-1 bg-gradient-to-r from-[#1a103c]/60 to-transparent p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-[#bc71ff]/30 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-[0_10px_40px_rgba(188,113,255,0.1)] ml-4 sm:ml-0">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{step.title}</h3>
                    <span className="inline-flex items-center justify-center bg-[#bc71ff]/10 text-[#e9c7ff] text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#bc71ff]/30 whitespace-nowrap self-start xl:self-auto shadow-[inset_0_0_10px_rgba(188,113,255,0.1)]">
                      {step.month}
                    </span>
                  </div>
                  <p className="text-[#d7cff9]/80 font-light leading-relaxed md:text-lg">{step.desc}</p>
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

      {/* Events Preview Section */}
      <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#0c0325] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                Discover <span className="text-[#bc71ff]">Events</span>
              </h2>
              <p className="text-white/60 font-light max-w-lg">
                Join our upcoming workshops, sessions, and competitions to fuel your entrepreneurial journey.
              </p>
            </div>
            <Link
              href="/events"
              className="group flex items-center gap-3 bg-[#150d2c] hover:bg-[#1a103c] border border-[#bc71ff]/30 hover:border-[#bc71ff] px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(188,113,255,0.1)] hover:shadow-[0_0_25px_rgba(188,113,255,0.3)] shrink-0"
            >
              <span className="text-[#e9c7ff] text-sm font-medium tracking-wide uppercase">Browse All</span>
              <svg className="w-4 h-4 text-[#bc71ff] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {recentEvents.map((ev, idx) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group border border-white/5 shadow-lg bg-[#150d2c] flex flex-col"
              >
                <Link href={`/events/${ev.slug}`} className="absolute inset-0 z-10" />
                <div className="relative w-full h-[55%] overflow-hidden bg-[#0c0325]">
                  {ev.image?.url ? (
                    <Image
                      src={ev.image.url}
                      alt={ev.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#bc71ff]/30">No Image</div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#0c0325]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#bc71ff]">
                    {ev.eventType || 'Event'}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between bg-gradient-to-br from-[#150d2c] to-[#150d2c]/50">
                  <div>
                    <div className="flex items-center gap-2 text-[#bc71ff] text-xs font-light mb-3">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {ev.dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug line-clamp-3 group-hover:text-[#bdafff] transition-colors">{ev.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpse of INSL Preview Section */}
      <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#0c0325] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                A Glimpse of <span className="text-[#bc71ff]">INSL</span>
              </h2>
              <p className="text-white/60 font-light max-w-lg">
                Relive the most memorable moments, inspiring pitches, and collaborative energy from our past events.
              </p>
            </div>
            <Link
              href="/glimpse-of-insl"
              className="group flex items-center gap-3 bg-[#150d2c] hover:bg-[#1a103c] border border-[#bc71ff]/30 hover:border-[#bc71ff] px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(188,113,255,0.1)] hover:shadow-[0_0_25px_rgba(188,113,255,0.3)] shrink-0"
            >
              <span className="text-[#e9c7ff] text-sm font-medium tracking-wide uppercase">Browse All</span>
              <svg className="w-4 h-4 text-[#bc71ff] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {[12, 7, 3, 11].map((imgNum, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group border border-white/5 shadow-lg bg-[#0c0325]"
              >
                <Image
                  src={`/slideshow/${imgNum}.jpg`}
                  alt={`Glimpse ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0325]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organized By Section */}
      <section className="relative w-full py-24 bg-[#150d2c]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center">
          <div className="h-12 flex items-end mb-6">
            <p className="text-[#bc71ff] text-xs md:text-sm uppercase tracking-widest text-center">
              Organized By
            </p>
          </div>
          <div className="flex gap-8 md:gap-12 items-center justify-center">
            <div className="relative w-56 md:w-72 h-28 md:h-32 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/partners/organized-by.png"
                alt="Organized By"
                fill
                className="object-contain rounded-xl"
                unoptimized
              />
            </div>
            <div className="relative w-56 md:w-72 h-28 md:h-32 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/logo.png"
                alt="INSL Logo"
                fill
                className="object-contain rounded-xl"
                unoptimized
              />
            </div>
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
              <Link href="/" className="text-[#bc71ff] hover:text-[#bc71ff] transition-colors text-sm font-light">Home</Link>
              <Link href="/about-us" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">About Us</Link>
              <Link href="/events" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Events</Link>
              <Link href="/partners" className="text-[#d7cff9]/60 hover:text-[#bc71ff] transition-colors text-sm font-light">Partners</Link>
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
