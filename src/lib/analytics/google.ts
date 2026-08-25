export function isGoogleAnalyticsAvailable() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function trackPageView() {
  if (!isGoogleAnalyticsAvailable()) return

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  })
}

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  if (!isGoogleAnalyticsAvailable()) return

  window.gtag('event', name, parameters)
}
