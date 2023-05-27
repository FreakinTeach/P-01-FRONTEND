import React, { useState } from "react";
import "./codebank.css";
import Header from "../landing/Header";
import { codeBank } from "../config/cardconfig";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const CodeBank = () => {
  const [saveStatus, setSaveStatus] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleCardSave = () => {
    setSaveStatus(!saveStatus);
  };

  const navigate = useNavigate();
  const userInfo =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="cbcontainer">
        <div className="cbsection-header">
          <h2>Welcome to Code Bank</h2>
          <span>
          <button className="codebank-post-btn" onClick={handleOpen}>
            upload
          </button>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" width="50px" height="50px"/>
          </span>
        </div>
        <div className="codebank-grid-parent">
          {codeBank && codeBank.length > 0
            ? codeBank.map((i) => {
                let image = i.image;
                let title = i.title;
                let desc = i.description;
                let amount = i.amount;
                return (
                  <>
                    <div className="codebank-card">
                      <img
                        className="codebank-card-img"
                        src={image}
                        alt="question_img"
                      ></img>
                      <h5 className="codebank-card-title">{title}</h5>
                      <p className="codebank-card-desc">{desc}</p>
                      <p className="codebank-card-price">
                        Bid Amount: ₹{amount}
                      </p>
                      <button className="codebank-card-button">ANSWER</button>
                      <BsFillBookmarkFill
                        onClick={handleCardSave}
                        className="codebank-card-save-icon"
                      />
                    </div>
                  </>
                );
              })
            : "No questions available now"}
        </div>
      </div>
    </>
  );
};
