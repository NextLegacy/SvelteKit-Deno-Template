import { writable } from "svelte/store";

const theme = writable<"light" | "dark">("light");

const toggleTheme = () => {
	theme.update((current) => (current === "light" ? "dark" : "light"));
};

export { theme, toggleTheme };
