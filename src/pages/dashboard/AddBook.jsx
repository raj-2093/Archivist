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
import { bookApi } from "../../api/bookApi";

export default function AddBook() {
  const fileInputRef = useRef(null);
  const [bookCover, setBookCover] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookId, setBookId] = useState("");
  const [BookAuthor, setBookAuthor] = useState("");
  const [response, setResponse] = useState("");

  /**
   * This is handle method on submit
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await bookApi.addBook({
      BookName: bookName,
      BookId: bookId,
      BookAuthor: BookAuthor,
    });
    console.log("Response : ", res);
    console.log("Response data : ", res.data);
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
          <FormHeader label={"Add Book"} />
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
                type="text"
              />
              <TextField
                label="Book author"
                fullWidth
                onChange={(e) => setBookAuthor(e.currentTarget.value)}
                type="text"
              />
            </FormFields>
            <FormSubmit>
              <Button variant="outlined" fullWidth type="submit">
                Submit
              </Button>
            </FormSubmit>
            {response && <div className="message">{response}</div>}
          </FormBody>
        </Form>
      </Paper>
    </Layout>
  );
}
