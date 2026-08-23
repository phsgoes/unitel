/**
 * Marketing content for the Redes Estruturadas solution page.
 *
 * Role: Typed SSOT for `/solucoes/redes-estruturadas` copy, hero media, and section data.
 * Not in this file: Astro markup / layout — owned by `src/pages/solucoes/redes-estruturadas.astro`.
 * Key dependencies: None
 * See also: src/data/solucoes/README.md, src/types/solucao.ts
 */

import redesEstruturadasImage from '@/assets/images/redes-estruturadas.avif'
import { portfolioClientNames } from '@/data/portfolio-clients'
import type { SolutionPage } from '@/types/solucao'

export const redesEstruturadasPage = {
  slug: 'redes-estruturadas',
  name: 'Redes Estruturadas',
  navDescription: 'Infraestrutura de rede segura e organizada',
  navIcon: 'mdi:lan-connect',
  meta: {
    title: 'Redes Estruturadas em Vitória da Conquista | Unitel Telecom',
    description:
      'Redes estruturadas empresariais em Vitória da Conquista e no sudoeste baiano. Mais organização, desempenho, segurança, escalabilidade e confiabilidade para a infraestrutura de TI da sua empresa.',
    canonicalPath: '/solucoes/redes-estruturadas',
  },
  serviceType: 'Infraestrutura e Redes Estruturadas',
  serviceDescription:
    'Projetos de redes estruturadas empresariais com foco em conectividade, organização, desempenho, segurança e expansão.',
  areaServed: 'Vitória da Conquista e sudoeste da Bahia',
  hero: {
    badge: 'Solução de infraestrutura empresarial',
    titleBefore: 'Redes estruturadas para uma empresa que ',
    titleHighlight: 'precisa de uma infraestrutura preparada para crescer.',
    description:
      'Uma rede bem projetada é a base para que computadores, sistemas, servidores, telefonia, dispositivos e equipes trabalhem de forma conectada. Com as soluções de Redes Estruturadas da Unitel, sua empresa ganha mais organização, desempenho, segurança e flexibilidade para sustentar a operação.',
    primaryCta: { label: 'Falar com um especialista', href: '/contato' },
    secondaryCta: { label: 'Conhecer a solução', href: '#beneficios' },
    chips: [
      { icon: 'mdi:format-list-bulleted', label: 'Organização' },
      { icon: 'mdi:speedometer', label: 'Desempenho' },
      { icon: 'mdi:shield-check-outline', label: 'Segurança' },
      { icon: 'mdi:chart-line', label: 'Escalabilidade' },
    ],
    image: redesEstruturadasImage,
    imageAlt: 'Infraestrutura de Redes Estruturadas empresariais da Unitel',
    imageCard: {
      icon: 'mdi:lan-connect',
      title: 'Infraestrutura de rede empresarial',
      subtitle: 'Mais organização. Mais desempenho. Mais possibilidades.',
    },
    floatLeft: {
      icon: 'mdi:clipboard-check-outline',
      title: 'Planejada',
      subtitle: 'Para as necessidades da empresa',
    },
    floatRight: {
      icon: 'mdi:check-decagram-outline',
      title: 'Escalável',
      subtitle: 'Preparada para acompanhar o crescimento',
    },
  },
  challenge: {
    id: 'solucao',
    badge: 'O desafio',
    title:
      'Sua empresa ainda depende de uma rede que não acompanha a sua operação?',
    description:
      'A infraestrutura de rede está presente em praticamente todos os processos de uma empresa. Quando ela cresce sem planejamento, adaptações improvisadas e instalações desorganizadas podem comprometer o desempenho, dificultar a manutenção e limitar novas possibilidades.',
    cards: [
      {
        icon: 'mdi:ethernet-cable-off',
        title: 'Instalação desorganizada',
        text: 'Cabos, pontos e equipamentos sem uma estrutura adequada tornam a identificação de problemas, a manutenção e futuras expansões mais complexas.',
      },
      {
        icon: 'mdi:speedometer-slow',
        title: 'Desempenho inconsistente',
        text: 'Uma infraestrutura inadequada pode prejudicar a comunicação entre dispositivos, o acesso aos sistemas e a produtividade das equipes.',
      },
      {
        icon: 'mdi:vector-polyline',
        title: 'Pouca flexibilidade',
        text: 'Novos usuários, equipamentos, setores e ambientes exigem uma rede capaz de acompanhar mudanças sem depender de soluções improvisadas.',
      },
      {
        icon: 'mdi:wrench-cog-outline',
        title: 'Manutenção mais complexa',
        text: 'Quando não existe padronização e documentação adequada, localizar pontos, identificar conexões e realizar intervenções pode consumir mais tempo.',
      },
    ],
  },
  compare: {
    badge: 'Uma nova arquitetura',
    title:
      'Da rede improvisada para uma infraestrutura pensada para o negócio.',
    description:
      'Uma Rede Estruturada organiza a infraestrutura física de comunicação da empresa de forma padronizada, permitindo conectar diferentes ambientes, equipamentos e sistemas com mais previsibilidade.',
    beforeLabel: 'Estrutura convencional',
    beforeItems: [
      'Cabeamento instalado sem padronização',
      'Dificuldade para identificar pontos e conexões',
      'Expansões mais complexas',
      'Maior dependência de adaptações',
      'Manutenção menos previsível',
    ],
    afterLabel: 'Com Rede Estruturada',
    afterItems: [
      'Cabeamento organizado e padronizado',
      'Pontos identificados e documentados',
      'Expansão mais planejada',
      'Infraestrutura preparada para novas demandas',
      'Mais facilidade de manutenção e gestão',
    ],
  },
  benefits: {
    id: 'beneficios',
    badge: 'Benefícios',
    title: 'Uma infraestrutura que trabalha a favor da sua operação.',
    description:
      'Rede estruturada não é apenas organização de cabos. É uma infraestrutura planejada para oferecer uma base mais confiável para os recursos tecnológicos que fazem parte do dia a dia da empresa.',
    items: [
      {
        icon: 'mdi:format-list-bulleted',
        title: 'Mais organização',
        text: 'Tenha uma infraestrutura padronizada, identificada e planejada para facilitar a utilização, manutenção e expansão da rede.',
      },
      {
        icon: 'mdi:speedometer',
        title: 'Melhor desempenho',
        text: 'Uma instalação adequada contribui para uma comunicação mais eficiente entre os dispositivos conectados à infraestrutura.',
      },
      {
        icon: 'mdi:chart-line',
        title: 'Escalabilidade',
        text: 'Prepare a rede para receber novos usuários, equipamentos, setores e tecnologias conforme a empresa evolui.',
      },
      {
        icon: 'mdi:wrench-cog-outline',
        title: 'Facilidade de manutenção',
        text: 'Uma infraestrutura organizada facilita a identificação dos pontos e conexões, tornando intervenções futuras mais simples.',
      },
      {
        icon: 'mdi:shield-check-outline',
        title: 'Segurança da infraestrutura',
        text: 'Conte com uma estrutura física planejada considerando organização, proteção e controle dos componentes da rede.',
      },
      {
        icon: 'mdi:check-decagram-outline',
        title: 'Mais confiabilidade',
        text: 'Reduza a dependência de improvisos e tenha uma infraestrutura desenvolvida de acordo com as necessidades da operação.',
      },
    ],
  },
  resources: {
    badge: 'Recursos',
    title: 'Mais do que cabeamento. Uma infraestrutura de comunicação.',
    description:
      'Uma Rede Estruturada deve considerar o ambiente, os equipamentos, a quantidade de usuários, os sistemas utilizados e as necessidades futuras da empresa.',
    aside: {
      icon: 'mdi:lan-check',
      title: 'A solução certa começa pelo diagnóstico.',
      text: 'A Unitel avalia o ambiente e as necessidades da empresa antes de definir a arquitetura adequada.',
    },
    featuredIndex: 0,
    items: [
      {
        icon: 'mdi:ethernet-cable',
        title: 'Cabeamento estruturado',
        text: 'Organize a infraestrutura de comunicação com cabeamento planejado, identificação dos pontos e padronização da instalação.',
      },
      {
        icon: 'mdi:lan',
        title: 'Pontos de rede',
        text: 'Defina e distribua pontos de conectividade de acordo com os ambientes, equipamentos e necessidades de cada setor.',
      },
      {
        icon: 'mdi:server',
        title: 'Racks e organização',
        text: 'Centralize equipamentos e conexões em uma estrutura organizada, facilitando o acesso, a manutenção e a identificação dos componentes.',
      },
      {
        icon: 'mdi:table-network',
        title: 'Patch panels',
        text: 'Organize as conexões de rede de forma padronizada, permitindo maior controle sobre os pontos instalados.',
      },
      {
        icon: 'mdi:check-network-outline',
        title: 'Certificação de cabeamento',
        text: 'Quando aplicável ao projeto, realize testes e certificações para verificar o desempenho do cabeamento instalado.',
      },
      {
        icon: 'mdi:tag-outline',
        title: 'Organização e identificação',
        text: 'Tenha uma infraestrutura em que cabos, pontos e conexões possam ser identificados com mais facilidade.',
      },
      {
        icon: 'mdi:arrow-expand-all',
        title: 'Expansão da infraestrutura',
        text: 'Projete a rede considerando novas posições de trabalho, equipamentos, setores e possíveis mudanças na operação.',
      },
      {
        icon: 'mdi:devices',
        title: 'Integração com tecnologia',
        text: 'Prepare a infraestrutura para suportar diferentes recursos tecnológicos utilizados pela empresa, conforme as características do projeto.',
      },
    ],
  },
  process: {
    badge: 'Como funciona',
    title: 'Uma boa rede começa antes da passagem do primeiro cabo.',
    description:
      'Uma infraestrutura de qualidade depende de planejamento. Por isso, o projeto deve considerar as características físicas do ambiente, a operação da empresa, os equipamentos utilizados e as necessidades futuras.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        text: 'Entendemos o ambiente, a infraestrutura existente, a quantidade de usuários, os equipamentos e as necessidades da empresa.',
      },
      {
        number: '02',
        title: 'Projeto',
        text: 'Definimos a arquitetura da rede, a distribuição dos pontos, o cabeamento e os componentes necessários para o projeto.',
      },
      {
        number: '03',
        title: 'Implantação',
        text: 'Realizamos a instalação e organização da infraestrutura de acordo com o planejamento definido.',
      },
      {
        number: '04',
        title: 'Evolução',
        text: 'A estrutura pode acompanhar novas necessidades, ambientes, usuários e tecnologias conforme a empresa cresce.',
      },
    ],
  },
  region: {
    badge: 'Vitória da Conquista e sudoeste baiano',
    title:
      'Uma região dinâmica precisa de uma infraestrutura à altura da sua operação.',
    paragraphs: [
      'Vitória da Conquista ocupa uma posição estratégica no sudoeste da Bahia e concentra empresas, instituições de saúde, escolas, universidades, estabelecimentos comerciais, indústrias e organizações de serviços que dependem cada vez mais da tecnologia.',
      'Para essas empresas, a rede deixou de ser apenas uma estrutura para conectar computadores. Ela passou a sustentar sistemas, comunicação, atendimento, acesso a informações, dispositivos e diferentes processos do negócio.',
    ],
    cta: { label: 'Falar com a Unitel', href: '/contato' },
    cards: [
      {
        icon: 'mdi:map-marker-outline',
        title: 'Presença regional',
        text: 'Uma solução de infraestrutura pensada para empresas que atuam em Vitória da Conquista e no sudoeste baiano.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Infraestrutura empresarial',
        text: 'Redes preparadas para conectar usuários, equipamentos, sistemas e ambientes de acordo com as necessidades de cada projeto.',
      },
      {
        icon: 'mdi:chart-timeline-variant',
        title: 'Crescimento planejado',
        text: 'Uma estrutura que pode ser projetada considerando novas posições, equipamentos, setores e futuras expansões.',
      },
    ],
  },
  whyUnitel: {
    badge: 'Por que a Unitel?',
    title:
      'Tecnologia é importante. Experiência na infraestrutura é ainda mais.',
    paragraphs: [
      'A Unitel atua em projetos de telecomunicações, consultoria, telefonia digital IP, redes estruturadas e soluções de Call Center.',
      'Para uma empresa que depende da conectividade para trabalhar, isso significa contar com um parceiro capaz de enxergar a rede como parte da infraestrutura tecnológica do negócio.',
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
        text: 'Experiência em telecomunicações, redes estruturadas, telefonia IP e infraestrutura de comunicação empresarial.',
      },
      {
        icon: 'mdi:lan-connect',
        title: 'Soluções integradas',
        text: 'Redes, telefonia, comunicação e outras soluções de infraestrutura podem fazer parte de uma mesma estratégia tecnológica.',
      },
      {
        icon: 'mdi:office-building-outline',
        title: 'Experiência em diferentes segmentos',
        text: 'A Unitel apresenta em seu portfólio instituições de saúde, educação, comércio, indústria, serviços e setor público.',
      },
    ],
  },
  clients: {
    badge: 'Experiência regional',
    title: 'Infraestrutura crítica exige confiança.',
    description:
      'A Unitel apresenta em seu portfólio instituições e empresas de diferentes segmentos que fazem parte da sua trajetória.',
    names: portfolioClientNames,
    footnote:
      'Empresas e instituições listadas no portfólio público da Unitel.',
  },
  faq: {
    title: 'Dúvidas sobre Redes Estruturadas?',
    description:
      'Entenda como uma infraestrutura de rede pode ser aplicada à realidade da sua empresa.',
    items: [
      {
        question: 'O que são redes estruturadas?',
        answer:
          'Redes estruturadas são infraestruturas de cabeamento e conectividade projetadas de forma organizada e padronizada para atender computadores, telefones IP, servidores, pontos de acesso, sistemas de segurança e outros dispositivos de uma empresa. O projeto adequado facilita a gestão, manutenção, expansão e desempenho da rede.',
      },
      {
        question: 'Por que uma empresa precisa de uma rede estruturada?',
        answer:
          'Uma rede estruturada cria uma base organizada para os sistemas de comunicação e tecnologia da empresa. Quando corretamente dimensionada e instalada, ela contribui para maior confiabilidade, organização, facilidade de manutenção e capacidade de acompanhar o crescimento da operação.',
      },
      {
        question:
          'Qual é a diferença entre uma rede estruturada e uma instalação de cabos convencional?',
        answer:
          'Uma rede estruturada segue critérios de planejamento, organização, identificação, padronização e distribuição dos pontos de rede. Isso facilita a manutenção e permite que a infraestrutura seja utilizada por diferentes sistemas e tecnologias, reduzindo a necessidade de novas instalações a cada mudança na operação.',
      },
      {
        question: 'Quais equipamentos podem utilizar uma rede estruturada?',
        answer:
          'Uma infraestrutura de rede pode atender computadores, impressoras, telefones IP, servidores, pontos de acesso Wi-Fi, câmeras, sistemas de controle de acesso e outros dispositivos conectados. O dimensionamento depende das tecnologias utilizadas e das necessidades de cada ambiente.',
      },
      {
        question:
          'A rede estruturada pode atender Telefonia IP e outros sistemas?',
        answer:
          'Sim. Uma rede estruturada pode servir como base para diferentes sistemas de comunicação e tecnologia, incluindo Telefonia IP, computadores, Wi-Fi, câmeras e outras soluções conectadas. O projeto deve considerar requisitos de capacidade, desempenho, organização e disponibilidade de cada aplicação.',
      },
      {
        question:
          'Uma rede estruturada pode acompanhar o crescimento da empresa?',
        answer:
          'Sim. Um dos principais objetivos de um projeto estruturado é criar uma infraestrutura preparada para expansão. Com planejamento adequado, novos usuários, setores, equipamentos e pontos de rede podem ser incorporados com mais organização e menor impacto sobre a operação existente.',
      },
      {
        question:
          'A rede estruturada melhora o desempenho da internet da empresa?',
        answer:
          'Uma infraestrutura de cabeamento adequada pode contribuir para que os dispositivos aproveitem corretamente a capacidade disponível na rede. O desempenho final, entretanto, também depende de switches, roteadores, pontos de acesso, servidores, links de internet e do dimensionamento geral da infraestrutura.',
      },
      {
        question: 'A rede estruturada ajuda na manutenção da infraestrutura?',
        answer:
          'Sim. A organização e identificação dos pontos, cabos e equipamentos facilita diagnósticos, alterações e manutenção. Uma infraestrutura documentada e padronizada também reduz o tempo necessário para localizar problemas e realizar futuras expansões.',
      },
      {
        question:
          'A Unitel instala redes estruturadas em Vitória da Conquista e região?',
        answer:
          'A Unitel está sediada em Vitória da Conquista e atua com projetos de telecomunicações, redes estruturadas, telefonia digital IP e soluções de comunicação empresarial. A empresa pode avaliar a infraestrutura e as necessidades da organização para definir uma arquitetura adequada ao ambiente e à operação.',
      },
    ],
  },
  finalCta: {
    badge: 'Próximo passo',
    title: 'Sua empresa está pronta para organizar a infraestrutura de rede?',
    description:
      'Converse com um especialista da Unitel e descubra como estruturar uma Rede Estruturada adequada ao tamanho, à operação e aos objetivos do seu negócio.',
    primaryCta: {
      label: 'Quero estruturar minha rede',
      href: '/contato',
    },
    phoneLabel: '(77) 2101-3300',
    phoneHref: 'tel:+557721013300',
    footnote: 'Atendimento especializado em Vitória da Conquista e região.',
  },
} satisfies SolutionPage
