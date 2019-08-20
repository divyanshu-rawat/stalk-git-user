import React, { Component } from "react";
import "./App.css";

/* Routing, async stuff. */
import axios from "axios";
import { Redirect } from "react-router-dom";

/* Importing components. */

import { BTN } from "./Components/buttonComponent";
import { InputWithIcon } from "./Components/inputWithIconComponent";

/* Redux stuff. */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiData } from "./ActionTypes";

/* Application loader.  */
import loader from "./Assets/loader.gif";
import "./App.css";

/* cached data to prevent apiCalls */
import json from "./cache.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      showLoader: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    // console.log("json!!", this);
    const { username } = this.state;
    const URL = `https://api.github.com/users/${username}`;
    const { data } = await axios(URL);
    this.props.apiData(data);
    // this.props.history.push("profile");
    /*
    this.setState({ showLoader: true });
    const { username } = this.state;
    const URL = `https://api.github.com/users/${username}`;
    try {
      const { data } = await axios(URL);
      this.props.apiData(data);
      this.setState({ showLoader: false });
      this.props.history.push("profile");
    } catch (e) {
      this.setState({ showLoader: false });
      console.error(e);
    }
    */
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const { showLoader } = this.state;
    if (showLoader) {
      return (
        <div>
          <img src={loader} />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="flex flex-col justify-align-content app-container">
          <div className="justify-align-content flex flex-col">
            <h3>GitStalk 👋</h3>
            <p className="secondary-title ">Discover who's upto what...</p>
          </div>
          <div className="justify-align-content m-t-1em flex flex-row">
            <InputWithIcon
              value={this.state.username}
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <BTN onClick={this.handleClick} />
          </div>
        </div>
      </React.Fragment>
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
