import { defineConfig } from "drizzle-kit";

const DATABASE_URL = Deno.env.get("DATABASE_URL")!;

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
    schema: "./src/lib/server/db/schema",

    dbCredentials: {
        url: DATABASE_URL
    },

    verbose: true,
    strict: true,
    dialect: "postgresql"
});
