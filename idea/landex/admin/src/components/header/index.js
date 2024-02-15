import $ from "jquery";
import logo from "../../assets/login_logo.png";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Constants from "../../Constants";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { FaBell, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(Constants.BASE_URL + "/logout")
          .then((res) => {
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            localStorage.removeItem("phone");
            localStorage.removeItem("token");
            navigate("/");

            // Reload the page
            window.location.reload();
          })
          .catch((errors) => {});
      }
    });
  };

  const handlesidebar = () => {
    $("body").toggleClass("sb-sidenav-toggled");
  };
  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }
  const [product, setproduit] = useState([]);
  const [date, setDate] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [productsWithQuantityLessThan10, setProductsWithQuantityLessThan10] =
    useState([]);
  useEffect(() => {
    axios
      .get(Constants.BASE_URL + "/notif")
      .then((response) => {
        console.log(response.data);
        setproduit(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get(Constants.BASE_URL + "/notifdate")
      .then((response) => {
        console.log(response.data);
        setDate(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  }, []);

  return (
    

    <button onClick={handlelogout} className="dropdown-item">
      Logout
    </button>
  );
};

export default Header;
