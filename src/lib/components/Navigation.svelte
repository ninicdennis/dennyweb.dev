<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/portfolio" on:click={drawerClose}>Portfolio</a></li>
		<li><a href="/posts" on:click={drawerClose}>Posts</a></li>
	</ul>
</nav>
