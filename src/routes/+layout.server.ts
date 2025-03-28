export const load = async () => {
    const siteUrl = "";

    return {
        metadata: {
            title: "Your Site Name",
            description: "A comprehensive description of your website that is engaging and contains keywords",
            author: "Your Name or Company",
            keywords: "svelte, sveltekit, your, relevant, keywords",

            favicon: "/favicon.ico",
            manifest: "/manifest.json",

            viewport: "width=device-width, initial-scale=1",

            canonical: siteUrl,
            url: siteUrl,

            robots: "index,follow",

            theme_color: "#000000",

            mobile_web_app_capable: "yes",
            apple_mobile_web_app_capable: "yes",
            apple_mobile_web_app_status_bar_style: "black",

            facebook_app_id: "",

            og: {
                type: "website",
                site_name: "Your Site Name",
                locale: "en_US",
                image: {
                    url: `${siteUrl}/favicon.png`,
                    width: "1200",
                    height: "630",
                    alt: "Your Site Name"
                }
            },

            twitter: {
                card: "summary_large_image",
                site: "@nextlegacyy",
                creator: "@nextlegacyy",
                image: {
                    url: `${siteUrl}/favicon.png`,
                    alt: "Your Site Name"
                }
            },

            jsonLd: {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Your Site Name",
                url: siteUrl,
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            }
        } satisfies Metadata as Metadata
    };
};
