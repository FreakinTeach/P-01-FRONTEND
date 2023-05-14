import React, { useState } from "react";
import "./auth.css";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Auth = () => {
  const [showSignIn, setshowSignIn] = useState(true);
  return (
    <div className="authcontainer">
      <div className="authleftcontainer">
        <div className="authleft">
          <h1>Welcome Back</h1>
          <p>Welcome Back! Please enter your details</p>
          {showSignIn ? <SignIn /> : <SignUp />}
          {showSignIn ? (
            <p onClick={() => setshowSignIn(false)}>
              Don't have an account ? Sign Up
            </p>
          ) : (
            <p onClick={() => setshowSignIn(true)}>
              Have an account ? Sign In
            </p>
          )}
        </div>
      </div>
      <div className="authright">
        <img
          src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image description"
        />
      </div>
    </div>
  );
};
