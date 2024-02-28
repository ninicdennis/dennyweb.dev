<script lang="ts">
	import Icon from '@iconify/svelte';
	import Container from './Container.svelte';

	type StackCard = {
		icon: string;
		title: string;
	};
	const stackCards: StackCard[] = [
		{
			icon: 'logos:react',
			title: 'React'
		},
		{ icon: 'devicon:nextjs', title: 'Next.js' },
		{ icon: 'devicon:svelte', title: 'Svelte' },
		{ icon: 'logos:typescript-icon', title: 'TypeScript' },
		{ icon: 'logos:javascript', title: 'JavaScript' },
		{ icon: 'vscode-icons:file-type-node2', title: 'Node.js' },
		{ icon: 'logos:tailwindcss-icon', title: 'Tailwind' },
		{ icon: 'devicon:html5', title: 'HTML5' },
		{ icon: 'devicon:css3', title: 'CSS3' },
		{ icon: 'simple-icons:mui', title: 'MUI' },
		{ icon: 'logos:graphql', title: 'GraphQL' },
		{ icon: 'logos:postgresql', title: 'PostgreSQL' }
	];
</script>

<div class="m-2 mt-4 flex items-center justify-center p-2">
	<h2 class="text-3xl font-bold">Technologies</h2>
</div>

<Container classStyle="flex flex-wrap ">
	{#each stackCards as card}
		<div
			class="card card-hover m-2 mt-4 flex-[1_0_20%] p-4 hover:bg-surface-300 dark:hover:bg-secondary-500">
			<div class="flex h-full min-w-24 flex-col items-center justify-between">
				<Icon icon={card.icon} width={40} />
				<h3 class="mt-2 text-xl font-semibold">
					{card.title}
				</h3>
			</div>
		</div>
	{/each}
</Container>
