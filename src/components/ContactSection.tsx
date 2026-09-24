"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection({ isHero = false }: { isHero?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: The user MUST replace this placeholder with their actual deployed Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypxWNjLGftEz-I1XoOum0wbLXCByoiLT3zoGm80HmjVwFh3H74MhbJnRO9KYZrvYWb/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", description: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`relative w-full ${isHero ? 'pt-40 md:pt-48' : 'pt-24 md:pt-32'} pb-24 md:pb-32 px-6 md:px-16 lg:px-24 bg-[#0c0325] border-t border-white/5`}>
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bc71ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4b32a8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

        {/* Left Side: Contact Info */}
        <div className="flex-1 flex flex-col pt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
              Let&apos;s <span className="text-[#bc71ff]">Connect</span>
            </h2>
            <p className="text-[#d7cff9]/80 font-light text-lg md:text-xl max-w-md leading-relaxed mb-12">
              Have a question about INSL 2026? Want to partner with us or need help with your application? We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#150d2c] border border-[#bc71ff]/30 flex items-center justify-center shrink-0 group-hover:border-[#bc71ff] transition-colors shadow-[0_0_15px_rgba(188,113,255,0.1)]">
                  <svg className="w-5 h-5 text-[#bc71ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[#d7cff9]/60 text-xs font-bold tracking-widest uppercase mb-1">Email Us</span>
                  <a href="mailto:inslpublicity@gmail.com" className="text-white hover:text-[#bc71ff] transition-colors font-medium">inslpublicity@gmail.com</a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-5 group mt-4">
                <div className="w-12 h-12 rounded-full bg-[#150d2c] border border-[#bc71ff]/30 flex items-center justify-center shrink-0 group-hover:border-[#bc71ff] transition-colors shadow-[0_0_15px_rgba(188,113,255,0.1)]">
                  <svg className="w-5 h-5 text-[#bc71ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[#d7cff9]/60 text-xs font-bold tracking-widest uppercase mb-2">Follow Us</span>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/IEEEINSL/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bc71ff] transition-colors text-sm font-light">Facebook</a>
                    <a href="https://www.linkedin.com/company/ieeeinsl/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bc71ff] transition-colors text-sm font-light">LinkedIn</a>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 lg:max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#150d2c]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl relative"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Send an Inquiry</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#d7cff9]/80 text-xs font-medium tracking-wide">Full Name <span className="text-[#bc71ff]">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#0c0325] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#bc71ff]/60 focus:ring-1 focus:ring-[#bc71ff]/60 transition-all font-light text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[#d7cff9]/80 text-xs font-medium tracking-wide">Email Address <span className="text-[#bc71ff]">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0c0325] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#bc71ff]/60 focus:ring-1 focus:ring-[#bc71ff]/60 transition-all font-light text-sm"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[#d7cff9]/80 text-xs font-medium tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#0c0325] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#bc71ff]/60 focus:ring-1 focus:ring-[#bc71ff]/60 transition-all font-light text-sm"
                  placeholder="+94 77 123 4567"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-[#d7cff9]/80 text-xs font-medium tracking-wide">Inquiry Details <span className="text-[#bc71ff]">*</span></label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-[#0c0325] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#bc71ff]/60 focus:ring-1 focus:ring-[#bc71ff]/60 transition-all font-light text-sm resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm font-light mt-2">
                  Thank you! Your inquiry has been sent successfully. We will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm font-light mt-2">
                  Something went wrong. Please try again later or email us directly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full flex items-center justify-center gap-3 bg-[#bc71ff] hover:bg-[#a65ce6] text-white py-4 rounded-xl font-semibold tracking-wide transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(188,113,255,0.3)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
