import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [showloginDropdown,setshowloginDropdown] = useState(false)
  let getUser = localStorage.getItem("user");
  const user = getUser && JSON.parse(getUser);

  const handleLogout =()=>{
    localStorage.removeItem("user");
    window.location.reload()
  }

  return (
    <div className="headercontainer">
      <p className="headerbrandlogo" onClick={() => navigate("/")}>
        FreakinTech
      </p>
      <ul className="headerleft">
        <li>Home</li>
        <li>Features</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>
      <div className="headerright">
        {user && Object.values(user).length > 0 ? (
          <div className="headerloggedprofile">
          <FaUserCircle style={{ color: "#ffffff", fontSize: "24px",cursor:'pointer' }} onClick={()=>setshowloginDropdown(!showloginDropdown)}/>
          {showloginDropdown && <section className="userdetailsdropdown">
          <p >Profile</p>
          <p >Rank</p>
          <p onClick={()=>handleLogout()}>Log out</p>
          </section>}
          </div>
        ) : (
          <button className="siginbtn" onClick={() => navigate("/auth")}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
