import { analytics } from './events'

let initialized = false

export function initArticleAnalytics(slug: string) {
  if (initialized) return

  initialized = true

  const article = document.querySelector('[data-article]')

  if (!(article instanceof HTMLElement)) {
    return
  }

  const milestones = [25, 50, 75, 90, 100]

  const reached = new Set<number>()

  let ticking = false

  const checkProgress = () => {
    ticking = false

    const rect = article.getBoundingClientRect()

    const articleTop = window.scrollY + rect.top

    const articleHeight = article.offsetHeight

    const viewportBottom = window.scrollY + window.innerHeight

    const progress = ((viewportBottom - articleTop) / articleHeight) * 100

    const currentProgress = Math.min(100, Math.max(0, progress))

    for (const milestone of milestones) {
      if (currentProgress >= milestone && !reached.has(milestone)) {
        reached.add(milestone)

        analytics.articleProgress({
          slug,
          progress: milestone,
        })

        if (milestone === 100) {
          analytics.articleComplete(slug)
        }
      }
    }
  }

  const handleScroll = () => {
    if (ticking) return

    ticking = true

    requestAnimationFrame(checkProgress)
  }

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  })

  window.addEventListener('resize', checkProgress)

  checkProgress()
}
