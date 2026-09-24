"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import eventData from "@/lib/events.json";
import Footer from "@/components/Footer";

// Helper to extract text from the nested lexical rich-text object in events.json
function extractText(node: any): string {
    if (node?.type === 'text') return node.text;
    if (node?.children) return node.children.map(extractText).join(' ');
    return '';
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const events = useMemo(() => {
    const rawEvents = eventData.initialEvents || [];
    
    // Process and sort all events by date (ascending)
    return rawEvents.map((ev: any) => {
      const summaryText = extractText(ev.description?.root);
      const summary = summaryText.length > 150 ? summaryText.substring(0, 150) + "..." : summaryText;
      return {
        ...ev,
        dateObj: new Date(ev.startDate || ev.createdAt),
        summary
      };
    }).sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  }, []);

  const upcomingEvents = events.filter(e => e.dateObj >= new Date());
  // For past events, we reverse so the most recent past event is first
  const pastEvents = events.filter(e => e.dateObj < new Date()).reverse(); 

  const displayedEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white pb-24">
      <Header activePage="events" />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 text-center"
          >
            INSL <span className="text-[#bc71ff]">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed text-center mb-16"
          >
            Discover our upcoming workshops, competitions, and sessions. Relive our past events that built the foundation of innovation.
          </motion.p>
          
          {/* Tabs */}
          <div className="flex bg-[#150d2c] rounded-full p-2 border border-white/10 shadow-[0_0_20px_rgba(188,113,255,0.1)]">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${activeTab === "upcoming" ? 'bg-[#bc71ff] text-white shadow-[0_0_15px_rgba(188,113,255,0.4)]' : 'text-white/50 hover:text-white'}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${activeTab === "past" ? 'bg-[#bc71ff] text-white shadow-[0_0_15px_rgba(188,113,255,0.4)]' : 'text-white/50 hover:text-white'}`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedEvents.length > 0 ? (
                displayedEvents.map((ev, idx) => (
                  <motion.div 
                    key={ev.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col bg-gradient-to-br from-[#150d2c] to-[#150d2c]/50 rounded-[2rem] border border-white/5 hover:border-[#bc71ff]/30 overflow-hidden group transition-all duration-300 "
                  >
                    <Link href={`/events/${ev.slug}`} className="relative w-full h-64 overflow-hidden bg-[#0c0325] block">
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
                      <div className="absolute top-4 left-4 bg-[#0c0325]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-[#bc71ff]">
                        {ev.eventType || 'Event'}
                      </div>
                    </Link>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-sm text-white/50 mb-4 font-light">
                        <svg className="w-4 h-4 text-[#bc71ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {ev.dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                      <Link href={`/events/${ev.slug}`}>
                        <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-snug group-hover:text-[#bdafff] transition-colors">{ev.title}</h3>
                      </Link>
                      <p className="text-white/60 font-light text-sm line-clamp-3 leading-relaxed mb-8 flex-1">
                        {ev.summary}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          href={`/events/${ev.slug}`}
                          className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-bold uppercase tracking-widest transition-colors border border-white/10"
                        >
                          Details
                        </Link>
                        {ev.registrationUrl && activeTab === "upcoming" && (
                          <a 
                            href={ev.registrationUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-6 rounded-xl bg-[#bc71ff]/10 hover:bg-[#bc71ff]/20 text-[#e9c7ff] text-sm font-bold uppercase tracking-widest transition-colors border border-[#bc71ff]/30"
                          >
                            Register
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-6 rounded-full bg-[#150d2c] border border-white/5 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#bc71ff]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">No {activeTab} events</h3>
                  <p className="text-white/50 font-light max-w-sm">
                    {activeTab === "upcoming" 
                      ? "We are planning something amazing. Stay tuned for our upcoming events!" 
                      : "We don't have any past events yet."}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer Section */}
      <Footer activePage="events" />
    </main>
  );
}
