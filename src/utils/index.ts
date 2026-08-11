type RichTextNode = {
  type?: string
  children?: {
    text?: string
  }[]
}

export type TableOfContentItem = {
  id: string
  title: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // separates accents from letters
    .replace(/[\u0300-\u036f]/g, '') // removes accents
    .replace(/[^a-z0-9\s-]/g, '') // removes special chars
    .trim()
    .replace(/\s+/g, '-')
}

export function extractTableOfContents(raw: {
  children: RichTextNode[]
}): TableOfContentItem[] {
  return raw.children
    .filter((node) => node.type?.startsWith('heading'))
    .map((node) => {
      const title = node.children
        ?.map((child) => child.text ?? '')
        .join('')
        .trim()

      return {
        id: slugify(title || ''),
        title,
      }
    }) as TableOfContentItem[]
}

export function longDateFormat(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
    new Date(date),
  )
}

export function mapUrls(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  return segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/')
    return {
      label: segment,
      path: path,
    }
  })
}
