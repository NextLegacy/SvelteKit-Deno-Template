import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!Deno.env.get("DATABASE_URL")) throw new Error("DATABASE_URL is not set");

const client = neon(Deno.env.get("DATABASE_URL"));

export const db = drizzle(client);
