import rss from '@astrojs/rss'
import { SITE_DESCRIPTION, SITE_PATH, SITE_TITLE } from '@/consts'
import { gePostsForFeed } from '@/services/posts'
import { createInstagramCaption } from '@/lib/instagram-caption'

export async function GET(context: { site: any }) {
  const siteUrl = context.site.href.replace(/\/$/, '')
  const posts = await gePostsForFeed()

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: siteUrl,
    stylesheet: '/feed.xsl',
    items: posts.map((post) => {
      const instagramUrl = `${SITE_PATH}blog/${post.slug}`
      const categories = post.categories?.map((cat) => cat.name) ?? []
      const mediaContent = post.coverImage?.url
        ? `<media:content url="${post.coverImage.url}" medium="image" type="image/jpeg" />`
        : ''

      return {
        title: post.title,
        pubDate: new Date(post.publishedAt),
        description: post.description,
        link: `${siteUrl}/blog/${post.slug}/`,
        categories,
        content: post.body.html,
        customData: `
          ${mediaContent}
					<language>pt-BR</language>
          <instagram><![CDATA[
          ${createInstagramCaption(post.body.html, instagramUrl, post.title)}
          ]]></instagram>
        `,
      }
    }),
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },
  })
}
