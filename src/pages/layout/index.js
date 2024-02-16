import React from "react";
import Home from "../Home";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Layout = () => {
  return (
    <div>
      <Header className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
      <Outlet />
    </div>
  );
};

export default Layout;
