<script lang="ts">
    import { page } from "$app/state";
    import { deepMerge } from "$lib/utils/merge";
    import type { JsonLd } from "jsonld/jsonld-spec";

    interface Props {
        layoutMetadata: Metadata;
    }

    let { layoutMetadata }: Props = $props();

    const metadata = $derived(deepMerge(layoutMetadata, page.data.metadata || {}));

    $effect(() => {
        console.log(metadata);
    });
</script>

{#snippet meta_name(name: string, content: string | undefined)}
    {#if content}
        {@html `<meta name="${name}" content="${content}" />`}
    {/if}
{/snippet}

{#snippet meta_property(prop: string, content: string | undefined)}
    {#if content}
        {@html `<meta property="${prop}" content="${content}" />`}
    {/if}
{/snippet}

{#snippet jsonLd(data: JsonLd | undefined)}
    {#if data}
        {@html `<script type="application/ld+json">${JSON.stringify(data)}</script>`}
    {/if}
{/snippet}

<svelte:head>
    <title>{metadata.title}</title>
    {#if metadata.canonical}
        <link rel="canonical" href={metadata.canonical} />
    {/if}
    <link rel="icon" href={metadata.favicon ?? "/favicon.ico"} />
    {#if metadata.manifest}
        <link rel="manifest" href={metadata.manifest} />
    {/if}

    {@html `<meta charset="utf-8" />`}
    {@html `<meta name="robots" content="${metadata.robots}" />`}

    {@render meta_name("description", metadata.description)}
    {@render meta_name("viewport", metadata.viewport)}
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

    {#each Object.entries(metadata.hreflang || {}) as [lang, href]}
        <link rel="alternate" hreflang={lang} href={href as string} />
    {/each}

    {@render jsonLd(metadata.jsonLd)}
</svelte:head>
