<script lang="ts">
	import "../app.css"

	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import MetaData from "$lib/components/MetaData.svelte";

	let { children, data } = $props();
</script>

<MetaData metadata={data.metadata} />

<ParaglideJS {i18n}>
	<div class="app">
		<main>
			{@render children()}
		</main>
	</div>
</ParaglideJS>