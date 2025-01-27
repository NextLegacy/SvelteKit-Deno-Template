import { defineConfig } from "drizzle-kit";

const DATABASE_USERNAME = Deno.env.get("DATABASE_USERNAME");
const DATABASE_PASSWORD = Deno.env.get("DATABASE_PASSWORD");
const DATABASE_HOST = Deno.env.get("DATABASE_HOST");
const DATABASE_PORT = Deno.env.get("DATABASE_PORT");
const DATABASE_NAME = Deno.env.get("DATABASE_NAME");

const DATABASE_URL = `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

console.log(DATABASE_URL);

export default defineConfig({
	schema: "./src/lib/server/db/schema/",

	dbCredentials: {
		url: DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: "postgresql"
});
