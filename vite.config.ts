import { sveltekit } from "npm:@sveltejs/kit/vite";
import { defineConfig } from "npm:vite";
import { imagetools } from "npm:vite-imagetools";
import Icons from "npm:unplugin-icons/vite";
import tailwindcss from "npm:@tailwindcss/vite";

import { paraglideVitePlugin } from "npm:@inlang/paraglide-js@2.0.0-beta.11";

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide"
		}),
		// deno-lint-ignore no-explicit-any
		tailwindcss() as any,
		Icons({
			compiler: "svelte"
		}),
		imagetools()
	]
});
