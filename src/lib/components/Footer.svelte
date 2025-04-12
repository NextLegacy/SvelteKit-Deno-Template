<script lang="ts">
    import { HeartFilled } from "$lib/components/icons";
    import socials from "$lib/data/socials";
</script>

<footer class="bg-background-50/30 border-primary-200/50 border-t py-12">
    <div class="container mx-auto px-6">
        <div class="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
                <h3 class="text-primary-600 mb-5 text-2xl font-bold">NextLegacy</h3>
                <p class="text-text-700 max-w-sm text-lg">A modern web development template built with the NextLegacy stack.</p>
            </div>

            <div>
                <h3 class="text-primary-600 mb-5 text-2xl font-bold">Navigation</h3>
                <ul class="space-y-3">
                    <li><a href="/" class="text-text-700 hover:text-primary-600 text-lg transition-colors">Home</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-primary-600 mb-5 text-2xl font-bold">Connect</h3>
                <div class="flex flex-wrap gap-5">
                    {#each socials as social}
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-text-700 hover:text-primary-600 transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon class="h-7 w-7" />
                        </a>
                    {/each}
                </div>
            </div>
        </div>

        <div class="border-primary-200/50 text-text-600 flex flex-col items-center justify-between border-t pt-8 text-base md:flex-row">
            <p>© {new Date().getFullYear()} NextLegacy. All rights reserved.</p>
            <p class="mt-4 flex items-center md:mt-0">
                Made with <HeartFilled class="mx-2 h-5 w-5 text-red-500" /> by NextLegacy
            </p>
        </div>
    </div>
</footer>
