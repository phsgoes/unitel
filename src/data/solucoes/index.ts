/**
 * Barrel for solution marketing page data and nav-friendly registry.
 *
 * Role: Re-export each SolutionPage module and expose a `solutions` summary list.
 * Not in this file: Full section copy — owned by per-slug modules in this folder.
 * Key dependencies: None
 * See also: src/data/solucoes/README.md, src/types/solucao.ts
 */

import { callCenterPage } from './call-center'
import { comuniqPage } from './comuniq'
import { ouvidoriaDigitalPage } from './ouvidoria-digital'
import { redesEstruturadasPage } from './redes-estruturadas'
import { telefoniaIpPage } from './telefonia-ip'

export { callCenterPage } from './call-center'
export { comuniqPage } from './comuniq'
export { ouvidoriaDigitalPage } from './ouvidoria-digital'
export { redesEstruturadasPage } from './redes-estruturadas'
export { telefoniaIpPage } from './telefonia-ip'

/** Nav-friendly summaries — order matches Header solutions menu. */
export const solutions = [
  {
    slug: comuniqPage.slug,
    name: comuniqPage.name,
    navDescription: comuniqPage.navDescription,
    navIcon: comuniqPage.navIcon,
    href: `/solucoes/${comuniqPage.slug}`,
  },
  {
    slug: callCenterPage.slug,
    name: callCenterPage.name,
    navDescription: callCenterPage.navDescription,
    navIcon: callCenterPage.navIcon,
    href: `/solucoes/${callCenterPage.slug}`,
  },
  {
    slug: telefoniaIpPage.slug,
    name: telefoniaIpPage.name,
    navDescription: telefoniaIpPage.navDescription,
    navIcon: telefoniaIpPage.navIcon,
    href: `/solucoes/${telefoniaIpPage.slug}`,
  },
  {
    slug: redesEstruturadasPage.slug,
    name: redesEstruturadasPage.name,
    navDescription: redesEstruturadasPage.navDescription,
    navIcon: redesEstruturadasPage.navIcon,
    href: `/solucoes/${redesEstruturadasPage.slug}`,
  },
  {
    slug: ouvidoriaDigitalPage.slug,
    name: ouvidoriaDigitalPage.name,
    navDescription: ouvidoriaDigitalPage.navDescription,
    navIcon: ouvidoriaDigitalPage.navIcon,
    href: `/solucoes/${ouvidoriaDigitalPage.slug}`,
  },
] as const

/** Full page objects in the same nav order. */
export const solutionPages = [
  comuniqPage,
  callCenterPage,
  telefoniaIpPage,
  redesEstruturadasPage,
  ouvidoriaDigitalPage,
] as const
