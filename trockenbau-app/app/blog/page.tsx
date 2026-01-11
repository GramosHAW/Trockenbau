import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'
 
export default async function Page() {
  const posts = await getPosts()
 
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}