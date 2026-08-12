# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Links

- Solution URL: _not yet submitted_
- Live Site URL: _not yet deployed_

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Next.js](https://nextjs.org/) (App Router) - React framework, built as a static export (`output: 'export'`), no server runtime
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) - CSS-first `@theme` config for design tokens (no `tailwind.config.js`)
- Self-hosted fonts via raw `@font-face` (Jost)
- [Playwright](https://playwright.dev/) - end-to-end navigation tests

### What I learned

Every route (`/`, `/about`, `/contact`, `/locations`, `/web-design`, `/app-design`, `/graphic-design`) shares a small set of reusable pieces under `src/app/_components/` — `big-link`, `tri-item`, `cta-banner`, `feature-block`, `link-button`, `location-card`, `project-card` — rather than each page rolling its own markup. Keeping these generic early on made it straightforward to build out later pages (About, Contact, Locations, the three service pages) by composing existing components instead of duplicating layout code.

A page-transition wrapper (`page-transition.tsx`) adds a fade-to-white effect on navigation between routes, layered on top of Next's App Router without needing a custom server.

### Continued development

- Wire up the Leaflet JS map on the Locations page (bonus feature)
- Add client-side validation to the Contact form (empty-field and email-format errors)
- Fill in remaining responsive assets for sections that currently only have desktop imagery

## Author

- N Giles
