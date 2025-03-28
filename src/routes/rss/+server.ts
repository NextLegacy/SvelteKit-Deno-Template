export const GET = async () => {
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Title</title>
        <description>A RSS feed</description>
    </channel>
</rss>
`;

    return new Response(rss, {
        headers: { "Content-Type": "application/xml" }
    });
};
