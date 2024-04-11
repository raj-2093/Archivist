import React, { useContext } from "react";
import { darkTheme } from "../../themes/base_theme";
import IconButton from "@mui/material/IconButton";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { ThemeContext } from "../../contexts/ThemeToggleProvider";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <IconButton
      onClick={() => toggleTheme()}
      sx={{
        color: "white",
      }}
    >
      {theme == darkTheme ? <LightModeRounded /> : <DarkModeRounded />}
    </IconButton>
  );
}
