import graphQLClient from '@/lib/hygraph'
import type {
  AdjacentPost,
  AdjacentPostsResult,
  Post,
  PostSlug,
  SearchPost,
} from '@/types'
import { PAGE_SIZE } from '@/consts'

const HYGRAPH_PAGE_SIZE = 100

/**
 * Busca posts completos em lotes.
 *
 * Usada principalmente durante o build das páginas individuais
 * do blog.
 */
export async function getAllPosts(): Promise<Post[]> {
  const allPosts: Post[] = []

  const query = `
    query GetPosts($first: Int!, $skip: Int!) {
      posts(
        first: $first
        skip: $skip
        orderBy: publishedAt_DESC
      ) {
        title
        description
        slug
        publishedAt
        updatedAt
        alternativeText
        coverImage {
          url
        }
        body {
          raw
        }
        categories {
          name
        }
      }
    }
  `

  let skip = 0

  while (true) {
    const { posts } = await graphQLClient.request<{
      posts: Post[]
    }>(query, {
      first: HYGRAPH_PAGE_SIZE,
      skip,
    })

    allPosts.push(...posts)

    if (posts.length < HYGRAPH_PAGE_SIZE) {
      break
    }

    skip += HYGRAPH_PAGE_SIZE
  }

  return allPosts
}

/**
 * Busca posts para as listagens/paginação.
 *
 * Não busca o body para reduzir o tamanho da resposta.
 */
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
        updatedAt
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

  const { posts } = await graphQLClient.request<{
    posts: Post[]
  }>(query, {
    limit,
    skip,
  })

  return posts
}

/**
 * Retorna a quantidade total de posts.
 */
export async function getPostsCount(): Promise<number> {
  const query = `
    query GetPostsCount {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const { postsConnection } = await graphQLClient.request<{
    postsConnection: {
      aggregate: {
        count: number
      }
    }
  }>(query)

  return postsConnection.aggregate.count
}

/**
 * Retorna todos os slugs.
 *
 * Mantida caso você precise dela em outro lugar do projeto.
 *
 * OBS:
 * A página [slug].astro não precisa mais usar essa função.
 */
export async function getPostSlugs(): Promise<PostSlug[]> {
  const allPosts: PostSlug[] = []

  const query = `
    query GetPostSlugs($first: Int!, $skip: Int!) {
      posts(
        first: $first
        skip: $skip
        orderBy: publishedAt_DESC
      ) {
        slug
      }
    }
  `

  let skip = 0

  while (true) {
    const { posts } = await graphQLClient.request<{
      posts: PostSlug[]
    }>(query, {
      first: HYGRAPH_PAGE_SIZE,
      skip,
    })

    allPosts.push(...posts)

    if (posts.length < HYGRAPH_PAGE_SIZE) {
      break
    }

    skip += HYGRAPH_PAGE_SIZE
  }

  return allPosts
}

/**
 * Posts utilizados pelo campo de busca.
 */
export async function getSearchPosts(): Promise<SearchPost[]> {
  const query = `
    query GetSearchPosts {
      posts(
        orderBy: publishedAt_DESC
      ) {
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

/**
 * Mantida para casos em que você realmente precise
 * buscar os posts adjacentes diretamente da API.
 *
 * A página [slug].astro não deve mais usar essa função.
 */
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
  }>(query, {
    publishedAt,
  })

  return {
    previousPost: previousPost[0] ?? null,
    nextPost: nextPost[0] ?? null,
  }
}

/**
 * Posts utilizados no feed.
 */
export async function gePostsForFeed(
  limit: number = 20,
  skip: number = 0,
): Promise<Post[]> {
  const query = `
    query GetPostsForFeed($limit: Int!, $skip: Int!) {
      posts(
        first: $limit
        skip: $skip
        orderBy: publishedAt_DESC
      ) {
        title
        description
        slug
        publishedAt
        updatedAt
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

  const { posts } = await graphQLClient.request<{
    posts: Post[]
  }>(query, {
    limit,
    skip,
  })

  return posts
}

export async function getAllPostsForListing(): Promise<Post[]> {
  const allPosts: Post[] = []

  const query = `
    query GetPostsForListing($first: Int!, $skip: Int!) {
      posts(
        first: $first
        skip: $skip
        orderBy: publishedAt_DESC
      ) {
        title
        description
        slug
        publishedAt
        updatedAt
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

  let skip = 0

  while (true) {
    const { posts } = await graphQLClient.request<{
      posts: Post[]
    }>(query, {
      first: HYGRAPH_PAGE_SIZE,
      skip,
    })

    allPosts.push(...posts)

    if (posts.length < HYGRAPH_PAGE_SIZE) {
      break
    }

    skip += HYGRAPH_PAGE_SIZE
  }

  return allPosts
}
