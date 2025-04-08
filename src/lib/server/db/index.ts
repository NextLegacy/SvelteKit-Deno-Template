import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";

import { env } from "$env/dynamic/private";

import { config } from "dotenv";

config();

export const DATABASE_URL = env.DATABASE_URL;

export const client = neon(DATABASE_URL);

export const db = drizzle(client);
