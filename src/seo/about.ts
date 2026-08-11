import { absoluteUrl, organizationId, websiteId } from '@/data/site'

const aboutUrl = absoluteUrl('/sobre')

export default {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': aboutUrl,
      url: aboutUrl,
      name: 'Sobre a Unitel',
      description: 'Conheça a história, missão, visão e valores da Unitel.',
      inLanguage: 'pt-BR',
      isPartOf: {
        '@id': websiteId(),
      },
      about: {
        '@id': organizationId(),
      },
      breadcrumb: {
        '@id': `${aboutUrl}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${aboutUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: absoluteUrl('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sobre',
          item: aboutUrl,
        },
      ],
    },
  ],
}
