import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-node";

export default {
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".md"]
        })
    ],

    kit: {
        adapter: adapter()
    },

    extensions: [".svelte", ".md"]
};
