import React from "react";
import "./codebank.css";
import Header from "../landing/Header";
import { useNavigate } from "react-router-dom";

export const CodeBank = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))
  return (
    <>
      {/* <Header /> */}
      <div className="cbcontainer">
        <div className="cbsidebar">
          <p onClick={() => userInfo && navigate("/chat")}>Chat</p>
          <p onClick={() => userInfo && navigate("/code")}>Compiler</p>
          {!userInfo && <div className="signinlayer">
            <button className="signinsidebar" onClick={()=>navigate('/auth')}>Sign in</button>
          </div>}
        </div>
        <div className="cbsection">Code Bank Coming Soon ....</div>
      </div>
    </>
  );
};
