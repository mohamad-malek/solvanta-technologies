# Solvanta Technologies — Company Website

A static, single-page marketing website for **Solvanta Technologies**, a software development and technology solutions company
(*Turning Challenges into Solutions.*). MediBook, SmartBiz ERP and OpsGuard on the site are concept projects,
not client engagements.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · lucide-react. No backend, database, or CMS.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check:

```bash
npm run lint
npm run build
npm run start      # http://localhost:3000
```

## Project structure

```
src/
  app/            layout, page, global styles, favicon (icon.png, apple-icon.png)
  components/     Navbar, Hero, About, Services, Projects, Technologies, Process, Team, Contact, Footer
    ui/           Logo, Reveal (scroll animation), SectionHeading
    visuals/      SVG/CSS illustrations (hero dashboard, 3 project mock dashboards)
  lib/data.ts     All site content (services, projects, tech, process, team)
public/
  solvanta-logo.png   original logo (used on the About section)
  solvanta-mark.png   transparent S monogram derived from the logo (used in nav/footer)
scripts/make-brand-assets.mjs   regenerates the mark + favicons from solvanta-logo.png
```

### Replacing the logo
Drop a new `public/solvanta-logo.png`, adjust the crop box in `scripts/make-brand-assets.mjs` if needed,
then run `node scripts/make-brand-assets.mjs` to regenerate the monogram and favicons.

## Deploy

Push to GitHub and import the repository in Vercel. No environment variables are required
(optionally set `NEXT_PUBLIC_SITE_URL` when you add a custom domain; see `.env.example`).

`scripts/make-brand-assets.mjs` is a one-off helper that uses `sharp` (installed with Next.js); it is not part of the build.
