import React from "react";
import "./main.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import landingImage from '../../assets/landing.png'

export const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="maincontainer">
        <section className="lpsection1">
          <div className="maincontent">
            <h1>
              {/* Simple way<br /> to control <br/> */}
              {/* <span>your savings.</span> */}
              Unlock the Secrets of <br />
              Masterful Coding with <br />
              <span>FreakinTech</span>
            </h1>
            <p>
              You will meet the most intresting techy's here
              <br /> Hire Teach Learn Earn
            </p>

            <div className="explorebtn">
              {/* <input type="text" placeholder="Enter your email" /> */}
              <button className="btnmain" onClick={() => navigate("/codebank")}>
                Get Started
              </button>
            </div>
          </div>
          <div className="imagesection">
            <img
              src={landingImage}
              alt="simple-image"
            />
          </div>
        </section>

        <section className="lpsection2">
          <div>
            <p>290+</p>
            <span>Techy's Joined</span>
          </div>
          <div>
            <p>3290+</p>
            <span>Code Assets</span>
          </div>
          <div>
            <p>290+</p>
            <span>Client Satisfaction Rate</span>
          </div>
          <div>
            <p>17+</p>
            <span>Tech Products</span>
          </div>
        </section>
      </div>
    </>
  );
};
