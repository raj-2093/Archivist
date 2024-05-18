import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoardHome from "./pages/dashboard/DashboardHome";
import Login from "./pages/signup_login/Login";
import Home from "./pages/userPages/Home";
import BooksByCategory from "./pages/userPages/BooksByCategory";
import About from "./pages/userPages/About";
import Explore from "./pages/userPages/Explore";
import Books from "./pages/dashboard/Books";
import Issues from "./pages/dashboard/Issues";

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
        { path: "Books", element: <Books /> },
        { path: "Issues", element: <Issues /> },
      ],
    },
  ]);
  return element;
}
