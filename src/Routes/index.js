import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/navigation";

function Header(props) {
  return (
    <div>
      <Navbar data={props.data} />
    </div>
  );
}

export default Header;
