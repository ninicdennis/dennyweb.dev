<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="card w-72 p-4 shadow-xl" data-popup="popupAvatar">
	<p class="mb-2 font-bold">Hello, User</p>

	<div class="flex items-center justify-between p-2">
		<p>Theme</p>
		<LightSwitch class=" ml-2 mr-2 self-center " rounded="rounded-full" />
	</div>

	<hr />
	<nav class="list-nav p-4">
		<ul>
			<li><a href="/">Profile</a></li>
			<li><a href="/">Dashboard</a></li>
			<li><a href="/">Account Settings</a></li>
		</ul>
	</nav>
	<div class="bg-surface-100-800-token arrow" />
</div>
