import React, { useState } from "react";
import "./signin.css";
import axios from "axios";

export const SignIn = () => {
  const [user,setUser] = useState()
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
      .get(`http://localhost:4000/user/${userValues.email}/${userValues.password}`)
      .then((data) =>{
        setUser(data.data[0])
        localStorage.setItem('user',data.data[0])
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
};
