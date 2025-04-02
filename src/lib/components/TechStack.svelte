<script lang="ts">
    import { Accessibility, Performance, Responsive, SEO, Svelte, Tailwind, TypeScript, WebDev } from "$lib/components/icons";
    import { animateElements } from "$lib/utils/useMotion";

    const technologies = [
        { icon: Svelte, name: "Svelte 5", description: "Reactive UI framework" },
        { icon: TypeScript, name: "TypeScript", description: "Type-safe JavaScript" },
        { icon: Tailwind, name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { icon: WebDev, name: "SvelteKit", description: "Full-stack web framework" },
        { icon: Performance, name: "Performance", description: "Optimized for speed" },
        { icon: Responsive, name: "Responsive", description: "Mobile-first design" },
        { icon: SEO, name: "SEO", description: "Search engine optimized" },
        { icon: Accessibility, name: "Accessibility", description: "WCAG compliant" }
    ];

    $effect(() => {
        animateElements(".tech-card", 0.1);
    });
</script>

<section class="py-16">
    <div class="mb-12 text-center">
        <h2 class="text-primary-600 mb-4 text-3xl font-bold md:text-4xl">NextLegacy Stack</h2>
        <p class="text-text-700 mx-auto max-w-2xl">A modern web development stack focused on performance, accessibility, and developer experience.</p>
    </div>

    <div class="tech-stack-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {#each technologies as tech, i}
            <div
                class="tech-card bg-background-50/30 border-primary-200/50 hover:bg-background-200/30 hover:shadow-primary-500/10 rounded-lg border
                p-6 transition-colors hover:shadow-lg"
                style="opacity: 0"
            >
                <div class="mb-4 flex items-center">
                    <tech.icon class="text-primary-600 mr-3 h-8 w-8" />
                    <h3 class="text-text-900 text-xl font-semibold">{tech.name}</h3>
                </div>
                <p class="text-text-700">{tech.description}</p>
            </div>
        {/each}
    </div>
</section>
