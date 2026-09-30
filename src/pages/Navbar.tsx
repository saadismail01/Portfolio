import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const NAV_LINKS = [
  { label: "Home",     to: "home" },
  { label: "About",    to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills",   to: "skills" },
  { label: "Contact",  to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050b18]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="font-display font-bold text-xl grad-text tracking-wide select-none">
          Saad<span className="text-cyan-400">.</span>dev
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy smooth offset={-64} duration={500}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors duration-200 group"
                activeClass="text-cyan-400"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-cyan-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          id="nav-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-6 pb-4 gap-1 bg-[#050b18]/95 backdrop-blur-xl border-b border-cyan-500/10">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy smooth offset={-64} duration={500}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg cursor-pointer transition-all duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
