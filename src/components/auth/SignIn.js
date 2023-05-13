import React, { useState } from "react";
import "./signin.css";
import axios from "axios";

export const SignIn = () => {
  const [user, setUser] = useState();
  const [userValues, setuserValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setuserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:4000/user/${userValues.email}/${userValues.password}`
      )
      .then((data) => {
        setUser(data.data[0]);
        localStorage.setItem("user", data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-container">
      <div className="signinleft">
        <div className="signinleft-content">
          <div className="signinleft-content-header">
            <h1>
              Welcome Back
            </h1>
            <p>
              Welcome Back! Please enter your details
            </p>
          </div>
          <div className="signinleft-content-middle">
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={userValues.email}
                onChange={handleInput}
              />
              <label>Password:</label>
              <input
                type="text"
                name="password"
                value={userValues.password}
                onChange={handleInput}
              />
              <input type="submit" value="Login" />
            </form>
           
          </div>
          <div className="signinleft-content-footer"> 
            <p>Don't have an account ? <a href="https://example.com">Sign Up</a></p>

            </div>
        </div>
      </div>
      <div className="signinright">
        <div className="signinright-container" >
        <img src="D:\Personal_Project\P-01-FRONTEND\src\components\auth\images\login.jpg" alt="Image description" />

        </div>
        
      </div>
    </div>
  );
};
