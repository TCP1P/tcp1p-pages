# TCP1P

The TCP1P community website: a playground entry point, CTF archive, and directory of open source projects. Built with Next.js App Router and Tailwind CSS, with a static export for GitHub Pages.

## Local development

Use Node.js 20 and npm, matching the repository's GitHub Actions workflow.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Checks and build

```sh
npm run lint
npm run build
```

The build also checks TypeScript and generates the static site in `out/`. Serve that directory with a static web server to preview the production output. The existing workflow in `.github/workflows/nextjs.yml` handles GitHub Pages deployment.

## Editing content

- `src/app/page.tsx`: home page. Recent archive entries are derived from the CTF data.
- `src/app/ctfs/timeline.tsx`: event names, dates, descriptions, and challenge repository links. The archive displays entries newest first; retain the existing date format when adding entries.
- `src/app/repositories/repositories.tsx`: project descriptions and source links.
- `src/app/indonesia-ctf-2025/` and `src/app/mobile-ctf-2025/`: archived event information.
- `src/app/_components/`: shared navigation, footer, event sections, and archive components.
- `src/app/globals.css`: shared visual styles and responsive behavior.

Keep event dates and links grounded in the event's published information. When adding or changing routes, check the mobile menu, keyboard navigation, narrow screens, and static export. Use `src/app/not-found.tsx` for the App Router's 404 page.
