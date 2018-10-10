import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = props => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/description">Description</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
