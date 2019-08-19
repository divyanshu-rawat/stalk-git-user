import React from "react";
import ReactDom from "react-dom";
import "../stylesheets/card.css";

export const Input = props => {
  return (
    <input className="" onChange={props.onChange} />
  );
};
