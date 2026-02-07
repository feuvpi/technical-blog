<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  export let data;
</script>

<div class="max-w-5xl mx-auto px-6 py-24 relative">
  <!-- Decorative background elements -->
  <div class="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-green-500/[0.015] rounded-full blur-3xl"></div>
  </div>

  <!-- Header section -->
  <div class="mb-20 header-section">
    <div class="inline-block">
      <p class="text-xs font-mono text-gray-600 uppercase tracking-[0.2em] mb-4 animate-fade-in">
        Latest Articles
      </p>
      <div class="h-[1px] w-16 bg-gradient-to-r from-emerald-500/50 to-transparent animate-slide-in"></div>
    </div>
  </div>

  <!-- Posts grid -->
  <div class="space-y-0">
    {#each data.posts as post, i}
      <div style="animation-delay: {0.1 + i * 0.1}s">
        <PostCard {post} />
      </div>
    {/each}
  </div>
</div>

<style>
  .header-section {
    opacity: 0;
    animation: fade-in 0.8s ease-out forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    opacity: 0;
    animation: fade-in 0.5s ease-out 0.2s forwards;
  }

  .animate-slide-in {
    width: 0;
    animation: slide-in 0.8s ease-out 0.4s forwards;
  }

  @keyframes slide-in {
    from {
      width: 0;
    }
    to {
      width: 4rem;
    }
  }
</style>