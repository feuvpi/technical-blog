<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	export let data;

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Convert date to ISO format for structured data
	const publishedTime = new Date(data.metadata.date).toISOString();
	const postUrl = `https://bit-shift.run/blog/${data.slug}`;

	// JSON-LD structured data for article
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.metadata.title,
		description: data.metadata.description,
		datePublished: publishedTime,
		dateModified: publishedTime,
		author: {
			'@type': 'Person',
			name: 'bit-shift.run',
			url: 'https://bit-shift.run/about'
		},
		publisher: {
			'@type': 'Organization',
			name: 'bit-shift.run',
			logo: {
				'@type': 'ImageObject',
				url: 'https://bit-shift.run/logo.png'
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': postUrl
		},
		keywords: data.metadata.tags?.join(', ') || ''
	};
</script>

<SEO
	title={data.metadata.title}
	description={data.metadata.description}
	url={postUrl}
	type="article"
	publishedTime={publishedTime}
	tags={data.metadata.tags || []}
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<article class="mx-auto prose max-w-4xl px-6 py-20 prose-invert">
	<!-- Decorative elements -->
	<div
		class="animate-float pointer-events-none absolute top-40 right-10 h-72 w-72 rounded-full bg-emerald-500/[0.03] blur-3xl"
	></div>

	<header class="animate-fade-in relative mb-16 border-b border-gray-800/30 pb-10">
		<time class="block font-mono text-[10px] tracking-[0.25em] text-gray-600 uppercase">
			{formatDate(data.metadata.date)}
		</time>
		<h1
			class="animate-slide-up mt-6 bg-gradient-to-br from-green-300 via-green-400 to-green-500 bg-clip-text font-mono text-6xl leading-[1.05] font-bold tracking-tight text-transparent"
			style="animation-delay: 0.1s"
		>
			{data.metadata.title}
		</h1>
		{#if data.metadata.tags}
			<div class="animate-slide-up mt-8 flex flex-wrap gap-2" style="animation-delay: 0.2s">
				{#each data.metadata.tags as tag, i}
					<span
						class="rounded-sm border border-emerald-500/10 bg-gray-900/80 px-3 py-1.5 font-mono text-[10px] text-emerald-400/70 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/5"
						style="animation-delay: {0.25 + i * 0.05}s"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<div
		class="animate-fade-in-content prose prose-lg max-w-none prose-invert

		      prose-h1:mt-16 prose-h1:mb-6 prose-h1:bg-gradient-to-r
		      prose-h1:from-green-300 prose-h1:to-green-400
		      prose-h1:bg-clip-text prose-h1:font-mono prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-transparent

		      prose-h2:mt-16 prose-h2:mb-6 prose-h2:bg-gradient-to-r
		      prose-h2:from-green-400 prose-h2:to-green-500
		      prose-h2:bg-clip-text prose-h2:font-mono prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:text-transparent

		      prose-h3:mt-12 prose-h3:mb-4 prose-h3:bg-gradient-to-r
		      prose-h3:from-green-500 prose-h3:to-green-600
		      prose-h3:bg-clip-text prose-h3:font-mono prose-h3:text-2xl prose-h3:font-bold prose-h3:tracking-tight prose-h3:text-transparent

		      prose-h4:bg-gradient-to-r prose-h4:from-green-600 prose-h4:to-green-700
		      prose-h4:bg-clip-text prose-h4:font-mono
		      prose-h4:font-bold prose-h4:tracking-tight prose-h4:text-transparent

		      prose-p:font-mono prose-p:leading-[1.8] prose-p:font-light prose-p:text-gray-400
		      prose-a:text-emerald-400 prose-a:no-underline prose-a:transition-colors prose-a:duration-200
		      hover:prose-a:text-emerald-300
		      prose-blockquote:border-l-2 prose-blockquote:border-l-emerald-500/50 prose-blockquote:pl-6 prose-blockquote:text-gray-400 prose-blockquote:italic
		      prose-strong:font-semibold prose-strong:text-gray-200
		      prose-code:rounded prose-code:border prose-code:border-gray-800/50 prose-code:bg-gray-900/80 prose-code:px-2 prose-code:py-1 prose-code:font-mono prose-code:text-sm prose-code:font-medium prose-code:text-emerald-400
		      prose-pre:rounded-lg prose-pre:border prose-pre:border-gray-800/30 prose-pre:bg-gray-900/80 prose-pre:shadow-xl
		      prose-ol:font-mono prose-ol:text-gray-400
		      prose-ul:font-mono prose-ul:text-gray-400
		      prose-li:font-mono"
	>
		<svelte:component this={data.content} />
	</div>

	<!-- Post Footer -->
	<footer
		class="animate-fade-in-content mt-20 border-t border-gray-800/30 pt-12 pb-6"
		style="animation-delay: 0.5s"
	>
		<div class="space-y-3 text-center">
			<p class="font-mono text-[13px] tracking-wide text-gray-300">
				<span class="text-emerald-500/40">⌘</span> An ever-evolving thinking organism
				<span class="text-emerald-500/40">⌘</span>
			</p>
			<p class="font-mono text-[12px] leading-relaxed tracking-wide text-gray-300">
				Crafted by human minds, amplified by AI •<br class="sm:hidden" />
				Thoughtfully curated, continuously refined
			</p>
		</div>
	</footer>
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
		0%,
		100% {
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
