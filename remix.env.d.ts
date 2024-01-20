/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

export type Env = {
  DATABASE_URL: string;
  DATABASE_AUTH_TOKEN: string;
  ADDING_MODE: "true" | "false";
};
