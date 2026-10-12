import React from "react";
import { profile } from "../content";

const Footer = () => (
  <footer className="relative border-t border-line py-8">
    <div className="container-page flex flex-col gap-4 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      <div className="flex gap-5">
        <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">Email</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">GitHub</a>
        <a href="#top" className="transition-colors hover:text-accent">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
