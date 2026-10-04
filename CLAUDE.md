# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A one-page German-language marketing site for Code Schmiede GmbH, built with Next.js 14 (App Router) and statically exported to GitHub Pages under the custom domain in `CNAME` (code-schmiede.ch). There is no backend and no test setup.

## Commands

```bash
npm run dev     # dev server on :3000
npm run build   # static export -> out/
npm run lint    # next lint (eslint-config-next)
npm run deploy  # build + publish to the gh-pages branch (see below)
```

No test framework is configured — don't invent test commands.

## Deployment

`next.config.mjs` sets `output: 'export'`, so `next build` emits a fully static `out/`. The `deploy` script then:

1. adds `out/.nojekyll` and copies `CNAME` into `out/`,
2. stages `out/` in `%TEMP%\gh-pages-temp`,
3. `git checkout gh-pages && git rm -rf . && git clean -fxd`, copies the build in, commits, pushes, and returns to `main`.

Two things to know before running it:

- It is written in Windows `cmd` syntax (`type nul`, `copy`, `xcopy`) — it works via npm on Windows but not from bash/PowerShell directly.
- Step 3's `git clean -fxd` deletes **every** untracked and ignored file in the working tree, including `node_modules/` and any local scratch files. Commit or stash first, and expect to reinstall dependencies afterwards.

## Architecture

The homepage is a composition of section components, not one file:

- `src/app/page.tsx` — server component that stacks `Hero → Services → Projects → WhyUs → Contact` between `Navigation` and `Footer`.
- `src/content/landing.ts` — **all marketing copy** (services, projects, reasons, contact details, nav items). Change wording here, not in JSX.
- `src/components/Section.tsx` — layout primitive every section uses: `id`, eyebrow/title/lead header (eyebrow carries a small hex glyph), consistent `py`/`max-w-content`, and an optional `backdrop` slot for decoration rendered absolutely behind the content (the section clips it with `overflow-hidden`). There is **no dark variant anymore** — the design deliberately avoids dark backgrounds; `WhyUs` and `Footer` used to be anthracite and are now light.
- `src/components/Card.tsx` — the white card surface used by Services, Projects and Contact. `interactive` adds the hover lift and the glowing orange top edge.
- `src/components/Reveal.tsx` — the single scroll-in animation wrapper (framer-motion `whileInView`, respects `prefers-reduced-motion`). Use it instead of ad-hoc `motion.div`s. Under reduced motion it still renders a `motion.div` with an animate target and `duration: 0`: the static HTML already contains `opacity: 0`, so swapping in a plain element (or dropping `animate`, as `Hero`'s `fadeIn` once did) leaves content permanently invisible.
- `src/components/HeroMockup.tsx` — the hero visual: an abstract app window built from markup and SVG, no image file.
- `src/components/Navigation.tsx` — client component. Menu entries are hash anchors defined in `landing.ts`; it prefixes them with `/` when `usePathname()` isn't `/`, so the section ids passed to `Section` and the `navItems` hrefs must stay in sync. The mobile panel is a plain CSS `max-height`/`opacity` transition — deliberately not `AnimatePresence`.
- **Visual system** ("Minimalist Swiss Tech"): off-white space, restrained red-orange accents, a recurring hexagon/"C" motif and fine data lines. All decorative pieces are inline SVG, `aria-hidden`, and placed via `className`:
  - `HexMark.tsx` — the logo mark: pointy-top hexagon open on the right (a "C") with an orange core. Used by `Wordmark` and at small size in the section eyebrows. Same geometry as `public/logo.svg`.
  - `ForgedHex.tsx` — the large bevelled 3D hexagon frame (depth from per-face shading, no perspective). `open` drops the right flank to make it a "C"; `glow` picks which inner edges glow orange. Used in Hero, WhyUs, Footer.
  - `DataLines.tsx` — fanned bundle of thin curves sweeping bottom-left → top-right, faded out to the right; `flip` mirrors it. Two accent lines animate via the `.data-flow` class in `globals.css` (stopped by the reduced-motion rule). Used in Hero, Projects, Contact.
  Keep the accent sparse and the backgrounds light; no neon, dark sections, blue glows or heavy 3D.
- `src/components/LegalPage.tsx` — shared shell for `/impressum` and `/legal`. It styles the legal text through child selectors (`[&_h2]:…`), so those pages hold near-unformatted markup. Their content is the company's real registered address, CHE number and DSG text — edit wording only when asked.
- `src/components/DevIllustration.tsx` — the old hand-traced SVG illustration. **No longer imported anywhere**; kept only in case the artwork is wanted again.

Constraints that follow from the static export: no route handlers, no server-side rendering at request time, and `images.unoptimized: true` (use `next/image` with explicit `width`/`height` or `fill` + `sizes`). The contact form posts straight to `api.web3forms.com` with a public access key inlined in the markup — that's the only "backend".

## Conventions

- Site copy is German; keep new user-facing text German and match the existing formal *Sie* tone. Positioning: technology partner for Swiss SMEs, benefit before technology, no startup hype.
- Tailwind only, no CSS modules. The palette lives in `tailwind.config.ts`: `anthracite` `#1C1C1C`, `ember` `#E2571E` (red-orange accent; `ember-600` for small text), `sand` `#F7F7F4` (off-white), `silver` for lines, plus `ink.muted`/`ink.subtle` for text. Typeface is Manrope. Base background and the reduced-motion/focus rules are in `src/app/globals.css`.
- `@/*` maps to `src/*`.
- Assets live in `public/` and are referenced by absolute path; `basePath` is empty because the site is served from a custom domain apex. `public/logo.svg` is the master of the hex-C mark; the favicons, touch/Android icons, `mstile-150x150.png` and `safari-pinned-tab.svg` are all rendered from it — regenerate them if the mark changes, there is no build step for that.
- `npm run lint` cannot run: there is no ESLint config in the repo, so `next lint` drops into its interactive setup prompt. `next build` type-checks regardless.
- `docker-compose.yml` (jekyll-serve) is a leftover from the site's pre-Next.js incarnation and is unused.
