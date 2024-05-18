import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { BookServices } from "../../services/book";
import Table from "../../components/DataPresentations/Table/Table";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { AddBox, Delete, Edit, Refresh, Save } from "@mui/icons-material";
import AddBook from "../../components/Forms/AddBook";
import ModalWizard from "../../utils/components/Modal/ModalWizard";

export default function Books() {
  const [rerender, setRerender] = useState();
  const bookServices = new BookServices();

  const [rows, setRows] = useState([]);
  const [addBookModalShowState, setAddBookModalShowState] = useState(false);
  const [deleteBookModalShowState, setDeleteBookModalShowState] =
    useState(false);

  const [bookDetails, setBookDetails] = useState({
    BookId: "",
    BookName: "",
  });

  function handleDeleteBook() {
    console.log(bookDetails.EnrollmentNumber);
    console.log(bookDetails.BookId);
    bookServices
      .deleteBook(bookDetails.BookId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const columns = [
    {
      field: "BookId",
      headerName: "Book ID",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "BookName",
      headerName: "Book Name",
      editable: true,
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    { field: "BookAuthor", headerName: "Book Author", flex: 1 },
    {
      field: "Actions",
      headerName: "Actions",
      sortable: false,
      headerAlign: "center",
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      renderCell: (params) => (
        <>
          <Button
            onClick={() => {
              console.log(params.row.BookId);
            }}
          >
            <Save />
          </Button>
          <Button
            onClick={() => {
              setBookDetails({
                BookId: params.row.BookId,
                BookName: params.row.BookName,
              });
              setDeleteBookModalShowState(true);
            }}
          >
            <Delete />
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    try {
      bookServices
        .getAllBooks()
        .then((res) => {
          console.log("Response : ", res);
          console.log("Response data : ", res.data.data);
          // const rows = extractRows(res.data.data, {
          //   id: "BookId",
          //   BookName: "BookName",
          //   BookAuthor: "BookAuthor",
          // });
          const rows = res.data.data;
          console.log("Rows : ", rows[0]);
          setRows(rows);
        })
        .catch((err) => {
          console.log("getAllbooks call err -- ", err);
        });
    } catch (err) {
      console.log("Get book err -- ", err);
    }
  }, [rerender]);

  return (
    <Layout>
      <h1>Books</h1>
      <Button
        onClick={() => {
          setRerender(Symbol());
        }}
        sx={{
          ml: "auto",
        }}
      >
        <span>Refresh</span> <Refresh />
      </Button>
      <Table rows={rows} columns={columns} id={"BookId"} />
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
      </ButtonGroup>
      <ModalWizard
        modalShowState={addBookModalShowState}
        setModalShowState={setAddBookModalShowState}
      >
        <AddBook bookService={bookServices} />
      </ModalWizard>
      <ModalWizard
        modalShowState={deleteBookModalShowState}
        setModalShowState={setDeleteBookModalShowState}
      >
        <Card>
          <CardContent>
            <Typography variant="h4">Confirm Return</Typography>
            <Typography variant="body1">
              Are you sure, you want to return the book ?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                handleDeleteBook();
                setRerender(Symbol());
                setDeleteBookModalShowState(false);
              }}
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                setDeleteBookModalShowState(false);
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </ModalWizard>
    </Layout>
  );
}
