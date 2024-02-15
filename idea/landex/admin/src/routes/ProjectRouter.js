import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Master from "../pages/Layout";
import Home from "../pages/home";
import Invest from "../pages/Invest";

const ProjectRouter = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Invest", // Add a leading slash here
        element: <Invest />,
      },
    ],
  },
]);

export default ProjectRouter;
