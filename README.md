# Hekima Voice

A single-page React + Tailwind site for Hekima Voice, a community advocacy
organization. Recreates the provided design: lavender/cream hero, dark
"Programs" and "Contact" sections, impact stats, and a working contact form
(local state only, no backend wired up).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, which you can deploy to
Netlify, Vercel, GitHub Pages, or any static host.

## Project structure

```
hekima-voice/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Top-level app wrapper
    ├── HekimaVoiceSite.jsx # All page sections (Header, Hero, ...)
    └── index.css           # Tailwind + fonts
```

## Customizing

- **Colors, type, spacing**: all design tokens live at the top of
  `HekimaVoiceSite.jsx` in the `COLORS` object — change once, updates
  everywhere.
- **Copy**: section text is inline in each component function
  (`Hero`, `WhoWeAre`, `WhatWeDo`, `Programs`, `Impact`, `Support`,
  `Contact`) — easy to find and edit.
- **Images**: the "Photo of the team..." placeholder box in `WhoWeAre` is
  ready for a real `<img src="..." />` — swap it in and drop your image in
  `src/assets/` or `public/`.
- **Contact form**: currently just sets local state and shows "Message
  sent" — wire the `handleSubmit` function in `Contact` up to your email
  service (Formspree, Resend, your own API route, etc.) when ready.
- **Fonts**: Lora (serif headlines) + Inter (body) are loaded via Google
  Fonts in `src/index.css`. Swap the `@import` URL and `.font-serif` rule
  to use different typefaces.

## Responsive behavior

- Nav collapses into a hamburger menu below the `lg` breakpoint (1024px).
- Section grids (Who We Are, What We Do, Programs, Impact, Support,
  Contact) stack to a single column on mobile and tablet.
- Hero headline uses `clamp()` for fluid type sizing across all viewports.
