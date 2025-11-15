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
  <title>{data.metadata.title} • bits.run</title>
</svelte:head>

<article class="max-w-4xl mx-auto px-6 py-16">
  <header class="mb-12 pb-8 border-b border-gray-800/50">
    <time class="text-xs text-gray-500 font-mono uppercase tracking-wide">
      {formatDate(data.metadata.date)}
    </time>
    <h1 class="text-5xl font-bold mt-4 leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      {data.metadata.title}
    </h1>
    {#if data.metadata.tags}
      <div class="flex gap-2 mt-6">
        {#each data.metadata.tags as tag}
          <span class="text-xs font-mono bg-gray-900/50 text-gray-400 px-3 py-1.5 rounded border border-gray-800/50">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </header>
  
  <div class="prose prose-lg prose-invert max-w-none
              prose-headings:font-bold prose-headings:bg-gradient-to-r prose-headings:from-gray-100 prose-headings:to-gray-300 prose-headings:bg-clip-text prose-headings:text-transparent
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-cyan-400 prose-a:transition
              prose-code:text-cyan-400 prose-code:bg-gray-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-gray-800/50
              prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800/50
              prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-400">
    <svelte:component this={data.content} />
  </div>
</article>