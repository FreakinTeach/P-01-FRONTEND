import React, { useState } from "react";
import "./codebank.css";
import { codeBank } from "../../config/cardconfig";
import { useNavigate } from "react-router-dom";
import { TSHeader } from "../techstack/TSHeader";
import  Badge  from "react-bootstrap/Badge";

export const CodeBank = () => {
  const navigate = useNavigate();
  const badgecolors = ["primary","secondary","success","info","dark"]

  const userInfo =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="cbcontainer">
        <TSHeader layout={"Welcome to Codebank"} />
        <div className="cb-grid-parent">
          {codeBank && codeBank.length > 0
            ? codeBank.map((info) => {
                let title = info.title;
                let desc = info.description;
                let amount = info.amount;

                return (
                  <div className="cb_cards">
                    <h2>{title}</h2>
                    <div className="cb_cards_main">
                        <div className="cb_card_left">
                          <p className="cb_card_desc">{desc}</p>
                          <p className="cb_card_desc"> {info.skills.map((skill) => (
                            <Badge bg={badgecolors[Math.floor(Math.random()*badgecolors.length)]}>{skill}</Badge>
                          ))}</p>
                        </div>

                        <div className="cbcard_right">
                          <p >Free</p>
                          <p >₹{amount}</p>
                        </div>
                    </div>
                    <div className="cb_cards_footer">
                      <button >write Answers</button>
                      <button >check Answers</button>
                    </div>
                  </div>
                );
              })
            : "No questions available now"}
        </div>
      </div>
    </>
  );
};
