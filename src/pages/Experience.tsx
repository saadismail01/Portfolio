import React from "react";
import Section from "../components/Section";
import { CheckIcon, ExternalIcon, SparkIcon } from "../components/Icons";
import { menuify as menuifyShot } from "../../assets";
import { capitalAcademy as ca, earlierRoles, menuify as mf } from "../content";

const RoleHeader = ({ role, company, url, urlLabel, period, meta }: {
  role: string; company: string; url: string; urlLabel: string; period: string; meta?: string;
}) => (
  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
    <div>
      <h3 className="text-lg font-bold text-ink sm:text-xl">{role}</h3>
      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-ink-soft">
        <span className="font-semibold text-ink">{company}</span>
        <span aria-hidden="true" className="text-ink-muted">·</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
          {urlLabel} <ExternalIcon className="h-3.5 w-3.5" />
        </a>
      </p>
      {meta && <p className="mt-1 text-sm text-ink-muted">{meta}</p>}
    </div>
    <p className="w-fit shrink-0 rounded-full border border-accent/30 bg-accent-soft/60 px-3 py-1 font-mono text-[11px] font-medium text-accent">
      {period}
    </p>
  </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">{children}</h4>
);

const Bullet = ({ children, ai = false }: { children: React.ReactNode; ai?: boolean }) => (
  <li className="flex gap-3 leading-relaxed text-ink-soft">
    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${ai ? "bg-gradient-to-br from-accent to-accent-violet text-white" : "bg-accent-soft text-accent"}`}>
      {ai ? <SparkIcon className="h-3 w-3" /> : <CheckIcon className="h-3 w-3" />}
    </span>
    <span>{children}</span>
  </li>
);

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title={<>Where technology meets <span className="text-gradient">business needs</span></>}
    intro="Two current roles: platform operations at a digital education company, and building a digital product as a co-founder."
  >
    <div className="space-y-6 sm:space-y-8">
      {/* Capital Academy */}
      <article className="card card-hover spotlight reveal p-5 sm:p-8">
        <RoleHeader role={ca.role} company={ca.company} url={ca.url} urlLabel={ca.urlLabel} period={ca.period} meta={ca.location} />
        <p className="mt-5 max-w-prose leading-relaxed text-ink-soft">{ca.description}</p>

        <div className="mt-6">
          <SubHeading>{ca.areasLabel}</SubHeading>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ca.areas.map((a) => <li key={a} className="chip">{a}</li>)}
          </ul>
        </div>

        <div className="mt-7">
          <SubHeading>Responsibilities</SubHeading>
          <ul className="mt-4 grid grid-cols-1 gap-3.5 lg:grid-cols-2 lg:gap-x-8">
            {ca.responsibilities.map((r, i) => (
              <Bullet key={r} ai={i === ca.responsibilities.length - 1}>{r}</Bullet>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-line pt-5">
          <span className="mr-1 text-sm font-semibold text-ink">Technology &amp; workflow</span>
          {ca.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </article>

      {/* Menuify */}
      <article className="card card-hover spotlight reveal overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="p-5 sm:p-8">
            <RoleHeader role={mf.role} company={mf.company} url={mf.url} urlLabel={mf.urlLabel} period={mf.period} />
            <p className="mt-5 leading-relaxed text-ink-soft">{mf.problem}</p>

            <div className="mt-6">
              <SubHeading>Product</SubHeading>
              <ul className="mt-3 flex flex-wrap gap-2">
                {mf.features.map((f) => <li key={f} className="chip">{f}</li>)}
              </ul>
            </div>

            <div className="mt-7">
              <SubHeading>My contribution</SubHeading>
              <ul className="mt-4 space-y-2.5">
                {mf.contribution.map((c) => <Bullet key={c}>{c}</Bullet>)}
              </ul>
            </div>
          </div>

          <div className="relative flex items-center border-t border-line bg-gradient-to-br from-accent/10 via-accent-violet/10 to-accent-cyan/10 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <figure className="w-full">
              <a
                href={mf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-accent/15 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 border-b border-line px-3 py-2">
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-line" /><span className="h-2 w-2 rounded-full bg-line" /><span className="h-2 w-2 rounded-full bg-line" />
                  </span>
                  <span className="flex-1 truncate rounded-md bg-canvas px-2 py-0.5 text-center font-mono text-[10px] text-ink-muted">menuify-qr.com</span>
                </div>
                <img
                  src={menuifyShot}
                  width={960}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  alt="Menuify homepage showing the Digital Menu and Online Store plans"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </a>
              <figcaption className="mt-3 text-center text-xs text-ink-muted">Live product homepage</figcaption>
            </figure>
          </div>
        </div>

        <p className="border-t border-line bg-accent-soft/40 px-5 py-4 text-sm leading-relaxed text-ink-soft sm:px-8">
          <span className="font-semibold text-ink">Why it matters: </span>
          {mf.why}
        </p>
      </article>

      {/* Earlier roles */}
      <div>
        <h3 className="reveal mb-3 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">Earlier experience</h3>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {earlierRoles.map(({ role, org, period }, i) => (
            <li key={role} className="card card-hover spotlight reveal p-4" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-ink">{role}</p>
                <span className="shrink-0 font-mono text-[11px] text-ink-muted">{period}</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{org}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Experience;
