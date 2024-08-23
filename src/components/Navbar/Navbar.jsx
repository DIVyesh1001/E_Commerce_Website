import { React, useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import pencilLogo from './pencilLogo.png'
import searchIcon from './search.png'
function Navbar() {
    return (
        <header>
            <div className='navbar'>
                <div className="nav-elements">
                    <div className="element">
                    <Link to='/products'><p>PRODUCTS</p></Link>
                    </div>
                    <div className="element">
                    <Link to='./aboutus'><p>ABOUT US</p></Link>    
                    </div>
                    <div className="element">
                    <Link to='/contactus'><p>REACH US</p></Link>
                    </div>
                </div>
                <div className="logo">
                    <Link to='/'> <img src={pencilLogo} alt="Logo" className='logo-icon' /></Link>
                </div>
                <div className="search">
                    <div className="icon">
                        <img src={searchIcon} className="search-icon"></img>
                    </div>
                    <input type="text" placeholder="SEARCH" className="input-search" />
                </div>

            </div>

            <div className="scroll-nav">
                <div className="marquee">
                    <p>🆕 NEW PRODUCTS AVAILABLE 🆕 SHOP NOW TO GET ATTRACTIVE DISCOUNTS 🆕</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar
