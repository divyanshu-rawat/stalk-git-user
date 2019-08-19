import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import { BTN } from "./Components/buttonComponent";
import { InputWithIcon } from "./Components/inputWithIconComponent";
import { NavBar } from "./Components/navbarComponent";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiData } from "./ActionTypes";

import loader from "./Assets/loader.gif";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      message: false
    };
  }

  async handleClick() {
    this.setState({ isLoading: true });

    const URL = "https://api.github.com/users/" + this.state.username;
    const { data } = await axios(URL);
    this.setState({ isLoading: false, message: true });
    this.props.apiData(data);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="">
          <img src={loader} className="" />
        </div>
      );
    }
    return (
      <div>
        <NavBar />
        <div className="">
          <p className="secondary-title">Discover who's upto what...</p>
        </div>
        <div className="">
          <InputWithIcon
            value={this.state.username}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <BTN
            onClick={e => {
              this.handleClick(e);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ apiData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
