import React from "react";
import { TSHeader } from "../techstack/TSHeader";
import "./usersetting.css";

export const UserSetting = () => {
  return (
    <div className="uscontainermain">
      <TSHeader layout={"Welcome to Settings"} />
      <div className="settings1">
        <div className="settings11">
          <b>Personal information</b>
        </div>
        <div className="settings12">
          <div className="settings121">
            Your Avatar
          </div>
          <div className="settings122">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          width="50px"
          height="50px"
        />
        
        <div className="settings123">
          chandru
          <div className="settings1231">
           <a href="#">chandru@gmail.com</a> 
          </div>
        </div>
        <div className="settings1232">
          <button>
          Upload now
          </button>

        </div>
          </div>
         
        </div>
      </div>
    </div>

  );
};
