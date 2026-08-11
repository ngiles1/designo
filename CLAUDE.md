# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Next.js, with Turbopack/webpack per Next 16 defaults)
- `npm run build` — production build; also runs Next's static export (see `output: 'export'` below)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript rules)

There is no test suite configured in this repo (no Jest/Vitest/Playwright, no `test` script).

## Architecture

**Stack**: Next.js 16.3.0 (App Router) + React 19.2.8 + TypeScript + Tailwind CSS v4. React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).

**Static export**: `next.config.ts` sets `output: 'export'`. This site is built as static HTML with no server runtime — avoid introducing features that require a Node server (API routes, ISR, the default Next Image Optimization server, middleware that needs a server, etc.).

**Routing**: standard App Router under `src/app/`. Each folder under `src/app/` is a flat top-level route (`/about`, `/contact`, `/locations`, `/web-design`, `/app-design`, `/graphic-design`) — no route groups, dynamic segments, or nesting yet. `src/app/_components/` is a private folder (leading underscore opts it out of routing) holding shared UI: `app-header.tsx`, `app-footer.tsx`, and reusable pieces `big-link.tsx` (image/title/link promo card) and `tri-item.tsx` (icon/title/description block). Import via the `@/*` → `./src/*` path alias, e.g. `@/app/_components/app-header`.

**Project state**: only `src/app/page.tsx` (home) is fully built out (hero, promo grid, feature section, CTA banner). The other routes are still stub pages (`<div>page name</div>`), and `app-header.tsx`'s mobile menu / `app-footer.tsx` are unfinished placeholders — expect to be building these out rather than treating the current state as a finished reference implementation.

**Styling**: Tailwind v4 using the CSS-first config (`@theme` in `src/app/globals.css`, no `tailwind.config.js`). Custom design tokens are defined there as `--color-*` variables (`peach`, `light-peach`, `black`, `dark-grey`, `light-grey`) and used as Tailwind utilities (`bg-peach`, `text-dark-grey`, etc.). No CSS Modules or styled-components — styling is inline Tailwind utility classes, including arbitrary values (`text-[3rem]`, `tracking-[2px]`) where the design needs a value outside the default scale.

**Fonts**: self-hosted via raw `@font-face` rules in `globals.css` (Jost, regular/500 weights, woff2 files in `public/assets/fonts/`) — not `next/font`. Don't assume `next/font` is in use when working on typography.

**Assets** (`public/assets/`): organized by section, then by breakpoint — `public/assets/<section>/{mobile,tablet,desktop}/`, where `<section>` mirrors a route name (`home`, `about`, `contact`, `locations`, `web-design`, `app-design`, `graphic-design`) plus a `shared/` folder for cross-page assets (logo, social icons, background patterns). Breakpoint coverage is uneven — sections still in stub form (e.g. `web-design`, `app-design`, `graphic-design`) currently only have `desktop/` assets.
