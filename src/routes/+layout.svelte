<script>
  import Nav from '$lib/components/Nav.svelte';
  import '../app.css';
</script>

<div class="min-h-screen bg-[#0a0a0a]">
  <Nav />
  <slot />
</div>