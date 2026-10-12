import React from "react";
import Section from "../components/Section";
import { Saad_Ismail_cv } from "../assets";
import { profile } from "../content";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "../components/Icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saad-ismail01",
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/saadismail01",
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "CV",
    value: "Download PDF",
    href: Saad_Ismail_cv,
    Icon: DownloadIcon,
    external: true,
  },
];

const Contacts = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title={
      <>
        Let&apos;s <span className="text-gradient">talk</span>
      </>
    }
    intro={profile.availability}
  >
    <div className="relative">
      <div
        aria-hidden="true"
        className="orb left-1/2 top-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 bg-accent"
      />
      <ul className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map(({ label, value, href, Icon, external }, i) => (
          <li
            key={label}
            className="reveal"
            style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
          >
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="card card-hover spotlight group flex h-full items-center gap-4 p-4 sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-violet text-white shadow-lg shadow-accent/25 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  {label}
                </span>
                <span className="block truncate text-sm font-semibold text-ink transition-colors group-hover:text-accent sm:text-base">
                  {value}
                </span>
              </span>
              <svg
                viewBox="0 0 24 24"
                className="ml-auto h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <p className="reveal mt-6 text-sm text-ink-muted">
      Now Based in {profile.location}.
    </p>
  </Section>
);

export default Contacts;
