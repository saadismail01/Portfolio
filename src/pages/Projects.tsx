import React from "react";
import Section from "../components/Section";
import ProjectVisual from "../components/ProjectVisual";
import { CheckIcon, ExternalIcon, GitHubIcon } from "../components/Icons";
import { caseStudies, profile, work } from "../content";

const Label = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <h4 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
    <span className="text-accent">{String(n).padStart(2, "0")}</span> {children}
  </h4>
);

const Projects = () => (
  <Section
    id="work"
    eyebrow="Case studies"
    title={<>Products I help <span className="text-gradient">deliver</span></>}
    intro="Two products I work on today: the problem, my role and what shipped."
  >
    <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
      {caseStudies.map(({ title, context, url, urlLabel, visual, address, problem, role, shipped }, i) => (
        <li
          key={title}
          className="card card-hover spotlight reveal group flex flex-col overflow-hidden"
          style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
        >
          <ProjectVisual visual={visual} address={address} title={title} />

          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{context}</p>
            <h3 className="mt-1.5 text-xl font-bold text-ink">{title}</h3>

            <div className="mt-5 space-y-5">
              <div>
                <Label n={1}>Problem</Label>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem}</p>
              </div>
              <div>
                <Label n={2}>My role</Label>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{role}</p>
              </div>
              <div>
                <Label n={3}>What shipped</Label>
                <ul className="mt-2.5 space-y-1.5">
                  {shipped.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a href={url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-sm">
                {urlLabel} <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>

    {/* Earlier frontend projects: compact and de-emphasised */}
    <div className="reveal mt-10">
      <h3 className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">Earlier development work</h3>
      <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {work.map(({ title, context, description, tags, url, urlLabel }) => (
          <li key={title} className="flex flex-col rounded-xl border border-line bg-surface/50 p-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-semibold text-ink">{title}</p>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="link inline-flex shrink-0 items-center gap-1 text-xs">
                  {urlLabel} <ExternalIcon className="h-3 w-3" />
                </a>
              ) : (
                <span className="shrink-0 font-mono text-[10px] text-ink-muted">Not public</span>
              )}
            </div>
            <p className="mt-0.5 text-xs text-ink-muted">{context}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">{description}</p>
            <p className="mt-auto pt-2 font-mono text-[10px] text-ink-muted">{tags.join(" · ")}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
        Company systems are not publicly accessible.
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
          <GitHubIcon className="h-3.5 w-3.5" /> More on GitHub
        </a>
      </p>
    </div>
  </Section>
);

export default Projects;
