import React from "react";
import Box from "@mui/material/Box";

export default function FormBody({ children }) {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"12px"}
        maxWidth={"md"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: {
            xs: "100%",
            lg: "60%",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
