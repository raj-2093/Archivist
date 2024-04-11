import React, { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../themes/base_theme";

export const ThemeContext = createContext();

export function ThemeToggleProvider(props) {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    theme == lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
