<script lang="ts">
  export let data;

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{data.metadata.title} • bit-shift.run</title>
</svelte:head>

<article class="max-w-4xl mx-auto px-6 py-20">
  <!-- Decorative elements -->
  <div class="absolute top-40 right-10 w-72 h-72 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none animate-float"></div>
  
  <header class="mb-16 pb-10 border-b border-gray-800/30 relative animate-fade-in">
    <time class="text-[10px] text-gray-600 font-mono uppercase tracking-[0.25em] block">
      {formatDate(data.metadata.date)}
    </time>
    
    <h1 class="text-6xl font-bold mt-6 leading-[1.05] tracking-tight font-mono bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 bg-clip-text text-transparent animate-slide-up" style="animation-delay: 0.1s">
      {data.metadata.title}
    </h1>
    
    {#if data.metadata.tags}
      <div class="flex gap-2 mt-8 flex-wrap animate-slide-up" style="animation-delay: 0.2s">
        {#each data.metadata.tags as tag, i}
          <span 
            class="text-[10px] font-mono bg-gray-900/80 text-emerald-400/70 px-3 py-1.5 rounded-sm border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200"
            style="animation-delay: {0.25 + i * 0.05}s"
          >
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </header>

  <div class="prose prose-lg prose-invert max-w-none 
              prose-headings:font-mono prose-headings:font-bold prose-headings:tracking-tight prose-headings:bg-gradient-to-r prose-headings:from-gray-100 prose-headings:to-gray-300 prose-headings:bg-clip-text prose-headings:text-transparent
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-gray-400 prose-p:leading-[1.8] prose-p:font-light prose-p:font-mono
              prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-a:transition-colors prose-a:duration-200
              prose-code:text-emerald-400 prose-code:bg-gray-900/80 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:border prose-code:border-gray-800/50 prose-code:font-mono prose-code:text-sm prose-code:font-medium
              prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-800/30 prose-pre:rounded-lg prose-pre:shadow-xl
              prose-blockquote:border-l-2 prose-blockquote:border-l-emerald-500/50 prose-blockquote:text-gray-400 prose-blockquote:italic prose-blockquote:pl-6
              prose-strong:text-gray-200 prose-strong:font-semibold
              prose-ul:text-gray-400 prose-ul:font-mono
              prose-ol:text-gray-400 prose-ol:font-mono
              prose-li:font-mono
              animate-fade-in-content">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
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

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, -20px);
    }
  }

  .animate-fade-in {
    opacity: 0;
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-slide-up {
    opacity: 0;
    animation: slide-up 0.6s ease-out forwards;
  }

  .animate-fade-in-content {
    opacity: 0;
    animation: fade-in 1s ease-out 0.3s forwards;
  }

  .animate-float {
    animation: float 20s ease-in-out infinite;
  }

  /* Force monospace font on all prose elements */
  .prose :where(h1, h2, h3, h4, h5, h6, p, li, blockquote, strong, em, a, code, pre) {
    font-family: 'JetBrains Mono', 'Courier New', monospace !important;
  }
</style>