import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: [vitePreprocess(), mdsvex()],

    kit: {
        adapter: adapter()
    },

    extensions: [".svelte", ".svx"]
};
