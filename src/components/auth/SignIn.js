import React, { useState } from "react";
import "./signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate()
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
      .then((res) => {
        console.log(res)
        let responz = res.data.data[0]
        if(responz){
          setUser(responz);
          console.log(responz)
          localStorage.setItem("user", JSON.stringify(responz));
          navigate('/')
        }
      })
      .catch((err) => console.log(err));
  };

  return (
      <form onSubmit={handleSubmit} className="inputcontainer">
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
        <input type="submit" value="Sign In" />
      </form>
  );
};
