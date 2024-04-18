import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import { bookApi } from "../../api/bookApi";

export default function BookTable() {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    bookApi.getAllBooks().then((val) => {
      if (!val) {
        console.log("Data not found");
      } else {
        console.log(val.data.data);
        setBookData(val.data.data);
        console.log("Book data state", bookData);
      }
    });
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "90%",
      }}
    >
      <Table
        aria-label="simple table"
        sx={{
          width: "100%",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell align="right">Book Id</TableCell>
            <TableCell align="right">Book Author&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookData.map((row) => (
            <TableRow
              key={row.BookId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.BookName}
              </TableCell>
              <TableCell align="right">{row.BookId}</TableCell>
              <TableCell align="right">{row.BookAuthor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
