# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Company website for Code Schmiede GmbH (code-schmiede.ch), a Jekyll site hosted on GitHub Pages (custom domain via `CNAME`). Pushing to `main` deploys. Site content is German (`locale: "de"` in `_config.yml`). There is no test suite or linter.

## Running locally

- `docker compose up` serves the site at http://localhost:4000 (uses the `bretfisher/jekyll-serve` image), or
- `bundle install` then `bundle exec jekyll serve`

`_config.yml` is not hot-reloaded; restart the server after changing it.

## Architecture

The site is a thin override layer on top of the remote theme `raviriley/agency-jekyll-theme` (loaded via `jekyll-remote-theme`). Most layouts, includes and SCSS partials are **not** in this repo; they come from the theme at build time. A file in this repo with the same path as a theme file overrides it (e.g. `_layouts/home.html`, `_includes/head.html`, `_includes/contact.html`, `_includes/footer.html`, `_sass/...`). To change something not present locally, copy the theme's file to the same path first.

- **Homepage**: `index.md` uses `_layouts/home.html`, which composes the one-page sections (`navheader`, `services`, `about`, `contact`). Portfolio and blog sections were removed from the homepage; the `_portfolio/` and `_blog/` collections and `_includes/blog.html` / `portfolio_grid.html` still exist but are unused.
- **Text content lives in data files, not templates**: `_data/sitetext.yml` holds all section texts per locale (`en`, `es`, `de`); edit the `de:` block (line ~326) for the live site. Templates read it as `site.data.sitetext[site.locale].<section>.<key>`. Nav entries are in `_data/navigation.yml` (`de:` block); the `section` value must match the section's `id`.
- **Styling**: `assets/css/agency.scss` (Jekyll front matter, so Liquid runs) pulls colors/header image from `_data/style.yml` and imports theme SCSS partials. `_includes/head.html` links `assets/css/agency.css` (the compiled output of that file).
- **Contact form**: `assets/js/contact_me.js` POSTs to an external Azure Function (`...azurewebsites.net/api/contact`), not a form service.
- **Standalone pages**: `impressum.md`, `legal.md` (Datenschutzerklärung), `404.html` use `layout: page`. The footer links to them by relative path (`legal`, `impressum`).
- Images are mostly served from an external image service (`image-service.azureedge.net/...`), not from `assets/img`.

## Leftovers to be aware of

- `admin/` is a Decap CMS setup whose `config.yml` still points to `papamufflon/papamufflon.github.io` and `_posts/blog`; it does not match this repo.
- `about.markdown` is unchanged Jekyll boilerplate.
