import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skillsss from "../components/Skillsss";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
            My <span className="grad-text">Skills</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Swipe or drag to browse — hover to pause auto-rotate.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Skillsss />
        </div>
      </div>
    </section>
  );
};

export default Skills;
