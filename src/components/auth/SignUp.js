import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { NODE_URL } from "../../config/globalconfig";

export const SignUp = () => {
  const [userValues, setuserValues] = useState({
    name: "",
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
      .post(`${NODE_URL}/user`, {
        username: userValues.name,
        usermail: userValues.email,
        userpassword: userValues.password,
      })
      .then((data) => setuserValues({name:'', email:'', password:''}))
      .catch((err) => console.log(err));
  };

  return (
      <form onSubmit={handleSubmit} className="inputcontainer">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userValues.name}
          onChange={handleInput}
        />
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
        <input type="submit" value="sign up"/>
      </form>
  );
};
