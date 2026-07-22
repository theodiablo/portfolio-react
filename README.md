# theo.camboulive.solutions

Personal portfolio — Théo Camboulive. Engineering manager & AI builder.

A small, fast, static single-page site. Same design system (dark slate ·
orange-500 · Archivo) as the [Running Coach](https://run.camboulive.solutions)
app, so the portfolio and its flagship project read as one brand.

## Stack

- **Vite 7 + React 19 + TypeScript**
- **Tailwind CSS v4** (CSS-first, no config file)
- Self-hosted **Archivo** (`@fontsource-variable/archivo`)
- `lucide-react` icons
- No SSR — ships as static assets to S3/CloudFront

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck + production build to dist/
npm run preview    # serve the built dist/
npm run typecheck  # types only
```

## Content

All copy lives in typed data so updates are one-line edits, not component surgery:

- `src/content/data.ts` — links, highlight stats, experience timeline, earlier work
- `src/i18n/strings.ts` — every UI/section string in **English + Spanish**
- Language toggle is in the header; `en` / `es`, auto-detected from the browser

To refresh the CV, replace `public/cv/theo-camboulive-cv.pdf`.
To refresh the social card, re-render `public/og-image.png` (template in git history).

## Deploy

Push to `main` → `.github/workflows/deploy-s3.yml` builds and syncs `dist/`
to the `theo.camboulive.solutions` S3 bucket, then invalidates CloudFront
(`E2JKARQJ6N6ORJ`). Needs `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` repo
secrets (already configured from the previous Gatsby site).

### Old `/cv` route

The previous site had an HTML `/cv` page. The new site serves the PDF directly.
Add a CloudFront redirect (or an S3 routing rule) from `/cv` →
`/cv/theo-camboulive-cv.pdf` so any existing links don't 404.
