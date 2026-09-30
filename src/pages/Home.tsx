import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Saad_Ismail_cv } from "../assets";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen w-full overflow-hidden grid-bg">

      {/* Floating particles */}
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => <li key={i} />)}
        </ul>
      </div>

      {/* Radial glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for work
        </span>

        {/* Name */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl mb-4 leading-tight tracking-tight">
          <span className="text-white">Hi, I am </span>
          <span className="grad-text glow-cyan">Saad</span>
        </h1>

        <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-6">
          Frontend Developer
        </h2>

        {/* Type animation */}
        <div className="h-10 mb-10">
          <TypeAnimation
            sequence={[
              "Building beautiful user interfaces.", 1500,
              "Turning ideas into code.", 1500,
              "React · TypeScript · Angular.", 1500,
              "It is more than code — it is passion.", 2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-cyan-400/80 text-lg sm:text-xl font-light"
          />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={Saad_Ismail_cv} target="_blank" rel="noopener noreferrer" className="btn-neon">
            Download CV
          </a>
          <Link
            to="contact" spy smooth offset={-64} duration={500}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold text-sm uppercase tracking-widest hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Home;
