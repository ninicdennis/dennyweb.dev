<script lang="ts">
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		storePopup,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	import '../app.pcss';

	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	} from '@floating-ui/dom';

	import Navigation from '$lib/components/Navigation.svelte';
	import Icon from '@iconify/svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();

	const drawerOpen = () => drawerStore.open({ width: 'w-3/5' });
</script>

<svelte:head>
	<title>Dennyweb.dev</title>
</svelte:head>

<Drawer class="bg-surface-500">
	<div class="flex items-center justify-between bg-secondary-500">
		<h2 class="p-4 font-bold text-white">Navigation</h2>
	</div>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="dark:bg-surface-800 bg-surface-100 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar background="bg-secondary-500" padding="p-2">
			<svelte.fragment slot="lead" class="flex justify-between">
				<button class="btn btn-sm lg:hidden" on:click={drawerOpen}>
					<span>
						<Icon icon="mingcute:menu-fill" height={28} />
					</span>
				</button>
				<div class="self-center">
					<h1 class="h3 self-center pl-2 font-semibold text-white">
						Dennyweb.dev
					</h1>
					<p class="text-center font-semibold text-white">Your favorite dev</p>
				</div>
			</svelte.fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<div class="flex flex-col justify-center p-4">
		<slot />
	</div>
</AppShell>
