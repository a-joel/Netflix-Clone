import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation
function Navbar() {
return (
        <div className='god-container container-fluid'>
                <nav className='main-container'>
                        <div className="navbar-left">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
" alt="" />

                        </div>
                        <div className="container">
                                <div className="navlinks">
                                        <select name="language" id="language">
                                                <option value="english">English</option>
                                                <option value="hindi"> हिंदी</option>
                                        </select>
                                        <Link to='/signin'><button className="btn btn-danger">Sign In</button></Link>
                                        
                                </div>
                        </div>
                </nav>
                <div className="hero">
                                <div className="info">
                                        <h2>Unlimited movies,<br /> TV shows and <br /> more</h2>
                                        <p>Starts ₹149. Cancel at any time.</p>
                                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                                </div>
                               <form action="" className="signup">
                                <input type="email" placeholder='Email or mobile number' />
                                        <button className="btn btn-danger ">Get Started &gt;</button>
                               </form>
                        </div>
        </div>
        
)
}

export default Navbar
