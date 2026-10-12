import React from "react";
import { Saad_Ismail_cv } from "../assets";
import { facts, profile } from "../content";
import { DownloadIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import WorkflowConsole from "../components/WorkflowConsole";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const Home = () => (
  <section id="top" aria-labelledby="hero-title" className="relative -mt-16 overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
    {/* Background: grid + soft light orbs */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="grid-backdrop absolute inset-0" />
      <div className="orb left-[-10%] top-[-10%] h-[28rem] w-[28rem] animate-drift bg-accent" />
      <div className="orb right-[-8%] top-[10%] h-[24rem] w-[24rem] animate-drift-slow bg-accent-violet" />
      <div className="orb bottom-[8%] left-[35%] h-[20rem] w-[20rem] animate-drift bg-accent-cyan" />
    </div>

    <div className="container-page relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
      <div className="min-w-0">
        <h1 id="hero-title" className="animate-fade-up text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl" style={delay(80)}>
          {profile.name}
        </h1>
        <p className="mt-3 animate-fade-up text-xl font-bold sm:text-3xl" style={delay(160)}>
          <span className="text-gradient">{profile.title}</span>
        </p>
        <ul className="mt-4 flex animate-fade-up flex-wrap gap-2" style={delay(240)}>
          {profile.focus.map((f) => (
            <li key={f} className="rounded-lg border border-line bg-surface/60 px-2.5 py-1 font-mono text-[11px] text-ink-soft backdrop-blur">
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-prose animate-fade-up text-base leading-relaxed text-ink-soft sm:text-[17px]" style={delay(320)}>
          {profile.summary}
        </p>

        <div className="mt-8 grid animate-fade-up grid-cols-2 gap-3 sm:flex sm:flex-wrap" style={delay(400)}>
          <a href="#contact" className="btn-primary col-span-2 py-3 sm:py-2.5">
            <MailIcon /> Contact me
          </a>
          <a href={Saad_Ismail_cv} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <DownloadIcon /> Download CV
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>

      <div className="min-w-0 animate-fade-up" style={delay(300)}>
        <WorkflowConsole />
      </div>
    </div>

    <div className="container-page relative mt-14">
      <dl className="grid animate-fade-up grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4" style={delay(500)}>
        {facts.map(({ label, value }) => (
          <div key={label} className="bg-surface/90 px-4 py-4 backdrop-blur sm:px-5">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-muted sm:text-[11px]">{label}</dt>
            <dd className="mt-1 text-[13px] font-semibold leading-snug text-ink sm:text-sm">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Home;
