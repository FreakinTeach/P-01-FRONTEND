import React, { useState } from "react";
import "./techstack.css";
import { Outlet, useNavigate } from "react-router-dom";
import {
  GrChat,
  GrSearch,
  GrSettingsOption,
  GrCode,
  GrCompliance,
} from "react-icons/gr";

export const TechStack = () => {
  const [showmobilesidebar,setshowmobilesidebar] = useState(false)
  const currentroute = window.location.pathname;
  // console.log(currentroute)
  const navigate = useNavigate();

  const handleNavigation = (path)=>{
    navigate(path)
    setshowmobilesidebar(false)
  }
  return (
    <div className="tscontainer">
      <section className={showmobilesidebar ? "tscontainer_leftsection" : "tscontainer_leftsection hidecontent"}>
        <p className="headerbrandlogo" onClick={() => navigate("/")}>
          FreakinTech  
        </p>
        <span className="sidebarclose" onClick={()=>setshowmobilesidebar(false)}>X</span>

        <div className="tsleftsection_options">
          <section className="tsfeaturelistsection">
            <p onClick={()=>handleNavigation('/codebank')}  className = {currentroute == "/codebank" && "selected"}>
              <span>
                <GrCode style={{ backgroundColor: "red" }} />
                Code bank
              </span>
            </p>
            <p onClick={()=>handleNavigation('/chat')} className = {currentroute == "/chat" && "selected"}>
              <span>
                <GrChat style={{ backgroundColor: "green" }} />
                Chats
              </span>
            </p>
            <p onClick={()=>handleNavigation('/code')} className = {currentroute == "/code" && "selected"}>
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
          <section className="suggestion_section">
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

      <section className={showmobilesidebar ? "tscontainer_rightsection hidecontent" : "tscontainer_rightsection"}>
        <p className="sidebaropen" onClick={()=>setshowmobilesidebar(true)}>Show</p>
        <Outlet />
      </section>
    </div>
  );
};
