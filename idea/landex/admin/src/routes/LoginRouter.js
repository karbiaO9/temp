import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/auth/Login";
import AuthLayout from "../components/AuthLayout";

const LoginRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default LoginRouter;
