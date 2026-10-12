import React from "react";
import Section from "../components/Section";
import ProjectVisual from "../components/ProjectVisual";
import { ExternalIcon, GitHubIcon } from "../components/Icons";
import { profile, work } from "../content";

const Projects = () => (
  <Section
    id="work"
    eyebrow="Selected work"
    title={<>Earlier <span className="text-gradient">development work</span></>}
    intro="Frontend projects from my development background — the foundation for how I review and coordinate web implementations today."
  >
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {work.map(({ title, context, description, tags, url, urlLabel, visual, address }, i) => (
        <li
          key={title}
          className="card card-hover spotlight reveal group flex flex-col overflow-hidden"
          style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
        >
          <ProjectVisual visual={visual} address={address} title={title} />

          <div className="flex flex-1 flex-col p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{context}</p>
            <h3 className="mt-1.5 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
              <ul className="flex flex-wrap gap-1.5">
                {tags.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-sm">
                  {urlLabel} <ExternalIcon className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="font-mono text-[11px] text-ink-muted">Not public</span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>

    <p className="reveal mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
      Client and company systems are not publicly accessible.
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
        <GitHubIcon className="h-4 w-4" /> More on GitHub
      </a>
    </p>
  </Section>
);

export default Projects;
