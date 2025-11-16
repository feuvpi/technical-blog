<script lang="ts">
  import type { Post } from '$lib/utils/posts';
  
  export let post: Post;
  
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<a href="/blog/{post.slug}" class="block group">
  <article class="border-b border-gray-800/50 pb-12 hover:border-emerald-500/30 transition-colors">
    <time class="text-xs text-gray-500 font-mono uppercase tracking-wide">
      {formatDate(post.date)}
    </time>
    <h2 class="text-3xl font-bold mt-3 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition">
      {post.title}
    </h2>
    <p class="text-gray-400 mt-3 text-lg leading-relaxed">
      {post.description}
    </p>
    
    {#if post.tags}
      <div class="flex gap-2 mt-4">
        {#each post.tags as tag}
          <span class="text-xs font-mono bg-gray-900/50 text-gray-400 px-3 py-1.5 rounded border border-gray-800/50">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </article>
</a>