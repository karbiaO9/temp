import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const AuthLayout = () => {
  return <NavLink to="/Login">Login</NavLink>;
};

export default AuthLayout;
