/**
 * Marketing content for the Ouvidoria Digital solution page.
 *
 * Role: Typed SSOT for `/solucoes/ouvidoria-digital` copy, hero media, and section data.
 * Not in this file: Astro markup / layout — owned by `src/pages/solucoes/ouvidoria-digital.astro`.
 * Key dependencies: None
 * See also: src/data/solucoes/README.md, src/types/solucao.ts
 */

import ouvidoriaDigitalImage from '@/assets/images/acolher-mais.avif'
import type { SolutionPage } from '@/types/solucao'

export const ouvidoriaDigitalPage = {
  slug: 'ouvidoria-digital',
  name: 'Ouvidoria Digital',
  navDescription: 'Canal digital para manifestações e relacionamento',
  navIcon: 'mdi:account-voice',
  meta: {
    title: 'Ouvidoria Digital em Vitória da Conquista | Unitel Telecom',
    description:
      'Ouvidoria Digital para empresas e instituições em Vitória da Conquista e no sudoeste baiano. Mais escuta, transparência, rastreabilidade, gestão e confiança no relacionamento com seus públicos.',
    canonicalPath: '/solucoes/ouvidoria-digital',
  },
  serviceType: 'Ouvidoria Digital',
  serviceDescription:
    'Canal digital institucional para organização de manifestações, escuta qualificada, transparência e melhoria contínua dos serviços.',
  areaServed: 'Vitória da Conquista e sudoeste da Bahia',
  hero: {
    badge: 'Canal institucional de escuta e relacionamento',
    titleBefore: 'Ouça quem faz parte da sua organização e transforme',
    titleHighlight: ' manifestações em evolução.',
    description:
      'A Ouvidoria Digital da Unitel ajuda empresas e instituições a estruturar um canal de escuta mais organizado, transparente e rastreável, fortalecendo o relacionamento com clientes, usuários, colaboradores e demais públicos.',
    primaryCta: { label: 'Falar com um especialista', href: '/contato' },
    secondaryCta: { label: 'Conhecer a solução', href: '#beneficios' },
    chips: [
      { icon: 'mdi:account-voice', label: 'Escuta' },
      { icon: 'mdi:clipboard-text-outline', label: 'Rastreabilidade' },
      { icon: 'mdi:chart-line', label: 'Gestão' },
      { icon: 'mdi:shield-check-outline', label: 'Confiança' },
    ],
    image: ouvidoriaDigitalImage,
    imageAlt: 'Solução de Ouvidoria Digital da Unitel',
    imageCard: {
      icon: 'mdi:message-text-outline',
      title: 'Ouvidoria Digital',
      subtitle: 'Escutar. Registrar. Analisar. Melhorar.',
    },
    floatLeft: {
      icon: 'mdi:ear-hearing',
      title: 'Escuta qualificada',
      subtitle: 'Mais proximidade com seus públicos',
    },
    floatRight: {
      icon: 'mdi:chart-box-outline',
      title: 'Mais gestão',
      subtitle: 'Informação para melhorar processos',
    },
  },
  challenge: {
    id: 'solucao',
    badge: 'O desafio',
    title:
      'Sua organização realmente consegue ouvir, acompanhar e aprender com cada manifestação?',
    description:
      'Reclamações, sugestões, elogios, denúncias e solicitações podem revelar problemas que nem sempre aparecem nos indicadores tradicionais. Quando não existe um processo estruturado para receber e tratar essas manifestações, informações importantes podem se perder.',
    cards: [
      {
        icon: 'mdi:message-alert-outline',
        title: 'Manifestações dispersas',
        text: 'Informações recebidas por diferentes canais podem dificultar a organização, o acompanhamento e a identificação dos problemas recorrentes.',
      },
      {
        icon: 'mdi:magnify',
        title: 'Pouca visibilidade',
        text: 'Sem rastreabilidade adequada, gestores podem ter dificuldade para entender o volume, a natureza e a evolução das demandas.',
      },
      {
        icon: 'mdi:clock-alert-outline',
        title: 'Tratamento pouco estruturado',
        text: 'Quando não há fluxos definidos, o tratamento das manifestações pode se tornar lento, inconsistente ou difícil de acompanhar.',
      },
      {
        icon: 'mdi:shield-alert-outline',
        title: 'Risco para a reputação',
        text: 'Uma manifestação sem resposta ou acompanhamento adequado pode afetar a confiança do público e a percepção sobre a organização.',
      },
    ],
  },
  compare: {
    badge: 'Uma nova forma de ouvir',
    title: 'Da manifestação isolada para uma jornada de escuta e gestão.',
    description:
      'A Ouvidoria Digital organiza o relacionamento entre a organização e seus públicos, transformando manifestações em informações que podem apoiar decisões, melhorias e ações de relacionamento.',
    beforeLabel: 'Sem uma ouvidoria estruturada',
    beforeItems: [
      'Informações espalhadas em diferentes canais',
      'Baixa rastreabilidade das manifestações',
      'Dificuldade para identificar recorrências',
      'Processos de resposta pouco padronizados',
      'Menos informação para a gestão',
    ],
    afterLabel: 'Com Ouvidoria Digital',
    afterItems: [
      'Canal estruturado de escuta',
      'Registro e acompanhamento das manifestações',
      'Mais visibilidade sobre demandas recorrentes',
      'Processos mais organizados de tratamento',
      'Informação para melhoria contínua',
    ],
  },
  benefits: {
    id: 'beneficios',
    badge: 'Benefícios',
    title: 'Mais do que um canal de atendimento. Uma ferramenta de gestão.',
    description:
      'Uma ouvidoria eficiente aproxima a organização dos seus públicos e cria uma fonte estruturada de informações para compreender problemas, oportunidades e necessidades.',
    items: [
      {
        icon: 'mdi:ear-hearing',
        title: 'Escuta qualificada',
        text: 'Crie um espaço institucional para receber manifestações e compreender melhor a percepção dos públicos sobre a organização.',
      },
      {
        icon: 'mdi:clipboard-check-outline',
        title: 'Rastreabilidade',
        text: 'Tenha maior controle sobre o registro, encaminhamento e acompanhamento das manifestações recebidas.',
      },
      {
        icon: 'mdi:chart-line',
        title: 'Informação para gestão',
        text: 'Identifique padrões, recorrências e pontos de atenção que podem apoiar decisões e melhorias nos processos.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Transparência',
        text: 'Fortaleça uma cultura de diálogo, responsabilidade e transparência no relacionamento com clientes, usuários e demais públicos.',
      },
      {
        icon: 'mdi:account-heart-outline',
        title: 'Relacionamento',
        text: 'Demonstre que a organização está preparada para ouvir, acolher e tratar as manifestações de seus públicos com responsabilidade.',
      },
      {
        icon: 'mdi:trending-up',
        title: 'Melhoria contínua',
        text: 'Use as manifestações como fonte de aprendizado para aprimorar serviços, processos e experiências.',
      },
    ],
  },
  resources: {
    badge: 'Recursos',
    title: 'Uma estrutura para acolher, organizar e acompanhar.',
    description:
      'A Ouvidoria Digital deve fazer parte de uma estratégia maior de relacionamento e gestão, conectando as manifestações aos responsáveis pelo tratamento e às necessidades da organização.',
    aside: {
      icon: 'mdi:message-processing-outline',
      title: 'Toda manifestação pode gerar uma oportunidade de melhoria.',
      text: 'O valor da ouvidoria não está apenas em receber demandas, mas em transformar aquilo que é ouvido em informação útil para a organização.',
    },
    featuredIndex: 0,
    items: [
      {
        icon: 'mdi:message-text-outline',
        title: 'Recebimento de manifestações',
        text: 'Estruture um canal institucional para receber reclamações, sugestões, elogios, solicitações e outras manifestações dos públicos da organização.',
      },
      {
        icon: 'mdi:tag-outline',
        title: 'Classificação',
        text: 'Organize as manifestações por categorias, assuntos ou critérios definidos de acordo com a realidade da operação.',
      },
      {
        icon: 'mdi:account-arrow-right-outline',
        title: 'Encaminhamento',
        text: 'Direcione cada manifestação aos responsáveis pelo tratamento conforme o assunto e o fluxo definido pela organização.',
      },
      {
        icon: 'mdi:timeline-check-outline',
        title: 'Acompanhamento',
        text: 'Acompanhe o andamento das demandas e tenha mais visibilidade sobre o tratamento realizado.',
      },
      {
        icon: 'mdi:chart-box-outline',
        title: 'Indicadores e relatórios',
        text: 'Transforme os registros em informações que apoiem a análise da operação e a tomada de decisões.',
      },
      {
        icon: 'mdi:shield-lock-outline',
        title: 'Segurança e controle',
        text: 'Estruture o tratamento das informações considerando os requisitos de segurança, privacidade e governança aplicáveis ao projeto.',
      },
    ],
  },
  process: {
    badge: 'Como funciona',
    title: 'Uma boa ouvidoria começa com um processo bem definido.',
    description:
      'A tecnologia organiza o fluxo, mas o resultado depende também de regras, responsabilidades, critérios de tratamento e compromisso da organização com a escuta.',
    steps: [
      {
        number: '01',
        title: 'Recebimento',
        text: 'O público registra sua manifestação por meio do canal definido pela organização.',
      },
      {
        number: '02',
        title: 'Análise',
        text: 'A manifestação é organizada, classificada e encaminhada conforme seu conteúdo e prioridade.',
      },
      {
        number: '03',
        title: 'Tratamento',
        text: 'As áreas responsáveis avaliam a demanda e realizam as ações necessárias para seu tratamento.',
      },
      {
        number: '04',
        title: 'Aprendizado',
        text: 'Os dados gerados ajudam a identificar oportunidades de melhoria e apoiar decisões futuras.',
      },
    ],
  },
  region: {
    badge: 'Vitória da Conquista e sudoeste baiano',
    title:
      'Organizações que atendem pessoas precisam estar preparadas para ouvir.',
    paragraphs: [
      'Empresas, hospitais, instituições de ensino, organizações do terceiro setor e órgãos públicos lidam diariamente com diferentes públicos, necessidades e expectativas.',
      'Uma Ouvidoria Digital ajuda a transformar esse relacionamento em um processo mais organizado, transparente e útil para a gestão.',
    ],
    cta: { label: 'Falar com a Unitel', href: '/contato' },
    cards: [
      {
        icon: 'mdi:account-group-outline',
        title: 'Diferentes públicos',
        text: 'Clientes, pacientes, alunos, colaboradores, usuários, fornecedores e cidadãos podem gerar informações importantes para a organização.',
      },
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença regional',
        text: 'Uma solução para organizações de Vitória da Conquista e de toda a região que precisam fortalecer seus canais de escuta.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Relacionamento com responsabilidade',
        text: 'Uma estrutura de ouvidoria ajuda a fortalecer a confiança e a demonstrar compromisso com a escuta e o tratamento das manifestações.',
      },
    ],
  },
  whyUnitel: {
    badge: 'Por que a Unitel?',
    title: 'Tecnologia precisa estar conectada à realidade da organização.',
    paragraphs: [
      'A Unitel atua em projetos de telecomunicações, comunicação empresarial, redes estruturadas, telefonia IP e soluções de atendimento.',
      'Essa experiência permite pensar a Ouvidoria Digital não apenas como um canal isolado, mas como parte de uma estrutura maior de comunicação, atendimento, gestão e relacionamento.',
    ],
    cards: [
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença local',
        text: 'Sediada em Vitória da Conquista, a Unitel está próxima das empresas e instituições que atende na região.',
      },
      {
        icon: 'mdi:cogs',
        title: 'Conhecimento técnico',
        text: 'Experiência em telecomunicações, telefonia IP, redes e comunicação empresarial.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Soluções integradas',
        text: 'Ouvidoria, atendimento, telefonia, mobilidade e infraestrutura podem fazer parte de uma estratégia tecnológica integrada.',
      },
      {
        icon: 'mdi:office-building-outline',
        title: 'Experiência empresarial',
        text: 'Projetos voltados para organizações de diferentes portes e segmentos, com necessidades distintas de comunicação e gestão.',
      },
    ],
  },
  faq: {
    title: 'Dúvidas sobre Ouvidoria Digital?',
    description:
      'Entenda como uma estrutura digital de ouvidoria pode fortalecer a escuta, a transparência e a gestão da sua organização.',
    items: [
      {
        question: 'O que é Ouvidoria Digital?',
        answer:
          'Ouvidoria Digital é uma solução que organiza o recebimento, registro e acompanhamento de manifestações de clientes, usuários, colaboradores e demais públicos da organização. Ela cria um canal estruturado para ouvir demandas, sugestões, reclamações, elogios e outras solicitações.',
      },
      {
        question: 'Qual é a diferença entre Ouvidoria e atendimento convencional?',
        answer:
          'A Ouvidoria atua como um canal estruturado para manifestações que precisam de registro, análise e acompanhamento. Enquanto o atendimento convencional busca resolver demandas do dia a dia, a Ouvidoria também contribui para identificar recorrências, oportunidades de melhoria e pontos de atenção na experiência do público.',
      },
      {
        question: 'Quais tipos de manifestações podem ser recebidos?',
        answer:
          'A solução pode ser utilizada para receber diferentes tipos de manifestações, como reclamações, solicitações, sugestões, elogios, denúncias e pedidos de informação, conforme os fluxos e regras definidos pela organização.',
      },
      {
        question: 'A Ouvidoria Digital ajuda a organizar as manifestações?',
        answer:
          'Sim. A digitalização permite estruturar o recebimento e o acompanhamento das manifestações de acordo com os processos da organização. Isso facilita o controle das demandas, a distribuição para as áreas responsáveis e o acompanhamento de cada caso.',
      },
      {
        question: 'É possível acompanhar o andamento de uma manifestação?',
        answer:
          'Dependendo da configuração adotada, a solução pode oferecer recursos para registro e acompanhamento das manifestações, permitindo maior visibilidade sobre o tratamento das demandas e sobre as etapas envolvidas no processo.',
      },
      {
        question: 'A Ouvidoria Digital pode ser utilizada por empresas?',
        answer:
          'Sim. Empresas de diferentes segmentos podem utilizar uma estrutura de Ouvidoria Digital para criar um canal organizado de escuta e relacionamento com clientes, colaboradores, fornecedores e outros públicos de interesse.',
      },
      {
        question: 'A Ouvidoria Digital pode ajudar na melhoria dos processos?',
        answer:
          'Sim. Quando as manifestações são registradas e analisadas de forma estruturada, elas podem gerar informações importantes sobre problemas recorrentes, insatisfações e oportunidades de melhoria. Esses dados podem apoiar decisões e aperfeiçoamentos nos processos da organização.',
      },
      {
        question: 'A solução pode ser adaptada aos processos da organização?',
        answer:
          'A estrutura da Ouvidoria Digital pode ser planejada de acordo com as necessidades, fluxos de atendimento e características da organização. A definição dos canais, etapas, responsáveis e formas de acompanhamento deve considerar o contexto de cada projeto.',
      },
      {
        question:
          'Qual é a relação entre Ouvidoria Digital e experiência do cliente?',
        answer:
          'A Ouvidoria cria um espaço estruturado para ouvir o público e compreender suas percepções. Ao transformar manifestações em informações para análise, a organização pode identificar pontos de atrito, acompanhar demandas e buscar melhorias na experiência oferecida.',
      },
      {
        question: 'A Unitel oferece Ouvidoria Digital em Vitória da Conquista?',
        answer:
          'Sim. A Unitel oferece soluções de Ouvidoria Digital para organizações que buscam estruturar seus canais de escuta, registro e acompanhamento de manifestações. A solução pode ser avaliada de acordo com os processos e necessidades de cada empresa ou instituição.',
      },
    ],
  },
  finalCta: {
    badge: 'Próximo passo',
    title: 'Sua organização está preparada para ouvir melhor?',
    description:
      'Converse com um especialista da Unitel e descubra como estruturar uma Ouvidoria Digital adequada à realidade, aos públicos e aos processos da sua organização.',
    primaryCta: {
      label: 'Quero estruturar minha ouvidoria',
      href: '/contato',
    },
    phoneLabel: '(77) 2101-3300',
    phoneHref: 'tel:+557721013300',
    footnote: 'Atendimento especializado em Vitória da Conquista e região.',
  },
} satisfies SolutionPage
