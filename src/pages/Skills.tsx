import React from "react";
import Section from "../components/Section";
import { SparkIcon } from "../components/Icons";
import { aiWorkflows, skills } from "../content";

const Skills = () => (
  <Section id="skills" eyebrow="Skills" title={<>Technical foundation &amp; <span className="text-gradient">AI-assisted workflows</span></>}>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      <div className="card card-hover spotlight reveal p-5 sm:p-7 lg:col-span-3">
        <h3 className="text-lg font-bold text-ink">Technical foundation</h3>
        <p className="mt-1 text-sm text-ink-muted">
          Technologies used across my studies and development work — at different depths, not all in daily use.
        </p>
        <dl className="mt-6 space-y-5">
          {skills.map(({ group, items }) => (
            <div key={group} className="grid grid-cols-1 gap-2 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
              <dt className="pt-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">{group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((i) => <li key={i} className="chip transition-colors hover:border-accent/50 hover:text-accent">{i}</li>)}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* AI panel with a gradient border */}
      <div className="reveal rounded-2xl bg-gradient-to-br from-accent via-accent-violet to-accent-cyan p-px shadow-2xl shadow-accent/20 lg:col-span-2" style={{ "--d": "120ms" } as React.CSSProperties}>
        <div className="spotlight relative h-full overflow-hidden rounded-[15px] bg-surface p-5 sm:p-7">
          <div aria-hidden="true" className="orb -right-16 -top-16 h-48 w-48 bg-accent-violet" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-violet text-white shadow-lg shadow-accent/30">
                <SparkIcon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-ink">AI-Assisted Workflows</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{aiWorkflows.intro}</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-ink-muted">Tools I work with</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {aiWorkflows.tools.map((t) => (
                <li key={t} className="rounded-lg border border-accent/30 bg-accent-soft/60 px-2.5 py-1 text-xs font-semibold text-accent">{t}</li>
              ))}
            </ul>
            <ul className="mt-5 space-y-4">
              {aiWorkflows.areas.map(({ title, text }, i) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{title}</span>
                    <span className="block text-sm leading-relaxed text-ink-muted">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Skills;
