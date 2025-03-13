<script lang="ts">
    import { page } from "$app/state";

    let { metadata } = $props();
</script>

{#snippet meta(keyValuePairs: [string, string][])}
    {@const attrs = keyValuePairs.map(([key, value]) => `${key}="${value}"`).join(" ")}

    {@html `<meta ${attrs} />`}
{/snippet}

<!-- prettier-ignore -->
<svelte:head>
    <title>{page.data.metadata?.title ?? metadata.title ?? "Title"}</title>
    {#if page.data.metadata?.meta?.canonical || metadata.meta?.canonical}
        <link
            rel="canonical"
            href={page.data.metadata?.meta?.canonical ?? metadata.meta.canonical}
        />
    {/if}
    <link rel="icon" href={page.data.metadata?.favicon ?? metadata.favicon ?? "/favicon.png"} />
    {@render meta([['description', page.data.metadata?.meta?.description ?? metadata.meta?.description]])}
    {@render meta([['viewport', page.data.metadata?.meta?.viewport ?? metadata.meta?.viewport]])}
    {@render meta([['author', page.data.metadata?.meta?.author ?? metadata.meta?.author]])}
    {@render meta([['mobile-web-app-capable', page.data.metadata?.meta?.mobile_web_app_capable ?? metadata.meta?.mobile_web_app_capable]])}
    {@render meta([['apple-mobile-web-app-capable', page.data.metadata?.meta?.apple_mobile_web_app_capable ?? metadata.meta?.apple_mobile_web_app_capable]])}
    {@render meta([['apple-mobile-web-app-status-bar-style', page.data.metadata?.meta?.apple_mobile_web_app_status_bar_style ?? metadata.meta?.apple_mobile_web_app_status_bar_style]])}
    {@render meta([['msapplication-config', page.data.metadata?.meta?.msapplication_config ?? metadata.meta?.msapplication_config]])}
    {@render meta([['theme-color', page.data.metadata?.meta?.theme_color ?? metadata.meta?.theme_color]])}
    {#if page.data.metadata?.meta?.og || metadata.meta?.og}
        {@render meta([['og:type', page.data.metadata?.meta?.og?.type ?? metadata.meta?.og?.type]])}
        {@render meta([['og:url', page.data.metadata?.meta?.og?.url ?? metadata.meta?.og?.url]])}
        {@render meta([['og:title', page.data.metadata?.meta?.og?.title ?? metadata.meta?.og?.title]])}
        {@render meta([['og:description', page.data.metadata?.meta?.description ?? metadata.meta?.description]])}
        {@render meta([['og:site_name', page.data.metadata?.meta?.og?.site_name ?? metadata.meta?.og?.site_name]])}
        {@render meta([['og:locale', page.data.metadata?.meta?.og?.locale ?? metadata.meta?.og?.locale]])}
        {@render meta([['og:email', page.data.metadata?.meta?.og?.email ?? metadata.meta?.og?.email]])}
        {@render meta([['og:country-name', page.data.metadata?.meta?.og?.country_name ?? metadata.meta?.og?.country_name]])}
        {#if page.data.metadata?.meta?.og?.image || metadata.meta?.og?.image}
            {@render meta([['og:image', page.data.metadata?.meta?.og?.image?.url ?? metadata.meta?.og?.image?.url]])}
            {@render meta([['og:image:width', page.data.metadata?.meta?.og?.image?.width ?? metadata.meta?.og?.image?.width]])}
            {@render meta([['og:image:height', page.data.metadata?.meta?.og?.image?.height ?? metadata.meta?.og?.image?.height]])}
        {/if}
    {/if}
    {#if page.data.metadata?.meta?.twitter || metadata.meta?.twitter}
        {@render meta([['twitter:card', page.data.metadata?.meta?.twitter?.card ?? metadata.meta?.twitter?.card]])}
        {@render meta([['twitter:site', page.data.metadata?.meta?.twitter?.site ?? metadata.meta?.twitter?.site]])}
        {@render meta([['twitter:creator', page.data.metadata?.meta?.twitter?.creator ?? metadata.meta?.twitter?.creator]])}
        {@render meta([['twitter:url', page.data.metadata?.meta?.twitter?.url ?? metadata.meta?.twitter?.url]])}
        {@render meta([['twitter:title', page.data.metadata?.meta?.twitter?.title ?? metadata.meta?.twitter?.title]])}
        {@render meta([['twitter:description', page.data.metadata?.meta?.description ?? metadata.meta?.description]])}
        {#if page.data.metadata?.meta?.twitter?.image || metadata.meta?.twitter?.image}
            {@render meta([['twitter:image', page.data.metadata?.meta?.twitter?.image?.url ?? metadata.meta?.twitter?.image?.url]])}
            {@render meta([['twitter:image:alt', page.data.metadata?.meta?.twitter?.image?.alt ?? metadata.meta?.twitter?.image?.alt]])}
        {/if}
    {/if}
</svelte:head>
