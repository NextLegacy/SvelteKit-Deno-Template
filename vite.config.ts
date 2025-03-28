import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { imagetools } from "vite-imagetools";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import { type PluginOption, defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        sveltekit(),
        tailwindcss(),
        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide",
            strategy: ["url", "cookie", "baseLocale"]
        }),
        Icons({
            compiler: "svelte"
        }),
        imagetools(),
        svelteInspector(),
        kitRoutes({
            generated_file_path: "./src/lib/utils/routes.ts"
        }),
        visualizer({
            emitFile: true,
            filename: "stats.html"
        })
    ] as PluginOption[]
});
