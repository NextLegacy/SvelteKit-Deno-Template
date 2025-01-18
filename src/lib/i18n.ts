import * as runtime from "$lib/paraglide/runtime";
import { createI18n } from "@inlang/paraglide-sveltekit";
import type { Locale } from '$lib/paraglide/runtime';
import { page } from '$app/state';

import { goto } from '$app/navigation'

const runtimeMapped = { 
	setLanguageTag: (locale: "en" | "de" | (() => "en" | "de")) => {
		const resolvedLocale = typeof locale === 'function' ? locale() : locale;
		runtime.setLocale(resolvedLocale);
	},
	languageTag: runtime.getLocale,
	onSetLanguageTag: (callback: any) => { 
		console.log("onSetLanguageTag is not implemented in the runtime");
	},
	isAvailableLanguageTag: runtime.isLocale,
	availableLanguageTags: runtime.locales,
	sourceLanguageTag: runtime.baseLocale
};

export const i18n = createI18n(runtimeMapped as any);

export const setLocale = (newLanguage: Locale) => {
	const canonicalPath = i18n.route(page.url.pathname);
	const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
	goto(localisedPath);
}