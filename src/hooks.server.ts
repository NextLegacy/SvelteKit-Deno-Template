import { sequence } from "@sveltejs/kit/hooks";
import { i18n } from "$lib/i18n";
import type { Handle } from "@sveltejs/kit";

const auth: Handle = async ({ event, resolve }) => {
	return await resolve(event);
};

export const handle: Handle = sequence(auth, i18n.handle());
