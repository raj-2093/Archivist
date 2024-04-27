import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoardHome from "./pages/dashboard/DashboardHome";
import AddBook from "./pages/dashboard/AddBook";
import IssueBook from "./pages/dashboard/IssueBook";
import ReturnBook from "./pages/dashboard/ReturnBook";
import Login from "./pages/signup_login/Login";
import Home from "./pages/userPages/Home";
import BooksByCategory from "./pages/userPages/BooksByCategory";
import About from "./pages/userPages/About";
import Explore from "./pages/userPages/Explore";
import DeleteBook from "./pages/dashboard/DeleteBook";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: "booksCategory", element: <BooksByCategory /> },
        { path: "about", element: <About /> },
        { path: "explore", element: <Explore /> },
      ],
    },
    { path: "/login", element: <Login /> },
    {
      path: "/dashboard",
      children: [
        { index: true, element: <DashBoardHome /> },
        { path: "AddBook", element: <AddBook /> },
        { path: "IssueBook", element: <IssueBook /> },
        { path: "ReturnBook", element: <ReturnBook /> },
        { path: "DeleteBook", element: <DeleteBook /> },
      ],
    },
  ]);
  return element;
}
