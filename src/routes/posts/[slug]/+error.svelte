<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<section class="flex h-screen items-center">
	<div class="container flex flex-col items-center">
		<div class="flex max-w-md flex-col gap-6 text-center">
			<h2 class="h2 font-semibold">
				<span class=" text-primary-500">Error</span>
				{$page.status}
			</h2>
			<p class="py-2 font-semibold">{$page?.error?.message || ''}</p>
			<a href="/posts">
				<button
					class="variant-filled-primary btn font-semibold dark:text-white">
					<Icon icon="mdi:arrow-back" />
					<p>Go back to posts!</p>
				</button>
			</a>
		</div>
	</div>
</section>
