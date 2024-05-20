import { BrowserRouter as Router } from "react-router-dom";
import { useContext, useState } from "react";
import { lightTheme, darkTheme, baseTheme } from "./themes/base_theme";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import Routes from "./Routes";
import ThemeToggleProvider, {
  ThemeContext,
} from "./contexts/ThemeToggleProvider";

function App() {
  const { theme } = useContext(ThemeContext);
  // Added Comment using different account
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
