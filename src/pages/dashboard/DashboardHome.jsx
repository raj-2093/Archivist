import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Layout from "./Layout";
import Table from "../../components/DataPresentations/Table/Table";
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { Check, Comment, Delete, Edit, Pending } from "@mui/icons-material";

const data = [
  { title: "Book1", author: "author1" },
  { title: "Book2", author: "author2" },
  { title: "Book3", author: "author3" },
  { title: "Book4", author: "author4" },
  { title: "Book5", author: "author5" },
];

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
        <Typography variant="h4">Books</Typography>
        <Stack spacing={2} minWidth={"80%"}>
          {data.map((val) => (
            <div>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Typography variant="h5">{val.title}</Typography>
                  <Typography variant="body2">Author: {val.author}</Typography>
                </CardContent>
                <CardActions sx={{ ml: "auto" }}>
                  <Button variant="contained">
                    <Edit />
                  </Button>
                  <Button variant="contained">
                    <Delete />
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
          <Pagination count={10} />
        </Stack>
      </Paper>
    </Layout>
  );
}
