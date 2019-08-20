import React, { Component } from "react";
import "./App.css";

/* Routing, async stuff. */
/* Importing components. */

import { BTN } from "./Components/buttonComponent";
import { InputWithIcon } from "./Components/inputWithIconComponent";

/* Redux stuff. */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getApiData } from "./ActionTypes";

/* Application loader.  */
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

  handleClick() {
    const { username } = this.state;
    this.props.getApiData(username);
    this.props.history.push("profile");
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
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
  return bindActionCreators({ getApiData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
