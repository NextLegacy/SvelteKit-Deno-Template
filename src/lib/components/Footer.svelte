<script lang="ts">
    import socials from "$lib/data/socials";
    import { Calendar, ChevronRight, Code, Consulting, Email, HeartFilled, Sparkle, University } from "./icons";

    const currentYear = $state(new Date().getFullYear());

    const links = {
        main: [
            { name: "Home", href: "https://nextlegacy.de/", icon: Code },
            { name: "Projects", href: "https://nextlegacy.de/#projects", icon: Consulting },
            { name: "Articles", href: "https://nextlegacy.de/articles", icon: Calendar },
            { name: "Contact", href: "https://nextlegacy.de/#contact", icon: Email }
        ]
    };
</script>

<footer class="border-accent-500/20 relative mt-auto border-t py-12">
    <div class="container mx-auto flex max-w-7xl flex-col px-4 lg:block">
        <div class="mb-10 text-center">
            <p class="text-text-700 bg-primary-100/60 inline-block rounded-full px-6 py-2 text-sm">Thanks for visiting!</p>
        </div>

        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
                <h3 class="text-text-900 mb-4 text-xl font-semibold">NextLegacy</h3>
                <p class="text-text-700 mb-4 text-sm leading-relaxed">
                    Building thoughtful digital experiences with modern web technologies. Full-stack developer based in Cologne, Germany.
                </p>
                <div class="flex items-center gap-2">
                    <University class="text-accent-700 h-5 w-5" />
                    <a
                        href="https://www.rwth-aachen.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-accent-700 hover:text-primary-700 text-sm transition-colors"
                    >
                        RWTH Aachen University
                    </a>
                </div>
            </div>

            <div>
                <h3 class="text-text-900 mb-4 text-xl font-semibold">Explore</h3>
                <ul class="space-y-3">
                    {#each links.main as link}
                        <li>
                            <a href={link.href} class="text-text-700 hover:text-accent-700 inline-flex items-center gap-2 text-sm transition-colors">
                                <div class="bg-accent-100/60 text-accent-700 flex h-8 w-8 items-center justify-center rounded-full">
                                    <link.icon class="h-4 w-4" />
                                </div>
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div>
                <h3 class="text-text-900 mb-4 text-xl font-semibold">Get in Touch</h3>
                <p class="text-text-700 mb-4 text-sm">Have a project in mind? Let's create something amazing together.</p>

                <a
                    href="https://nextlegacy.de/contact"
                    class="bg-accent-700 text-text-50 hover:bg-accent-800 mb-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                    Start a Conversation
                    <ChevronRight class="h-4 w-4" />
                </a>

                <div class="text-text-700 flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <Email class="text-accent-700 h-4 w-4" />
                        <a href="mailto:hey@nextlegacy.de" class="hover:text-accent-700 text-sm transition-colors"> hey@nextlegacy.de </a>
                    </div>
                    <div class="group flex items-center gap-2">
                        <div class="relative">
                            <Sparkle class="text-accent-500 absolute -top-1 -right-3 h-3 w-3 animate-pulse" />
                            <Email class="text-accent-700 h-4 w-4 transition-transform group-hover:scale-110" />
                        </div>
                        <a
                            href="mailto:heyy@nextlegacy.de"
                            class="from-accent-600 to-secondary-500 inline-flex items-center bg-gradient-to-r bg-clip-text text-sm font-medium text-transparent transition-all duration-300 group-hover:scale-105"
                        >
                            heyy@nextlegacy.de
                            <Sparkle class="text-secondary-500 ml-0.5 h-3 w-3 animate-bounce" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-accent-300/20 mt-10 flex flex-col items-center justify-between gap-6 border-t pt-6 md:flex-row">
            <div class="flex space-x-3">
                {#each Object.entries(socials) as [key, { label, icon: Icon, href }]}
                    <a
                        {href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bg-background-100/70 border-background-200/50 text-text-700 hover:bg-accent-100/70 hover:text-accent-700 hover:border-accent-300/50 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110"
                    >
                        <Icon class="h-5 w-5" />
                    </a>
                {/each}
            </div>

            <div class="text-text-600 flex flex-wrap gap-4 text-xs">
                <a href="https://nextlegacy.de/imprint" class="hover:text-accent-500 transition-colors"> Imprint </a>
                <Sparkle class="text-accent-500 inline h-5 w-5" />
                <a href="https://nextlegacy.de/privacy" class="hover:text-accent-500 transition-colors"> Privacy </a>
            </div>
            <div class="text-text-600 flex flex-col items-center gap-3 text-sm md:flex-row md:gap-6">
                <a class="group flex items-center gap-1" href="https://nextlegacy.de" target="_blank" rel="noopener noreferrer">
                    Made with <HeartFilled class="text-accent-500 inline h-3 w-3 group-hover:animate-pulse" /> by NextLegacy
                </a>
            </div>
        </div>
        <div class="text-accent-600 mt-6 flex items-center gap-2 self-center align-middle text-xs *:justify-center">
            <span>&copy; {currentYear} NextLegacy - All rights reserved.</span>
        </div>
    </div>
</footer>
