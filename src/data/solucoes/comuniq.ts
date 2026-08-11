/**
 * Marketing content for the ComuniQ solution page.
 *
 * Role: Typed SSOT for `/solucoes/comuniq` copy, hero media, pricing, and section data.
 * Not in this file: Astro markup / layout — owned by `src/pages/solucoes/comuniq.astro`.
 * Key dependencies: None
 * See also: src/data/solucoes/README.md, src/types/solucao.ts
 */

import comuniqImage from '@/assets/images/comuniq.avif'
import type { SolutionPage } from '@/types/solucao'

export const comuniqPage = {
  slug: 'comuniq',
  name: 'ComuniQ',
  navDescription: 'Comunicação empresarial e atendimento digital',
  navIcon: 'comuniq',
  meta: {
    title:
      'ComuniQ em Vitória da Conquista | Comunicação Empresarial em Nuvem | Unitel Telecom',
    description:
      'ComuniQ: plataforma de comunicação empresarial em nuvem da Unitel. Telefonia, URA, gestão de chamadas, mobilidade, integração e recursos de atendimento para empresas.',
    canonicalPath: '/solucoes/comuniq',
  },
  serviceType: 'Plataforma de comunicação empresarial em nuvem',
  serviceDescription:
    'Plataforma de comunicação empresarial em nuvem que integra telefonia, atendimento, mobilidade e gestão.',
  areaServed: 'Vitória da Conquista e sudoeste da Bahia',
  hero: {
    badge: 'Plataforma de comunicação empresarial',
    titleBefore: 'Toda a comunicação da sua empresa em ',
    titleHighlight: 'um único ambiente.',
    description:
      'O ComuniQ centraliza telefonia, atendimento, mobilidade, gestão e integração em uma plataforma de comunicação empresarial em nuvem, criada para empresas que precisam ganhar agilidade, controle e escala.',
    primaryCta: { label: 'Conhecer o ComuniQ', href: '/contato' },
    secondaryCta: { label: 'Conhecer os recursos', href: '#recursos' },
    chips: [
      { icon: 'mdi:cloud-outline', label: 'Em nuvem' },
      { icon: 'mdi:phone-in-talk', label: 'Telefonia' },
      { icon: 'mdi:cellphone-link', label: 'Mobilidade' },
      { icon: 'mdi:lan-connect', label: 'Integração' },
    ],
    image: comuniqImage,
    imageAlt: 'Plataforma ComuniQ de comunicação empresarial em nuvem',
    imageCard: {
      icon: 'mdi:cloud-outline',
      title: 'Comunicação empresarial em nuvem',
      subtitle: 'Telefonia, atendimento, mobilidade e gestão.',
    },
    floatLeft: {
      icon: 'mdi:cellphone-link',
      title: 'Mobilidade',
      subtitle: 'Equipes conectadas',
    },
    floatRight: {
      icon: 'mdi:check-decagram-outline',
      title: 'Escalável',
      subtitle: 'Para diferentes operações',
    },
  },
  challenge: {
    id: 'desafio',
    badge: 'O desafio',
    title:
      'Sua empresa ainda administra a comunicação em ferramentas separadas?',
    description:
      'Conforme a operação cresce, telefonia, atendimento, equipes e sistemas podem se tornar cada vez mais difíceis de administrar. O ComuniQ foi pensado para transformar essa estrutura em um ambiente de comunicação mais integrado.',
    cards: [
      {
        icon: 'mdi:source-branch',
        title: 'Comunicação fragmentada',
        text: 'Ferramentas isoladas dificultam a organização dos processos e a gestão da comunicação.',
      },
      {
        icon: 'mdi:headset',
        title: 'Atendimento desorganizado',
        text: 'Filas, encaminhamentos e diferentes setores exigem uma estrutura capaz de organizar o fluxo das chamadas.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Pouco controle',
        text: 'Sem histórico e relatórios, gestores têm menos visibilidade sobre a utilização e o desempenho da comunicação.',
      },
      {
        icon: 'mdi:office-building-outline',
        title: 'Operação distribuída',
        text: 'Equipes remotas, híbridas e diferentes unidades precisam de uma comunicação que acompanhe seus ambientes.',
      },
    ],
  },
  compare: {
    badge: 'Uma nova arquitetura',
    title: 'Da comunicação fragmentada para um ambiente integrado.',
    description:
      'O ComuniQ reúne recursos de telefonia, atendimento, mobilidade, gestão e integração em uma plataforma empresarial em nuvem.',
    beforeLabel: 'Estrutura fragmentada',
    beforeItems: [
      'Ferramentas isoladas',
      'Gestão descentralizada',
      'Menor mobilidade',
      'Sistemas desconectados',
      'Expansão mais complexa',
    ],
    afterLabel: 'Com o ComuniQ',
    afterItems: [
      'Comunicação centralizada',
      'Plataforma em nuvem',
      'Mobilidade para equipes',
      'Integração com sistemas',
      'Estrutura escalável',
    ],
  },
  benefits: {
    id: 'beneficios',
    badge: 'Benefícios',
    title: 'Uma comunicação que trabalha a favor da sua empresa.',
    description:
      'Mais do que realizar chamadas, uma plataforma de comunicação empresarial precisa ajudar a organizar processos, equipes e relacionamento com clientes.',
    items: [
      {
        icon: 'mdi:chart-line',
        title: 'Mais produtividade',
        text: 'Centralize recursos e facilite o trabalho das equipes com uma estrutura de comunicação organizada.',
      },
      {
        icon: 'mdi:account-voice',
        title: 'Melhor atendimento',
        text: 'Organize menus, filas e encaminhamentos para criar uma experiência de atendimento mais estruturada.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Mais controle',
        text: 'Tenha maior visibilidade sobre chamadas, histórico, gravações e desempenho da operação.',
      },
      {
        icon: 'mdi:cellphone-link',
        title: 'Mobilidade',
        text: 'Leve a comunicação para computadores e dispositivos móveis conforme a arquitetura implantada.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Integração',
        text: 'Conecte a comunicação aos sistemas utilizados pela empresa e amplie as possibilidades de automação.',
      },
      {
        icon: 'mdi:trending-up',
        title: 'Escalabilidade',
        text: 'Adapte a estrutura conforme novos usuários, setores, unidades e necessidades surgirem.',
      },
    ],
  },
  resources: {
    badge: 'Recursos',
    title: 'Uma plataforma para diferentes necessidades de comunicação.',
    description:
      'O ComuniQ combina recursos de telefonia, atendimento, gestão, mobilidade e integração em um único ambiente.',
    aside: {
      icon: 'mdi:cloud-check-outline',
      title: 'Comunicação preparada para evoluir.',
      text: 'A estrutura pode acompanhar diferentes perfis de empresa, equipes e necessidades de comunicação.',
    },
    items: [
      {
        icon: 'mdi:phone-outline',
        title: 'Telefonia profissional',
        text: 'Central telefônica empresarial em nuvem, chamadas externas e atendimento simultâneo.',
      },
      {
        icon: 'mdi:headset',
        title: 'URA personalizada',
        text: 'Menus de atendimento, direcionamento inteligente e organização do fluxo de chamadas.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Gestão de chamadas',
        text: 'Filas, distribuição, gravações, histórico e relatórios de utilização e desempenho.',
      },
      {
        icon: 'mdi:account-group-outline',
        title: 'Equipe de atendimento',
        text: 'Monitoramento, escuta, transferência assistida, conferência e grupos de atendimento.',
      },
      {
        icon: 'mdi:cellphone',
        title: 'Mobilidade',
        text: 'Ramais em computadores e dispositivos móveis para equipes remotas e híbridas.',
      },
      {
        icon: 'mdi:database-outline',
        title: 'Integração com CRM',
        text: 'Conecte a comunicação aos sistemas comerciais, atendimento e suporte.',
      },
      {
        icon: 'mdi:api',
        title: 'APIs e automações',
        text: 'Crie possibilidades de integração entre telefonia, sistemas internos e plataformas empresariais.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Funcionalidades inteligentes',
        text: 'Correio de voz, identificação, bloqueios, horários, mensagens e recursos de ouvidoria.',
      },
    ],
  },
  pricing: {
    id: 'planos',
    badge: 'Conheça nossos planos',
    title: 'Escolha a estrutura que acompanha o tamanho da sua operação.',
    description:
      'O ComuniQ possui planos para diferentes portes de empresa, com capacidade e recursos pensados para cada nível de operação.',
    plans: [
      {
        name: 'Standard',
        capacity: '10 ramais',
        audience: 'Para pequenas empresas',
        description:
          'Uma estrutura para empresas que precisam modernizar e organizar sua comunicação.',
        features: [],
        highlighted: true,
        highlightLabel: 'Mais popular',
        ctaLabel: 'Fale Conosco',
        ctaHref: '/contato',
      },
      {
        name: 'Premium',
        capacity: '50 ramais',
        audience: 'Médias e grandes empresas',
        description:
          'Mais capacidade e recursos para operações que precisam de uma comunicação empresarial mais robusta.',
        features: [],
        ctaLabel: 'Fale Conosco',
        ctaHref: '/contato',
      },
      {
        name: 'Enterprise',
        capacity: '300 ramais',
        audience: 'Projeto sob demanda',
        description:
          'Para operações que precisam de maior capacidade e uma arquitetura personalizada.',
        features: [],
        ctaLabel: 'Fale Conosco',
        ctaHref: '/contato',
      },
    ],
    comparison: {
      headers: ['Recursos', 'Standard', 'Premium', 'Enterprise'],
      rows: [
        { feature: 'Número de ramais', values: ['10', '50', '300'] },
        { feature: 'Gravação de voz', values: ['✓', '✓', '✓'] },
        { feature: 'URA personalizada', values: ['✓', '✓', '✓'] },
        { feature: 'Relatório de chamadas', values: ['✓', '✓', '✓'] },
        { feature: 'Atualizações', values: ['Segurança', 'Todas', 'Todas'] },
        { feature: 'Ouvidoria Digital', values: ['✓', '✓', '✓'] },
        { feature: 'Integração com sistemas', values: ['✓', '✓', '✓'] },
        { feature: 'Call Center', values: ['✓', '✓', '✓'] },
        { feature: 'Personalização de recursos', values: ['✓', '✓', '✓'] },
      ],
    },
    footnote:
      'Os recursos e condições comerciais devem ser confirmados com a Unitel no momento da contratação, pois a composição dos planos pode ser atualizada.',
  },
  process: {
    badge: 'Como funciona',
    title: 'Uma implantação pensada para a realidade da sua empresa.',
    description:
      'Antes de configurar a plataforma, é importante compreender usuários, setores, processos e infraestrutura.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        text: 'Entendemos a infraestrutura, os usuários e os processos de comunicação da empresa.',
      },
      {
        number: '02',
        title: 'Dimensionamento',
        text: 'Definimos a capacidade e os recursos mais adequados à operação.',
      },
      {
        number: '03',
        title: 'Implantação',
        text: 'Configuramos usuários, ramais, URA, filas e demais recursos previstos no projeto.',
      },
      {
        number: '04',
        title: 'Evolução',
        text: 'A estrutura pode acompanhar novas demandas, usuários e recursos.',
      },
    ],
  },
  region: {
    badge: 'Vitória da Conquista e sudoeste baiano',
    title: 'Uma operação conectada precisa de uma comunicação à altura.',
    paragraphs: [
      'Empresas que dependem de atendimento, vendas, suporte e relacionamento precisam de uma estrutura de comunicação que acompanhe a dinâmica do negócio.',
      'Com o ComuniQ, a comunicação empresarial pode ser estruturada em uma plataforma integrada, com recursos para diferentes equipes, setores e modelos de trabalho.',
    ],
    cta: { label: 'Falar com a Unitel', href: '/contato' },
    cards: [
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença regional',
        text: 'Unitel sediada em Vitória da Conquista e próxima das empresas atendidas na região.',
      },
      {
        icon: 'mdi:cloud-outline',
        title: 'Comunicação em nuvem',
        text: 'Uma arquitetura pensada para mobilidade, gestão e escalabilidade.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Solução integrada',
        text: 'Telefonia, atendimento, mobilidade e integração em uma mesma estratégia tecnológica.',
      },
    ],
  },
  whyUnitel: {
    badge: 'Por que a Unitel?',
    title: 'Uma plataforma precisa estar acompanhada de experiência técnica.',
    paragraphs: [
      'A Unitel atua com telecomunicações, telefonia digital IP, redes estruturadas e soluções de comunicação empresarial.',
      'Isso permite olhar para o ComuniQ não apenas como uma ferramenta, mas como parte de uma arquitetura maior de comunicação.',
    ],
    cards: [
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença local',
        text: 'Sediada em Vitória da Conquista, a Unitel está próxima das empresas que atende na região.',
      },
      {
        icon: 'mdi:cogs',
        title: 'Conhecimento técnico',
        text: 'Experiência em telecomunicações, telefonia IP, redes e comunicação empresarial.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Soluções integradas',
        text: 'Telefonia, atendimento, redes, mobilidade e integração podem fazer parte de uma mesma estratégia.',
      },
      {
        icon: 'mdi:office-building-outline',
        title: 'Projetos empresariais',
        text: 'A solução pode ser dimensionada conforme usuários, setores, processos e objetivos da organização.',
      },
    ],
  },
  faq: {
    title: 'Dúvidas sobre o ComuniQ?',
    description:
      'Entenda como a plataforma pode ser aplicada à realidade da sua empresa.',
    items: [
      {
        question: 'O que é o ComuniQ?',
        answer:
          'O ComuniQ é a plataforma de comunicação empresarial em nuvem da Unitel. A solução reúne telefonia profissional, atendimento automático, gestão de chamadas, mobilidade, integração com sistemas e outros recursos para centralizar e organizar a comunicação da empresa.',
      },
      {
        question: 'O ComuniQ funciona em nuvem?',
        answer:
          'Sim. O ComuniQ é apresentado pela Unitel como uma plataforma de comunicação em nuvem. Essa arquitetura amplia as possibilidades de acesso, mobilidade, gestão e escalabilidade da comunicação empresarial, de acordo com o projeto implantado.',
      },
      {
        question: 'O ComuniQ possui telefonia empresarial?',
        answer:
          'Sim. A plataforma oferece central telefônica empresarial em nuvem, chamadas externas com múltiplas operadoras e recursos para atendimento simultâneo de chamadas, permitindo estruturar a telefonia conforme as necessidades da empresa.',
      },
      {
        question: 'O ComuniQ possui URA personalizada?',
        answer:
          'Sim. O ComuniQ oferece recursos de atendimento automático com URA, permitindo criar menus, direcionar chamadas para diferentes setores e organizar o fluxo de atendimento de acordo com a operação da empresa.',
      },
      {
        question: 'É possível utilizar o ComuniQ no celular e no computador?',
        answer:
          'Sim. A plataforma possui recursos de mobilidade que permitem a utilização de ramais em computadores e dispositivos móveis, conforme a arquitetura e os recursos contratados. Isso pode ser especialmente útil para equipes remotas, híbridas ou distribuídas entre diferentes unidades.',
      },
      {
        question: 'O ComuniQ pode ser integrado ao CRM?',
        answer:
          'Sim. A plataforma oferece recursos de integração com CRM, sistemas de atendimento, discadores e outras aplicações compatíveis. Também existem possibilidades de utilização de APIs para automações e conexão com sistemas empresariais.',
      },
      {
        question: 'O ComuniQ possui recursos de Call Center?',
        answer:
          'Sim. O ComuniQ reúne recursos voltados à operação de atendimento, como filas, distribuição de chamadas, gravação, monitoramento, transferência assistida, grupos de atendimento e relatórios, além da possibilidade de integração com outras soluções conforme o projeto.',
      },
      {
        question: 'O ComuniQ possui gravação de chamadas?',
        answer:
          'Sim. A plataforma apresenta recursos de gravação de chamadas e gestão do histórico de ligações. A utilização e configuração desses recursos devem considerar o projeto e os requisitos aplicáveis à operação da empresa.',
      },
      {
        question: 'Quais são os planos do ComuniQ?',
        answer:
          'A página comercial do ComuniQ apresenta três planos: Standard, Premium e Enterprise. Eles possuem capacidade de 10, 50 e 300 ramais, respectivamente, sendo o Enterprise apresentado como uma opção sob demanda. As condições comerciais devem ser confirmadas diretamente com a Unitel.',
      },
      {
        question: 'O ComuniQ é indicado para pequenas empresas?',
        answer:
          'Sim. O plano Standard é apresentado pela Unitel como uma opção para pequenas empresas, com capacidade de até 10 ramais. A estrutura pode ser dimensionada de acordo com a quantidade de usuários e as necessidades específicas da operação.',
      },
      {
        question: 'O ComuniQ é indicado para médias e grandes empresas?',
        answer:
          'Sim. O plano Premium é direcionado a médias e grandes empresas, enquanto o Enterprise é apresentado como uma opção sob demanda para operações que necessitam de maior capacidade ou personalização.',
      },
      {
        question: 'O ComuniQ possui Ouvidoria Digital?',
        answer:
          'Sim. A Ouvidoria Digital aparece entre os recursos e funcionalidades apresentados na estrutura comercial do ComuniQ. Sua utilização permite incorporar recursos de ouvidoria à estratégia de comunicação e atendimento da organização.',
      },
      {
        question: 'O ComuniQ ajuda a reduzir custos de comunicação?',
        answer:
          'O ComuniQ pode contribuir para uma estrutura de comunicação mais eficiente e organizada, mas o impacto financeiro depende do cenário atual da empresa, quantidade de usuários, operadoras, volume de chamadas, infraestrutura e recursos contratados. A Unitel pode avaliar o cenário para dimensionar uma solução adequada.',
      },
      {
        question: 'A Unitel implanta o ComuniQ em Vitória da Conquista?',
        answer:
          'Sim. A Unitel está sediada em Vitória da Conquista e atua com telecomunicações, telefonia digital IP, redes estruturadas e soluções de comunicação empresarial. A empresa pode avaliar a infraestrutura e as necessidades da organização para definir a melhor forma de implantação.',
      },
      {
        question: 'Como contratar o ComuniQ?',
        answer:
          'A contratação começa pelo contato com a Unitel. A equipe pode avaliar o número de usuários, setores, processos, infraestrutura e recursos necessários para indicar o plano e a configuração mais adequada à empresa.',
      },
    ],
  },
  finalCta: {
    badge: 'Próximo passo',
    title: 'Sua empresa está pronta para centralizar a comunicação?',
    description:
      'Converse com um especialista da Unitel e descubra como o ComuniQ pode ser dimensionado para a quantidade de usuários, processos e objetivos da sua empresa.',
    primaryCta: { label: 'Quero conhecer o ComuniQ', href: '/contato' },
    phoneLabel: '(77) 2101-3300',
    phoneHref: 'tel:+557721013300',
    footnote: 'Atendimento especializado em Vitória da Conquista e região.',
  },
} satisfies SolutionPage
