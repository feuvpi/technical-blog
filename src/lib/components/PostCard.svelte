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

<a href="/blog/{post.slug}" class="block group post-card">
  <article class="border-b border-gray-800/30 pb-16 relative overflow-hidden">
    <!-- Hover glow effect -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div class="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    
    <div class="relative">
      <time class="text-[11px] text-gray-600 font-mono uppercase tracking-[0.2em] block animate-fade-in">
        {formatDate(post.date)}
      </time>
      
      <h2 class="text-5xl font-mono font-bold mt-5 leading-[1.1] tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out animate-slide-up" style="animation-delay: 0.1s">
        <span class="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-emerald-200 group-hover:to-green-300 transition-all duration-500">
          {post.title}
        </span>
      </h2>
      
      <p class="text-gray-500 mt-6 text-lg leading-[1.7] font-light max-w-3xl animate-slide-up" style="animation-delay: 0.2s">
        {post.description}
      </p>
      
      {#if post.tags}
        <div class="flex gap-2 mt-6 flex-wrap animate-slide-up" style="animation-delay: 0.3s">
          {#each post.tags as tag, i}
            <span 
              class="text-[10px] font-mono bg-gray-900/80 text-emerald-400/70 px-3 py-1.5 rounded-sm border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200 hover:-translate-y-0.5"
              style="animation-delay: {0.35 + i * 0.05}s"
            >
              {tag}
            </span>
          {/each}
        </div>
      {/if}
      
      <!-- Read indicator -->
      <div class="flex items-center gap-2 mt-8 text-gray-600 group-hover:text-emerald-500 transition-colors duration-300">
        <span class="text-xs font-mono uppercase tracking-wider">Read</span>
        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  </article>
</a>

<style>
  .post-card {
    opacity: 0;
    animation: fade-in 0.6s ease-out forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    opacity: 0;
    animation: fade-in 0.4s ease-out forwards;
  }

  .animate-slide-up {
    opacity: 0;
    animation: slide-up 0.5s ease-out forwards;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>