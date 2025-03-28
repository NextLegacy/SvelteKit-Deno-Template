import type { JsonLd } from "jsonld/jsonld-spec";

export interface Metadata {
    title?: string;
    favicon?: string;

    description?: string;

    keywords?: string;

    viewport?: string;

    author?: string;

    mobile_web_app_capable?: "yes" | "no";

    apple_mobile_web_app_capable?: "yes" | "no";
    apple_mobile_web_app_status_bar_style?: "default" | "black" | "black-translucent";

    msapplication_config?: string;

    canonical?: string;

    theme_color?: string;
    url?: string;

    robots?: string;

    facebook_app_id?: string;

    manifest?: string;

    og?: {
        type?: "website" | "article" | "book" | "profile";
        email?: string;
        country_name?: string;
        site_name?: string;
        locale?: string;
        image?: {
            url?: string;
            width?: string;
            height?: string;
            alt?: string;
        };
    };

    twitter?: {
        card?: "summary" | "summary_large_image" | "app" | "player";
        site?: string;
        creator?: string;
        image?: {
            url?: string;
            alt?: string;
        };
    };

    hreflang?: Record<string, string>;

    jsonLd?: JsonLd;
}
