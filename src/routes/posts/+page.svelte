<script>
	import Container from '$lib/components/Container.svelte';
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<Container>
	<div class="my-2 flex items-center justify-center p-2">
		<h2 class="text-3xl font-bold">Posts</h2>
	</div>
	<section>
		<ul>
			{#each data.posts as post}
				<div class="card card-hover m-2">
					<a href={`/posts/${post.slug}`}>
						<h3 class="h2 card-header">{post.title}</h3>
						<div class="p-4">
							<p class="">{formatDate(post.date)}</p>

							<p class="">{post.description}</p>
							<div class="mb-4">
								{#each post.categories as category}
									<span class="chip mr-2 bg-primary-500">
										&num;{category}
									</span>
								{/each}
							</div>
						</div>
					</a>
				</div>
			{/each}
		</ul>
	</section>
</Container>
