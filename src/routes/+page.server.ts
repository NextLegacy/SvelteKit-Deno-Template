import type { Metadata } from "$lib/types/metadata";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        metadata: {
            title: "NextLegacy Stack",
            description: "My Techstack I use for beautiful but super performant websites",
            keywords: "svelte, sveltekit, deno, tailwind, typescript, motion.dev, threejs, NextLegacy"
        } satisfies Metadata as Metadata
    };
};
