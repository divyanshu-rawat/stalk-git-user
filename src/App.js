import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BTN } from "./Components/buttonComponent";
import { Input } from "./Components/input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiData } from "./ActionTypes";
import Header from "./Routes";
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
        <div>
          <Header />
        </div>
        <div className="">
          <p className="secondary-title">Discover who's upto what...</p>
        </div>
        <div className="">
          <Input
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
