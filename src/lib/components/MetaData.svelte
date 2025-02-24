<script lang="ts">
    import { page } from "$app/state";

    let { metadata } = $props();
</script>

<svelte:head>
    <title>{page.data.metadata?.title ?? metadata.title ?? "Title"}</title>
    <link rel="icon" href={page.data.metadata?.favicon ?? metadata.favicon ?? "/favicon.png"} />
    {#if page.data.metadata?.meta?.description || metadata.meta?.description}
        <meta
            name="description"
            content={page.data.metadata?.meta?.description ?? metadata.meta.description}
        />
    {/if}
    {#if page.data.metadata?.meta?.viewport || metadata.meta?.viewport}
        <meta
            name="viewport"
            content={page.data.metadata?.meta?.viewport ?? metadata.meta.viewport}
        />
    {/if}
    {#if page.data.metadata?.meta?.mobile_web_app_capable || metadata.meta?.mobile_web_app_capable}
        <meta
            name="mobile-web-app-capable"
            content={page.data.metadata?.meta?.mobile_web_app_capable ??
                metadata.meta.mobile_web_app_capable}
        />
    {/if}
    {#if page.data.metadata?.meta?.apple_mobile_web_app_capable || metadata.meta?.apple_mobile_web_app_capable}
        <meta
            name="apple-mobile-web-app-capable"
            content={page.data.metadata?.meta?.apple_mobile_web_app_capable ??
                metadata.meta.apple_mobile_web_app_capable}
        />
    {/if}
    {#if page.data.metadata?.meta?.apple_mobile_web_app_status_bar_style || metadata.meta?.apple_mobile_web_app_status_bar_style}
        <meta
            name="apple-mobile-web-app-status-bar-style"
            content={page.data.metadata?.meta?.apple_mobile_web_app_status_bar_style ??
                metadata.meta.apple_mobile_web_app_status_bar_style}
        />
    {/if}
    {#if page.data.metadata?.meta?.msapplication_config || metadata.meta?.msapplication_config}
        <meta
            name="msapplication-config"
            content={page.data.metadata?.meta?.msapplication_config ??
                metadata.meta.msapplication_config}
        />
    {/if}
    {#if page.data.metadata?.meta?.canonical || metadata.meta?.canonical}
        <link
            rel="canonical"
            href={page.data.metadata?.meta?.canonical ?? metadata.meta.canonical}
        />
    {/if}
    {#if page.data.metadata?.meta?.theme_color || metadata.meta?.theme_color}
        <meta
            name="theme-color"
            content={page.data.metadata?.meta?.theme_color ?? metadata.meta.theme_color}
        />
    {/if}
    {#if page.data.metadata?.meta?.og || metadata.meta?.og}
        {#if page.data.metadata?.meta?.og?.type || metadata.meta?.og?.type}
            <meta
                property="og:type"
                content={page.data.metadata?.meta?.og?.type ?? metadata.meta.og.type}
            />
        {/if}
        {#if page.data.metadata?.meta?.og?.url || metadata.meta?.og?.url}
            <meta
                property="og:url"
                content={page.data.metadata?.meta?.og?.url ?? metadata.meta.og.url}
            />
        {/if}
        {#if page.data.metadata?.meta?.og?.title || metadata.meta?.og?.title}
            <meta
                property="og:title"
                content={page.data.metadata?.meta?.og?.title ?? metadata.meta.og.title}
            />
        {/if}
        {#if page.data.metadata?.meta?.og?.description || metadata.meta?.og?.description}
            <meta
                property="og:description"
                content={page.data.metadata?.meta?.og?.description ?? metadata.meta.og.description}
            />
        {/if}
        {#if page.data.metadata?.meta?.og?.site_name || metadata.meta?.og?.site_name}
            <meta
                property="og:site_name"
                content={page.data.metadata?.meta?.og?.site_name ?? metadata.meta.og.site_name}
            />
        {/if}
        {#if page.data.metadata?.meta?.og?.locale || metadata.meta?.og?.locale}
            <meta
                property="og:locale"
                content={page.data.metadata?.meta?.og?.locale ?? metadata.meta.og.locale}
            />
        {/if}
        {#if page.data.metadata?.meta?.og?.image || metadata.meta?.og?.image}
            <meta
                property="og:image"
                content={page.data.metadata?.meta?.og?.image?.url ?? metadata.meta.og.image.url}
            />
            {#if page.data.metadata?.meta?.og?.image?.width || metadata.meta?.og?.image?.width}
                <meta
                    property="og:image:width"
                    content={page.data.metadata?.meta?.og?.image?.width ??
                        metadata.meta.og.image.width}
                />
            {/if}
            {#if page.data.metadata?.meta?.og?.image?.height || metadata.meta?.og?.image?.height}
                <meta
                    property="og:image:height"
                    content={page.data.metadata?.meta?.og?.image?.height ??
                        metadata.meta.og.image.height}
                />
            {/if}
        {/if}
    {/if}
    {#if page.data.metadata?.meta?.twitter || metadata.meta?.twitter}
        {#if page.data.metadata?.meta?.twitter?.card || metadata.meta?.twitter?.card}
            <meta
                name="twitter:card"
                content={page.data.metadata?.meta?.twitter?.card ?? metadata.meta.twitter.card}
            />
        {/if}
        {#if page.data.metadata?.meta?.twitter?.site || metadata.meta?.twitter?.site}
            <meta
                name="twitter:site"
                content={page.data.metadata?.meta?.twitter?.site ?? metadata.meta.twitter.site}
            />
        {/if}
        {#if page.data.metadata?.meta?.twitter?.creator || metadata.meta?.twitter?.creator}
            <meta
                name="twitter:creator"
                content={page.data.metadata?.meta?.twitter?.creator ??
                    metadata.meta.twitter.creator}
            />
        {/if}
        {#if page.data.metadata?.meta?.twitter?.url || metadata.meta?.twitter?.url}
            <meta
                name="twitter:url"
                content={page.data.metadata?.meta?.twitter?.url ?? metadata.meta.twitter.url}
            />
        {/if}
        {#if page.data.metadata?.meta?.twitter?.title || metadata.meta?.twitter?.title}
            <meta
                name="twitter:title"
                content={page.data.metadata?.meta?.twitter?.title ?? metadata.meta.twitter.title}
            />
        {/if}
        {#if page.data.metadata?.meta?.twitter?.description || metadata.meta?.twitter?.description}
            <meta
                name="twitter:description"
                content={page.data.metadata?.meta?.twitter?.description ??
                    metadata.meta.twitter.description}
            />
        {/if}
        {#if page.data.metadata?.meta?.twitter?.image || metadata.meta?.twitter?.image}
            <meta
                name="twitter:image"
                content={page.data.metadata?.meta?.twitter?.image?.url ??
                    metadata.meta.twitter.image.url}
            />
            {#if page.data.metadata?.meta?.twitter?.image?.alt || metadata.meta?.twitter?.image?.alt}
                <meta
                    name="twitter:image:alt"
                    content={page.data.metadata?.meta?.twitter?.image?.alt ??
                        metadata.meta.twitter.image.alt}
                />
            {/if}
        {/if}
    {/if}
</svelte:head>
