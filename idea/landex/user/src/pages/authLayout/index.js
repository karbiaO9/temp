import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
