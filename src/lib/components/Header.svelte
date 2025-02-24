<script lang="ts">
    import Button from "./Button.svelte";
    import LightDarkSwitch from "./LightDarkSwitch.svelte";

    import GithubFill from "~icons/line-md/github";
</script>

<header
    class="border-accent-300 fixed top-0 right-0 left-0 z-50 border-b shadow-lg backdrop-blur-md"
>
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <div class="flex items-center space-x-4">
            <Button
                href="https://github.com/NextLegacy/SvelteKit-Deno-Template"
                class="flex items-center gap-2"
            >
                <GithubFill class="h-5 w-5" />
                <span>Go to Repo</span>
            </Button>
        </div>
        <div class="flex items-center space-x-4">
            <LightDarkSwitch />
        </div>
    </div>
</header>
