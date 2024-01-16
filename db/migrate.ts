import "dotenv/config";
import { migrate } from "drizzle-orm/libsql/migrator";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import invariant from "invariant";

invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");
invariant(process.env.DATABASE_AUTH_TOKEN, "DATABASE_AUTH_TOKEN is not set");

const db = drizzle(
  createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  })
);

console.log("Running migrations");

await migrate(db, { migrationsFolder: "drizzle" });

console.log("Migrated successfully");
