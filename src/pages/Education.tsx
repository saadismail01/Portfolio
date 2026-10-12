import React from "react";
import Section from "../components/Section";
import { development, education } from "../content";

const Education = () => (
  <Section id="education" eyebrow="Education & development" title={<>Background and <span className="text-gradient">current direction</span></>}>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      <article className="card card-hover spotlight reveal p-5 sm:p-7">
        <p className="w-fit rounded-full border border-accent/30 bg-accent-soft/60 px-3 py-1 font-mono text-[11px] text-accent">{education.period}</p>
        <h3 className="mt-4 text-lg font-bold text-ink">{education.degree}</h3>
        <p className="mt-1 text-sm text-ink-soft">{education.school}</p>
        <p className="mt-4 font-mono text-xs text-ink-muted">{education.note}</p>
      </article>

      <article className="card card-hover spotlight reveal p-5 sm:p-7" style={{ "--d": "100ms" } as React.CSSProperties}>
        <p className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-500" /> Currently developing
        </p>
        <h3 className="mt-4 text-lg font-bold text-ink">Data engineering fundamentals</h3>
        <p className="mt-1 text-sm text-ink-muted">{development.intro}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {development.items.map((i) => <li key={i} className="chip">{i}</li>)}
        </ul>
      </article>
    </div>
  </Section>
);

export default Education;
