<script>
    import {
        HeartFilled,
        Discord,
        Github,
        TwitterX,
        FileTypeDeno,
        FileTypeSvelte,
        Tailwindcss,
        I18n,
        Linkedin,
        Instagram,
        MoonFilledToSunnyFilledLoopTransition,
        SunnyFilledLoopToMoonFilledTransition
    } from "$lib/components/icons";
    import { theme, toggleTheme } from "$lib/store";

    const techStack = [
        {
            href: "https://svelte.dev/",
            icon: FileTypeSvelte,
            label: "Svelte 5"
        },
        {
            href: "https://deno.com/",
            icon: FileTypeDeno,
            label: "Deno 2.0"
        },
        {
            href: "https://tailwindcss.com/",
            icon: Tailwindcss,
            label: "Tailwind 4"
        },
        {
            href: "https://inlang.com/m/gerre34r/library-inlang-paraglideJs",
            icon: I18n,
            label: "i18n Paraglide JS"
        }
    ];

    const socialLinks = [
        {
            href: "https://github.com/NextLegacy",
            icon: Github,
            label: "GitHub"
        },
        {
            href: "https://discord.com/users/454663644437938177",
            icon: Discord,
            label: "Discord"
        },
        {
            href: "https://x.com/nextlegacyy",
            icon: TwitterX,
            label: "X"
        },
        {
            href: "https://www.linkedin.com/in/nextlegacy/",
            icon: Linkedin,
            label: "Linkedin"
        },
        {
            href: "https://www.instagram.com/nextlegacyy/",
            icon: Instagram,
            label: "Instagram"
        }
    ];

    import Image from "$lib/favicon.png";
</script>

<button
    class="bg-background-100 text-text-800 hover:bg-background-200 hover:shadow-accent-400/10 fixed top-4 right-4 z-50 rounded-full p-3 shadow-md transition-transform duration-300 hover:scale-105"
    onclick={toggleTheme}
>
    {#if $theme === "dark"}
        <MoonFilledToSunnyFilledLoopTransition class="text-accent-500 h-6 w-6" />
    {:else}
        <SunnyFilledLoopToMoonFilledTransition class="text-accent-600 h-6 w-6" />
    {/if}
</button>

<section
    class="from-background-50 via-accent-100 to-background-50 relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b px-4 py-16"
>
    <div class="container mx-auto text-center">
        <div class="mb-6 flex justify-center">
            <img
                src={Image}
                alt="Template Logo"
                class="pixelated animate-float h-32 w-32 drop-shadow-lg"
            />
        </div>

        <h1
            class="from-accent-900 via-accent-500 to-accent-100 mb-6 bg-gradient-to-br bg-clip-text font-bold text-transparent transition-colors duration-300 md:text-7xl"
        >
            SvelteKit + Deno 2 Template
        </h1>

        <p class="text-text-800 mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
            Just a modern starter template for building fast web applications that I use for my own
            projects.
        </p>

        <p class="text-text-700 mx-auto mb-8 max-w-2xl text-lg">
            Feel free to use it for your own projects. <br /> I would love to see what you build with
            it!
        </p>

        <div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="https://github.com/NextLegacy/SvelteKit-Deno-Template"
                class="bg-accent-600 text-text-50 hover:bg-accent-500 hover:shadow-accent-400/30 rounded-lg px-6
                      py-3 font-semibold shadow-lg transition-transform
                      duration-300 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github class="mr-2 inline" />
                Go to Repo
            </a>
        </div>

        <div class="mb-16 flex flex-wrap justify-center gap-4">
            {#each techStack as tech}
                <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-background-100 hover:bg-accent-100 text-text-900 border-background-200 hover:border-accent-300 flex items-center
                           gap-2 rounded-full border px-4 py-2 shadow-sm transition-transform
                           duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                    <tech.icon class="text-lg" />
                    <span>{tech.label}</span>
                </a>
            {/each}
        </div>

        <div class="mt-16 pt-8">
            <div class="flex flex-col items-center justify-center">
                <p class="mb-4 flex items-center text-xl font-medium">
                    Made with <HeartFilled class="mx-2 text-rose-500" /> by
                    <span
                        class="from-accent-600 to-accent-400 ml-2 bg-gradient-to-r bg-clip-text font-bold text-transparent"
                    >
                        <a
                            href="https://nextlegacy.de"
                            class="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            NextLegacy
                        </a>
                    </span>
                </p>

                <div class="mt-3 flex justify-center gap-5">
                    {#each socialLinks as social}
                        <a
                            href={social.href}
                            class="text-accent-600 hover:text-accent-900 hover:bg-accent-300 flex h-10 w-10 items-center justify-center
                                  rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon class="h-5 w-5" />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
