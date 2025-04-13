<script lang="ts">
    import InjectMetadata from "$lib/components/InjectMetadata.svelte";
    import InjectTheme from "$lib/components/InjectTheme.svelte";

    import "$lib/assets/styles/app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";

    let { children, data } = $props();
</script>

<InjectMetadata layoutMetadata={data.metadata} />

<InjectTheme />

<div class="bg-background-50 text-text-950 flex min-h-screen flex-col">
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer />
</div>
