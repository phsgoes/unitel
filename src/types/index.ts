export interface Category {
  name: string
  slug?: string
}

export interface Post {
  id: string
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
  alternativeText: string
  coverImage: {
    url: string
  }
  body: {
    raw?: any
    html?: any
    references?: any
  }
  categories: Category[]
}

export interface PostSlug {
  slug: string
}

export interface PostCard {
  title: string
  slug: string
  description: string
  alternativeText: string

  coverImage: {
    url: string
  }

  categories: {
    name: string
  }[]
}

export interface SearchPost {
  title: string
  slug: string
  description: string

  categories: {
    name: string
  }[]
}

export interface AdjacentPost {
  title: string
  slug: string
  description: string
}

export interface AdjacentPostsResult {
  previousPost: AdjacentPost | null
  nextPost: AdjacentPost | null
}

export interface RichText {
  children: Node[]
}

export interface RichTextNode {
  type: string

  children?: RichTextNode[]

  text?: string

  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean

  level?: number

  url?: string

  src?: string
  width?: number
  height?: number
  title?: string
}

export type TableOfContentItem = {
  id: string
  title: string
}
