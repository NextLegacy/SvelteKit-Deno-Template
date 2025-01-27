<script lang="ts">
	import * as m from "$lib/paraglide/messages.js";

	import TwitterX from "~icons/line-md/twitter-x-alt";
	import InstagramFill from "~icons/line-md/instagram";
	import LinkedInFill from "~icons/line-md/linkedin";
	import DiscordFill from "~icons/line-md/discord";
	import GithubFill from "~icons/line-md/github";
	import Web from "~icons/material-symbols/web";
	import Rocket from "~icons/fluent-emoji/rocket";

	import Button from "$lib/components/Button.svelte";
</script>

<h1 class="my-12 flex items-center justify-center gap-2 text-center text-5xl font-extrabold">
	{m.hello_world()}
	<Rocket />
</h1>

<div class="flex flex-col items-center space-y-8">
	<div class="flex justify-center space-x-8">
		<Button href="https://github.com/nextlegacy" aria-label="GitHub">
			<GithubFill class="h-8 w-8" />
		</Button>
		<Button href="https://www.instagram.com/nextlegacyy" aria-label="Instagram">
			<InstagramFill class="h-8 w-8" />
		</Button>
		<Button href="https://www.linkedin.com/in/nextlegacy" aria-label="LinkedIn">
			<LinkedInFill class="h-8 w-8" />
		</Button>
		<Button href="https://x.com/nextlegacyy" aria-label="Twitter">
			<TwitterX class="h-8 w-8" />
		</Button>
		<Button href="https://discord.com/users/454663644437938177" aria-label="Discord">
			<DiscordFill class="h-8 w-8" />
		</Button>
	</div>
	<Button href="https://nextlegacy.de" class="flex items-center gap-2 space-x-2">
		<Web />
		<span>NextLegacy.de</span>
	</Button>
</div>
