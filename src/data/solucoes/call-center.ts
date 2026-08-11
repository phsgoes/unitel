/**
 * Marketing content for the Call Center solution page.
 *
 * Role: Typed SSOT for `/solucoes/call-center` copy, hero media, and section data.
 * Not in this file: Astro markup / layout — owned by `src/pages/solucoes/call-center.astro`.
 * Key dependencies: None
 * See also: src/data/solucoes/README.md, src/types/solucao.ts
 */

import callCenterImage from '@/assets/images/call-center.webp'
import { portfolioClientNames } from '@/data/portfolio-clients'
import type { SolutionPage } from '@/types/solucao'

export const callCenterPage = {
  slug: 'call-center',
  name: 'Call Center',
  navDescription: 'Atendimento, relacionamento e gestão de chamadas',
  navIcon: 'mdi:headset',
  meta: {
    title: 'Call Center em Vitória da Conquista | Unitel Telecom',
    description:
      'Call Center empresarial em Vitória da Conquista e no sudoeste baiano. Organize o atendimento, aumente a produtividade, monitore chamadas e transforme a comunicação em resultado.',
    canonicalPath: '/solucoes/call-center',
  },
  serviceType: 'Solução de Call Center empresarial',
  serviceDescription:
    'Solução de Call Center com recursos de atendimento, gestão, monitoramento, integração, estabilidade e escalabilidade.',
  areaServed: 'Vitória da Conquista e sudoeste da Bahia',
  hero: {
    badge: 'Solução de atendimento empresarial',
    titleBefore: 'Call Center para transformar ',
    titleHighlight: 'atendimento em resultado.',
    description:
      'Estruture o atendimento da sua empresa com mais organização, controle e inteligência. A solução de Call Center da Unitel integra tecnologia, equipes e processos para melhorar a experiência do cliente e dar mais visibilidade à operação.',
    primaryCta: { label: 'Falar com um especialista', href: '/contato' },
    secondaryCta: { label: 'Conhecer a solução', href: '#beneficios' },
    chips: [
      { icon: 'mdi:headset', label: 'Atendimento' },
      { icon: 'mdi:chart-line', label: 'Gestão' },
      { icon: 'mdi:phone-in-talk', label: 'Produtividade' },
      { icon: 'mdi:shield-check-outline', label: 'Confiabilidade' },
    ],
    image: callCenterImage,
    imageAlt: 'Solução de Call Center empresarial da Unitel',
    imageCard: {
      icon: 'mdi:headset',
      title: 'Atendimento empresarial',
      subtitle: 'Mais organização. Mais controle. Mais resultados.',
    },
    floatLeft: {
      icon: 'mdi:chart-box-outline',
      title: 'Monitorado',
      subtitle: 'Mais visibilidade da operação',
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
    title: 'Seu atendimento acompanha o crescimento da sua empresa?',
    description:
      'À medida que o volume de clientes e contatos aumenta, administrar chamadas de forma improvisada pode gerar filas, perda de oportunidades, dificuldade de acompanhamento e uma experiência inconsistente para quem entra em contato.\n\nUm Call Center bem estruturado transforma o atendimento em um processo organizado, mensurável e alinhado aos objetivos do negócio.',
    cards: [
      {
        icon: 'mdi:phone-outline',
        title: 'Atendimento desorganizado',
        text: 'Sem fluxos definidos, clientes podem enfrentar esperas maiores e dificuldade para chegar ao setor correto.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Falta de visibilidade',
        text: 'Sem indicadores e relatórios, fica mais difícil entender o volume de chamadas e o desempenho da equipe.',
      },
      {
        icon: 'mdi:phone-missed-outline',
        title: 'Oportunidades perdidas',
        text: 'Uma chamada não atendida pode representar uma venda perdida, um cliente insatisfeito ou uma oportunidade desperdiçada.',
      },
      {
        icon: 'mdi:trending-up',
        title: 'Crescimento difícil',
        text: 'O aumento da demanda exige uma estrutura capaz de crescer sem transformar cada expansão em um novo problema.',
      },
    ],
  },
  compare: {
    badge: 'Uma nova estrutura',
    title: 'Do atendimento reativo para uma operação mais inteligente.',
    description:
      'Um Call Center empresarial transforma a comunicação em uma operação organizada, mensurável e preparada para acompanhar o crescimento da empresa.',
    beforeLabel: 'Atendimento convencional',
    beforeItems: [
      'Atendimento pouco padronizado',
      'Distribuição manual de chamadas',
      'Baixa visibilidade da operação',
      'Dificuldade para acompanhar equipes',
      'Poucos dados para tomada de decisão',
    ],
    afterLabel: 'Com Call Center',
    afterItems: [
      'Atendimento organizado por fluxos',
      'Distribuição inteligente de chamadas',
      'Filas e prioridades configuráveis',
      'Monitoramento da operação',
      'Relatórios e indicadores',
    ],
  },
  benefits: {
    id: 'beneficios',
    badge: 'Benefícios',
    title: 'Mais controle para a empresa. Melhor experiência para o cliente.',
    description:
      'A tecnologia precisa gerar impacto real na operação. Por isso, a solução de Call Center da Unitel é pensada para ajudar empresas a atender melhor, administrar recursos e transformar informações do atendimento em decisões mais eficientes.',
    items: [
      {
        icon: 'mdi:headset',
        title: 'Atendimento mais organizado',
        text: 'Estruture filas, ramais, equipes e fluxos de atendimento para direcionar cada contato de acordo com a necessidade.',
      },
      {
        icon: 'mdi:account-group-outline',
        title: 'Mais produtividade',
        text: 'Distribua chamadas de forma adequada e ofereça aos atendentes uma estrutura que facilite o trabalho diário.',
      },
      {
        icon: 'mdi:phone-missed-outline',
        title: 'Menos chamadas perdidas',
        text: 'Organize filas, prioridades e estratégias de atendimento para reduzir situações em que o cliente não consegue falar com a empresa.',
      },
      {
        icon: 'mdi:chart-line',
        title: 'Mais controle da operação',
        text: 'Tenha maior visibilidade sobre chamadas, horários, equipes e volume de atendimento para identificar gargalos.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Indicadores para decisões',
        text: 'Transforme dados de atendimento em informações para decisões gerenciais e melhorias contínuas.',
      },
      {
        icon: 'mdi:trending-up',
        title: 'Escalabilidade',
        text: 'Adapte a estrutura conforme aumentam usuários, equipes, campanhas e demandas de atendimento.',
      },
      {
        icon: 'mdi:account-heart-outline',
        title: 'Melhor experiência',
        text: 'Um atendimento organizado reduz atritos, facilita o acesso às equipes e contribui para uma jornada mais consistente.',
      },
      {
        icon: 'mdi:cash-multiple',
        title: 'Mais eficiência comercial',
        text: 'Uma estrutura organizada ajuda equipes comerciais a responder melhor e aproveitar mais oportunidades de contato.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Mais confiabilidade',
        text: 'Conte com uma arquitetura planejada para as necessidades da operação e os requisitos de continuidade do atendimento.',
      },
    ],
  },
  resources: {
    badge: 'Recursos',
    title: 'Tudo o que sua operação precisa para atender melhor.',
    description:
      'A arquitetura do Call Center pode reunir diferentes recursos de acordo com o perfil, o volume e os objetivos da empresa.',
    aside: {
      icon: 'mdi:headset',
      title: 'A solução certa começa pelo diagnóstico.',
      text: 'A Unitel avalia o ambiente, os processos e as necessidades da empresa antes de definir a arquitetura adequada.',
    },
    featuredIndex: 0,
    items: [
      {
        icon: 'mdi:phone-outline',
        title: 'Central de atendimento',
        text: 'Organize ramais, equipes, chamadas e usuários em uma estrutura centralizada de comunicação.',
      },
      {
        icon: 'mdi:robot-outline',
        title: 'URA',
        text: 'Direcione automaticamente o cliente para o setor ou serviço adequado.',
      },
      {
        icon: 'mdi:format-list-bulleted',
        title: 'Filas de atendimento',
        text: 'Organize chamadas conforme equipes, prioridades e regras definidas para a operação.',
      },
      {
        icon: 'mdi:call-split',
        title: 'Distribuição de chamadas',
        text: 'Direcione contatos entre atendentes conforme a estratégia definida para cada equipe.',
      },
      {
        icon: 'mdi:monitor-eye',
        title: 'Monitoramento',
        text: 'Tenha mais visibilidade sobre o funcionamento da operação de atendimento.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Relatórios e indicadores',
        text: 'Utilize dados de chamadas e atendimento para identificar tendências e oportunidades de melhoria.',
      },
      {
        icon: 'mdi:record-rec',
        title: 'Gravação de chamadas',
        text: 'Quando aplicável ao projeto, utilize gravações como apoio à gestão, treinamento e controle de qualidade.',
      },
      {
        icon: 'mdi:database-outline',
        title: 'Integração com CRM',
        text: 'Conecte o atendimento aos sistemas utilizados pelas equipes comerciais, de suporte e relacionamento.',
      },
      {
        icon: 'mdi:api',
        title: 'APIs e integrações',
        text: 'Crie possibilidades de conexão entre o Call Center, sistemas internos e plataformas utilizadas pela empresa.',
      },
    ],
  },
  applications: {
    badge: 'Aplicações',
    title: 'Um Call Center pode apoiar diferentes áreas da empresa.',
    description:
      'A mesma infraestrutura pode ser adaptada para diferentes objetivos, desde atendimento e suporte até vendas, cobrança e relacionamento.',
    items: [
      {
        icon: 'mdi:account-heart-outline',
        title: 'Atendimento ao cliente',
        text: 'Centralize solicitações, dúvidas e demandas em uma operação organizada.',
      },
      {
        icon: 'mdi:cart-arrow-right',
        title: 'Vendas',
        text: 'Estruture equipes comerciais para receber e realizar chamadas com mais controle sobre a operação.',
      },
      {
        icon: 'mdi:tools',
        title: 'Suporte',
        text: 'Organize filas e equipes para facilitar o direcionamento de solicitações técnicas.',
      },
      {
        icon: 'mdi:cash-check',
        title: 'Cobrança',
        text: 'Estruture operações de contato ativo e receptivo para equipes responsáveis pelo relacionamento financeiro.',
      },
      {
        icon: 'mdi:calendar-check-outline',
        title: 'Agendamento',
        text: 'Facilite o gerenciamento de chamadas relacionadas a consultas, serviços, reservas e compromissos.',
      },
      {
        icon: 'mdi:account-voice',
        title: 'Relacionamento',
        text: 'Utilize a estrutura para campanhas, pesquisas de satisfação e ações de relacionamento.',
      },
    ],
  },
  process: {
    badge: 'Como funciona',
    title: 'Uma operação eficiente começa pelo diagnóstico.',
    description:
      'Cada empresa possui volume de chamadas, equipes, processos e objetivos diferentes. Por isso, a Unitel começa entendendo a realidade da operação antes de definir a arquitetura.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        text: 'Analisamos a infraestrutura, o volume de chamadas, os usuários, as equipes e os processos de atendimento.',
      },
      {
        number: '02',
        title: 'Projeto',
        text: 'Definimos os recursos e a arquitetura mais adequada aos objetivos e às necessidades da empresa.',
      },
      {
        number: '03',
        title: 'Implantação',
        text: 'Configuramos a solução, estruturamos os fluxos e integramos o ambiente à infraestrutura existente.',
      },
      {
        number: '04',
        title: 'Evolução',
        text: 'A operação pode ser ajustada e ampliada conforme surgem novos usuários, equipes, demandas e oportunidades.',
      },
    ],
  },
  region: {
    badge: 'Vitória da Conquista e sudoeste baiano',
    title: 'Atendimento eficiente para empresas que estão em movimento.',
    paragraphs: [
      'Vitória da Conquista ocupa uma posição estratégica no sudoeste da Bahia e concentra atividades empresariais, comerciais, educacionais, de saúde e serviços que conectam a cidade a municípios de toda a região.',
      'Para empresas que dependem de atendimento, vendas, suporte ou relacionamento com clientes, a comunicação deixa de ser apenas infraestrutura: ela passa a fazer parte da operação.',
    ],
    cta: { label: 'Falar com a Unitel', href: '/contato' },
    cards: [
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença regional',
        text: 'Uma estrutura de atendimento preparada para empresas que atuam em Vitória da Conquista e no sudoeste baiano.',
      },
      {
        icon: 'mdi:office-building-outline',
        title: 'Diferentes segmentos',
        text: 'Soluções para empresas e instituições que precisam organizar comunicação, atendimento e relacionamento.',
      },
      {
        icon: 'mdi:headset',
        title: 'Atendimento preparado para crescer',
        text: 'Uma arquitetura que pode acompanhar novas equipes, usuários, demandas e oportunidades.',
      },
    ],
  },
  whyUnitel: {
    badge: 'Por que a Unitel?',
    title: 'Tecnologia é importante. Experiência na operação é ainda mais.',
    paragraphs: [
      'A Unitel atua em projetos de telecomunicações, consultoria, telefonia digital IP, redes estruturadas e soluções de Call Center.',
      'Para uma empresa que precisa manter seu atendimento funcionando, isso significa contar com um parceiro capaz de olhar para a tecnologia dentro do contexto da operação.',
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
        text: 'Experiência em telecomunicações, telefonia IP, redes estruturadas e comunicação empresarial.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Soluções integradas',
        text: 'Call Center, telefonia, redes e integrações podem fazer parte de uma mesma estratégia tecnológica.',
      },
      {
        icon: 'mdi:office-building-outline',
        title: 'Diferentes segmentos',
        text: 'Experiência com instituições e empresas de saúde, educação, comércio, indústria, serviços e setor público.',
      },
    ],
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
    title: 'Dúvidas sobre Call Center?',
    description:
      'Entenda como uma solução de Call Center pode ser aplicada à realidade da sua empresa.',
    items: [
      {
        question: 'O que é um Call Center?',
        answer:
          'Call Center é uma estrutura especializada para organizar e gerenciar o atendimento telefônico de uma empresa. A solução pode reunir recursos como filas de atendimento, URA, distribuição de chamadas, gravação, relatórios e acompanhamento de indicadores, de acordo com as necessidades da operação.',
      },
      {
        question:
          'Qual é a diferença entre Call Center e uma central telefônica comum?',
        answer:
          'Uma central telefônica convencional é voltada principalmente para realizar e receber chamadas. Já uma solução de Call Center é estruturada para operações de atendimento, vendas, suporte e relacionamento, oferecendo recursos de distribuição de chamadas, gestão de filas, monitoramento e indicadores para melhorar o desempenho da equipe.',
      },
      {
        question: 'O Call Center é indicado para pequenas e médias empresas?',
        answer:
          'Sim. Uma solução de Call Center pode ser dimensionada conforme a quantidade de atendentes, volume de chamadas, canais e objetivos da empresa. Isso permite estruturar uma operação adequada ao momento atual do negócio e ampliar os recursos conforme a demanda aumenta.',
      },
      {
        question: 'Quais recursos podem fazer parte de uma solução de Call Center?',
        answer:
          'Dependendo do projeto, a solução pode incluir URA, filas de atendimento, distribuição automática de chamadas, gravação, relatórios, monitoramento, discagem, gestão de ramais, recursos de supervisão e integração com sistemas empresariais. A arquitetura é definida de acordo com o perfil da operação.',
      },
      {
        question: 'É possível integrar o Call Center ao CRM da empresa?',
        answer:
          'Sim. Uma solução de Call Center pode ser integrada a CRMs, sistemas de atendimento, plataformas comerciais e outras aplicações utilizadas pela empresa. Essas integrações podem facilitar o acesso às informações do cliente, automatizar processos e conectar a comunicação aos fluxos da operação.',
      },
      {
        question: 'Como um Call Center pode melhorar o atendimento?',
        answer:
          'A estrutura permite organizar o fluxo de chamadas, distribuir os atendimentos de acordo com regras definidas e acompanhar indicadores da operação. Com maior visibilidade sobre o atendimento, a empresa consegue identificar gargalos, melhorar processos e tomar decisões com base em dados.',
      },
      {
        question: 'O Call Center pode ser utilizado para vendas e cobrança?',
        answer:
          'Sim. A tecnologia pode atender diferentes operações, incluindo vendas, cobrança, suporte técnico, relacionamento com clientes, agendamento e atendimento receptivo. Os recursos utilizados são definidos conforme os objetivos e processos de cada empresa.',
      },
      {
        question: 'É possível acompanhar o desempenho dos atendentes?',
        answer:
          'Sim. Conforme os recursos disponíveis na solução adotada, gestores e supervisores podem acompanhar indicadores, filas, chamadas e outros dados da operação. Essas informações ajudam a identificar oportunidades de melhoria e aumentar a eficiência da equipe.',
      },
      {
        question:
          'A Unitel atende empresas de Vitória da Conquista e do sudoeste baiano?',
        answer:
          'A Unitel está sediada em Vitória da Conquista e atua com projetos de telecomunicações, telefonia digital IP, redes estruturadas e soluções de Call Center. A presença regional permite atender empresas que precisam estruturar ou modernizar suas operações de comunicação e atendimento.',
      },
    ],
  },
  finalCta: {
    badge: 'Próximo passo',
    title: 'Seu atendimento está preparado para crescer?',
    description:
      'Converse com um especialista da Unitel e descubra como estruturar um Call Center adequado ao tamanho, aos processos e aos objetivos do seu negócio.',
    primaryCta: {
      label: 'Quero estruturar meu Call Center',
      href: '/contato',
    },
    phoneLabel: '(77) 2101-3300',
    phoneHref: 'tel:+557721013300',
    footnote: 'Atendimento especializado em Vitória da Conquista e região.',
  },
} satisfies SolutionPage
