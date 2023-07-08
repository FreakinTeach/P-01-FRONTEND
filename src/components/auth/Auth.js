import React, { useState } from "react";
import "./auth.css";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import Header from "../landing/Header";
import { Toast } from "react-bootstrap";

export const Auth = () => {
  const [showSignIn, setshowSignIn] = useState(true);
  const [showtoast, setshowtoast] = useState(false);

  return (
    <>
      <Header />
      <div className="authcontainer">
        <div className="authleftcontainer">
          <div className="authleft">
           
            {showSignIn ? <SignIn setshowtoast={setshowtoast} /> : <SignUp />}
            {showSignIn ? (
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setshowSignIn(false)}>Register</span>
              </p>
            ) : (
              <p>
                Have an account ?{" "}
                <span onClick={() => setshowSignIn(true)}>Sign In</span>
              </p>
            )}
            {/* <Toast
              onClose={() => setshowtoast(false)}
              show={showtoast}
              delay={3000}
              autohide
            >
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast> */}
          </div>
        </div>
        <div className="authright">
          <img
            src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Image description"
          />
        </div>
      </div>
    </>
  );
};
