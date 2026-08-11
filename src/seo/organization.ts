import { absoluteUrl, organizationId, site } from '@/data/site'

export default {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId(),
  name: site.name,
  url: site.url,
  logo: absoluteUrl(site.logoPath),
  image: absoluteUrl(site.ogImagePath),
  description: site.defaultDescription,
  telephone: site.telephone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    postalCode: site.address.postalCode,
    addressCountry: site.address.addressCountry,
  },
  email: site.email,
  foundingDate: site.foundingDate,
  foundingLocation: {
    '@type': 'Place',
    name: 'Vitória da Conquista, Bahia, Brasil',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  knowsAbout: [...site.knowsAbout],
  slogan: site.slogan,
  sameAs: [...site.sameAs],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: site.telephone,
      email: site.email,
      contactType: 'customer support',
      areaServed: 'BR',
      availableLanguage: 'pt-BR',
    },
    {
      '@type': 'ContactPoint',
      telephone: site.salesTelephone,
      email: site.salesEmail,
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'pt-BR',
    },
  ],
}
