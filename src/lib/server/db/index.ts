import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";

import { env } from "$env/dynamic/private";

await new Promise((resolve) => {
    while (!env.DATABASE_URL) {
        setTimeout(resolve, 10);
    }
    resolve(true);
});

const client = neon(env.DATABASE_URL);

export const db = drizzle(client);
