import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { bank, co, kime } from "../../assets";

const projects = [
  {
    title: "React Project",
    description: "Frontend web app built with React.js, TypeScript, and Tailwind CSS. Features dynamic rendering, type safety, and a seamless UX.",
    tags: ["React", "TypeScript", "Tailwind"],
    video: co,
    url: "https://react-j3hj.vercel.app/",
  },
  {
    title: "Card Bank",
    description: "Modern online banking UI built with React.js, JavaScript, and Tailwind CSS. Fully responsive across all screen sizes.",
    tags: ["React", "JavaScript", "Tailwind"],
    video: bank,
    url: "https://bank-web-wj7d.vercel.app/",
  },
  {
    title: "Kime Project",
    description: "Frontend project developed with HTML, Tailwind CSS, React.js, and TypeScript offering a seamless user experience.",
    tags: ["React", "TypeScript", "Tailwind"],
    video: kime,
    url: "https://kime-project.vercel.app/",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
      {projects.map(({ title, description, tags, video, url }, i) => (
        <div
          key={title}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="glass group flex flex-col overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          {/* Video thumbnail */}
          <div className="relative overflow-hidden h-52 bg-[#0d1528]">
            <video
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              autoPlay muted loop playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1528] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6 gap-4">
            <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-cyan-500/20 text-cyan-400 bg-cyan-500/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => window.open(url, "_blank")}
              className="mt-2 btn-neon w-full text-sm"
            >
              View Live
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
