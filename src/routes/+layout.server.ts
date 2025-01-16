import type MetaData from "$lib/components/MetaData.svelte";

export const load = async () => {
    return {
        metadata: {
            title: "Hello World 🚀",
            favicon: "/favicon.png",
            meta: {
                description: "",
                viewport: "width=device-width, initial-scale=1",

                mobile_web_app_capable: "yes",
                apple_mobile_web_app_capable: "yes",
                apple_mobile_web_app_status_bar_style: "default",

                canonical: "NextLegacy.de",

                theme_color: "#000000",

                og: {
                    type: "website",
                    url: "NextLegacy.de",
                    title: "NextLegacy.de",
                    description: "",
                    site_name: "NextLegacy.de",
                    locale: "de_DE",
                    image: "/Icon512x512.png",
                    image_width: "512",
                    image_height: "512"
                },

                twitter: {
                    card: "summary",
                    site: "@NextLegacy",
                    creator: "@NextLegacy",
                    url: "NextLegacy.de",
                    title: "NextLegacy.de",
                    description: "",
                    image: "/Icon512x512.png",
                    image_alt: "NextLegacy.de"
                }
            }
        } as MetaData
    }
};