import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import tailwindcss from "@tailwindcss/vite";
import "jsr:@std/dotenv/load";
import { visualizer } from "rollup-plugin-visualizer";
import Icons from "unplugin-icons/vite";
import { type PluginOption, defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { kitRoutes } from "vite-plugin-kit-routes";

export default defineConfig(() => {
    return {
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
    };
});
