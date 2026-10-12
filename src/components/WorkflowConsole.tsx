import React, { useEffect, useState } from "react";
import { CheckIcon, SparkIcon } from "./Icons";

// Illustrates the working process described in the Experience section — not a product or metric.
const STEPS = [
  { tag: "REQ", title: "Business requirement", detail: "Clarify the need with stakeholders" },
  { tag: "AI", title: "Task breakdown", detail: "AI-assisted draft, reviewed by me", ai: true },
  { tag: "UI", title: "Design review", detail: "Figma vs. implemented React UI" },
  { tag: "QA", title: "Testing & bug tracking", detail: "Reproduction steps, coordinated fixes" },
  { tag: "OK", title: "Verified for release", detail: "Outcome checked before sign-off" },
];

const WorkflowConsole = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(STEPS.length);
      return;
    }
    const id = window.setInterval(() => setStep((s) => (s >= STEPS.length + 1 ? 0 : s + 1)), 1300);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* glow behind the panel */}
      <div aria-hidden="true" className="absolute -inset-2 rounded-[2rem] sm:-inset-4 bg-gradient-to-br from-accent/25 via-accent-violet/20 to-accent-cyan/25 blur-2xl" />

      <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface/85 shadow-2xl shadow-accent/10 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[11px] text-ink-muted">ai-assisted-workflow</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-muted" aria-hidden="true">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-500" />
            {Math.min(step + 1, STEPS.length)}/{STEPS.length}
          </span>
        </div>

        <ol className="space-y-1.5 p-3 sm:p-4">
          {STEPS.map((s, i) => {
            const done = i < step;
            const current = i === step;
            return (
              <li
                key={s.tag}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-500 ${
                  current
                    ? "border-accent/40 bg-accent-soft/70 shadow-[0_0_0_1px_rgb(var(--accent)/.15)]"
                    : "border-transparent"
                } ${done || current ? "opacity-100" : "opacity-45"}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-medium transition-colors duration-500 ${
                    done
                      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                      : s.ai
                        ? "bg-gradient-to-br from-accent to-accent-violet text-white"
                        : "bg-canvas text-ink-muted"
                  }`}
                >
                  {done ? <CheckIcon className="h-4 w-4" /> : s.ai ? <SparkIcon className="h-4 w-4" /> : s.tag}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink">{s.title}</span>
                  <span className="block truncate text-xs text-ink-muted">{s.detail}</span>
                </span>
                {current && (
                  <span className="hidden font-mono text-[10px] text-accent sm:inline">running…</span>
                )}
              </li>
            );
          })}
        </ol>

        <figcaption className="border-t border-line px-4 py-3 text-xs text-ink-muted">
          <span className="font-semibold text-ink-soft">How I work:</span> AI speeds up the steps — I review, test and verify the result.
        </figcaption>
      </figure>
    </div>
  );
};

export default WorkflowConsole;
