import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import { Axios } from "axios";

const Master = () => {
  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Master;
