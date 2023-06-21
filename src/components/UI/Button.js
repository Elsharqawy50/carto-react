import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button border-0 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
