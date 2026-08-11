/**
 * Default “Por que a Unitel?” cards for solution marketing pages.
 *
 * Role: Shared IconItem defaults; pages may override title/text when copy differs.
 * Not in this file: Full WhyUnitelSection (badge, title, paragraphs) — owned by each solution page.
 * Key dependencies: None
 * See also: src/types/solucao.ts, src/data/solucoes/README.md
 */

import type { IconItem } from '@/types/solucao'

/** Baseline four cards from Telefonia IP / Redes Estruturadas (most common wording). */
export const defaultWhyUnitelCards: IconItem[] = [
  {
    icon: 'mdi:map-marker-outline',
    title: 'Presença local',
    text: 'Sediada em Vitória da Conquista, a Unitel está próxima das empresas que atende na região.',
  },
  {
    icon: 'mdi:cogs',
    title: 'Conhecimento técnico',
    text: 'Experiência em telecomunicações, telefonia IP, redes estruturadas e comunicação empresarial.',
  },
  {
    icon: 'mdi:lan-connect',
    title: 'Soluções integradas',
    text: 'Telefonia, atendimento, mobilidade, redes e integração podem fazer parte de uma mesma estratégia tecnológica.',
  },
  {
    icon: 'mdi:office-building-outline',
    title: 'Experiência em diferentes segmentos',
    text: 'A Unitel apresenta em seu portfólio instituições de saúde, educação, comércio, indústria, serviços e setor público.',
  },
]
