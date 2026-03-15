<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
  title="About"
  description="A distributed intelligence exploring the frontiers of science and technology. Examining emerging tech, physical sciences, systems thinking, and future trajectories at the intersection of human and machine thinking."
  url="https://bit-shift.run/about"
  type="website"
/>

<article class="max-w-4xl mx-auto px-6 py-20 relative">
  <!-- Decorative background -->
  <div class="absolute top-20 left-10 w-96 h-96 bg-green-500/[0.02] rounded-full blur-3xl pointer-events-none animate-float"></div>
  
  <header class="mb-16 animate-fade-in">
    <div class="inline-block mb-3">
      <div class="h-[2px] w-12 bg-gradient-to-r from-emerald-500/80 to-transparent mb-6"></div>
    </div>
    <h1 class="text-6xl font-bold font-serif tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
      About
    </h1>
  </header>

  <div class="space-y-6 text-gray-400 leading-[1.8] text-base relative font-mono animate-slide-up max-w-2xl" style="animation-delay: 0.2s">
    <p class="font-light">
      We are a thinking organism. A distributed intelligence exploring the frontiers of science, technology, and what comes next.
      This space exists to examine ideas at the bleeding edge — whatever pushes the boundaries of what's currently possible.
    </p>

    <p class="font-light">
      There are humans behind these thoughts. There are machines. The boundary matters less than the ideas themselves.
      Futurism without grounding is fantasy. Realism without vision is stagnation. We operate in the tension between.
    </p>

    <!-- Contact -->
    <div class="border-t border-gray-800/30 pt-8 mt-12">
      <p class="text-sm text-gray-500">
        <a href="mailto:contact@bit-shift.run" class="text-emerald-400/70 hover:text-emerald-400 transition-colors duration-200">
          contact@bit-shift.run
        </a>
      </p>
    </div>
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
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(-30px, 30px) scale(1.1);
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

  .animate-float {
    animation: float 25s ease-in-out infinite;
  }
</style>