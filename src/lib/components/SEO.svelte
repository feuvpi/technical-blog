<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
  export let type: 'website' | 'article' = 'website';
  export let image: string | undefined = undefined;
  export let publishedTime: string | undefined = undefined;
  export let modifiedTime: string | undefined = undefined;
  export let tags: string[] = [];
  export let author: string = 'bit-shift.run';
  export let siteName: string = 'bit-shift.run';

  const defaultImage = 'https://bit-shift.run/og-image.png';
  const ogImage = image || defaultImage;
  const fullTitle = title.includes('bit-shift.run') ? title : `${title} • bit-shift.run`;
  const keywords = tags.length > 0 ? tags.join(', ') : 'tech blog, software engineering, programming';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <meta name="robots" content="index, follow" />

  <!-- Canonical URL -->
  <link rel="canonical" href={url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:site_name" content={siteName} />

  {#if type === 'article'}
    {#if publishedTime}
      <meta property="article:published_time" content={publishedTime} />
    {/if}
    {#if modifiedTime}
      <meta property="article:modified_time" content={modifiedTime} />
    {/if}
    {#if tags.length > 0}
      {#each tags as tag}
        <meta property="article:tag" content={tag} />
      {/each}
    {/if}
    <meta property="article:author" content={author} />
  {/if}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:creator" content="@feuvp" />

  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#10b981" />
</svelte:head>
