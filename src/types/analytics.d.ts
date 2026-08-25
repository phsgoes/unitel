export {}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void

    __UNITEL_GA_INITIALIZED__?: boolean
    __UNITEL_ANALYTICS_LIFECYCLE__?: boolean
  }
}
