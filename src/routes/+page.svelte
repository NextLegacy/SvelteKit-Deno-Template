<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	import X from "~icons/line-md/twitter-x"
    import Instagram from "~icons/line-md/instagram";
    import LinkedIn from "~icons/line-md/linkedin";
    import Discord from "~icons/line-md/discord";

	import GermanyIcon from "~icons/circle-flags/de"
    import EnglandIcon from "~icons/circle-flags/en"

    import * as language from "$lib/paraglide/messages";


	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<h1 class="text-5xl font-extrabold text-center my-12 text-gray-800">{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div class="flex justify-center space-x-4">
	<button class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300" onclick={() => switchToLanguage('en')}>
		<EnglandIcon class="w-6 h-6 mr-2" />
		<span>English</span>
	</button>
	<button class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300" onclick={() => switchToLanguage('de')}>
		<GermanyIcon class="w-6 h-6 mr-2" />
		<span>Deutsch</span>
	</button>
</div>

<div class="flex justify-center space-x-6 mt-12">
	<a class="text-gray-600 hover:text-gray-900 transition duration-300" href="https://www.instagram.com/nextlegacyy" target="_blank" aria-label="Instagram">
		<Instagram class="w-8 h-8" />
	</a>
	<a class="text-gray-600 hover:text-gray-900 transition duration-300" href="https://www.linkedin.com/in/nextlegacy" target="_blank" aria-label="LinkedIn">
		<LinkedIn class="w-8 h-8" />
	</a>
	<a class="text-gray-600 hover:text-gray-900 transition duration-300" href="https://x.com/nextlegacyy" target="_blank" aria-label="Twitter">
		<X class="w-8 h-8" />
	</a>
	<a class="text-gray-600 hover:text-gray-900 transition duration-300" href="https://discord.com/users/454663644437938177" target="_blank" aria-label="Discord">
		<Discord class="w-8 h-8" />
	</a>
</div>