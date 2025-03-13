<script lang="ts">
    const { children, data } = $props();
    import MetaData from "$lib/components/MetaData.svelte";
    import "$lib/style/app.css";
</script>

<MetaData metadata={data.metadata} />

<svelte:head>
    <script>
        document.documentElement.classList.toggle("dark", localStorage.getItem("theme") === "dark");
    </script>
</svelte:head>

<div class="bg-background-50 flex min-h-screen flex-col">
    <main class="flex-grow">
        {@render children?.()}
    </main>
</div>
