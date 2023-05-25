import React from "react";
import "./main.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* <Header /> */}
      <div className="maincontainer">
        <div className="maincontent">
          <h1>
            Simple way<br /> to control <br/>
            <span>your savings.</span>
          </h1>
          <p>
            Give all your customers global freedom
            <br /> with the top of their card
          </p>

          <div className="explorebtn">
            {/* <input type="text" placeholder="Enter your email" /> */}
            <button className="btnmain" onClick={()=>navigate('/codebank')}>Explore</button>
          </div>
        </div>
        <div className="imagesection">
          <img
            src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="simple-image"
          />
        </div>
      </div>
    </>
  );
};
