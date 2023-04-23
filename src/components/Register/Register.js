import React from "react";
import { Link } from "react-router-dom";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import { UilInfo } from "@iconscout/react-unicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../../Logo";
import { auth } from "../../firebase";
const Register = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phno = document.getElementById("phno").value;
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // console.log(name, email, phno, password);
//To create a new user account with a email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="personRegister">
      <Link to="/" className="logo">
        <h1
          style={{
            marginTop: "10px",
          }}
        >
          <Logo />
        </h1>
      </Link>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="labelInput">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="" id="name" required autoComplete="off" />
          </div>
          <div className="labelInput">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name=""
              id="email"
              required
              autoComplete="off"
            />
          </div>
          <div className="labelInput">
            <label htmlFor="phno">Phone Number</label>
            <input type="text" name="" id="phno" required autoComplete="off" />
          </div>
          <div className="labelInput">
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" required />
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
            <div className="info">
              <UilInfo />
              <span>Password must be alteast 6 characters.</span>
            </div>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="" id="confirmPassword" required />
          </div>
          <div className="registerBtn">
            <button type="submit">Register</button>
          </div>
        </form>
        <div className="register_login">
          <h5>
            <span>----------</span>Already have an Account
            <span>----------</span>{" "}
          </h5>
          <Link to="/" className="registerBtn">
            {" "}
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
