interface ImportMetaEnv {
  readonly ASTRO_HYGRAPH_ENDPOINT: string
  readonly PUBLIC_GA4_ID: string
  readonly DEVELOPMENT_ENVIRONMENT: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
