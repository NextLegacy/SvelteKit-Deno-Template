import { sveltekit } from "npm:@sveltejs/kit/vite";
import { defineConfig } from "npm:vite";
import { imagetools } from "npm:vite-imagetools";
import Icons from "npm:unplugin-icons/vite";
import tailwindcss from "npm:@tailwindcss/vite";

export default defineConfig({
    plugins: [
        sveltekit(),
        Icons({
            compiler: "svelte"
        }),
        tailwindcss(),
        imagetools()
    ]
});
