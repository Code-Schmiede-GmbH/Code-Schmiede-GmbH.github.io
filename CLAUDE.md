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
- `src/components/Section.tsx` — layout primitive every section uses: `id`, eyebrow/title/lead header, consistent `py`/`max-w-content`, and a `tone="dark"` variant.
- `src/components/Reveal.tsx` — the single scroll-in animation wrapper (framer-motion `whileInView`, respects `prefers-reduced-motion`). Use it instead of ad-hoc `motion.div`s.
- `src/components/HeroMockup.tsx` — the hero visual: an abstract app window built from markup and SVG, no image file.
- `src/components/Navigation.tsx` — client component. Menu entries are hash anchors defined in `landing.ts`; it prefixes them with `/` when `usePathname()` isn't `/`, so the section ids passed to `Section` and the `navItems` hrefs must stay in sync. The mobile panel is a plain CSS `max-height`/`opacity` transition — deliberately not `AnimatePresence`.
- `src/components/LegalPage.tsx` — shared shell for `/impressum` and `/legal`. It styles the legal text through child selectors (`[&_h2]:…`), so those pages hold near-unformatted markup. Their content is the company's real registered address, CHE number and DSG text — edit wording only when asked.
- `src/components/DevIllustration.tsx` — the old hand-traced SVG illustration. **No longer imported anywhere**; kept only in case the artwork is wanted again.

Constraints that follow from the static export: no route handlers, no server-side rendering at request time, and `images.unoptimized: true` (use `next/image` with explicit `width`/`height` or `fill` + `sizes`). The contact form posts straight to `api.web3forms.com` with a public access key inlined in the markup — that's the only "backend".

## Conventions

- Site copy is German; keep new user-facing text German and match the existing formal *Sie* tone. Positioning: technology partner for Swiss SMEs, benefit before technology, no startup hype.
- Tailwind only, no CSS modules. The palette lives in `tailwind.config.ts`: `anthracite` `#1C1C1C`, `copper` `#B87333`, `sand` `#F5F5F0`, plus `ink.muted`/`ink.subtle` for text. Typeface is Manrope. Base background and the reduced-motion/focus rules are in `src/app/globals.css`.
- `@/*` maps to `src/*`.
- Assets live in `public/` and are referenced by absolute path; `basePath` is empty because the site is served from a custom domain apex. Most of the older PNG/SVG assets (`flags.png`, `idea.png`, `cloud.svg`, `logo-*.png`, …) are unreferenced since the redesign — the favicons still are.
- `npm run lint` cannot run: there is no ESLint config in the repo, so `next lint` drops into its interactive setup prompt. `next build` type-checks regardless.
- `docker-compose.yml` (jekyll-serve) is a leftover from the site's pre-Next.js incarnation and is unused.
