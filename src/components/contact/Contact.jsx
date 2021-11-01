import React from "react";
import ContactForm from "./Contact-Form";

import "./Contact.css";

const contactData = [
  {
    icon: "fas fa-phone",
    title: "Phone",
    status: "0301 ***75**",
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    status: "info@domain.com",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Address",
    status: "B/02 Blue area, Islamabad",
  },
];

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-text">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            reprehenderit debitis obcaecati minima? Aperiam commodi sapiente
            asperiores laudantium, ducimus totam!
          </p>
        </div>

        <div className="personal-info">
          {contactData.map((item, index) => {
            return (
              <div className="contact-item" key={index}>
                <div className="item-inner outer-shadow">
                  <i className={item.icon} />
                  <span>{item.title}</span>
                  <p>{item.status}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
