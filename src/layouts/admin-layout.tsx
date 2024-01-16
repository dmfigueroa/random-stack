import { Outlet, redirect } from "react-router-dom";

export const loader = async () => {
  const hasAdminAccess = import.meta.env.VITE_ADDING_MODE === "true";

  if (!hasAdminAccess) {
    return redirect("/");
  }
  return null;
};

export function Component() {
  return <Outlet />;
}
