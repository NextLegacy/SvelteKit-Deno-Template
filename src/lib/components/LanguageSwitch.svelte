<script lang="ts">
	import { getLocale, i18n, setLocale } from "$lib/i18n";
	import GermanyIcon from "~icons/circle-flags/de";
	import EnglandIcon from "~icons/circle-flags/en";
	import Button from "./Button.svelte";
</script>

<Button class="w-30 justify-center" onclick={() => setLocale(getLocale() === "en" ? "de" : "en")}>
	{#if getLocale() === "en"}
		<GermanyIcon class="mr-2 h-6 w-6" />
		<span>Deutsch</span>
	{:else}
		<EnglandIcon class="mr-2 h-6 w-6" />
		<span>English</span>
	{/if}
</Button>
