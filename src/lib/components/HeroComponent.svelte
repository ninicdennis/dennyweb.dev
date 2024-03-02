<script lang="ts">
	import Me from '$lib/images/me.jpeg';
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<section class="card dark:text-gray-100">
	<div
		class="lg:px-30 container mx-auto flex flex-col items-center rounded-lg px-4 py-16 text-center md:px-10 md:py-24 xl:max-w-3xl">
		<Avatar
			src={Me}
			alt="A very ugly picture of me"
			width="w-64"
			class="mb-4"
			rounded="rounded-2xl" />
		<h1 class="leadi text-4xl font-bold sm:text-5xl">Denny Ninic</h1>
		<p class="mb-8 mt-2 px-8 text-xl font-semibold dark:text-primary-500">
			A frontend developer working on amazing and incredible technologies!
		</p>
		<div class="flex gap-2">
			<a href="/portfolio">
				<button
					class="variant-filled-primary btn rounded px-4 py-2 font-bold dark:text-white">
					Projects
				</button>
			</a>
			<a href="/posts">
				<button
					class="variant-filled-secondary btn rounded px-4 py-2 font-bold text-white">
					Posts
				</button>
			</a>
		</div>
		<div class="mt-4 flex gap-2">
			<a href="https://github.com/ninicdennis" target="_blank">
				<button class=" btn btn-icon">
					<Icon icon="mdi:github" width="60" />
				</button>
			</a>
			<a href="https://www.linkedin.com/in/dennis-ninic/" target="_blank">
				<button class=" btn btn-icon">
					<Icon icon="mdi:linkedin" width="60" />
				</button>
			</a>
		</div>
	</div>
</section>
