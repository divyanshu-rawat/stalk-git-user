import React from "react";
import ReactDom from "react-dom";
import "../stylesheets/card.css";

export const Input = props => {
  return (
    <input className="form-control _display-inline" onChange={props.onChange} />
  );
};
