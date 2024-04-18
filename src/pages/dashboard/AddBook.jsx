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

  /**
   * This is handle method on submit
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Old way, if there is no image file to send
    // const res = await bookApi.addBook({
    //   BookName: bookName,
    //   BookId: bookId,
    //   BookAuthor: BookAuthor,
    // });
    // console.log("Response : ", res);
    // console.log("Response data : ", res.data);
    // console.log("Response status : ", res.status);

    // New way to send image file as well
    const formData = new FormData();
    formData.append("BookCover", bookCover);
    formData.append("BookId", bookId);
    formData.append("BookName", bookName);
    formData.append("BookAuthor", BookAuthor);
    console.log(formData.get("BookName"));
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
              <Avatar
                alt="img-upload"
                variant="square"
                sx={{
                  width: "100px",
                  height: "150px",
                }}
              ></Avatar>
              <Box
                component={"input"}
                type="file"
                ref={fileInputRef}
                sx={{
                  display: "none",
                }}
                onChange={(e) => {
                  setBookCover(e.target.files[0]);
                }}
              />
              <Button
                onClick={(e) => {
                  fileInputRef.current.click();
                }}
              >
                Upload
              </Button>

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
          </FormBody>
        </Form>
      </Paper>
    </Layout>
  );
}
