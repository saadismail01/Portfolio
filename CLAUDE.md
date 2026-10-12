# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint with `--max-warnings 0`. Note: it only lints `.js`/`.jsx` (`--ext js,jsx`), so the `.tsx` pages and components are **not** linted.

There is no test suite.

## Purpose & content rules

Professional portfolio for Saad Ismail, aimed at recruiters for IT / digital product / technology operations roles in Germany and Europe. Positioning is "IT & Digital Product Specialist", not software engineer.

- All copy lives in `src/content.ts`. Edit text there, not in components.
- Content must stay consistent with the CV (`src/assets/Saad_Ismail_CV.pdf`). Do not invent dates, metrics, user counts, clients, certifications or proficiency levels; no skill percentages. Data engineering items are presented as current learning, never as experience.
- Don't claim Saad built Capital Academy or wrote all of Menuify — the Capital Academy role is coordination/review, and Menuify is co-founded with a development partner.

## Architecture

React 18 + Vite 5 + Tailwind CSS 3, single scrolling page, no router and no runtime dependencies beyond React.

- **Entry:** `index.html` (SEO meta, Open Graph, JSON-LD `Person`, inline SVG favicon) → `src/main.jsx` → `src/App.jsx`, which stacks: Navbar, Home (hero), Experience, Projects (`#work`), Skills, Education, Contacts, Footer.
- **Sections** are in `src/pages/*.tsx` and mostly wrap `components/Section.tsx` (eyebrow + h2 + intro, `id` used as the anchor). Navigation is plain `href="#id"` anchors; `NAV_LINKS` in `Navbar.tsx` must match section ids. Smooth scrolling and the sticky-header offset (`scroll-margin-top`) are handled in `src/index.css`.
- **Icons** are inline SVG components in `components/Icons.tsx` (no icon library).
- **TypeScript without type-checking:** components are `.tsx` but there is no `tsconfig.json` and no `tsc` step; Vite just strips types.

### Two asset directories

- `assets/` at the **repo root**: project screenshots (`menuify.webp`, `card-bank.webp`), re-exported from `assets/index.js`, imported as `../../assets`. Older large `.mp4` demos and images are still in this folder but no longer imported — anything exported from `assets/index.js` gets bundled, so don't re-add the videos there.
- `src/assets/`: the CV PDF, re-exported from `src/assets/index.js`, imported as `../assets`.

### Styling, theme & motion

- **Light/dark theme:** Tailwind colours (`canvas`, `surface`, `ink`, `line`, `accent`, `accent-violet`, `accent-cyan`) map to RGB CSS variables in `src/index.css`, redefined under `.dark`. Use these tokens, never raw hex, so both themes work. `darkMode: "class"`. An inline script in `index.html` applies the saved/system theme before first paint and adds `html.js`; `useTheme` in `src/effects.ts` toggles it and persists to localStorage.
- **Motion:** `src/effects.ts` holds the hooks — scroll reveal (add class `reveal`, optional `--d` delay; only hidden when `html.js` is present), cursor spotlight (class `spotlight`), active-section nav, scroll progress. `prefers-reduced-motion` disables all of it in CSS.
- Shared component classes in `src/index.css`: `container-page`, `eyebrow`, `card`, `card-hover`, `chip`, `btn-primary`, `btn-secondary`, `link`, `text-gradient`, `grid-backdrop`, `orb`. Fonts: Inter, plus JetBrains Mono for small labels.
- Project cards use `components/ProjectVisual.tsx`: a real screenshot where one exists, otherwise a labelled "Illustration" mock (company systems aren't public).
- Headless-Chrome screenshots catch reveal transitions mid-way; add `--force-prefers-reduced-motion` to see the final layout.
