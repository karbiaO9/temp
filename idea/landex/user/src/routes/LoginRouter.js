import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../pages/authLayout";
import Login from "../pages/auth/login";

const LoginRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default LoginRouter;
