import { DATABASE_URL } from "$lib/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(DATABASE_URL);

const db = drizzle(client);

export { db };
