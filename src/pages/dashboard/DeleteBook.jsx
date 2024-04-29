import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import axios from "axios";
import Layout from "./Layout";
import Form from "../../components/form/Form";
import FormHeader from "../../components/form/FormHeader";
import FormBody from "../../components/form/FormBody";
import FormFields from "../../components/form/FormFields";
import FormSubmit from "../../components/form/FormSubmit";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { bookApi } from "../../services/book";

export default function DeleteBook() {
  const fileInputRef = useRef(null);
  const [bookName, setBookName] = useState("");
  const [bookId, setBookId] = useState("");
  const [response, setResponse] = useState("");

  /**
   * This is handle method on submit
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await bookApi.deleteBook(Number(bookId));
    console.log("Response : ", res);
    // console.log("Response data : ", res.data);
    console.log("Response status : ", res.status);
    setResponse(res.data.message);
  };

  return (
    <Layout>
      <Paper
        elevation={5}
        sx={{
          p: "50px",
          width: "90%",
        }}
      >
        <Form handleSubmit={handleSubmit}>
          <FormHeader label={"Delete Book"} />
          <FormBody>
            <FormFields>
              <TextField
                label="Book Name"
                required
                fullWidth
                onChange={(e) => setBookName(e.currentTarget.value)}
                type="text"
              />
              <TextField
                label="Book id"
                required
                fullWidth
                onChange={(e) => setBookId(e.currentTarget.value)}
                type="number"
              />
            </FormFields>
            <FormSubmit>
              <Button
                variant="outlined"
                fullWidth
                type="submit"
                color={"warning"}
              >
                Delete
              </Button>
            </FormSubmit>
            {response && <div className="message">{response}</div>}
          </FormBody>
        </Form>
      </Paper>
    </Layout>
  );
}
