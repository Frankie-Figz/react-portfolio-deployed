import React from "react";
import "./style.css";
import LinkedInLogo from "./contact-icons-03.png";
import GmailLogo from "./contact-icons-02.png";
import GithubLogo from "./contact-icons-01.png";

function Footer() {
  return (
    <footer className="footer">
      <div class="container">
        <div class = "row">
          <div class = "col-12">
            <div>
              <a 
                  href="https://www.linkedin.com/in/francisco-javier-vannini-robelo-b294a182/" 
                  id="linkedin"
                >
                  <img 
                    src={LinkedInLogo} 
                    alt="linkedin" 
                    className="footer-icon"
                  />
                    linkedin
              </a>
            </div>
          </div>
          <div class = "col-12">
            <div>
                <a 
                  href="mailto:fjvannini@gmail.com" 
                  id="email"
                >
                  <img 
                    src={GmailLogo} 
                    alt="gmail" 
                    className="footer-icon"
                  />
                  email
                </a>

            </div>
          </div>
          <div class = "col-12">
            <a 
              href="https://github.com/Frankie-Figz?tab=repositories" 
              id="github"
            >
              <img 
                src={GithubLogo}
                alt="github" 
                className="footer-icon"
                />
                github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
