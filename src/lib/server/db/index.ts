import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";

import { env } from "$env/dynamic/private";

const DATABASE_URL = env.DATABASE_URL;

if (!DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = neon(DATABASE_URL);

export const db = drizzle(client);
