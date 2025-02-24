<script lang="ts">
    import type { Snippet } from "svelte";
    interface ComponentProps {
        children?: Snippet;
        class?: string;
        id?: string;
        onclick?: () => void;
        href?: string;
        "aria-label"?: string;
    }

    let {
        children,
        class: className,
        id,
        onclick,
        href,
        "aria-label": aria_label
    }: ComponentProps = $props();
</script>

{#if href}
    <a
        {href}
        target="_blank"
        class="text-text-900 hover:text-accent-500 active:text-accent-800 shadow-text-500/70
			hover:bg-accent-900 bg-accent-500/80 hover:shadow-accent-500/90 flex
			transform cursor-pointer items-center
			rounded-full
			px-4 py-2 font-medium shadow-md
			transition-all duration-300 hover:scale-[1.02]
			hover:shadow-lg
			active:scale-[0.98]
			{className}"
        {id}
        aria-label={aria_label}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        {onclick}
        class="text-text-900 hover:text-accent-500 active:text-accent-800 shadow-text-500/70
            hover:bg-accent-900 bg-accent-500/80 hover:shadow-accent-500/90 flex
            transform cursor-pointer items-center
            rounded-full
            px-4 py-2 font-medium shadow-md
            transition-all duration-300 hover:scale-[1.02]
            hover:shadow-lg
            active:scale-[0.98]
            {className}"
        {id}
        aria-label={aria_label}
    >
        {@render children?.()}
    </button>
{/if}
