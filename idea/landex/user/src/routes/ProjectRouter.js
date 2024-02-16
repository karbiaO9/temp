import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../pages/layout";
import Login from "../pages/auth/login";

const ProjectRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default ProjectRouter;
