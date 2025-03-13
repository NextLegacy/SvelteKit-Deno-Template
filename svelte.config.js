import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import deno_adapter from "svelte-adapter-deno";

export default {
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".md"]
        })
    ],

    kit: {
        adapter: deno_adapter()
    },

    extensions: [".svelte", ".md"]
};
