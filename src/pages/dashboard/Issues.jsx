import React from "react";
import Layout from "./Layout";
import Table from "../../components/DataPresentations/Table/Table";
import { useState } from "react";

export default function Issues() {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "Book ID" },
    { field: "BookName", headerName: "Book Name" },
    { field: "BookAuthor", headerName: "Book Author" },
  ];

  return (
    <Layout>
      <h1>Book Issues</h1>
      <Table rows={rows} columns={columns} />
    </Layout>
  );
}
