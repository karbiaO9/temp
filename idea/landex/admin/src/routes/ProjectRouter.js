import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Master from "../pages/Layout";
import Home from "../pages/home";

const ProjectRouter = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
    ],
  },
]);

export default ProjectRouter;
