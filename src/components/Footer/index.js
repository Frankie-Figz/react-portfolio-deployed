import React from "react";
import "./style.css";
import CV from "./contact-icons-04.png"
import LinkedInLogo from "./contact-icons-03.png";
import GmailLogo from "./contact-icons-02.png";
import GithubLogo from "./contact-icons-01.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className = "row">
          <div className = "col-lg-6 offset-lg-3">
            <div className = "row">  
              <div className = "col-lg-3 col-md-12 col-sm-12">
                  <a href="https://www.linkedin.com/in/francisco-vannini-b294a182/" id="linkedin">
                    <img src={LinkedInLogo} alt="linkedin" className="footer-icon" />
                      linkedin
                  </a>
                </div>
                <div className = "col-lg-3 col-md-12 col-sm-12">
                  <a href="mailto:fjvannini@gmail.com" id="email">
                    <img src={GmailLogo} alt="gmail" className="footer-icon"/>
                      email
                  </a>
                </div>
                <div className = "col-lg-3 col-md-12 col-sm-12">
                  <a href="https://github.com/Frankie-Figz?tab=repositories" id="github">
                    <img src={GithubLogo} alt="github" className="footer-icon"/>
                      github
                  </a>
                </div>
                <div className = "col-lg-3 col-md-12 col-sm-12">
                  <a href="https://drive.google.com/open?id=0B7_aX8GpCqwHQVRWdWxpa2preExJdTJncXNybVZRSFJHNUVr" id="github">
                    <img src={CV} alt="cv" className="footer-icon"/>
                      resume
                  </a>
                </div>                    
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;