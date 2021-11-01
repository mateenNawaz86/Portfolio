import React, { useState } from "react";
import Button from "../UI/Button";

import "./Contact-Form.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSub, setEnteredSub] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const nameChangeHandler = (event) => {
    if (enteredName.trim().length > 3) {
      setEnteredName(event.target.value);
    }
  };
  const emailChangeHandler = (event) => {
    if (enteredEmail.includes("@")) {
      setEnteredEmail(event.target.value);
    }
  };

  const subChangeHandler = (event) => {
    if (enteredSub.trim().length > 6) {
      setEnteredSub(event.target.value);
    }
  };

  const textChangerHandler = (event) => {
    if (enteredText.trim().length > 12) {
      setEnteredText(event.target.value);
    }
  };

  const messageHandler = (event) => {
    event.preventDefault();
    setEnteredName("");
    setEnteredEmail("");
    setEnteredSub("");
    setEnteredText("");
  };
  return (
    <>
      <div className="form-container">
        <div className="contact-form">
          <form onSubmit={messageHandler}>
            <div className="form-container">
              <div className="width-container">
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="text"
                    className="input-control"
                    placeholder="Name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                  />
                </div>
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="email"
                    className="input-control"
                    placeholder="Email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                  />
                </div>
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="text"
                    className="input-control"
                    placeholder="Subject"
                    value={enteredSub}
                    onChange={subChangeHandler}
                  />
                </div>
              </div>

              <div className="width-container">
                <div className="input-group outer-shadow hover-in-shadow">
                  <textarea onChange={textChangerHandler} value={enteredText} />
                </div>
              </div>
            </div>
          </form>
          <div className="form-container">
            <Button type="sbumit">Send Message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
