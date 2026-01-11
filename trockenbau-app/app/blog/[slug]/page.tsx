import { getPost, getPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const post = await getPost(slug)
   
    if (!post) {
      return <div>Post not found</div>
    }

    return (
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.date && (
          <time className="text-sm text-gray-500 block mb-6">
            {new Date(post.date).toLocaleDateString()}
          </time>
        )}
        {post.content && <p className="text-lg leading-relaxed">{post.content}</p>}
      </article>
    )
  }