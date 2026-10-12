import React, { useEffect, useState } from "react";
import { Saad_Ismail_cv } from "../assets";
import { useActiveSection, useScrollProgress, useTheme } from "../effects";
import { DownloadIcon, MoonIcon, SunIcon } from "../components/Icons";

const NAV_LINKS = [
  { label: "Experience", to: "experience" },
  { label: "Work", to: "work" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];
const SECTION_IDS = NAV_LINKS.map((l) => l.to);

const ThemeToggle = ({ dark, toggle }: { dark: boolean; toggle: () => void }) => (
  <button
    type="button"
    onClick={toggle}
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/70 text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
  >
    {dark ? <SunIcon className="h-[18px] w-[18px]" /> : <MoonIcon className="h-[18px] w-[18px]" />}
  </button>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();
  const { dark, toggle } = useTheme();

  useEffect(() => setScrolled(progress > 0.005), [progress]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-canvas/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>

      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-3">
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent via-accent-violet to-accent-cyan text-xs font-bold text-white shadow-lg shadow-accent/30">
            SI
          </span>
          <span className="text-[15px]">Saad Ismail</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = active === to;
            return (
              <li key={to}>
                <a
                  href={`#${to}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-cyan transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={Saad_Ismail_cv} target="_blank" rel="noopener noreferrer" className="btn-secondary hidden py-2 md:inline-flex">
            <DownloadIcon /> CV
          </a>
          <ThemeToggle dark={dark} toggle={toggle} />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/70 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((p) => !p)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <ul className="container-page flex flex-col gap-1 pb-4 pt-1">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <a
                  href={`#${to}`}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-medium ${active === to ? "bg-accent-soft text-accent" : "text-ink hover:bg-surface"}`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={Saad_Ismail_cv} tabIndex={open ? 0 : -1} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <DownloadIcon /> Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll progress */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left bg-gradient-to-r from-accent via-accent-violet to-accent-cyan"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
};

export default Navbar;
