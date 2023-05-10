import React, { useState } from "react";
import "./signin.css";
import axios from "axios";

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
      .post("http://localhost:4000/user", {
        username: userValues.name,
        usermail: userValues.usermail,
        userpassword: userValues.password,
      })
      .then((data) => setuserValues({name:'', email:'', password:''}))
      .catch((err) => console.log(err));
    console.log(userValues.name, userValues.email, userValues.password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" />
      </form>
    </div>
  );
};
