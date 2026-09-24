import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import eventData from "@/lib/events.json";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

function extractText(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.text || "";
  if (node.children) return node.children.map(extractText).join(" ");
  return "";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event: any = (eventData.initialEvents || []).find((ev: any) => ev.slug === slug);
  
  if (!event) {
    return { title: "Event Not Found" };
  }

  let desc = "Join this event at IEEE Innovation Nation Sri Lanka 2026.";
  if (event.excerpt) {
    desc = event.excerpt;
  } else if (event.description?.root) {
    const extracted = extractText(event.description.root).trim().replace(/\s+/g, ' ');
    if (extracted) {
      desc = extracted.substring(0, 160) + (extracted.length > 160 ? "..." : "");
    }
  }
  
  return {
    title: event.title,
    description: desc,
    openGraph: {
      title: event.title,
      description: desc,
      images: event.image?.url ? [event.image.url] : [],
    },
  };
}

export function generateStaticParams() {
  return (eventData.initialEvents || []).map((ev: any) => ({
    slug: ev.slug,
  }));
}

function renderRichText(node: any, idx: number): React.ReactNode {
  if (!node) return null;

  if (node.type === "text") {
    return <span key={idx}>{node.text}</span>;
  }
  
  if (node.type === "paragraph") {
    if (!node.children || node.children.length === 0) {
      return <br key={idx} />;
    }
    return (
      <p key={idx} className="mb-4 text-white/80 font-light leading-relaxed md:text-lg">
        {node.children.map((child: any, cIdx: number) => renderRichText(child, cIdx))}
      </p>
    );
  }

  if (node.type === "autolink" || node.type === "link") {
    return (
      <a key={idx} href={node.fields?.url} target="_blank" rel="noopener noreferrer" className="text-[#bc71ff] hover:underline font-medium">
        {node.children?.map((child: any, cIdx: number) => renderRichText(child, cIdx))}
      </a>
    );
  }

  if (node.children) {
    return (
      <div key={idx} className="mb-4">
        {node.children.map((child: any, cIdx: number) => renderRichText(child, cIdx))}
      </div>
    );
  }
  return null;
}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = (eventData.initialEvents || []).find((ev: any) => ev.slug === slug);
  
  if (!event) return notFound();

  const isPast = new Date(event.startDate || event.createdAt) < new Date();
  const dateObj = new Date(event.startDate || event.createdAt);
  const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="bg-[#0c0325] min-h-screen w-full overflow-x-hidden text-white selection:bg-[#bc71ff] selection:text-white">
      <Header activePage="events" />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Image Sidebar */}
          <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-8">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(188,113,255,0.15)] bg-[#150d2c]">
              {event.image?.url ? (
                <Image
                  src={event.image.url}
                  alt={event.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[#bc71ff]/30">No Image Available</div>
              )}
            </div>

            {/* Event Meta Card */}
            <div className="bg-gradient-to-br from-[#150d2c] to-[#150d2c]/50 p-6 md:p-8 rounded-[1.5rem] border border-white/5 shadow-lg">
              <h3 className="text-[#bc71ff] text-sm uppercase tracking-widest font-bold mb-6">Event Details</h3>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#bc71ff] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Date</span>
                    <span className="text-white/90 text-sm font-medium">{formattedDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#bc71ff] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Type</span>
                    <span className="text-white/90 text-sm font-medium capitalize">{event.eventType || 'Event'}</span>
                    {event.onlinePlatform && <span className="text-white/60 text-xs mt-0.5 capitalize">via {event.onlinePlatform.replace('-', ' ')}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 flex flex-col">
            <Link href="/events" className="inline-flex items-center gap-2 text-[#bc71ff] hover:text-white transition-colors text-sm font-medium uppercase tracking-wider mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Events
            </Link>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-wider text-white leading-tight">
              {event.title}
            </h1>

            {/* Registration Button Box */}
            <div className="bg-[#150d2c] border border-white/10 rounded-2xl p-6 md:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg mb-1">{isPast ? 'Event Concluded' : 'Join this Event'}</h4>
                <p className="text-white/60 text-sm">
                  {isPast ? 'This event has already taken place.' : 'Secure your spot today and be part of the innovation!'}
                </p>
              </div>
              
              {event.registrationUrl ? (
                isPast ? (
                  <div className="inline-flex shrink-0 items-center justify-center gap-2 py-4 px-8 rounded-full text-sm font-bold uppercase tracking-widest transition-all bg-white/5 text-white/30 cursor-not-allowed border border-white/5">
                    Registrations Closed
                  </div>
                ) : (
                  <a 
                    href={event.registrationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 py-4 px-8 rounded-full text-sm font-bold uppercase tracking-widest transition-all bg-[#bc71ff] hover:bg-[#a55deb] text-white shadow-[0_0_20px_rgba(188,113,255,0.4)] "
                  >
                    Register Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )
              ) : (
                <div className="inline-flex shrink-0 items-center justify-center py-4 px-8 rounded-full bg-white/5 text-white/50 text-sm font-bold uppercase tracking-widest border border-white/5">
                  No Registration Info
                </div>
              )}
            </div>

            {/* Description area */}
            <div className="prose prose-invert prose-lg max-w-none text-white/80">
              {event.description?.root?.children?.map((node: any, idx: number) => renderRichText(node, idx))}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer activePage="events" />
    </main>
  );
}
