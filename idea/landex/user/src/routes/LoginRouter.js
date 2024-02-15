import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../pages/authLayout";

const LoginRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
]);

export default LoginRouter;
