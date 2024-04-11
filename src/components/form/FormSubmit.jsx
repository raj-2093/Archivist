import React from "react";
import Box from "@mui/material/Box";

export default function FormSubmit({ children }) {
  return (
    <Box
      width={{
        xs: "100%",
        lg: "100px",
      }}
    >
      {children}
    </Box>
  );
}
