import { sveltekit } from "npm:@sveltejs/kit/vite";
import { defineConfig } from "npm:vite";
import { imagetools } from 'npm:vite-imagetools';
import Icons from 'npm:unplugin-icons/vite';

import { paraglideVitePlugin } from "npm:@inlang/paraglide-js";

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide"
		}),
		Icons({
			compiler: 'svelte',
		}),
		imagetools(),
	]
});