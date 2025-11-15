<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  
  export let data;
</script>

<div class="max-w-5xl mx-auto px-6 py-16">
  <div class="space-y-12">
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </div>
</div>