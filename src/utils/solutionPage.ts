import { absoluteUrl } from '@/data/site'
import { breadcrumbGenerator } from '@/seo/breadcrumb'
import { buildFaqPageSchema } from '@/seo/builders/faqPage'
import { buildServicePageSchema } from '@/seo/builders/servicePage'
import type { SolutionPage } from '@/types/solucao'

function imageMimeType(imageUrl: string): string {
  const path = imageUrl.split('?')[0]?.toLowerCase() ?? ''
  if (path.endsWith('.webp')) return 'image/webp'
  if (path.endsWith('.avif')) return 'image/avif'
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg'
  if (path.endsWith('.svg')) return 'image/svg+xml'
  return 'image/png'
}

/** Assembles head meta + JSON-LD for a data-driven solution page. */
export function buildSolutionPageHead(page: SolutionPage, imageUrl: string) {
  const breadcrumb = breadcrumbGenerator([
    { name: 'Soluções', url: absoluteUrl('/solucoes') },
    { name: page.name, url: absoluteUrl(page.meta.canonicalPath) },
  ])

  return {
    title: page.meta.title,
    description: page.meta.description,
    image: imageUrl,
    imageType: imageMimeType(imageUrl),
    imageWidth: page.hero.image.width || 1200,
    imageHeight: page.hero.image.height || 630,
    canonicalUrl: absoluteUrl(page.meta.canonicalPath),
    jsonLdSchemas: [
      buildServicePageSchema(page),
      buildFaqPageSchema(page.faq.items),
      breadcrumb,
    ],
  }
}
