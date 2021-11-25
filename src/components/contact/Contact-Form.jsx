import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Button from "../UI/Button";

import "./Contact-Form.css";

const ContactForm = () => {
  const formRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSub, setEnteredSub] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const subChangeHandler = (event) => {
    setEnteredSub(event.target.value);
  };

  const textChangerHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_rqi5hnd",
        "template_aqpeg5g",
        formRef.current,
        "user_J5Qz5JvDF6BWbOg1KJB8A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEnteredName("");
    setEnteredEmail("");
    setEnteredSub("");
    setEnteredText("");
  };

  return (
    <>
      <div className="form-container">
        <div className="contact-form">
          <form ref={formRef} onSubmit={submitHandler}>
            <div className="form-container">
              <div className="width-container">
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="text"
                    className="input-control"
                    placeholder="Name"
                    name="user_name"
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
                    name="user_email"
                    onChange={emailChangeHandler}
                  />
                </div>
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="text"
                    className="input-control"
                    placeholder="Subject"
                    value={enteredSub}
                    name="user_subject"
                    onChange={subChangeHandler}
                  />
                </div>
              </div>

              <div className="width-container">
                <div className="input-group outer-shadow hover-in-shadow">
                  <textarea
                    onChange={textChangerHandler}
                    name="user_message"
                    value={enteredText}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="form-container">
            <Button type="submit">Send Message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
