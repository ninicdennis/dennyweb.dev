<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { formatDate } from '$lib/utils';
	import Icon from '@iconify/svelte';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Container>
	<article>
		<a href="/posts">
			<button
				class="variant-filled-primary btn btn-sm font-semibold dark:text-white">
				<Icon icon="mdi:arrow-back" />
				<p>Back to Posts</p>
			</button>
		</a>
		<!-- Title -->
		<hgroup class="mt-4">
			<h1 class="h1 mb-1 font-semibold">{data.meta.title}</h1>
			<p class="mb-4 font-semibold">
				Published at {formatDate(data.meta.date)}
			</p>
			<p>{data.meta.description}</p>
		</hgroup>

		<!-- Tags -->
		<div class="tags mb-4 mt-4">
			{#each data.meta.categories as category}
				<span class="chip mr-2 bg-surface-500 text-white">
					&num;{category}
				</span>
			{/each}
		</div>
		<hr class="!border-t-2 p-2" />

		<!-- Post -->
		<Prose>
			<svelte:component this={data.content} />
		</Prose>
	</article>
</Container>
