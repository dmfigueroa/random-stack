import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/admin",
    lazy: () => import("./layouts/admin-layout"),
  },
]);

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
