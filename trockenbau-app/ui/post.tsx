import Link from 'next/link'
import { Post as PostType } from '@/lib/posts';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  return (
    <li className="mb-4">
      <Link href={`/blog/${post.slug}`} className="block hover:opacity-80 transition-opacity">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        {post.content && <p className="text-gray-600">{post.content}</p>}
        {post.date && (
          <time className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString()}
          </time>
        )}
      </Link>
    </li>
  );
}
