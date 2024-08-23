import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="input-footer">
                <div className="panel1">
                    <ul>
                        <Link to='/products'><p>PRODUCTS</p></Link>
                        <Link to='/aboutus'><p>ABOUT US</p></Link>
                        <Link to='/contactus'><p>FIND US</p></Link>
                    </ul>
                    <ul>
                        <p>HELP CENTER</p>
                        <p>CAREER</p>
                        <p>ACCESSIBILITY</p>
                    </ul>
                    <ul>
                        <p>CONTACT US</p>
                        <p className="contact">HELLO@SHOP.COM</p>
                        <p className="contact">+91 9999999999</p>
                    </ul>
                </div>

                <div className="panel2">
                    <p>STAY IN TOUCH</p>
                    <input type="text" placeholder="EMAIL ADDRESS" className="mail" />
                </div>
            </div>
            <div className="panel">

                <div className="panel3">
                    <div className="page1">
                        <a>© 2024 Jagdambe All Rights Reserved</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                        <a>Accessibility</a>
                    </div>
                    <div className="page2">
                        <a>Do Not Sell or Share My Personal Information</a>
                        <a>AdChoices - Do Not Sell or Share</a>

                    </div>


                </div>

                {/* <div className="foot-lastpannel">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Tiktok</p>
                </div> */}
            </div>
        </footer>

    )
}

export default Footer
