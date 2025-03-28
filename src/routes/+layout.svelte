<script lang="ts">
    import InjectMetadata from "$lib/components/InjectMetadata.svelte";
    import InjectTheme from "$lib/components/InjectTheme.svelte";

    import "$lib/assets/styles/app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let { children, data } = $props();
</script>

<InjectTheme />
<InjectMetadata layoutMetadata={data.metadata} />

<div class="bg-background-50 text-text-950 flex min-h-screen flex-col">
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer />
</div>
