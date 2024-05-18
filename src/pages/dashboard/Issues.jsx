import React, { useEffect, useReducer } from "react";
import Layout from "./Layout";
import Table from "../../components/DataPresentations/Table/Table";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { AddBox, AssignmentReturn, Delete, Refresh } from "@mui/icons-material";
import IssueBook from "../../components/Forms/IssueBook";
import { BookIssueServices } from "../../services/bookIssues";
import ModalWizard from "../../utils/components/Modal/ModalWizard";

export default function Issues() {
  const bookIssueServices = new BookIssueServices();
  const [rerender, setRerender] = useState();

  const [rows, setRows] = useState([]);
  const [issuesModalShowState, setIssuesModalShowState] = useState(false);
  const [returnModalShowState, setReturnModalShowState] = useState(false);
  const [returnBookDetails, setReturnBookDetails] = useState({
    BookId: "",
    EnrollmentNumber: "",
  });

  function handleReturnBook() {
    console.log(returnBookDetails.EnrollmentNumber);
    console.log(returnBookDetails.BookId);
    bookIssueServices
      .returnBook({
        EnrollmentNumber: returnBookDetails.EnrollmentNumber,
        BookId: returnBookDetails.BookId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const columns = [
    {
      field: "EnrollmentNumber",
      headerName: "Enrollment number",
      width: 200,
      flex: 1,
    },
    { field: "BookId", headerName: "Book Id" },
    {
      field: "Actions",
      renderCell: (params) => (
        <>
          <Button
            onClick={() => {
              setReturnModalShowState(true);
              setReturnBookDetails({
                BookId: params.row.BookId,
                EnrollmentNumber: params.row.EnrollmentNumber,
              });
            }}
          >
            Return Book
            <AssignmentReturn />
          </Button>
        </>
      ),
      headerAlign: "center",
      align: "left",
      width: 200,
    },
  ];

  useEffect(() => {
    bookIssueServices
      .getAllIssues()
      .then((res) => {
        setRows(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rerender]);

  return (
    <Layout>
      <h1>Book Issues</h1>
      <Button
        onClick={() => {
          setRerender(Symbol());
        }}
        sx={{
          ml: "auto",
        }}
      >
        <span>Refresh</span>
        <Refresh />
      </Button>
      <Table rows={rows} columns={columns} id={"BookId"} />
      <Button
        onClick={() => {
          setIssuesModalShowState(true);
        }}
        variant="contained"
      >
        Issue Book
        <AddBox />
      </Button>
      <ModalWizard
        modalShowState={issuesModalShowState}
        setModalShowState={setIssuesModalShowState}
      >
        <div style={{ padding: "20px" }}>
          <IssueBook services={bookIssueServices} />
        </div>
      </ModalWizard>
      <ModalWizard
        modalShowState={returnModalShowState}
        setModalShowState={setReturnModalShowState}
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
                handleReturnBook();
                setReturnModalShowState(false);
                setRerender(Symbol());
              }}
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                setReturnModalShowState(false);
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
