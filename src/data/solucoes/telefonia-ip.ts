/**
 * Marketing content for the Telefonia IP solution page.
 *
 * Role: Typed SSOT for `/solucoes/telefonia-ip` copy, hero media, and section data.
 * Not in this file: Astro markup / layout — owned by `src/pages/solucoes/telefonia-ip.astro`.
 * Key dependencies: None
 * See also: src/data/solucoes/README.md, src/types/solucao.ts
 */

import telefoniaIpImage from '@/assets/images/telefonia-ip.webp'
import { portfolioClientNames } from '@/data/portfolio-clients'
import { defaultWhyUnitelCards } from '@/data/why-unitel'
import type { SolutionPage } from '@/types/solucao'

export const telefoniaIpPage = {
  slug: 'telefonia-ip',
  name: 'Telefonia IP',
  navDescription: 'Telefonia empresarial moderna e integrada',
  navIcon: 'mdi:phone-in-talk',
  meta: {
    title: 'Telefonia IP em Vitória da Conquista | Unitel Telecom',
    description:
      'Telefonia IP empresarial em Vitória da Conquista e no sudoeste baiano. Mais mobilidade, integração, escalabilidade, controle e eficiência para a comunicação da sua empresa.',
    canonicalPath: '/solucoes/telefonia-ip',
  },
  serviceType: 'Telefonia IP empresarial',
  serviceDescription:
    'Solução de Telefonia IP empresarial com mobilidade, integração, escalabilidade, gestão e comunicação corporativa.',
  areaServed: 'Vitória da Conquista e sudoeste da Bahia',
  hero: {
    badge: 'Solução de comunicação empresarial',
    titleBefore: 'Telefonia IP para uma empresa que ',
    titleHighlight: 'precisa estar sempre conectada.',
    description:
      'Transforme a telefonia em uma parte estratégica da sua operação. Com a solução de Telefonia IP da Unitel, sua empresa ganha mais mobilidade, integração, controle e flexibilidade para se comunicar com clientes, equipes e unidades.',
    primaryCta: { label: 'Falar com um especialista', href: '/contato' },
    secondaryCta: { label: 'Conhecer a solução', href: '#beneficios' },
    chips: [
      { icon: 'mdi:cellphone-link', label: 'Mobilidade' },
      { icon: 'mdi:lan-connect', label: 'Integração' },
      { icon: 'mdi:chart-line', label: 'Gestão' },
      { icon: 'mdi:shield-check-outline', label: 'Segurança' },
    ],
    image: telefoniaIpImage,
    imageAlt: 'Solução de Telefonia IP empresarial da Unitel',
    imageCard: {
      icon: 'mdi:phone-in-talk',
      title: 'Comunicação empresarial',
      subtitle: 'Mais controle. Mais mobilidade. Mais possibilidades.',
    },
    floatLeft: {
      icon: 'mdi:cloud-outline',
      title: 'Flexível',
      subtitle: 'Para diferentes ambientes',
    },
    floatRight: {
      icon: 'mdi:check-decagram-outline',
      title: 'Escalável',
      subtitle: 'Acompanha o crescimento',
    },
  },
  challenge: {
    id: 'solucao',
    badge: 'O desafio',
    title:
      'Sua empresa ainda depende de uma telefonia que não acompanha sua operação?',
    description:
      'À medida que uma empresa cresce, a comunicação também se torna mais complexa. Novos setores, equipes distribuídas, múltiplas unidades, trabalho híbrido e necessidade de integração fazem com que a telefonia deixe de ser apenas uma ferramenta para fazer ligações.',
    cards: [
      {
        icon: 'mdi:phone-outline',
        title: 'Comunicação limitada',
        text: 'Estruturas rígidas podem dificultar a mobilidade, a expansão e a adaptação da telefonia às novas formas de trabalho.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Telefonia isolada',
        text: 'Quando a comunicação não conversa com os sistemas da empresa, oportunidades de produtividade e gestão podem ser perdidas.',
      },
      {
        icon: 'mdi:chart-line',
        title: 'Pouco controle',
        text: 'Sem recursos adequados de gestão, acompanhar chamadas, atendimento e utilização da estrutura se torna mais difícil.',
      },
      {
        icon: 'mdi:cogs',
        title: 'Crescimento complexo',
        text: 'A expansão da empresa não deveria exigir uma reconstrução completa da infraestrutura de comunicação.',
      },
    ],
  },
  compare: {
    badge: 'Uma nova arquitetura',
    title: 'Da telefonia tradicional para uma comunicação mais inteligente.',
    description:
      'A Telefonia IP transforma a comunicação em uma estrutura mais flexível, conectada e preparada para diferentes modelos de operação.',
    beforeLabel: 'Estrutura convencional',
    beforeItems: [
      'Estrutura mais rígida',
      'Mobilidade limitada',
      'Telefonia isolada dos sistemas',
      'Expansão mais complexa',
      'Menos possibilidades de gestão',
    ],
    afterLabel: 'Com Telefonia IP',
    afterItems: [
      'Estrutura escalável',
      'Mobilidade para equipes',
      'Integração com sistemas empresariais',
      'Expansão mais flexível',
      'Mais recursos de gestão e acompanhamento',
    ],
  },
  benefits: {
    id: 'beneficios',
    badge: 'Benefícios',
    title: 'Uma telefonia que trabalha a favor da sua operação.',
    description:
      'Tecnologia só faz sentido quando resolve problemas reais. Por isso, a Telefonia IP deve ser pensada a partir da rotina, dos processos e dos objetivos da empresa.',
    items: [
      {
        icon: 'mdi:chart-line',
        title: 'Mais eficiência',
        text: 'Tenha uma estrutura de comunicação mais adequada aos processos da empresa e maior controle sobre os recursos utilizados.',
      },
      {
        icon: 'mdi:cellphone',
        title: 'Mobilidade',
        text: 'Leve a comunicação corporativa para diferentes ambientes, unidades e modelos de trabalho, conforme a arquitetura adotada.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Integração',
        text: 'Conecte a telefonia aos sistemas empresariais e crie um ambiente de comunicação mais conectado.',
      },
      {
        icon: 'mdi:cogs',
        title: 'Escalabilidade',
        text: 'Adapte a estrutura à medida que novos usuários, setores, unidades e necessidades surgirem.',
      },
      {
        icon: 'mdi:phone-in-talk',
        title: 'Qualidade de comunicação',
        text: 'Utilize tecnologia IP adequada à comunicação empresarial, com uma arquitetura planejada para as necessidades da operação.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Segurança e disponibilidade',
        text: 'Conte com uma solução projetada com atenção à confiabilidade, segurança e continuidade da comunicação.',
      },
    ],
  },
  resources: {
    badge: 'Recursos',
    title: 'Mais do que chamadas. Uma estrutura de comunicação.',
    description:
      'A tecnologia IP permite construir uma arquitetura que combina telefonia, atendimento, mobilidade, gestão e integração.',
    aside: {
      icon: 'mdi:phone-plus-outline',
      title: 'A solução certa começa pelo diagnóstico.',
      text: 'A Unitel avalia o ambiente e as necessidades da empresa antes de definir a arquitetura adequada.',
    },
    featuredIndex: 0,
    items: [
      {
        icon: 'mdi:phone-outline',
        title: 'Central telefônica empresarial',
        text: 'Estruture chamadas externas, ramais, usuários e atendimento simultâneo de acordo com o perfil da operação.',
      },
      {
        icon: 'mdi:headset',
        title: 'URA e atendimento',
        text: 'Direcione chamadas automaticamente para setores e equipes, organizando o fluxo de atendimento.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Gestão de chamadas',
        text: 'Utilize recursos de histórico, relatórios, filas e acompanhamento para obter mais visibilidade sobre a comunicação.',
      },
      {
        icon: 'mdi:cellphone',
        title: 'Mobilidade',
        text: 'Possibilite o uso da comunicação corporativa em computadores e dispositivos móveis, conforme o projeto.',
      },
      {
        icon: 'mdi:database-outline',
        title: 'Integração com CRM',
        text: 'Conecte a telefonia aos sistemas utilizados pelas equipes comerciais, de suporte e atendimento.',
      },
      {
        icon: 'mdi:api',
        title: 'APIs e automações',
        text: 'Crie possibilidades de integração entre telefonia, sistemas internos e plataformas de negócio.',
      },
      {
        icon: 'mdi:cloud-outline',
        title: 'Telefonia em nuvem',
        text: 'Quando adequada ao projeto, a arquitetura em nuvem amplia as possibilidades de acesso, gestão e escalabilidade.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Segurança e continuidade',
        text: 'Planeje a infraestrutura considerando disponibilidade, segurança e os requisitos da operação.',
      },
    ],
  },
  process: {
    badge: 'Como funciona',
    title: 'Tecnologia bem implantada começa antes da instalação.',
    description:
      'Uma boa solução de telefonia precisa considerar pessoas, processos, infraestrutura e objetivos. Por isso, o projeto deve acompanhar a realidade de cada empresa.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        text: 'Entendemos sua infraestrutura, quantidade de usuários, processos e necessidades.',
      },
      {
        number: '02',
        title: 'Projeto',
        text: 'Definimos a arquitetura adequada ao perfil, à operação e aos objetivos da empresa.',
      },
      {
        number: '03',
        title: 'Implantação',
        text: 'Configuramos a solução e realizamos a integração com o ambiente tecnológico.',
      },
      {
        number: '04',
        title: 'Evolução',
        text: 'A estrutura pode acompanhar novas demandas, usuários, setores e possibilidades.',
      },
    ],
  },
  region: {
    badge: 'Vitória da Conquista e sudoeste baiano',
    title:
      'Uma região dinâmica precisa de uma comunicação à altura da sua operação.',
    paragraphs: [
      'Vitória da Conquista ocupa uma posição estratégica no sudoeste da Bahia e concentra atividades empresariais, comerciais, educacionais e de saúde que conectam a cidade a municípios de toda a região.',
      'Para empresas que dependem de atendimento, vendas, relacionamento com clientes ou comunicação entre diferentes setores, a telefonia deixa de ser apenas infraestrutura: ela passa a fazer parte da operação.',
    ],
    cta: { label: 'Falar com a Unitel', href: '/contato' },
    cards: [
      {
        icon: 'mdi:account-group-outline',
        value: '396 mil+',
        text: 'habitantes na estimativa populacional de Vitória da Conquista para 2025.',
      },
      {
        icon: 'mdi:hospital-building',
        value: '73',
        text: 'municípios referenciados pela rede regional de saúde de Vitória da Conquista.',
      },
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença regional',
        text: 'Uma estrutura de comunicação preparada para empresas que atuam em Vitória da Conquista e no sudoeste baiano.',
      },
    ],
  },
  whyUnitel: {
    badge: 'Por que a Unitel?',
    title: 'Tecnologia é importante. Experiência na operação é ainda mais.',
    paragraphs: [
      'A Unitel atua em projetos de telecomunicações, consultoria, telefonia digital IP, redes estruturadas e soluções de Call Center.',
      'Para uma empresa que precisa manter sua comunicação funcionando, isso significa contar com um parceiro capaz de olhar para a tecnologia dentro do contexto da operação.',
    ],
    cards: defaultWhyUnitelCards,
  },
  clients: {
    badge: 'Experiência regional',
    title: 'Comunicação crítica exige confiança.',
    description:
      'A Unitel apresenta em seu portfólio instituições e empresas de diferentes segmentos que fazem parte da sua trajetória.',
    names: portfolioClientNames,
    footnote:
      'Empresas e instituições listadas no portfólio público da Unitel.',
  },
  faq: {
    title: 'Dúvidas sobre Telefonia IP?',
    description:
      'Entenda como a tecnologia pode ser aplicada à realidade da sua empresa.',
    items: [
      {
        question: 'O que é Telefonia IP?',
        answer:
          'Telefonia IP é uma tecnologia que utiliza redes baseadas em protocolo IP para transportar chamadas de voz. Em ambientes empresariais, ela permite construir uma estrutura de comunicação mais flexível, escalável e integrada aos processos e sistemas utilizados pela organização.',
      },
      {
        question: 'Qual é a diferença entre Telefonia IP e telefonia tradicional?',
        answer:
          'Na Telefonia IP, a comunicação de voz utiliza uma infraestrutura de rede IP. Isso amplia as possibilidades de mobilidade, integração, gestão e expansão da telefonia. A arquitetura adequada depende da infraestrutura existente e das necessidades de cada empresa.',
      },
      {
        question: 'A Telefonia IP é indicada para pequenas empresas?',
        answer:
          'Sim. A solução pode ser dimensionada de acordo com a quantidade de usuários, setores, chamadas e necessidades da empresa. Isso permite começar com uma estrutura compatível com a operação atual e evoluir conforme o negócio cresce.',
      },
      {
        question: 'É possível utilizar ramais no celular e no computador?',
        answer:
          'Dependendo da arquitetura adotada, a telefonia pode oferecer recursos de mobilidade para que usuários utilizem seus ramais em computadores, smartphones e outros dispositivos compatíveis. Isso é especialmente útil para equipes híbridas, remotas ou distribuídas entre diferentes unidades.',
      },
      {
        question: 'A Telefonia IP pode ser integrada ao CRM?',
        answer:
          'Sim. Uma arquitetura de comunicação IP pode ser integrada a sistemas empresariais, CRM, plataformas de atendimento, discadores e outras aplicações por meio dos recursos e APIs disponíveis na solução adotada.',
      },
      {
        question: 'A Telefonia IP reduz os custos da empresa?',
        answer:
          'Ela pode contribuir para uma estrutura de comunicação mais eficiente e para a redução dos custos de telefonia. O resultado, entretanto, depende do cenário atual, volume de chamadas, infraestrutura, operadoras e arquitetura definida para o projeto.',
      },
      {
        question:
          'A Unitel atende empresas de Vitória da Conquista e do sudoeste baiano?',
        answer:
          'A Unitel está sediada em Vitória da Conquista e atua com projetos de telecomunicações, telefonia digital IP, redes estruturadas e soluções de comunicação empresarial. Sua presença local é especialmente relevante para organizações que precisam de implantação, suporte e acompanhamento próximos.',
      },
    ],
  },
  finalCta: {
    badge: 'Próximo passo',
    title: 'Sua empresa está pronta para modernizar a comunicação?',
    description:
      'Converse com um especialista da Unitel e descubra como estruturar uma solução de Telefonia IP adequada ao tamanho, à operação e aos objetivos do seu negócio.',
    primaryCta: {
      label: 'Quero modernizar minha telefonia',
      href: '/contato',
    },
    phoneLabel: '(77) 2101-3300',
    phoneHref: 'tel:+557721013300',
    footnote: 'Atendimento especializado em Vitória da Conquista e região.',
  },
} satisfies SolutionPage
