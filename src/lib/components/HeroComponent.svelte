<script lang="ts">
	import Me from '$lib/images/me.jpeg';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<section class="card dark:text-gray-100">
	<div
		class="container mx-auto flex flex-col items-center rounded-lg px-4 py-16 text-center md:px-10 md:py-32 lg:px-32 xl:max-w-3xl">
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
			<button
				class="btn rounded bg-primary-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
				<a href="/portfolio">Portfolio</a>
			</button>
			<button
				class="btn rounded bg-secondary-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
				<a href="/posts">Posts</a>
			</button>
		</div>
	</div>
</section>
