# SEO

Centralized metadata and Schema.org builders.

| Module | Purpose |
| --- | --- |
| `organization.ts` | Organization JSON-LD from `src/data/site.ts` |
| `website.ts` | WebSite JSON-LD from `src/data/site.ts` |
| `breadcrumb.ts` | BreadcrumbList factory |
| `builders/servicePage.ts` | WebPage + Service for solution pages |
| `builders/faqPage.ts` | FAQPage from FAQ UI data |
| `JsonLdSchemas.astro` | Emits `<script type="application/ld+json">` |
| `solucoes/*.ts` | Legacy per-page graphs (prefer builders + page data) |

Canonical site URL and contact details live in `src/data/site.ts` — do not hardcode hosts in new schemas.
