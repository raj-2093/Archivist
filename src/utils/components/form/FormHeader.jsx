import React from "react";
import Box from "@mui/material/Box";

export default function FormHeader({ label }) {
  return (
    <>
      <Box component={"h3"} textAlign={"center"} width={"100%"} margin={"0"}>
        {label}
      </Box>
    </>
  );
}
