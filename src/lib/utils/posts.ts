export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export async function getPosts(): Promise<Post[]> {
  const modules = import.meta.glob('/src/routes/posts/*.md');
  const posts: Post[] = [];

  for (const path in modules) {
    const mod = await modules[path]() as any;
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    posts.push({
      slug,
      ...mod.metadata
    });
  }

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}