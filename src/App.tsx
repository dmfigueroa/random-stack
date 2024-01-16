import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
