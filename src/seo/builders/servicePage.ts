import { absoluteUrl, organizationId, site } from '@/data/site'
import type { SolutionPage } from '@/types/solucao'

/** Builds WebPage + Service JSON-LD for a solution page (no nested Organization). */
export function buildServicePageSchema(page: SolutionPage) {
  const pageUrl = absoluteUrl(page.meta.canonicalPath)
  const webpageId = `${pageUrl}#webpage`
  const serviceId = `${pageUrl}#service`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: page.meta.title,
        description: page.meta.description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${site.url}#website` },
        about: { '@id': organizationId() },
        mainEntity: { '@id': serviceId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: page.name,
        serviceType: page.serviceType,
        description: page.serviceDescription,
        provider: { '@id': organizationId() },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: page.areaServed,
        },
        url: pageUrl,
      },
    ],
  }
}
