import { writable } from "svelte/store";
import { browser } from "$app/environment";

const theme = writable<"light" | "dark">(
    ((browser && localStorage.getItem("theme")) || "dark") as "light" | "dark"
);

theme.subscribe((value) => {
    if (!browser) return;

    localStorage.setItem("theme", value);
    document.documentElement.classList.toggle("dark", value === "dark");

    return value;
});

const setTheme = (value: "light" | "dark") => {
    if (!browser) return;

    theme.set(value);
};

const toggleTheme = () => {
    if (!browser) return;

    theme.update((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
};

export { theme, toggleTheme };
