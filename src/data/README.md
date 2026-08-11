# Data

Typed single sources of truth for site identity, navigation, and page content.

| Module | Purpose |
| --- | --- |
| `site.ts` | Canonical URL, contact, address, OG defaults |
| `nav.ts` | Header/Footer nav + solutions menu |
| `portfolio-clients.ts` | Shared client name list for solution pages |
| `why-unitel.ts` | Default “Por que a Unitel?” cards |
| `solucoes/*.ts` | Full marketing content per solution page |

Pages and SEO builders should import from here instead of hardcoding copy or URLs.
