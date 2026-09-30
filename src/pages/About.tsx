import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "Tech Stacks" },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
            About <span className="grad-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div data-aos="fade-right" data-aos-delay="100">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate Frontend Developer with <strong className="text-cyan-400">3+ years of experience</strong> crafting
              high-performance, visually stunning web applications. I specialize in turning complex
              requirements into clean, intuitive interfaces.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Proficient in <span className="text-cyan-300">HTML, CSS, TypeScript, ReactJS</span> and <span className="text-cyan-300">Angular</span>, 
              I bring a deep love for detail, performance, and user experience to every project I touch.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {STATS.map(({ value, label }) => (
                <div key={label} className="glass p-4 text-center">
                  <p className="font-display font-bold text-3xl grad-text mb-1">{value}</p>
                  <p className="text-slate-400 text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/saad-ismail01/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
            >
              View LinkedIn Profile
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: decorative card */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
              <div className="absolute -inset-1 rounded-2xl border border-cyan-500/10 blur-sm" />

              {/* Inner content */}
              <div className="absolute inset-4 glass rounded-xl flex flex-col items-center justify-center gap-4 p-6">
                {/* Avatar placeholder with initials */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-500/30 flex items-center justify-center">
                  <span className="font-display font-bold text-3xl grad-text">SI</span>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-white text-xl">Saad Ismail</p>
                  <p className="text-cyan-400 text-sm">Frontend Developer</p>
                  <div className="flex justify-center gap-2 mt-3">
                    {["React", "TS", "Angular"].map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded border border-cyan-500/20 text-cyan-400 bg-cyan-500/5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
