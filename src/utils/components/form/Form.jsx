import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Form({ children, handleSubmit }) {
  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      {children}
    </Container>
  );
}
