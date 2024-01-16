import "dotenv/config";
import type { Config } from "drizzle-kit";
import invariant from "invariant";

invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");
invariant(process.env.DATABASE_AUTH_TOKEN, "DATABASE_AUTH_TOKEN is not set");

export default {
  schema: "db/schema.ts",
  out: "./drizzle",
  breakpoints: true,
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
