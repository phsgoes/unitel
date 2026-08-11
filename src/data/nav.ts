export interface NavItem {
  label: string
  to: string
  description?: string
  icon?: string
}

export interface SolutionNavItem {
  label: string
  to: string
  description: string
  icon: string
}

/** Primary solutions list — Header, Footer, and /solucoes catalog. */
export const solutionItems: SolutionNavItem[] = [
  {
    label: 'ComuniQ',
    to: '/solucoes/comuniq',
    icon: 'comuniq',
    description: 'Comunicação empresarial e atendimento digital',
  },
  {
    label: 'Call Center',
    to: '/solucoes/call-center',
    icon: 'mdi:headset',
    description: 'Atendimento, relacionamento e gestão de chamadas',
  },
  {
    label: 'Telefonia IP',
    to: '/solucoes/telefonia-ip',
    icon: 'mdi:phone-in-talk',
    description: 'Telefonia empresarial moderna e integrada',
  },
  {
    label: 'Redes Estruturadas',
    to: '/solucoes/redes-estruturadas',
    icon: 'mdi:lan-connect',
    description: 'Infraestrutura de rede segura e organizada',
  },
  {
    label: 'Ouvidoria Digital',
    to: '/solucoes/ouvidoria-digital',
    icon: 'mdi:account-voice',
    description: 'Canal digital para manifestações e relacionamento',
  },
]

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: 'mdi:home',
    description: 'Página Inicial',
  },
  {
    label: 'Sobre',
    to: '/sobre',
    icon: 'mdi:book-open-page-variant-outline',
    description: 'Sobre a Unitel',
  },
  {
    label: 'Soluções',
    to: '/solucoes',
    icon: 'mdi:lightbulb-on',
    description: 'Soluções para sua empresa',
  },
  {
    label: 'Portfólio',
    to: '/portfolio',
    icon: 'mdi:folder-open-outline',
    description: 'Portfólio',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'mdi:newspaper-variant-outline',
    description: 'Blog',
  },
  {
    label: 'Contato',
    to: '/contato',
    icon: 'mdi:contacts-outline',
    description: 'Contato',
  },
]
