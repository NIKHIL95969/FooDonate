import React from 'react'
import { Link } from 'react-router-dom'
import  './css/Header.css'

export default function Header({ signUserOut, isAuth }) {
    
  return (
    <header className='header'>
        <div className="logo">FooDonate</div>
        <div className="hamburger" id="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <nav className="nav-bar" id="nav-bar">
            <ul className="nav-bar">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/donate"> Donate </Link></li>
                <li><Link to="/foodlist"> Foodlist </Link></li>
            </ul>
            <button className={!isAuth ? "logout_hide" : "logout_btn"} onClick={signUserOut}> Log Out</button>
            <Link to="/login" > 
                <div className="profilelogo">
                    N
                </div>
            
             </Link>
        </nav>
    </header>
  )
}
