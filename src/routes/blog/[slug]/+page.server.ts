import { getPosts } from '$lib/utils/posts';

export const prerender = true;

export async function entries() {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
}
