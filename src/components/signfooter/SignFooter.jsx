import React from 'react'
import './SignFooter.css'
function SignFooter() {
  return (
    <div>
        <div className="sign-footer-container">
                <div>
                        <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>
                </div>
                <div className="sign-footer">
                        <a href="https://help.netflix.com/en/node/412">FAQ</a>
                        <a href="https://help.netflix.com/en">Help Centre</a>
                        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                        <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                        <a href="https://www.netflix.com/in/login">Cookie Preference</a>
                        <a href="https://help.netflix.com/en/node/134094">Corporate Information</a>
                </div>
                <div className="language">
                        <select name="language" id="language">
                                                <option value="english">English</option>
                                                <option value="hindi"> हिंदी</option>
                                        </select>
                </div>
        </div>
    </div>
  )
}

export default SignFooter
