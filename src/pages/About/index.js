import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Picture from "./portfolio-picture.jpg";
import "./style.css";

function About() {
  return (
    <div className = "height-frustration">
      <Jumbotron style={{ height: 600}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr></hr>
          <div className= "container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-8">
                    <img src={Picture} alt="portfolio" className="portfolio-picture"/>
                    <div> A deep appreciation of algorithms and a relentless drive to solve a problem are the cornerstone of my work ethic. </div>
                </div>
                <div className="desktop-only col-9">
                  <p className="left-align">
                    <strong> About Me : </strong>
                  </p>
                  <p className="left-align tab">
                    A Mathematician with experience as a Data Scientist, Database Architect and Full stack web developer who is excited to develop responsive, user friendly and fluid applications / websites. 
                    I received my Bachelor of Science in Discrete Mathematics from Georgiatech in 2009 and a Full stack web development certificate from George Washington University in 2019.                  
                  </p>
                  <p className="left-align tab">
                    Successfully modernized a seafood company by migrating their business processes from a legacy database system in FoxPro to a modern ERP mounted over Postgres SQL and in the process optimized business process to best practices. 
                    After the migration process the company was able to reduce the lag on the end of month closing from 60 days to 10 days and have access to a myriad of new reports (customizable on request) to use in the decision-making process. 
                    With healthy business processes (and data) in place time series forecasts and data relations were developed to be used in an algorithmic construction of the annual budget.
                  </p>
                  <p className="left-align tab">
                    Positioned well to provide data analysis, transformation, extrapolations and input processes by leveraging my background in mathematics, relevant job experience, relentless problem-solving drive and imaginative approaches.
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
      </Jumbotron>
    </div>
  );
}
export default About;