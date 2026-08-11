# Unitel Telecom

Marketing site for Unitel Telecomunicações, built with **Astro 7.2**, **Tailwind CSS 4**, and **TypeScript**.

## Project structure

```text
src/
├── assets/           # Images and icons
├── components/
│   ├── solucoes/     # Reusable solution-page sections
│   ├── ui/           # Shared chrome (Header, Footer, FAQ, …)
│   ├── rich-text/    # Blog rich-text renderer
│   └── seo/          # Blog article schema
├── consts/           # Pagination and site title aliases
├── data/             # SSOT for site identity, nav, solution content
├── layouts/          # PageLayout, BlogLayout, BlankLayout
├── pages/            # File-based routes
├── seo/              # JSON-LD builders and organization/website schemas
├── services/         # Hygraph blog data access
├── styles/           # global.css + theme tokens (@theme)
├── types/            # Shared TypeScript types
└── utils/            # Helpers (TOC, solution page head, …)
```

### Content & SEO single source of truth

- Site URL, contact, and address: `src/data/site.ts`
- Navigation / solutions menu: `src/data/nav.ts`
- Solution page copy: `src/data/solucoes/*.ts`
- Schema factories: `src/seo/builders/*` + `src/utils/solutionPage.ts`

Do not hardcode titles, descriptions, or hosts in page files when they already exist in these modules.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at `localhost:4321` |
| `astro dev --background` | Background dev server (preferred for agents) |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview the production build |

## Stack notes

- Design tokens live in `src/styles/theme.css` (`@theme` / semantic CSS variables).
- Prefer semantic utilities (`bg-default`, `text-toned`, `text-primary`) over arbitrary hex values.
- Images for solution heroes should use AVIF/WebP with explicit dimensions; LCP images use `loading="eager"` + `fetchpriority="high"`.
- Do **not** import `astro.config.mjs` from app/runtime code (`src/consts`, pages, services). That pulls Vite plugins into the prerender graph and breaks `astro build`.
- `sharp` is required for Astro image optimization during production builds.
