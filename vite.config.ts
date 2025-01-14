import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, Plugin } from "npm:vite";
import { imagetools } from 'npm:vite-imagetools';
import Icons from 'npm:unplugin-icons/vite';

const paraglideCustomCompiler: Plugin = {
	name: "paraglide-compiler",
	configureServer: () => {
		(async () => {
			const command = new Deno.Command(Deno.execPath(), {
				args: [
					"run",
					"--allow-read",
					"--allow-env",
					"--allow-sys",
					"--allow-net",
					"--allow-write",
					"npm:@inlang/paraglide-js",
					"compile",
					"--watch",
					"--project", "./project.inlang",
					"--outdir", "./src/lib/paraglide"
				],
				stdout: "inherit",
				stderr: "inherit"
			});

			await command.output();
		})();
	}
};

export default defineConfig({
	plugins: [
		sveltekit() as any,
		paraglideCustomCompiler,
		Icons({
			compiler: 'svelte',
		}),
		imagetools(),
	]
});