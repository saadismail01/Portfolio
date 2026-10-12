import React from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, eyebrow, title, intro, className = "", children }: Props) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`relative py-16 sm:py-24 ${className}`}>
    {/* soft divider */}
    <div aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-line to-transparent" />
    <div className="container-page">
      <header className="reveal mb-10 max-w-prose sm:mb-12">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>}
      </header>
      {children}
    </div>
  </section>
);

export default Section;
