<script lang="ts">
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch,
		Avatar,
		storePopup,
		popup,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import '../app.pcss';
	import { IconMenu2 } from '@tabler/icons-svelte';
	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	} from '@floating-ui/dom';

	import Navigation from '$lib/components/Navigation.svelte';
	import ProfilePopup from '$lib/components/ProfilePopup.svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();

	const drawerOpen = () => drawerStore.open({ width: 'w-3/5' });

	const popupAvatar: PopupSettings = {
		event: 'click',
		target: 'popupAvatar',
		placement: 'bottom'
	};
</script>

<svelte:head>
	<title>SvelteKit Template</title>
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
						<IconMenu2 color="white" />
					</span>
				</button>
				<h1 class="h3 self-center pl-2 font-semibold text-white">
					SvelteKit Template
				</h1>
			</svelte.fragment>
			<svelte:fragment slot="trail">
				<div use:popup={popupAvatar}>
					<Avatar
						width="w-12"
						border="border-2 hover:!border-primary-500"
						cursor="cursor-pointer" />
				</div>
				<ProfilePopup />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<div class="flex flex-col justify-center p-4">
		<slot />
	</div>
</AppShell>
