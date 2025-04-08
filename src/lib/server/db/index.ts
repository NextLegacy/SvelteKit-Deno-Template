import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";

import dotenv from "dotenv";

dotenv.config();

console.log("Connecting to Neon database...");
console.log("DATABASE_URL", process.env.DATABASE_URL);

const client = neon(process.env.DATABASE_URL!);

export const db = drizzle(client);
