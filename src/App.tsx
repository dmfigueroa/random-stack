import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  {
    path: "admin",
    loader: () =>
      import.meta.env.VITE_ADDING_MODE !== "true" ? redirect("/") : null,
    children: [
      { index: true, element: <Navigate to="/admin/categories" replace /> },
      { path: "categories", lazy: () => import("./pages/admin/categories") },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <header className="flex items-center justify-center py-4 px-8">
        <h1 className="text-4xl font-bold tracking-tight mx-auto">
          Random Stack
        </h1>
        <ModeToggle />
      </header>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
