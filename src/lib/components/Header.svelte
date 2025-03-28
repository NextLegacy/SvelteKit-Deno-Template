<script lang="ts">
    import { Github, Moon, Sun } from "$lib/components/icons";
    import { lightDark, toggleLightDark } from "$lib/data/theme";
</script>

<header class="bg-background-50/50 border-primary-200/50 sticky top-0 z-50 w-full border-b backdrop-blur-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" class="text-primary-600 text-2xl font-bold">NextLegacy</a>

        <nav class="hidden md:block">
            <ul class="flex space-x-8">
                <li><a href="/" class="text-text-800 hover:text-primary-600 py-2 transition-colors">Home</a></li>
            </ul>
        </nav>

        <div class="flex items-center space-x-5">
            <a
                href="https://github.com/NextLegacy/SvelteKit-Deno-Template"
                target="_blank"
                rel="noopener noreferrer"
                class="text-text-800 hover:text-primary-600 transition-colors"
                aria-label="GitHub Profile"
            >
                <Github class="h-6 w-6" />
            </a>

            <button onclick={toggleLightDark} class="text-text-800 hover:text-primary-600" aria-label="Toggle Light/Dark Mode">
                {#if $lightDark === "dark"}
                    <Moon class="h-6 w-6" />
                {:else}
                    <Sun class="h-6 w-6" />
                {/if}
            </button>
        </div>
    </div>
</header>
