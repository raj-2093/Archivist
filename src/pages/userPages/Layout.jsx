import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Pages } from "../../utils/templates/page_links";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
  return (
    <Box
      width={"100vw"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Navbar
        home={"/"}
        pages={[
          new Pages("Explore", "/explore"),
          new Pages("About", "/about"),
          new Pages("Books By Category", "/booksCategory"),
        ]}
      />
      {children}
    </Box>
  );
}
