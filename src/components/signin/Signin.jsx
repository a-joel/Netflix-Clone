import React from 'react'
import './Signin.css'
import SignFooter from '../signfooter/SignFooter'
import { Bold } from 'lucide-react'
import { Link } from 'react-router-dom'
function Signin() {
  return (
    <div>
      <div className="sign">
        <div className='logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
" alt="" />
        </div>
        <div className="sign-main-container">
        <div className="form-container">
          <div className="form-heading">
            <h2>Sign In</h2>
          </div>

          <form action="">
            <input type="email" placeholder='Email or mobile number'required/>
            <input type="password" placeholder='Password' required/>
            <div className="butons">
              <button className='btn btn-danger'>Sign In</button>
            <p className='or'>Or</p>
            <button className='btn btn-light signin-code-btn'>Use a signin-in code</button>
            </div>
            <a href="#">Forgot password?</a>
            <div className="checkbox-input">
              <input type="checkbox" />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <p>New to Netflix?
              <Link to='/netflix-clone'>
            <strong>
              Sign up now.
            </strong>
            </Link>
            </p>
            <p className='page-protection'>This page is protected by joel reCAPTCHA to ensure you're not a bot. <br /><a href="#">Learn more.</a></p>
          </form>
        </div>
      </div>
      </div>

      <SignFooter />
    </div>
  )
}

export default Signin
