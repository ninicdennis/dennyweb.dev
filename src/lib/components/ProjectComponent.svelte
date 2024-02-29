<script lang="ts">
	import Container from './Container.svelte';
	import XIVLookup from '$lib/images/XIVLookup.png';
	import DennyWebDev from '$lib/images/Dennyweb.dev.png';
	import SvelteKitTemplate from '$lib/images/SvelteKitTemplate.png';

	type Project = {
		image: string;
		alt: string;
		title: string;
		description: string;
		liveLink: string;
		sourceLink: string;
		chips: string[];
	};

	const PROJECT_DATA: Project[] = [
		{
			image: XIVLookup,
			alt: 'A website screenshot of XIVLookup',
			title: 'XIVLookup',
			description:
				'XIVLookup is a website that allows users to search for items, quests, and other content from the game Final Fantasy XIV. It uses the XIVAPI to fetch data and display it in a user-friendly manner. Also displays in game time accuratly down to the second in order to track gathering and crafting materials.',
			liveLink: 'https://xivlookup.com',
			sourceLink: '',
			chips: ['SvelteKit', 'Typescript', 'TailwindCSS', 'Skeleton.dev', 'SSR']
		},
		{
			image: DennyWebDev,
			alt: 'A website screenshot of Dennyweb.dev',
			title: 'Dennyweb.dev',
			description:
				'Dennyweb.dev is a website that showcases my portfolio and blog. It is built with SvelteKit and TailwindCSS. This website also has a dark mode and a light mode. It also has a blog that is built with SvelteKit and Markdown.',
			liveLink: 'https://dennyweb.dev',
			sourceLink: 'https://github.com/ninicdennis/dennyweb.dev',
			chips: [
				'SvelteKit',
				'Typescript',
				'TailwindCSS',
				'Skeleton.dev',
				'Markdown"'
			]
		},
		{
			image: SvelteKitTemplate,
			alt: 'A website screenshot of Sveltekit Template',
			title: 'SvelteKit Template',
			description:
				'SvelteKit template is a basic frontend template that is built with SvelteKit and TailwindCSS. It is a simple template that can be used to start a new project. It has a dark mode and a light mode. It also has a navigation bar and a footer.',
			liveLink: '',
			sourceLink: 'https://github.com/ninicdennis/sveltekit-template',
			chips: [
				'SvelteKit',
				'Typescript',
				'TailwindCSS',
				'Skeleton.dev',
				'Template',
				'Starter'
			]
		}
	];
</script>

<div class="m-4 mt-4 flex items-center justify-center p-2">
	<h2 class="text-3xl font-bold">Projects</h2>
</div>

<Container classStyle="flex gap-4 flex-wrap items-center justify-center">
	{#each PROJECT_DATA as project}
		<div class=" card card-hover max-w-4xl rounded-lg p-4 shadow-lg">
			<img
				src={project.image}
				alt={project.alt}
				class=" h-fit w-full rounded-t-lg object-cover" />
			<div class="p-4">
				<p class="text-lg font-semibold">{project.title}</p>
				<p>{project.description}</p>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each project.chips as chip}
						<span class="chip bg-tertiary-500 text-white">{chip}</span>
					{/each}
				</div>
			</div>
			<div class="flex items-center justify-end gap-2 p-4">
				<a
					href={project.liveLink}
					class="btn rounded bg-primary-500 px-4 py-2 font-semibold text-white"
					target="_blank">
					Live
				</a>
				<a
					href={project.sourceLink}
					class="btn rounded bg-secondary-500 px-4 py-2 font-semibold text-white"
					target="_blank">
					Source
				</a>
			</div>
		</div>
	{/each}
</Container>
