import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
            Let's <span className="grad-text">Connect</span>
          </h2>
        </div>

        {/* Card */}
        <div data-aos="fade-up" data-aos-delay="100" className="glass p-10 sm:p-16 text-center relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-2xl" />

          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            I am always open to new opportunities and collaborations. Have a project in mind or just want to chat?
          </p>
          <p className="text-slate-400 text-sm mb-8">I will get back to you within 24 hours.</p>

          <a
            href="mailto:saadismail001@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            <span className="font-display font-semibold text-cyan-300 text-lg group-hover:text-cyan-200 transition-colors">
              saadismail001@gmail.com
            </span>
            <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
