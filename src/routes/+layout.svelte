<script lang="ts">
	import "../app.css"

	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import MetaData from "$lib/components/MetaData.svelte";
	import { onMount } from "svelte";
	import { page } from '$app/state';
	import { setLocale } from "$lib/paraglide/runtime";

	let { children, data } = $props();

	setLocale(i18n.getLanguageFromUrl(page.url) as "en" | "de");
</script>

<MetaData metadata={data.metadata} />

<ParaglideJS {i18n}>
	<div class="app">
		<main>
			{@render children()}
		</main>
	</div>
</ParaglideJS>