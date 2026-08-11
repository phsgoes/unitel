import type { ImageMetadata } from 'astro'

export interface FaqItem {
  question: string
  answer: string
}

export interface IconItem {
  icon: string
  title: string
  text: string
}

export interface ChipItem {
  icon: string
  label: string
}

export interface FloatCard {
  icon: string
  title: string
  subtitle: string
}

export interface ProcessStep {
  number: string
  title: string
  text: string
}

export interface CtaLink {
  label: string
  href: string
}

export interface PageMeta {
  title: string
  description: string
  /** Path under the site, e.g. `/solucoes/telefonia-ip`. */
  canonicalPath: string
}

export interface SolutionHero {
  badge: string
  titleBefore: string
  titleHighlight: string
  titleAfter?: string
  description: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
  chips: ChipItem[]
  image: ImageMetadata
  imageAlt: string
  imageCard: FloatCard
  floatLeft?: FloatCard
  floatRight?: FloatCard
}

export interface ChallengeSection {
  id?: string
  badge: string
  title: string
  description: string
  cards: IconItem[]
}

export interface CompareSection {
  badge: string
  title: string
  description: string
  beforeLabel: string
  beforeItems: string[]
  afterLabel: string
  afterItems: string[]
}

export interface BenefitsSection {
  id?: string
  badge: string
  title: string
  description: string
  items: IconItem[]
}

export interface ResourcesSection {
  badge: string
  title: string
  description: string
  aside: IconItem
  items: IconItem[]
  /** Index of the item that spans two columns. Omit when no card should span. */
  featuredIndex?: number
}

export interface ProcessSection {
  badge: string
  title: string
  description: string
  steps: ProcessStep[]
}

export interface RegionStatCard {
  icon: string
  value?: string
  title?: string
  text: string
}

export interface RegionSection {
  badge: string
  title: string
  paragraphs: string[]
  cta: CtaLink
  cards: RegionStatCard[]
}

export interface WhyUnitelSection {
  badge: string
  title: string
  paragraphs: string[]
  cards: IconItem[]
}

export interface ClientsSection {
  badge: string
  title: string
  description: string
  names: string[]
  footnote: string
}

export interface FaqSection {
  title: string
  description: string
  items: FaqItem[]
}

export interface FinalCtaSection {
  badge: string
  title: string
  description: string
  primaryCta: CtaLink
  phoneLabel: string
  phoneHref: string
  footnote: string
}

export interface ApplicationSection {
  badge: string
  title: string
  description: string
  items: IconItem[]
}

export interface PricingPlan {
  name: string
  capacity: string
  /** Short audience line shown above the body (e.g. “Para pequenas empresas”). */
  audience?: string
  description: string
  features: string[]
  highlighted?: boolean
  highlightLabel?: string
  ctaLabel: string
  ctaHref: string
}

export interface PricingSection {
  id?: string
  badge: string
  title: string
  description: string
  plans: PricingPlan[]
  comparison?: {
    headers: string[]
    rows: { feature: string; values: string[] }[]
  }
  footnote?: string
}

export interface SolutionPage {
  slug: string
  name: string
  navDescription: string
  navIcon: string
  meta: PageMeta
  serviceType: string
  serviceDescription: string
  areaServed: string
  hero: SolutionHero
  challenge: ChallengeSection
  compare: CompareSection
  benefits: BenefitsSection
  resources: ResourcesSection
  process: ProcessSection
  region: RegionSection
  whyUnitel: WhyUnitelSection
  clients?: ClientsSection
  applications?: ApplicationSection
  pricing?: PricingSection
  faq: FaqSection
  finalCta: FinalCtaSection
}
