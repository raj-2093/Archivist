import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { BookServices } from "../../services/book";
import { extractRows } from "../../utils/data/dataProcessing";
import Table from "../../components/DataPresentations/Table/Table";
import Modal from "../../components/Modal/ModalWizard";
import ModalWizard from "../../components/Modal/ModalWizard";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { AddBox, Delete } from "@mui/icons-material";
import AddBook from "../../components/Forms/AddBook";
import DeleteBook from "../../components/Forms/DeleteBook";

export default function Books() {
  const bookServices = new BookServices();

  const [rows, setRows] = useState([]);
  const [addBookModalShowState, setAddBookModalShowState] = useState(false);
  const [deleteBookModalShowState, setDeleteBookModalShowState] =
    useState(false);

  const columns = [
    { field: "id", headerName: "Book ID" },
    { field: "BookName", headerName: "Book Name" },
    { field: "BookAuthor", headerName: "Book Author" },
  ];

  useEffect(() => {
    bookServices.getAllBooks().then((res) => {
      console.log("Response : ", res);
      console.log("Response data : ", res.data.data);
      const rows = extractRows(res.data.data, {
        id: "BookId",
        BookName: "BookName",
        BookAuthor: "BookAuthor",
      });
      console.log("Rows : ", rows[0]);
      setRows(rows);
    });
  }, []);

  return (
    <Layout>
      <h1>Books</h1>
      <Table rows={rows} columns={columns} />
      <ButtonGroup>
        <Button
          onClick={() => {
            setAddBookModalShowState(true);
          }}
          variant="contained"
        >
          Add Book
          <AddBox />
        </Button>
        <Button
          color="warning"
          onClick={() => {
            setDeleteBookModalShowState(true);
          }}
        >
          Delete Book <Delete />
        </Button>
      </ButtonGroup>
      <ModalWizard
        modalShowState={addBookModalShowState}
        setAddBookModalShowState={setAddBookModalShowState}
      >
        <AddBook bookService={bookServices} />
      </ModalWizard>

      <ModalWizard
        modalShowState={deleteBookModalShowState}
        setAddBookModalShowState={setDeleteBookModalShowState}
      >
        <DeleteBook bookService={bookServices} />
      </ModalWizard>
    </Layout>
  );
}
