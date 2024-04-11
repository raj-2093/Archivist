import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Layout({ children }) {
  return (
    <Box
      width={"100vw"}
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Paper
        sx={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          py: "50px",
          boxSizing: "content-box",
        }}
        elevation={10}
      >
        {children}
      </Paper>
    </Box>
  );
}
