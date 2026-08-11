import { createRequire } from 'node:module'
import fs from 'node:fs'
import path from 'node:path'

const require = createRequire(import.meta.url)

/**
 * Astro 7.2 prerender bundles Vite such that VITE_PACKAGE_DIR resolves to
 * `<project>/dist`. Vite then probes `dist/client/client.mjs` at import time
 * and aborts route generation if the file is missing.
 */
export function ensureViteClientEntryStub() {
  let viteClient
  try {
    const vitePkg = require.resolve('vite/package.json', {
      paths: [path.dirname(require.resolve('astro/package.json'))],
    })
    viteClient = path.join(path.dirname(vitePkg), 'dist/client/client.mjs')
  } catch {
    return false
  }

  if (!fs.existsSync(viteClient)) return false

  const outDir = path.resolve('dist/client')
  const dest = path.join(outDir, 'client.mjs')
  fs.mkdirSync(outDir, { recursive: true })
  fs.copyFileSync(viteClient, dest)
  return true
}

/** Vite plugin — runs before Astro's `astro:build-generate` handler. */
export function stubViteClientEntryPlugin() {
  return {
    name: 'stub-vite-client-entry-for-prerender',
    buildApp: {
      order: 'post',
      async handler() {
        ensureViteClientEntryStub()
      },
    },
  }
}
