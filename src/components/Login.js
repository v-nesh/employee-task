import React, { useState } from "react";
import "./AuthContainer.scss";
import LoginImg from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem("user"));

    if (
      input.username === localData.username &&
      input.password === localData.password
    ) {
      navigate("/dashboard");
    } else {
      alert("email or password incorrect");
    }
  };

  return (
    <section className="--flex-center --100vh">
      <div className="--container box">
        <div className="main-container --flex-center">
          <div className="img-container">
            <img src={LoginImg} alt="" />
          </div>
          <div className="form-container">
            <form onSubmit={handleLogin} className="--form-control">
              <h2 className="--color-danger --text-center">Login</h2>
              <input
                type="text"
                className="--width-100"
                placeholder="Username"
                name="username"
                value={input.username}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <input
                type="password"
                className="--width-100"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <span className="--text-sm --block">
                Don't have a account? <Link to="/Register">Register</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
