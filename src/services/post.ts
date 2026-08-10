import graphQLClient from '@/lib/hygraph'
import type { Post } from '@/types'

export async function getPost(slug: string): Promise<Post> {
  const postQuery = `
    query GetPost($slug: String!) {
      post(where: { slug: $slug }) {
        title
        description
        slug
        publishedAt
        updatedAt
        coverImage {
          url
        }
        alternativeText
        body {
          raw
        }
        categories {
          name
        }
      }
    }
  `
  const { post } = await graphQLClient.request<{ post: Post }>(postQuery, {
    slug,
  })
  return post
}
