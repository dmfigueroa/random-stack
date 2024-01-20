import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import { Env } from "../../remix.env";

export function loader({ context, request }: LoaderFunctionArgs) {
  const env = context.env as Env;
  const path = new URL(request.url).pathname;
  const isRootAdmin = /^\/admin\/?$/.test(path);

  if (!isRootAdmin) return null;

  if (env.ADDING_MODE !== "true") return redirect("/");

  return redirect("/admin/categories");
}
