<script lang="ts">
	import type { Snippet } from "svelte";

	interface ComponentProps {
		"aria-label": string;
		children: Snippet;
		href: string;
	}

	const { children, href, "aria-label": aria_label }: ComponentProps = $props();
</script>

<a
	class="text-text-900 hover:text-accent-500 active:text-accent-800 shadow-text-500/70
        hover:bg-accent-50 bg-accent-600 hover:shadow-accent-500/80
        active:shadow-accent-800/90 transform
        rounded-full
        p-3
        shadow-md transition-all duration-300
        hover:scale-[1.02] hover:shadow-lg active:scale-95
        active:scale-[0.98]"
	{href}
	target="_blank"
	aria-label={aria_label}
>
	{@render children?.()}
</a>
