import { trackEvent } from './google'

export const analytics = {
  linkClick({ url, text, location, type }: { url: string; text?: string; location?: string; type?: string }) {
    trackEvent('link_click', {
      link_url: url,
      link_text: text,
      page_location: location,
      link_type: type,
    })
  },

  ctaClick(params: { name: string; location?: string }) {
    trackEvent('cta_click', {
      cta_name: params.name,
      cta_location: params.location,
    })
  },

  articleProgress(params: { slug: string; progress: number }) {
    trackEvent('article_progress', {
      article_slug: params.slug,
      progress: params.progress,
    })
  },

  articleComplete(slug: string) {
    trackEvent('article_complete', {
      article_slug: slug,
    })
  },

  outboundClick(params: { url: string; text?: string }) {
    trackEvent('outbound_click', {
      link_url: params.url,
      link_text: params.text,
    })
  },
}
