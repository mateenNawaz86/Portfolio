import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <div className="submit-btn">
      <button className="btn-1 outer-shadow hover-in-shadow" type={props.type}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
