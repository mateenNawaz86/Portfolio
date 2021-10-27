import React from "react";
import profileImg from "../img/profile-img.png";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left-area">
          <div className="left-wrapper">
            <h2 className="title">Hi, My name is </h2>
            <h2 className="name">Mateen Nawaz</h2>
            <div className="skills-title">
              <div className="skills-title-wrapper">
                <div className="skill-item">Front-end Developer</div>
                <div className="skill-item">ReactJS Developer</div>
                <div className="skill-item">UI/UX Designer</div>
                <div className="skill-item">Web Developer</div>
                <div className="skill-item">Web Designer</div>
              </div>
            </div>

            <div className="personal-des">
              <p>
                Being passionate web developer with over 6 months of front-end
                experience and responsive website design and a firm believer in
                the mobile-first approach. Experienced working with team to
                produce impactful, leading-edge websites that engage customers
                on preferences.
              </p>
            </div>
          </div>
        </div>
        <div className="right-area">
          <div className="profile-bg"></div>
          <img src={profileImg} alt="profile" className='profile-img'/>
        </div>
      </header>
    </>
  );
};

export default Header;
