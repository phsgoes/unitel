# Solution page content (SSOT)

Typed marketing copy for each `/solucoes/*` page lives here as the **single source of truth**.

Astro pages under `src/pages/solucoes/` should import from these modules instead of hardcoding headlines, FAQs, CTAs, or section lists.

## Modules

| File | Export |
| --- | --- |
| `telefonia-ip.ts` | `telefoniaIpPage` |
| `call-center.ts` | `callCenterPage` |
| `comuniq.ts` | `comuniqPage` |
| `ouvidoria-digital.ts` | `ouvidoriaDigitalPage` |
| `redes-estruturadas.ts` | `redesEstruturadasPage` |
| `index.ts` | Re-exports + `solutions` registry |

Shared helpers used by these pages:

- `src/data/portfolio-clients.ts` — client name list for portfolio sections
- `src/data/why-unitel.ts` — default “Por que a Unitel?” cards (override per page when copy differs)
- `src/types/solucao.ts` — `SolutionPage` and section interfaces

## Editing copy

1. Change text in the relevant `*.ts` module (not in the `.astro` page once wired).
2. Keep strings verbatim for marketing accuracy; do not paraphrase SEO/meta fields casually.
3. Import hero images from `@/assets/images/...` inside the data module so Astro can optimize them.
