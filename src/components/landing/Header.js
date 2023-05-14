import React from "react";
import './header.css';

function Header(){
    return(
        <div className="navbar">
            <div className="nav-element">
                <ul className="navlist">
                    <li className="list-item">Fintech</li>
                    <li className="list-item">Services</li>
                    <li className="list-item">Features</li>
                    <li className="list-item">Pricing</li>
                    <li className="list-item">News</li>
                </ul>
                <div className="btn">
                    <button className="btn-in">Log in</button>
                    <button id = "sign-in" className="btn-in">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Header;