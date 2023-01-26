import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../assets/register.svg";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
  };

  return (
    <section className="--flex-center --100vh">
      <div className="--container box">
        <div className="main-container --flex-center">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="--form-control">
              <h2 className="--color-danger --text-center">Register</h2>
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
                type="email"
                className="--width-100"
                placeholder="Email"
                name="email"
                value={input.email}
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
                Register
              </button>
              <span className="--text-sm --block">
                have a account? <Link to="/">Login</Link>
              </span>
            </form>
          </div>
          <div className="img-container">
            <img src={RegisterImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
