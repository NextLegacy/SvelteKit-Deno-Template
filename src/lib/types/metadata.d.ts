interface MetaData {
    title?: string;
    favicon?: string;
    meta?: {
        description?: string;

        viewport?: string;

        author?: string;

        mobile_web_app_capable?: "yes" | "no";

        apple_mobile_web_app_capable?: "yes" | "no";
        apple_mobile_web_app_status_bar_style?: "default" | "black" | "black-translucent";

        msapplication_config?: string;

        canonical?: string;

        theme_color?: string;

        og?: {
            type?: "website" | "article" | "book" | "profile";
            url?: string;
            title?: string;
            // description?: string;
            email?: string;
            country_name?: string;
            site_name?: string;
            locale?: string;
            image?: {
                url?: string;
                width?: string;
                height?: string;
            };
        };

        twitter?: {
            card?: "summary" | "summary_large_image" | "app" | "player";
            site?: string;
            creator?: string;
            url?: string;
            title?: string;
            // description?: string;
            image?: {
                url?: string;
                alt?: string;
            };
        };
    };
}

export { type MetaData };
