import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../pages/layout";

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
]);

export default ProjectRouter;
