import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../components/Project";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
            Selected <span className="grad-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A collection of projects I built — each one pushing my skills further.
          </p>
        </div>

        <Project />
      </div>
    </section>
  );
};

export default Projects;
