import React from "react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import "../form.scss";
import Logo from "../../Logo";
const Login = () => {
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
        <h1><Logo/></h1>
      </Link>
      <div className="form">
        {" "}
        <form action="">
          <div className="labelInput">
            {" "}
            <input type="text" name="" id="name" required autoComplete="off" />
            <label htmlFor="name" required>
              Email or mobile phone number
            </label>
          </div>
          <div className="labelInput">
            {" "}
            <input
              type="password"
              name=""
              id="password"
              required
              autoComplete="off"
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
          <button type="submit">Login</button>
          <h5>The T&C area</h5>
        </form>{" "}
        <div className="register_login">
          <h4>
            <span>-----------</span> New to <Logo/>
            <span>-----------</span>{" "}
          </h4>
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
