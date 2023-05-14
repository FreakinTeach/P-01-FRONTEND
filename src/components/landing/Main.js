import React from "react";
import './main.css'

export const Main = ()=>{
    return(
        <div className="section-container">
            <div className="section-content">
                <div className="section-text">
                  <h1 className="heading">Simple way<br/> to control<span><br/>your savings.</span></h1>
                  <br/>
                  <p>Give all your customers global freedom<br/> with the top of their card</p>
                </div>
                <div className="section-input">
                    <input type="text" placeholder="Enter your email"/>
                    <button className="btn-section">Get started</button>
                </div>
                <div className="section-icon">
                <h3 className="icon">Google</h3>
                <h5 className="icon">Skyscanner</h5>
                <h5 className="icon">Bolt</h5>
            </div>
            </div>
            <div>
                <img src = "https://media.istockphoto.com/id/1312580883/vector/bauhaus.jpg?s=612x612&w=is&k=20&c=O7lwOrU1dMLn94VfScGBhE3IWxOWtWdbjz4UkcaEYMg=" alt="simple-image"/>
            </div>
        </div>
    )
}
