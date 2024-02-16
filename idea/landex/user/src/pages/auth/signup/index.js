import React, { useState } from "react";
import "./index.scss";
import axios from "axios";
import Constants from "../../../Constants";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const hundleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLogin = () => {
    axios
      .post(Constants.BASE_URL + "/client/login", input)
      .then((res) => {
        localStorage.email = res.data.email;
        localStorage.name = res.data.name;
        localStorage.phone = res.data.phone;
        localStorage.token = res.data.token;
        window.location.reload();
        window.location.href = "/";
      })
      .catch((errors) => {
        if (errors.response.status == 422) {
          setErrors(errors.response.data.errors);
        }
      });
  };
  return (
    <div className="Login">
      <div className="box">
        <div className="label">
          <div className="label1">
            <span>E-mail</span>
            <input
              type="email"
              name={"email"}
              value={input.email}
              onChange={hundleInput}
              placeholder="Email"
            />
          </div>
          <div className="label2">
            <span>Password</span>
            <input
              type="password"
              name={"password"}
              value={input?.password}
              onChange={hundleInput}
              placeholder="Password"
            />
          </div>
          <a href="#" onClick={handleLogin} className="flat_button">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
