import { organizationId, site, websiteId } from '@/data/site'

export default {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId(),
  url: `${site.url}/`,
  name: site.legalName,
  alternateName: site.name,
  publisher: {
    '@id': organizationId(),
  },
  inLanguage: 'pt-BR',
}
