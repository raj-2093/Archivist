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
        home={"/dashboard"}
        pages={[
          new Pages("Add a Book", "/dashboard/AddBook"),
          new Pages("Issue a Book", "/dashboard/IssueBook"),
          new Pages("Return book", "/dashboard/ReturnBook"),
        ]}
      />
      {children}
    </Box>
  );
}
