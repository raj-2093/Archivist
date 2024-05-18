import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Layout from "./Layout";
import Form from "../../utils/components/form/Form";
import FormHeader from "../../utils/components/form/FormHeader";
import FormBody from "../../utils/components/form/FormBody";
import FormFields from "../../utils/components/form/FormFields";
import FormSubmit from "../../utils/components/form/FormSubmit";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * This is handle method on submit
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    console.log(formData);
  };

  return (
    <Layout>
      <Form handleSubmit={handleSubmit}>
        <FormHeader label={"Login to archivist"} />
        <FormBody>
          <FormFields>
            <TextField
              label={"Email"}
              fullWidth
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <TextField
              label={"password"}
              fullWidth
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </FormFields>
          <FormSubmit>
            <Button variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </FormSubmit>
        </FormBody>
      </Form>
    </Layout>
  );
}
