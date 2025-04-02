<script lang="ts">
    import { Accessibility, Performance, SEO, UXDesign } from "$lib/components/icons";
    import { animateElements } from "$lib/utils/useMotion";

    $effect(() => {
        animateElements(".feature-card", 0.2);
    });
</script>

<section class="features-section bg-background-50/20 py-24">
    <div class="container mx-auto px-6">
        <div class="mb-16 text-center">
            <h2 class="text-primary-600 mb-6 text-3xl font-bold md:text-5xl">Key Features</h2>
            <p class="text-text-700 mx-auto max-w-2xl text-lg">
                Built with modern best practices in mind to create stunning, accessible, and high-performance websites.
            </p>
        </div>

        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
            <div class="feature-card relative pl-20" style="opacity: 0">
                <div class="bg-background-50/50 border-primary-200/50 absolute top-0 left-0 rounded-xl border p-3 shadow-md">
                    <Performance class="text-primary-600 h-10 w-10" />
                </div>
                <h3 class="text-text-900 mb-3 text-2xl font-semibold">High Performance</h3>
                <p class="text-text-700 text-lg">
                    Built with performance in mind, ensuring your websites load quickly and run smoothly on all devices.
                </p>
            </div>

            <div class="feature-card relative pl-20" style="opacity: 0">
                <div class="bg-background-50/50 border-primary-200/50 absolute top-0 left-0 rounded-xl border p-3 shadow-md">
                    <SEO class="text-primary-600 h-10 w-10" />
                </div>
                <h3 class="text-text-900 mb-3 text-2xl font-semibold">SEO Optimized</h3>
                <p class="text-text-700 text-lg">
                    Implement best SEO practices with structured data, semantic HTML, and optimized metadata for better search engine visibility.
                </p>
            </div>

            <div class="feature-card relative pl-20" style="opacity: 0">
                <div class="bg-background-50/50 border-primary-200/50 absolute top-0 left-0 rounded-xl border p-3 shadow-md">
                    <Accessibility class="text-primary-600 h-10 w-10" />
                </div>
                <h3 class="text-text-900 mb-3 text-2xl font-semibold">Accessible</h3>
                <p class="text-text-700 text-lg">
                    Ensuring WCAG 2.1 AA compliance to make your websites accessible to all users regardless of their abilities.
                </p>
            </div>

            <div class="feature-card relative pl-20" style="opacity: 0">
                <div class="bg-background-50/50 border-primary-200/50 absolute top-0 left-0 rounded-xl border p-3 shadow-md">
                    <UXDesign class="text-primary-600 h-10 w-10" />
                </div>
                <h3 class="text-text-900 mb-3 text-2xl font-semibold">Modern UX Design</h3>
                <p class="text-text-700 text-lg">
                    Beautiful and intuitive user interfaces designed with modern UX principles for an engaging user experience.
                </p>
            </div>
        </div>
    </div>
</section>
