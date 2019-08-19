import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/navbarComponent";

function Header(props) {
  return (
    <div>
      <NavBar data={props.data} />
    </div>
  );
}

export default Header;
