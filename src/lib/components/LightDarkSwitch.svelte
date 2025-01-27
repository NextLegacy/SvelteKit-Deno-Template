<script lang="ts">
	import Sun from "~icons/line-md/moon-alt-to-sunny-outline-loop-transition";
	import Moon from "~icons/line-md/sunny-outline-to-moon-alt-loop-transition";
	import { theme, toggleTheme } from "$lib/store";
	import Button from "./Button.svelte";
</script>

<Button class="w-30 justify-center" onclick={toggleTheme}>
	{#if $theme === "dark"}
		<Sun class="mr-2 h-6 w-6" />
		<span>Light</span>
	{:else}
		<Moon class="mr-2 h-6 w-6" />
		<span>Dark</span>
	{/if}
</Button>
