export const load = () => {
    return {
        metadata: {
            title: "Hello World 🚀",
            favicon: "/favicon.png",
            meta: {
                description: "This is a SvelteKit + Deno 2.0 template I use for my projects.",
                viewport: "width=device-width, initial-scale=1",

                mobile_web_app_capable: "yes",
                apple_mobile_web_app_capable: "yes",
                apple_mobile_web_app_status_bar_style: "default",

                canonical: "https://NextLegacy.de",

                theme_color: "#000000",

                og: {
                    as: "website",
                    type: "website",
                    url: "NextLegacy.de",
                    title: "NextLegacy.de",
                    description: "This is a SvelteKit + Deno 2.0 template I use for my projects.",
                    site_name: "NextLegacy.de",
                    country_name: "Germany",
                    email: "hey@nextlegacy.de",
                    locale: "de_DE",
                    image: {
                        url: "/favicon.png",
                        width: "32",
                        height: "32"
                    }
                },

                twitter: {
                    card: "summary",
                    site: "@NextLegacy",
                    creator: "@NextLegacy",
                    url: "NextLegacy.de",
                    title: "NextLegacy.de",
                    description: "This is a SvelteKit + Deno 2.0 template I use for my projects.",
                    image: {
                        url: "/favicon.png",
                        alt: "NextLegacy.de"
                    }
                }
            }
        } as MetaData
    };
};
