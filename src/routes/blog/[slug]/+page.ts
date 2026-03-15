import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(`../../posts/${params.slug}.md`);

    return {
      content: post.default,
      metadata: post.metadata,
      slug: params.slug
    };
  } catch {
    throw error(404, 'Post not found');
  }
}