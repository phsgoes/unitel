import graphQLClient from '@/lib/hygraph'
import type {
  AdjacentPost,
  AdjacentPostsResult,
  Post,
  PostSlug,
  SearchPost,
} from '@/types'
import { PAGE_SIZE } from '@/consts'

export async function getPosts(
  limit: number = PAGE_SIZE,
  skip: number = 0,
): Promise<Post[]> {
  const query = `
    query GetPosts($limit: Int!, $skip: Int!) {
      posts(
        first: $limit
        skip: $skip
        orderBy: publishedAt_DESC
      ) {
        title
        description
        slug
        publishedAt
        alternativeText
        coverImage {
          url
        }
        categories {
          name
        }
      }
    }
  `

  const { posts } = await graphQLClient.request<{ posts: Post[] }>(query, {
    limit,
    skip,
  })

  return posts
}

export async function getPostsCount(): Promise<number> {
  const query = `
    query {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const { postsConnection } = await graphQLClient.request<{
    postsConnection: {
      aggregate: { count: number }
    }
  }>(query)

  return postsConnection.aggregate.count
}

export async function getPostSlugs(): Promise<PostSlug[]> {
  const allPosts: PostSlug[] = []

  const query = `
    query GetPostSlugs($first: Int!, $skip: Int!) {
      posts(first: $first, skip: $skip) {
        slug
      }
    }
  `

  const first = 100
  let skip = 0

  while (true) {
    const { posts } = await graphQLClient.request<{
      posts: PostSlug[]
    }>(query, {
      first,
      skip,
    })

    allPosts.push(...posts)

    if (posts.length < first) break

    skip += first
  }

  return allPosts
}

export async function getSearchPosts(): Promise<SearchPost[]> {
  const query = `
    query {
      posts(orderBy: publishedAt_DESC) {
        title
        slug
        description

        categories {
          name
        }
      }
    }
  `

  const { posts } = await graphQLClient.request<{
    posts: SearchPost[]
  }>(query)

  return posts
}

export async function getAdjacentPosts(
  publishedAt: string,
): Promise<AdjacentPostsResult> {
  const query = `
    query GetAdjacentPosts($publishedAt: DateTime!) {
      previousPost: posts(
        where: { publishedAt_lt: $publishedAt }
        orderBy: publishedAt_DESC
        first: 1
      ) {
        title
        slug
        description
      }
      nextPost: posts(
        where: { publishedAt_gt: $publishedAt }
        orderBy: publishedAt_ASC
        first: 1
      ) {
        title
        slug
        description
      }
    }
  `

  const { previousPost, nextPost } = await graphQLClient.request<{
    previousPost: AdjacentPost[]
    nextPost: AdjacentPost[]
  }>(query, { publishedAt })

  return {
    previousPost: previousPost[0] ?? null,
    nextPost: nextPost[0] ?? null,
  }
}

export async function gePostsForFeed(
  limit: number = 20,
  skip: number = 0,
): Promise<Post[]> {
  const query = `
    query GetPosts($limit: Int!, $skip: Int!) {
      posts(
        first: $limit
        skip: $skip
        orderBy: publishedAt_DESC
      ) {
        title
        description
        slug
        publishedAt
        coverImage {
          url
        }
        body {
          html
        }
        categories {
          name
        }
      }
    }
  `

  const { posts } = await graphQLClient.request<{ posts: Post[] }>(query, {
    limit,
    skip,
  })

  return posts
}
