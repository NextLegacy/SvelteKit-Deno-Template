import { defineConfig, PluginOption } from "vite";
import deno from "@deno/vite-plugin";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import Icons from "unplugin-icons/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

export default defineConfig({
    plugins: [
        deno(),
        sveltekit(),
        tailwindcss(),
        Icons({
            compiler: "svelte",
            autoInstall: true
        }),
        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide",
            strategy: ["url", "cookie", "baseLocale"]
        }),
        imagetools()
    ] as PluginOption[]
});
