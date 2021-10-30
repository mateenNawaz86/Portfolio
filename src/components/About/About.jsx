import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../img/about-img.png";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="container-row">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="inner-container">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img
                src={aboutImg}
                alt="About profile"
                className="outer-shadow"
              />
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/mateen-mirani-2904aa167/"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow links"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://github.com/mtMirani25"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow links"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="about-info">
            <p>
              <span>
                Hi! My name is Mateen Nawaz. I'm a passionate Front-end Web
                Developer.
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis voluptas suscipit quisquam? Fugiat iusto veniam ex
              libero cum? Quidem, consequuntur!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem facilis nostrum iusto amet deserunt in cumque nobis
              asperiores blanditiis magnam aut esse eligendi optio distinctio,
              numquam minima perferendis eum debitis et recusandae. Officiis est
              mollitia, expedita vero iste quo, repellendus molestiae vel ea
              fugit autem placeat et optio illum aperiam!
            </p>

            <Link to="/contact" className="btn-1 outer-shadow hover-in-shadow">
              Hire Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
