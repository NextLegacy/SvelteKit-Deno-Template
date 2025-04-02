<script lang="ts">
    import { createAnimation } from "$lib/utils/useMotion";

    import { animate } from "motion";

    const animatehero = createAnimation((element) => {
        animate(
            element,
            {
                opacity: [0, 1],
                transform: ["translateY(100px)", "translateY(0)"]
            },
            {
                duration: 0.5
            }
        );
    });
</script>

<section class="relative overflow-hidden py-28 md:py-40">
    <div class="from-primary-100/20 absolute inset-0 bg-gradient-to-b to-transparent"></div>

    <div class="relative z-10 container mx-auto px-6">
        <div class="mx-auto max-w-3xl text-center" use:animatehero>
            <h1 class="from-primary-600 to-secondary-600 mb-8 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                NextLegacy Template
            </h1>

            <p class="text-text-800 mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                A beautiful starter template built with the NextLegacy stack: Svelte 5, SvelteKit, TypeScript, and Tailwind CSS v4.
            </p>

            <div class="flex flex-col justify-center gap-5 sm:flex-row">
                <a
                    href="/projects"
                    class="bg-background-400 hover:bg-background-300 text-text-950 shadow-primary-100/20 rounded-lg px-8 py-3.5 font-medium shadow-md transition-colors"
                >
                    View Projects
                </a>
                <a
                    href="/contact"
                    class="hover:bg-background-50/30 border-primary-400 text-primary-600 rounded-lg border bg-transparent px-8 py-3.5 font-medium transition-colors"
                >
                    Get in Touch
                </a>
            </div>
        </div>
    </div>

    <div class="bg-background-400/10 absolute -bottom-16 -left-16 h-96 w-96 rounded-full blur-3xl"></div>
    <div class="bg-secondary-400/10 absolute -top-16 -right-16 h-96 w-96 rounded-full blur-3xl"></div>
</section>
