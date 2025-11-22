<script>
  import Nav from '$lib/components/Nav.svelte';
  import '../app.css';
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
</svelte:head>

<div class="min-h-screen bg-[#0a0a0a]">
  <Nav />
  <slot />
</div>