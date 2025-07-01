import React from 'react'
import './GetStarted.css' // Assuming you have a CSS file for styling
function GetStarted() {
  return (
    <div>
       <div className="getstarted-container">
         <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="getstarted">
               
                <form action="" className="input-fields">
                        <input type="email" placeholder="Email address" required/>
                                        <button className="btn btn-danger ">Get Started &gt;</button>
                </form>
        </div>
       </div>
    </div>
  )
}

export default GetStarted
