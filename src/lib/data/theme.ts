import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type LightDark = "light" | "dark";
export const Themes = Object.keys(import.meta.glob("$lib/assets/styles/themes/*.css", { eager: true })).map((path) =>
    path.replace(/.*\/(\w+)\.css$/, "$1")
);

export const lightDark = writable<LightDark>(browser ? (localStorage.getItem("lightDark") as LightDark) : "light");
export const theme = writable(browser ? localStorage.getItem("theme") || "" : "base");

export const toggleLightDark = () => {
    if (!browser) return;

    lightDark.update((current) => (current === "light" ? "dark" : "light"));
};

theme.subscribe((value) => {
    if (!browser) return;

    const previousTheme = document.documentElement.classList.value.match(/theme-\w+/)?.[0];

    if (previousTheme) {
        document.documentElement.classList.remove(previousTheme);
    }

    document.documentElement.classList.add(`theme-${value}`);

    localStorage.setItem("theme", value);
});

lightDark.subscribe((value) => {
    if (!browser) return;

    document.documentElement.classList.toggle("dark", value === "dark");

    localStorage.setItem("lightDark", value);
});
