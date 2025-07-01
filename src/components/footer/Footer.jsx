import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className="footer-main-container">
        <div className="questions">
                <p>Questions? Call <a href="">000-800-919-1743</a> </p>
        </div>
        <div className="footer-container">
                <div className="footer-left">
                        <a href="https://help.netflix.com/en/node/412">FAQ</a>
                        <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
                        <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                        <a href="https://fast.com/">Speed Test</a>
                </div>

                <div className="left-footer-center">
                        <a href="https://help.netflix.com/en">Help Centre</a>
                        <a href="https://jobs.netflix.com/">Jobs</a>
                        <a href="https://www.netflix.com/in/?%E2%80%9D=">Cookie Preference</a>
                        <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
                </div>

                <div className="footer-right-center">
                        <a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a>
                        <a href="https://help.netflix.com/en/node/14361">Ways to Watch</a>
                        <a href="https://help.netflix.com/en/node/134094">Corporate Information</a>
                        <a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a>
                </div>

                <div className="footer-right">
                        <a href="https://media.netflix.com/en/">Media Centre</a>
                        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                        <a href="https://help.netflix.com/en/contactus">Contact Us</a>
                </div>
        </div>

        <div className="language">
                <select name="language" id="language">
                                                <option value="english">English</option>
                                                <option value="hindi"> हिंदी</option>
                                        </select>
        </div>

        <div className="netflix-india">
                <p>Netflix India</p>
        </div>

        <div className="copy-rights">
                <p>This page is protected by Joel reCAPTCHA to ensure you're not a bot. <a href=''>Learn more</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
