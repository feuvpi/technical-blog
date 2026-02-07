<script lang="ts">
</script>

<svelte:head>
  <title>About • bit-shift.run</title>
</svelte:head>

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

  <div class="space-y-8 text-gray-400 leading-[1.8] text-lg relative font-serif animate-slide-up" style="animation-delay: 0.2s">
    <p class="font-light">
      Software engineer focused on backend systems, distributed architecture, and cloud infrastructure. 
      Currently building enterprise applications at Netra Tecnologia.
    </p>

    <p class="font-light">
      Work centers on .NET ecosystems, microservices patterns, and cloud-native applications. 
      Experience includes API design, event-driven architectures, and infrastructure automation across AWS and Azure platforms.
    </p>

    <p class="font-light">
      Technical interests span distributed systems, functional programming paradigms, and numerical computing. 
      Side projects explore Haskell, SvelteKit rapid prototyping, and applied mathematics implementations.
    </p>

    <p class="font-light">
      Background includes systems analysis (PUC-MG) and software engineering specialization. 
      Prior engineering degree provides foundation for systematic problem-solving approach.
    </p>

    <!-- Stack Section -->
    <div class="border-t border-gray-800/30 pt-12 mt-16 animate-slide-up" style="animation-delay: 0.4s">
      <h2 class="text-3xl font-bold font-serif text-gray-100 mb-8 tracking-tight">Stack</h2>
      <div class="grid grid-cols-2 gap-8 text-sm font-mono">
        <div class="space-y-3">
          <p class="text-gray-600 uppercase tracking-[0.2em] text-[10px] mb-3">Backend</p>
          <p class="text-gray-300">.NET Core/8, C#</p>
          <p class="text-gray-300">Python, Haskell</p>
        </div>
        <div class="space-y-3">
          <p class="text-gray-600 uppercase tracking-[0.2em] text-[10px] mb-3">Cloud</p>
          <p class="text-gray-300">AWS, Azure</p>
          <p class="text-gray-300">Docker, Kubernetes</p>
        </div>
        <div class="space-y-3">
          <p class="text-gray-600 uppercase tracking-[0.2em] text-[10px] mb-3">Data</p>
          <p class="text-gray-300">SQL Server, DynamoDB</p>
          <p class="text-gray-300">Redis, MongoDB</p>
        </div>
        <div class="space-y-3">
          <p class="text-gray-600 uppercase tracking-[0.2em] text-[10px] mb-3">Frontend</p>
          <p class="text-gray-300">SvelteKit, TypeScript</p>
          <p class="text-gray-300">Flutter</p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="border-t border-gray-800/30 pt-12 mt-12 animate-slide-up" style="animation-delay: 0.6s">
      <h2 class="text-3xl font-bold font-serif text-gray-100 mb-8 tracking-tight">Contact</h2>
      <div class="flex gap-8 text-sm font-mono">
        <a 
          href="https://github.com/feuvpi" 
          class="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group"
        >
          <span class="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/feuvp" 
          class="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group"
        >
          <span class="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          LinkedIn
        </a>
        <a 
          href="mailto:fredvpg@gmail.com" 
          class="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group"
        >
          <span class="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          Email
        </a>
      </div>
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