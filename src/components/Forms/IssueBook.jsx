import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { bookIssuesApi } from "../../services/bookIssues";
import Form from "../../utils/components/form/Form";
import FormHeader from "../../utils/components/form/FormHeader";
import FormBody from "../../utils/components/form/FormBody";
import FormFields from "../../utils/components/form/FormFields";
import FormSubmit from "../../utils/components/form/FormSubmit";

export default function IssueBook({ services }) {
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
    // const res = await bookIssuesApi.issueBook(formData);
    try {
      const res = await services.issueBook(formData);
      setResponse(res.data.message);
    } catch (err) {
      setResponse(err.response.data.message);
    }
  };
  return (
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
  );
}
