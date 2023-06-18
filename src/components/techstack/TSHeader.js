import React, { useState } from "react";
import "./tsheader.css";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const TSHeader = ({ layout }) => {
  let getUser = localStorage.getItem("user");
  const user = getUser && JSON.parse(getUser);
  const navigate = useNavigate();
  const [showloginDropdown, setshowloginDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="techstack_header">
      <h2>{layout}<span>{user.username}</span></h2>
      <span>
        <button
          className="techstack_postbtn"
          onClick={() => console.log("hey")}
        >
          upload
        </button>
        {user && Object.values(user).length > 0 ? (
          <div className="headerloggedprofile">
            <FaUserCircle
              style={{ color: "black", fontSize: "24px", cursor: "pointer" }}
              onClick={() => setshowloginDropdown(!showloginDropdown)}
            />
            {showloginDropdown && (
              <section className="userdetailsdropdown">
                <p>Profile</p>
                <p>Rank</p>
                <p onClick={() => handleLogout()}>Log out</p>
              </section>
            )}
          </div>
        ) : (
          <button className="siginbtn" onClick={() => navigate("/auth")}>
            Sign in
          </button>
        )}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          width="50px"
          height="50px"
        /> */}
      </span>
    </div>
  );
};
