import React from "react";
import aboutImg from "../../img/about-img.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <div className="card-wrapper bg"></div>
          <div className="card-wrapper">
            <img src={aboutImg} alt="About profile" className="about-img" />
          </div>
        </div>
        <div className="about-right"></div>
      </div>
    </>
  );
};

export default About;
