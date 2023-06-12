import React from "react";
import './tsheader.css'

export const TSHeader = ({layout}) => {
  
  return (
    <div className="techstack_header">
      <h2>{layout}</h2>
      <span>
        <button
          className="techstack_postbtn"
          onClick={() => console.log("hey")}
        >
          upload
        </button>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          width="50px"
          height="50px"
        />
      </span>
    </div>
  );
};
