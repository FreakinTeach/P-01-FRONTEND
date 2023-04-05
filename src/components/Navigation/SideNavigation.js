import React from "react";
import "./sidenavigation.css";
import { useNavigate } from "react-router-dom";


export const SideNavigation = () => {
  const navigate = useNavigate()
  const handleroute = (path)=>{
    navigate(path)
  }

  return (
  <div className="sncontainer">
    <p onClick={()=>handleroute('/')}>Home</p>
    <p onClick={()=>handleroute('/chat')}>chat</p>
    <p onClick={()=>handleroute('/code')}>code</p>
  </div>  
  );
};
