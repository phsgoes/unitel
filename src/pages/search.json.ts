import { getSearchPosts } from '@/services/posts'

export async function GET() {
  const posts = await getSearchPosts()
  return Response.json(posts)
}
