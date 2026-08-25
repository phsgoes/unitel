import { analytics } from './events'

function getLinkText(link: HTMLAnchorElement): string {
  const explicitText = link.dataset.analyticsLabel

  if (explicitText) {
    return explicitText
  }

  return link.textContent?.replace(/\s+/g, ' ').trim() || ''
}

function handleLinkClick(event: MouseEvent) {
  const target = event.target

  if (!(target instanceof Element)) {
    return
  }

  const link = target.closest('a[data-analytics-link]')

  if (!(link instanceof HTMLAnchorElement)) {
    return
  }

  if (!link.href) {
    return
  }

  analytics.linkClick({
    url: link.href,
    text: getLinkText(link),
    location: window.location.pathname,
    type: link.dataset.analyticsType || 'link',
  })
}

let initialized = false

export function initLinkAnalytics() {
  if (initialized) {
    return
  }

  initialized = true

  document.addEventListener('click', handleLinkClick, {
    passive: true,
  })
}
