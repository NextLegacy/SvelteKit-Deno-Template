import { env } from "$env/dynamic/private";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

console.log(Deno.env.get("DATABASE_URL"));
console.log(env["DATABASE_URL"]);
console.log(process.env["DATABASE_URL"]);
console.log(process.env.DATABASE_URL);
console.log(import.meta.env.DATABASE_URL);

console.log(Deno.env.get("VITE_DATABASE_URL"));
console.log(env["VITE_DATABASE_URL"]);
console.log(process.env["VITE_DATABASE_URL"]);
console.log(process.env.VITE_DATABASE_URL);
console.log(import.meta.env.VITE_DATABASE_URL);

const DATABASE_URL = env["VITE_DATABASE_URL"];

if (!DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = neon(DATABASE_URL);

export const db = drizzle(client);
