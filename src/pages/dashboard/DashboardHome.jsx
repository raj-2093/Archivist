import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Layout from "./Layout";
import { bookApi } from "../../api/bookApi";
import BookTable from "../../components/BookDataTable/BookTable";

export default function DashBoardHome() {
  return (
    <Layout>
      <Paper
        sx={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "98%",
          textAlign: "center",
        }}
        elevation={5}
      >
        <h1>
          Archivist, <br />
          Our Solution to Library Management
        </h1>
      </Paper>
      <Paper
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "98%",
          // textAlign: "center",
        }}
        elevation={5}
      >
        <h2>Books</h2>
        <BookTable />
      </Paper>
    </Layout>
  );
}
