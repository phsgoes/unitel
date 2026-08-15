/**
 * Site identity — single source of truth for URLs, contact, and address.
 * SEO schemas, layouts, and UI chrome should derive from this module.
 *
 * Do not import `astro.config.mjs` from app/runtime code — that pulls Vite
 * plugins into the prerender graph and breaks `astro build`.
 */
export const site = {
  name: 'Unitel',
  legalName: 'Unitel Telecomunicações',
  /** Canonical origin (no trailing slash). */
  url: 'https://unitel-liard.vercel.app/',
  defaultTitle: 'Unitel Telecomunicações',
  defaultDescription:
    'A Unitel é uma empresa de soluções na área de tecnologia da informação voltada a telecomunicações.',
  telephone: '+557721013300',
  telephoneDisplay: '(77) 2101-3300',
  email: 'atendimento@uniteltelecom.com.br',
  salesTelephone: '+55-77-2101-3301',
  salesEmail: 'comercial@uniteltelecom.com.br',
  foundingDate: '1989',
  slogan:
    'Soluções inteligentes em telecomunicações para empresas que não podem parar.',
  /** Served from `public/` after copy from assets when needed for absolute schema URLs. */
  logoPath: '/favicon.svg',
  ogImagePath: '/og-unitel.png',
  address: {
    streetAddress: 'Praça Joaquim Correia, Centro',
    addressLocality: 'Vitória da Conquista',
    addressRegion: 'BA',
    postalCode: '45000-000',
    addressCountry: 'BR' as const,
  },
  /** Human-readable address line for UI. */
  addressDisplay: 'Praça Joaquim Correia, Centro, Vitória da Conquista',
  mapsUrl:
    'https://www.google.com/maps/place/Unitel+Telecom/@-14.8491661,-40.8396598,17z/data=!3m1!4b1!4m6!3m5!1s0x7463a4b531fcd4d:0x9a8f24ad4398e324!8m2!3d-14.8491713!4d-40.8370849!16s%2Fg%2F1tdbwz27?hl=pt-BR',
  sameAs: [
    'https://www.instagram.com/uniteltelecom_/',
    'https://www.linkedin.com/company/uniteltelecomvca',
    'https://x.com/uniteltelecom_',
  ],
  knowsAbout: [
    'Telefonia IP',
    'Comunicação Empresarial',
    'Call Center',
    'Redes Estruturadas',
    'Ouvidoria Digital',
    'Telecomunicações',
  ],
} as const

export type SiteIdentity = typeof site

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `${site.url}/`
  return `${site.url}${normalized}`
}

export function organizationId(): string {
  return `${site.url}#organization`
}

export function websiteId(): string {
  return `${site.url}#website`
}
