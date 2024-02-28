<script lang="ts">
	export let classStyle: string = '';
</script>

<div class={`container self-center ${classStyle}`}>
	<slot />
</div>
