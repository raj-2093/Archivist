import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Layout from "./Layout";
import Paper from "@mui/material/Paper";
import Form from "../../components/form/Form";
import FormHeader from "../../components/form/FormHeader";
import FormBody from "../../components/form/FormBody";
import FormFields from "../../components/form/FormFields";
import Avatar from "@mui/material/Avatar";
import FormSubmit from "../../components/form/FormSubmit";
import { bookIssuesApi } from "../../api/bookIssues";

export default function IssueBook() {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [bookId, setBookId] = useState("");
  const [response, setResponse] = useState("");

  /**
   * This is handle method on submit
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      EnrollmentNumber: enrollmentNumber,
      BookId: bookId,
    };
    const res = await bookIssuesApi.issueBook(formData);
    // console.log("bookIssuesApi : ", res.data);
    try {
      setResponse(res.data.message);
    } catch (err) {
      setResponse(res.response.data.message);
    }
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
          <FormHeader label={"Issue Book"} />
          <FormBody>
            <FormFields>
              <TextField
                label="Enrollment Number"
                required
                fullWidth
                onChange={(e) => setEnrollmentNumber(e.currentTarget.value)}
                type="text"
              />
              <TextField
                label="Book id"
                required
                fullWidth
                onChange={(e) => setBookId(e.currentTarget.value)}
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
