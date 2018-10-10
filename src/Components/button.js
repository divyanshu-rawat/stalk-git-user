import React from "react";
import ReactDom from "react-dom";

export const Button = props => {
  return (
    <button className="btn btn-default marginTop" onClick={props.onClick}>
      {" "}
      Search Github User
    </button>
  );
};
