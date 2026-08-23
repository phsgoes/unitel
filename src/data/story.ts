import type { StoryRevealItem } from '@/components/ui/StoryReveal.astro'

import comuniq from '@/assets/images/stories/comuniq.avif'
import callCenter from '@/assets/images/stories/call-center.avif'
import redesEstruturadas from '@/assets/images/stories/redes-estruturadas.avif'
import telefoniaIp from '@/assets/images/stories/telefonia-ip.avif'
import ouvidoriaDigital from '@/assets/images/stories/ouvidoria-digital.avif'

export const storyItems: StoryRevealItem[] = [
  {
    backgroundColor: '#202020',
    image: {
      src: comuniq,
      alt: 'ComuniQ',
      caption: 'ComuniQ',
    },
    eyebrow: 'ComuniQ',
    title: 'Tudo começa',
    titleAccent: 'por aqui.',
    accentColor: 'zinc',
    description:
      'O ComuniQ é a solução definitiva para empresas que buscam flexibilidade e inovação na comunicação empresarial. Nossa plataforma digital opera totalmente em nuvem, garantindo maior escalabilidade, segurança e acessibilidade.',
    secondaryDescription:
      'Esta é de fato uma plataforma de comunicação em nuvem para empresas que querem escalar e simplificar.',
  },
  {
    backgroundColor: '#24151b',
    image: {
      src: callCenter,
      alt: 'Call Center',
      caption: 'Call Center',
    },
    eyebrow: 'Call Center',
    title: 'Cada chamada é sempre',
    titleAccent: 'uma oportunidade.',
    accentColor: 'rose',
    description:
      'A nossa solução de Call Center é pensada para otimizar o atendimento, melhorar a experiência do cliente e gerar dados estratégicos. Com recursos avançados de monitoramento, relatórios, gravação e integração omnichannel, ajudamos sua empresa a transformar atendimento em relacionamento, com mais controle, eficiência e profissionalismo.',
    secondaryDescription:
      'Maximize a produtividade do seu call center com tecnologia de ponta. Oferecemos soluções completas para atendimento eficiente, incluindo filas de chamadas, URA Multinível e integração com CRMs.',
  },
  {
    backgroundColor: '#17221d',
    image: {
      src: redesEstruturadas,
      alt: 'Redes estruturadas',
      caption: 'Redes estruturadas',
    },
    eyebrow: 'Redes Estruturadas',
    title: 'Infraestrutura forte para seu negócio',
    titleAccent: 'crescer.',
    accentColor: 'emerald',
    description:
      'Projetamos e implantamos infraestruturas de rede estruturada que garantem desempenho, segurança e estabilidade para ambientes empresariais. Nossas soluções seguem padrões técnicos rigorosos, permitindo crescimento organizado, alta performance de dados, voz e imagem, além de facilitar manutenções e futuras expansões. A base sólida que sustenta todas as suas operações digitais.',
    secondaryDescription:
      'Com organização e padronização da infraestrutura, facilitam a manutenção, reduzem falhas e suportam o crescimento tecnológico.',
  },
  {
    backgroundColor: '#111827',
    image: {
      src: ouvidoriaDigital,
      alt: 'Ouvidoria Digital',
      caption: 'Ouvidoria Digital',
    },
    eyebrow: 'Ouvidoria Digital',
    title: 'O canal seguro que fortalece',
    titleAccent: 'a sua reputação.',
    accentColor: 'blue',
    description:
      'Pensando nas rigidez e exigências das normas de segurança e saúde no trabalaho, desenvolvemos uma solução específica para gerenciamento de riscos operacionais.',
    secondaryDescription:
      'A Ouvidoria ACOLHER+ é um canal seguro, confidencial e tecnológico criado para receber, tratar e encaminhar denúncias relacionadas a assédio e condutas inadequadas, garantindo proteção à vítima e integridade institucional.',
  },
  {
    backgroundColor: '#3a0e58',
    image: {
      src: telefoniaIp,
      alt: 'Telefonia IP',
      caption: 'Telefonia IP',
    },
    eyebrow: 'Telefonia IP',
    title: 'Modernize seu atendimento tendo o custo',
    titleAccent: 'sob controle.',
    accentColor: 'slate',
    description:
      'Transforme sua comunicação com um sistema de telefonia moderna, segura e escalável.',
    secondaryDescription:
      'Nossa tecnologia IP proporciona mais qualidade e flexibilidade para chamadas empresariais.',
  },
]
