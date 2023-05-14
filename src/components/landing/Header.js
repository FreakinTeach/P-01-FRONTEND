import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    let getUser = localStorage.getItem('user')
    const user = getUser && JSON.parse(getUser) 
    console.log(user)

    return(
        <div className="headercontainer">
                <ul className="headerleft">
                    <li>Fintech</li>
                    <li>Services</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>News</li>
                </ul>
                <div className="headerright">
                    {user && Object.values(user).length > 0 ? <img src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif" />
                    :
                    <button className="siginbtn" onClick={()=>navigate('/auth')}>Sign in</button>
                    }
                </div>
        </div>
    )
}

export default Header;