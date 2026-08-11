import { absoluteUrl, site } from '@/data/site'

export type BreadcrumbListItem = {
  name: string
  url: string
}

/** Builds a single BreadcrumbList schema from trail items (Home is prepended). */
export function breadcrumbGenerator(tracking: BreadcrumbListItem[]) {
  const initialItem = {
    '@type': 'ListItem',
    position: 1,
    name: 'Início',
    item: absoluteUrl('/'),
  }

  const items = tracking.map((item: BreadcrumbListItem, index: number) => ({
    '@type': 'ListItem',
    position: index + 2,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${site.url}/#breadcrumb`,
    itemListElement: [initialItem, ...items],
  }
}
