<script lang="ts">
    import { page } from "$app/state";
    import { deepMerge } from "$lib/utils/object";

    interface Props {
        layoutMetadata: Metadata;
    }

    let { layoutMetadata }: Props = $props();

    const metadata = $derived(deepMerge(layoutMetadata, page.data.metadata || {}));
</script>

<svelte:head>
    {#if metadata.title}
        <title>{metadata.title}</title>
    {/if}
    {#if metadata.robots}
        <meta name="robots" content={metadata.robots} />
    {/if}

    {#if metadata.canonical}
        <link rel="canonical" href={metadata.canonical} />
    {/if}

    {#each Object.entries(metadata.hreflang || {}) as [lang, href]}
        <link rel="alternate" hreflang={lang} href={href as string} />
    {/each}

    <link rel="icon" href={metadata.favicon ?? "/favicon.ico"} />
    {#if metadata.manifest}
        <link rel="manifest" href={metadata.manifest} />
    {/if}

    {#if metadata.description}
        <meta name="description" content={metadata.description} />
    {/if}

    {#if metadata.author}
        <meta name="author" content={metadata.author} />
    {/if}
    {#if metadata.keywords}
        <meta name="keywords" content={metadata.keywords} />
    {/if}
    {#if metadata.mobile_web_app_capable}
        <meta name="mobile-web-app-capable" content={metadata.mobile_web_app_capable} />
    {/if}
    {#if metadata.apple_mobile_web_app_capable}
        <meta name="apple-mobile-web-app-capable" content={metadata.apple_mobile_web_app_capable} />
    {/if}
    {#if metadata.apple_mobile_web_app_status_bar_style}
        <meta name="apple-mobile-web-app-status-bar-style" content={metadata.apple_mobile_web_app_status_bar_style} />
    {/if}
    {#if metadata.msapplication_config}
        <meta name="msapplication-config" content={metadata.msapplication_config} />
    {/if}
    {#if metadata.theme_color}
        <meta name="theme-color" content={metadata.theme_color} />
    {/if}

    {#if metadata.og?.type}
        <meta property="og:type" content={metadata.og.type} />
    {/if}
    {#if metadata.url}
        <meta property="og:url" content={metadata.url} />
    {/if}
    {#if metadata.title}
        <meta property="og:title" content={metadata.title} />
    {/if}
    {#if metadata.description}
        <meta property="og:description" content={metadata.description} />
    {/if}
    {#if metadata.og?.site_name}
        <meta property="og:site_name" content={metadata.og.site_name} />
    {/if}
    {#if metadata.og?.locale}
        <meta property="og:locale" content={metadata.og.locale} />
    {/if}
    {#if metadata.og?.email}
        <meta property="og:email" content={metadata.og.email} />
    {/if}
    {#if metadata.og?.country_name}
        <meta property="og:country-name" content={metadata.og.country_name} />
    {/if}
    {#if metadata.facebook_app_id}
        <meta property="fb:app_id" content={metadata.facebook_app_id} />
    {/if}

    {#if metadata.og?.image?.url}
        <meta property="og:image" content={metadata.og.image.url} />
    {/if}
    {#if metadata.og?.image?.width}
        <meta property="og:image:width" content={metadata.og.image.width} />
    {/if}
    {#if metadata.og?.image?.height}
        <meta property="og:image:height" content={metadata.og.image.height} />
    {/if}
    {#if metadata.og?.image?.alt}
        <meta property="og:image:alt" content={metadata.og.image.alt} />
    {/if}

    {#if metadata.twitter?.card}
        <meta name="twitter:card" content={metadata.twitter.card} />
    {/if}
    {#if metadata.twitter?.site}
        <meta name="twitter:site" content={metadata.twitter.site} />
    {/if}
    {#if metadata.twitter?.creator}
        <meta name="twitter:creator" content={metadata.twitter.creator} />
    {/if}
    {#if metadata.url}
        <meta name="twitter:url" content={metadata.url} />
    {/if}
    {#if metadata.title}
        <meta name="twitter:title" content={metadata.title} />
    {/if}
    {#if metadata.description}
        <meta name="twitter:description" content={metadata.description} />
    {/if}
    {#if metadata.twitter?.image?.url}
        <meta name="twitter:image" content={metadata.twitter.image.url} />
    {/if}
    {#if metadata.twitter?.image?.alt}
        <meta name="twitter:image:alt" content={metadata.twitter.image.alt} />
    {/if}

    {#if metadata.jsonLd}
        {@html `<script type="application/ld+json">${JSON.stringify(metadata.jsonLd)}</script>`}
    {/if}
</svelte:head>

<!-- 

https://github.com/sveltejs/svelte/issues/15753

<script lang="ts">
    import { page } from "$app/state";
    import { deepMerge } from "$lib/utils/object";
    import type { JsonLd } from "jsonld/jsonld-spec";

    interface Props {
        layoutMetadata: Metadata;
    }

    let { layoutMetadata }: Props = $props();

    const metadata = $derived(deepMerge(layoutMetadata, page.data.metadata || {}));
</script>

{#snippet meta_name(name: string, content: string | undefined)}
    {#if content}
        <meta {name} {content} />
    {/if}
{/snippet}

{#snippet meta_property(property: string, content: string | undefined)}
    {#if content}
        <meta {property} {content} />
    {/if}
{/snippet}

{#snippet link(rel: string, href: string | undefined)}
    <link {rel} {href} />
{/snippet}

{#snippet jsonLd(data: JsonLd | undefined)}
    {#if data}
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    {/if}
{/snippet}

<svelte:head>
    <title>{metadata.title}</title>
    {@render meta_name("robots", metadata.robots)}

    {@render link("canonical", metadata.canonical)}

    {#each Object.entries(metadata.hreflang || {}) as [lang, href]}
        <link rel="alternate" hreflang={lang} href={href as string} />
    {/each}

    {@render link("icon", metadata.favicon ?? "/favicon.ico")}
    {@render link("manifest", metadata.manifest)}

    {@render meta_name("description", metadata.description)}

    {@render meta_name("author", metadata.author)}
    {@render meta_name("keywords", metadata.keywords)}
    {@render meta_name("mobile-web-app-capable", metadata.mobile_web_app_capable)}
    {@render meta_name("apple-mobile-web-app-capable", metadata.apple_mobile_web_app_capable)}
    {@render meta_name("apple-mobile-web-app-status-bar-style", metadata.apple_mobile_web_app_status_bar_style)}
    {@render meta_name("msapplication-config", metadata.msapplication_config)}
    {@render meta_name("theme-color", metadata.theme_color)}

    {@render meta_property("og:type", metadata.og?.type)}
    {@render meta_property("og:url", metadata.url)}
    {@render meta_property("og:title", metadata.title)}
    {@render meta_property("og:description", metadata.description)}
    {@render meta_property("og:site_name", metadata.og?.site_name)}
    {@render meta_property("og:locale", metadata.og?.locale)}
    {@render meta_property("og:email", metadata.og?.email)}
    {@render meta_property("og:country-name", metadata.og?.country_name)}
    {@render meta_property("fb:app_id", metadata.facebook_app_id)}

    {@render meta_property("og:image", metadata.og?.image?.url)}
    {@render meta_property("og:image:width", metadata.og?.image?.width)}
    {@render meta_property("og:image:height", metadata.og?.image?.height)}
    {@render meta_property("og:image:alt", metadata.og?.image?.alt)}

    {@render meta_name("twitter:card", metadata.twitter?.card)}
    {@render meta_name("twitter:site", metadata.twitter?.site)}
    {@render meta_name("twitter:creator", metadata.twitter?.creator)}
    {@render meta_name("twitter:url", metadata.url)}
    {@render meta_name("twitter:title", metadata.title)}
    {@render meta_name("twitter:description", metadata.description)}
    {@render meta_name("twitter:image", metadata.twitter?.image?.url)}
    {@render meta_name("twitter:image:alt", metadata.twitter?.image?.alt)}

    {@render jsonLd(metadata.jsonLd)}
</svelte:head>
-->
