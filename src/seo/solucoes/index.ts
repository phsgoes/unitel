import { absoluteUrl, organizationId, websiteId } from '@/data/site'
import { solutions } from '@/data/solucoes'

const pageUrl = absoluteUrl('/solucoes')

export default {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Soluções em Telecomunicações para Empresas | Unitel',
      description:
        'Conheça as soluções da Unitel Telecom para comunicação empresarial: ComuniQ, Ouvidoria Digital, Call Center, Telefonia IP e Redes Estruturadas em Vitória da Conquista e região.',
      inLanguage: 'pt-BR',
      isPartOf: {
        '@id': websiteId(),
      },
      about: {
        '@id': organizationId(),
      },
      mainEntity: {
        '@id': `${pageUrl}#itemlist`,
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#itemlist`,
      name: 'Soluções da Unitel Telecom',
      itemListElement: solutions.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.href),
      })),
    },
  ],
}
