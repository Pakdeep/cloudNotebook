import React from "react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import "../form.scss";
const Login = () => {
  const dispatch = useDispatch();
  const { signIn } = bindActionCreators(actionCreators, dispatch);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  console.log(signIn);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(state);
  };
  const myFunction = () => {
    var x = document.getElementById("password");
    var y = document.getElementById("eyeSlash");
    if (x.type === "password") {
      x.type = "text";
      y.style.display = "block";
    } else {
      x.type = "password";
      y.style.display = "none";
    }
  };
  return (
    <div className="personLogin">
      <Link to="/" className="logo">
        <h1
          style={{
            marginTop: "10px",
          }}
        >
          <Logo />
        </h1>
      </Link>
      <div className="form" onSubmit={handleSubmit}>
        {" "}
        <form action="">
          <div className="labelInput">
            {" "}
            <input
              type="text"
              name="email"
              id="email"
              required
              autoComplete="off"
              onChange={handleChange}
            />
            <label htmlFor="email" required>
              Email or mobile phone number
            </label>
          </div>
          <div className="labelInput">
            {" "}
            <input
              type="password"
              name="password"
              id="password"
              required
              autoComplete="off"
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <label
              htmlFor="showBtn"
              className="eyeBtn"
              id="eyeSlash"
              style={{
                display: "none",
              }}
            >
              <UilEyeSlash />
            </label>
            <label htmlFor="showBtn" className="eyeBtn">
              <UilEye />
            </label>
            <input
              type="checkbox"
              onClick={myFunction}
              id="showBtn"
              style={{ display: "none" }}
            />
          </div>
          <div className="registerBtn">
            <button type="submit">Login</button>
          </div>
          <h5>The T&C area</h5>
        </form>{" "}
        <div className="register_login">
          <h5
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            <span>----------</span> New to
            <Logo />
            <span>----------</span>{" "}
          </h5>
          <Link to="/register" className="registerBtn">
            {" "}
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
