import React from "react";
import { cardBank } from "../../assets";

export type Visual = "dashboard" | "website" | "cardBank";

const Bar = ({ className = "" }: { className?: string }) => <span className={`block rounded bg-ink/10 ${className}`} />;

/** Stylised illustration of a management-system dashboard (the real systems are not public). */
const DashboardMock = () => (
  <div className="flex h-full gap-2 p-3">
    <div className="flex w-1/5 flex-col gap-1.5 rounded-lg bg-ink/[0.04] p-2">
      <span className="mb-1 block h-2.5 w-2/3 rounded bg-gradient-to-r from-accent to-accent-violet" />
      {Array.from({ length: 5 }).map((_, i) => <Bar key={i} className={`h-1.5 ${i === 1 ? "w-full bg-accent/40" : "w-4/5"}`} />)}
    </div>
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        {["from-accent", "from-accent-violet", "from-accent-cyan"].map((c) => (
          <div key={c} className="rounded-lg bg-ink/[0.04] p-2">
            <Bar className="h-1.5 w-1/2" />
            <span className={`mt-1.5 block h-2.5 w-3/4 rounded bg-gradient-to-r ${c} to-transparent`} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-ink/[0.04] p-2">
        {[40, 65, 50, 80, 58, 92, 70, 85].map((h, i) => (
          <span
            key={i}
            className="project-bar flex-1 rounded-t bg-gradient-to-t from-accent/70 to-accent-cyan/70"
            style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
          />
        ))}
      </div>
      <div className="space-y-1 rounded-lg bg-ink/[0.04] p-2">
        <Bar className="h-1.5 w-full" /><Bar className="h-1.5 w-5/6" />
      </div>
    </div>
  </div>
);

/** Stylised illustration of a marketing website layout. */
const WebsiteMock = () => (
  <div className="flex h-full flex-col p-3">
    <div className="flex items-center justify-between">
      <span className="block h-2.5 w-10 rounded bg-amber-400/80" />
      <div className="flex gap-1.5">{Array.from({ length: 4 }).map((_, i) => <Bar key={i} className="h-1.5 w-6" />)}</div>
    </div>
    <div className="mt-3 grid flex-1 grid-cols-2 items-center gap-3">
      <div className="space-y-2">
        <span className="block h-3 w-full rounded bg-ink/20" />
        <span className="block h-3 w-3/4 rounded bg-ink/20" />
        <Bar className="h-1.5 w-full" /><Bar className="h-1.5 w-5/6" />
        <span className="mt-1 block h-4 w-16 rounded-md bg-gradient-to-r from-amber-400 to-orange-500" />
      </div>
      <div className="h-full min-h-[4rem] rounded-lg bg-gradient-to-br from-amber-300/50 via-orange-400/30 to-accent-violet/30" />
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2">
      {Array.from({ length: 3 }).map((_, i) => <span key={i} className="block h-6 rounded-md bg-ink/[0.05]" />)}
    </div>
  </div>
);

const ProjectVisual = ({ visual, address, title }: { visual: Visual; address: string; title: string }) => (
  <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-accent/10 via-accent-violet/5 to-accent-cyan/10 p-4 pb-0">
    <div className="overflow-hidden rounded-t-xl border border-b-0 border-line bg-surface shadow-xl shadow-accent/10 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center gap-2 border-b border-line px-3 py-1.5">
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" /><span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" /><span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        </span>
        <span className="flex-1 truncate rounded bg-canvas px-2 py-0.5 text-center font-mono text-[9px] text-ink-muted">{address}</span>
      </div>
      <div className="aspect-[16/9]">
        {visual === "cardBank" ? (
          <img src={cardBank} width={960} height={465} loading="lazy" decoding="async" alt={`${title} homepage`} className="h-full w-full object-cover object-left-top" />
        ) : visual === "dashboard" ? (
          <DashboardMock />
        ) : (
          <WebsiteMock />
        )}
      </div>
    </div>
    {visual !== "cardBank" && (
      <span className="absolute bottom-2 right-6 rounded-md border border-line bg-surface/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink-muted backdrop-blur">
        Illustration
      </span>
    )}
  </div>
);

export default ProjectVisual;
