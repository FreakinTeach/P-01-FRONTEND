import React from "react";
import "./techstack.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  GrChat,
  GrSearch,
  GrSettingsOption,
  GrCode,
  GrCompliance,
} from "react-icons/gr";

export const TechStack = () => {
  const currentroute = window.location.pathname;
  console.log(currentroute)
  const navigate = useNavigate();
  return (
    <div className="tscontainer">
      <section className="tscontainer_leftsection">
        <p className="headerbrandlogo" onClick={() => navigate("/")}>
          FreakinTech
        </p>

        <div className="tsleftsection_options">
          <section>
            <p onClick={()=>navigate('/codebank')}  className = {currentroute == "/codebank" && "selected"}>
              <span>
                <GrCode style={{ backgroundColor: "red" }} />
                Code bank
              </span>
            </p>
            <p onClick={()=>navigate('/chat')} className = {currentroute == "/chat" && "selected"}>
              <span>
                <GrChat style={{ backgroundColor: "green" }} />
                Chats
              </span>
            </p>
            <p onClick={()=>navigate('/code')} className = {currentroute == "/code" && "selected"}>
              <span>
                <GrSearch style={{ backgroundColor: "orange" }} />
                Compiler
              </span>
            </p>
            <p>
              <span>
                <GrCompliance style={{ backgroundColor: "pink" }} />
                Manage subscription
              </span>
            </p>
            <p>
              <span>
                <GrSettingsOption style={{ backgroundColor: "purple" }} />
                Settings
              </span>
            </p>
          </section>
          <hr style={{ color: "rgba(38, 53, 73, 1)", margin: "0" }} />
          <section>
            <p>Ranked profile</p>
            <p>Top Answers</p>
            <p>Top Questions</p>
            <p>Best UI</p>
          </section>
        </div>

        {/* 
        <div>
          <button>Light</button>
          <button>Dark</button>
        </div> */}
      </section>
    </div>
  );
};
