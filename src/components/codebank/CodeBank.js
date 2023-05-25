import React, { useState } from "react";
import "./codebank.css";
import Header from "../landing/Header";
import { codeBank } from "../config/cardconfig";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import Modal from "@mui/material/Modal";
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
      {/* <Header /> */}
      {/* Modal Show */}
      
      <div className="cbcontainer">
        <div className="cbsidebar">
          <p onClick={() => userInfo && navigate("/chat")}>Chat</p>
          <p onClick={() => userInfo && navigate("/code")}>Compiler</p>
          {!userInfo && (
            <div className="signinlayer">
              <button
                className="signinsidebar"
                onClick={() => navigate("/auth")}
              >
                Sign in
              </button>
            </div>
          )}
        </div>
        <div className="cbsection">
          <div className="cbsection-header">
            <h2>Code Bank</h2>
            <button className="codebank-post-btn" onClick={handleOpen}>
              POST
            </button>
          </div>
          <div className="codebank-grid-parent">
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            ></Modal> */}
            
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
      </div>
    </>
  );
};
