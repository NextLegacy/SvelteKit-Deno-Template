<script lang="ts">
    import { animateElement } from "$lib/utils/useMotion";

    $effect(() => {
        animateElement(".cta-content", 0.7);
    });
</script>

<section class="cta-section relative overflow-hidden py-28">
    <div class="from-primary-100/30 to-secondary-100/30 absolute inset-0 bg-gradient-to-r"></div>

    <div class="relative z-10 container mx-auto px-6">
        <div class="cta-content mx-auto max-w-3xl text-center" style="opacity: 0">
            <h2 class="text-primary-600 mb-8 text-3xl font-bold md:text-5xl">Ready to Start Your Next Project?</h2>
            <p class="text-text-800 mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                Use this template as a starting point for your next web project and build something amazing with the NextLegacy stack.
            </p>

            <div class="flex flex-col justify-center gap-5 sm:flex-row">
                <a
                    href="https://github.com/nextlegacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-background-400 hover:bg-background-300 text-text-950 shadow-primary-100/20 rounded-lg px-10 py-4 font-medium shadow-lg transition-colors"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    </div>

    <div class="bg-background-400/10 absolute top-1/2 left-10 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl"></div>
    <div class="bg-secondary-400/10 absolute top-1/2 right-10 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl"></div>
</section>
