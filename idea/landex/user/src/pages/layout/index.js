import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Axios } from "axios";
import Home from "../home";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
