<script lang="ts">
    import "$lib/app.css";

    import MetaData from "$lib/components/MetaData.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { theme } from "$lib/store";
    import Header from "$lib/components/Header.svelte";
    import Background from "$lib/components/Background.svelte";

    let { children, data } = $props();
</script>

<MetaData metadata={data.metadata} />

<div data-theme={$theme}>
    <Background />
    <Header />
    <div
        class="selection:bg-accent-500 selection:text-text-900 text-text-950 flex min-h-screen flex-col"
    >
        <main
            class="mx-auto mt-16 flex w-full max-w-screen-xl flex-1 flex-col p-4 text-base md:text-lg"
        >
            {@render children()}
        </main>
    </div>
</div>
