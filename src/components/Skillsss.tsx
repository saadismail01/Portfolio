import React, { useState, useEffect, useRef } from "react";
import {
  angular, css, github, html, js, nodejs, react, tailwind, ts,
} from "../assets";

const skillData = [
  { title: "HTML",        description: "3+ years — semantic, accessible markup", level: 95 },
  { title: "CSS",         description: "3+ years — animations, layouts, responsive", level: 90 },
  { title: "Tailwind CSS",description: "3+ years — utility-first rapid styling", level: 92 },
  { title: "JavaScript",  description: "3+ years — ES6+, async, DOM mastery", level: 88 },
  { title: "TypeScript",  description: "Statically typed superset of JavaScript", level: 85 },
  { title: "React",       description: "Component-driven UI library", level: 90 },
  { title: "Angular",     description: "TypeScript enterprise web framework", level: 80 },
  { title: "Node.js",     description: "Server-side JavaScript runtime", level: 75 },
  { title: "GitHub",      description: "Version control and collaboration", level: 88 },
];

const iconAssets = [html, css, tailwind, js, ts, react, angular, nodejs, github];

const SWIPE_THRESHOLD = 50;

const SkillCard = ({ icon, title, description, level }: {
  icon: string; title: string; description: string; level: number;
}) => (
  <div className="glass group flex flex-col items-center text-center p-8 m-3 w-72 flex-shrink-0 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 select-none cursor-default">
    <div className="w-16 h-16 mb-5 p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center">
      <img src={icon} alt={title} className="w-full h-full object-contain pointer-events-none" />
    </div>
    <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

    {/* Skill bar */}
    <div className="w-full">
      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>Proficiency</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          style={{ width: `${level}%`, transition: "width 0.8s ease" }}
        />
      </div>
    </div>
  </div>
);

const Skillsss = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [iconsPerPage, setIconsPerPage] = useState(3);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w <= 640) setIconsPerPage(1);
      else if (w <= 1024) setIconsPerPage(2);
      else setIconsPerPage(3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const total = skillData.length;
  const totalPages = Math.ceil(total / iconsPerPage);

  const goNext = () => {
    setDirection("right");
    setAnimKey(k => k + 1);
    setStartIndex(prev => (prev + iconsPerPage) % total);
  };

  const goBack = () => {
    setDirection("left");
    setAnimKey(k => k + 1);
    setStartIndex(prev => (prev - iconsPerPage + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, 3000);
    return () => clearInterval(id);
  }, [isPaused, iconsPerPage, total, startIndex]);

  const onMouseDown = (e: React.MouseEvent) => { dragStartX.current = e.clientX; isDragging.current = true; setIsPaused(true); };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const d = e.clientX - dragStartX.current;
    if (Math.abs(d) > SWIPE_THRESHOLD) d < 0 ? goNext() : goBack();
    dragStartX.current = null; isDragging.current = false; setIsPaused(false);
  };
  const onMouseLeave = () => { if (isDragging.current) { dragStartX.current = null; isDragging.current = false; } setIsPaused(false); };
  const onTouchStart = (e: React.TouchEvent) => { dragStartX.current = e.touches[0].clientX; setIsPaused(true); };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const d = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(d) > SWIPE_THRESHOLD) d < 0 ? goNext() : goBack();
    dragStartX.current = null; setIsPaused(false);
  };

  const visible = [...Array(iconsPerPage)].map((_, i) => {
    const idx = (startIndex + i) % total;
    return { ...skillData[idx], icon: iconAssets[idx], key: `${startIndex}-${i}` };
  });

  const currentPage = Math.floor(startIndex / iconsPerPage) % totalPages;

  return (
    <div
      className="cursor-grab active:cursor-grabbing"
      onMouseEnter={() => !isDragging.current && setIsPaused(true)}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Cards */}
      <div
        key={animKey}
        className={`flex justify-center flex-wrap ${direction === "right" ? "slide-right" : "slide-left"}`}
      >
        {visible.map(({ key, icon, title, description, level }) => (
          <SkillCard key={key} icon={icon} title={title} description={description} level={level} />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-slate-600 text-xs mt-6 tracking-widest uppercase select-none">
        ← swipe or drag →
      </p>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentPage ? "right" : "left"); setAnimKey(k => k + 1); setStartIndex(i * iconsPerPage); }}
            className={`rounded-full transition-all duration-300 ${i === currentPage ? "w-6 h-2 bg-cyan-400" : "w-2 h-2 bg-slate-700 hover:bg-cyan-600"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skillsss;
