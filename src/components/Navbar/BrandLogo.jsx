import React from "react";
import ThemedLink from "../NavLink/ThemedLink";
import logo from "../../assets/images/ARLogo.png";
import { Typography } from "@mui/material";

export default function BrandLogo({ home }) {
  return (
    <ThemedLink
      to={home}
      sx={{
        width: "60px",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        sx={{
          display: "flex",
          mr: 3,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          verticalAlign: "middle",
        }}
      >
        <img src={logo} width={"100%"} />
      </Typography>
    </ThemedLink>
  );
}
