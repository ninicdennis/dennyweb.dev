<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { ProgressBar, SlideToggle } from '@skeletonlabs/skeleton';

	let value: boolean = false;
</script>

<Container>
	<h1 class="h2 p-2 font-bold">Component Colors</h1>
	<hr />

	<div class="card mt-4 flex flex-col p-2">
		<p>Typography</p>
		<hr class="mb-2 mt-2" />
		<h1 class="h1">Header 1</h1>
		<h2 class="h2">Header 2</h2>
		<h3 class="h3">Header 3</h3>
		<h4 class="h4">Header 4</h4>
		<h5 class="h5">Header 5</h5>
		<h6 class="h6">Header 6</h6>
		<p>Normal Text</p>
	</div>
	<div class="card mt-4 flex flex-col p-2">
		<p>Buttons</p>
		<hr class="mb-2 mt-2" />
		<div class="flex flex-wrap items-center gap-2">
			<button class="variant-filled-primary btn">Primary</button>
			<button class="variant-filled-secondary btn">Secondary</button>
			<button class="variant-filled-tertiary btn">Tertiary</button>
			<button class="variant-filled-success btn">Success</button>
			<button class="variant-filled-warning btn">Warning</button>
			<button class="variant-filled-error btn">Error</button>
			<button class="variant-filled-surface btn">Surface</button>
			<SlideToggle name="slide" bind:checked={value} active="bg-primary-500" />
		</div>
	</div>

	<div class="card mt-4 flex flex-col p-2">
		<p>Chip</p>
		<hr class="mb-2 mt-2" />
		<div class="flex flex-wrap items-center gap-2">
			<span class="variant-filled-primary chip">Primary</span>
			<span class="variant-filled-secondary chip">Secondary</span>
			<span class="variant-filled-tertiary chip">Tertiary</span>
			<span class="variant-filled-success chip">Success</span>
			<span class="variant-filled-warning chip">Warning</span>
			<span class="variant-filled-error chip">Error</span>
			<span class="variant-filled-surface chip">Surface</span>
		</div>
	</div>

	<div class="card mt-4 flex flex-col p-2">
		<p>Inputs</p>
		<hr class="mb-2 mt-2" />
		<div class="flex flex-wrap items-center gap-2">
			<span>Input</span>
			<input class="input p-2" type="text" placeholder="Input..." />
			<span>Select</span>
			<select class="select">
				<option value="1">First option</option>
				<option value="2">Second option</option>
			</select>
			<span>Textarea</span>
			<textarea
				class="textarea p-2"
				rows="4"
				placeholder="Hello there, this is a textarea!" />
		</div>
	</div>

	<div class="card mt-4 flex flex-col gap-2 p-2">
		<p>Placeholders</p>
		<div class="placeholder h-6 animate-pulse" />
		<div class="placeholder h-6 animate-pulse" />
	</div>

	<div class="card mt-4 flex flex-col gap-2 p-2">
		<p>Progress Bar</p>
		<ProgressBar meter="variant-filled-primary" />
		<ProgressBar meter="variant-filled-secondary" />
		<ProgressBar meter="variant-filled-tertiary" />
	</div>
</Container>
