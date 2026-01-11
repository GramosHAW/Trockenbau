export interface Post {
  id: string;
  slug: string;
  title: string;
  content?: string;
  date?: string;
}

export async function getPosts(): Promise<Post[]> {
  // TODO: Implement actual post fetching logic
  // This could fetch from a CMS, database, or markdown files
  return [
    {
      id: '1',
      slug: 'projekte',
      title: 'Sample Post',
      content: 'Trockenbau Projekte.',
      date: new Date().toISOString(),
    },
  ];
}

export async function getPost(slug: string): Promise<Post | null> {
  // TODO: Implement actual post fetching logic by slug
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) || null;
}
