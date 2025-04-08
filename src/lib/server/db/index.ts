import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";

const client = neon(process.env.DATABASE_URL!);

export const db = drizzle(client);
