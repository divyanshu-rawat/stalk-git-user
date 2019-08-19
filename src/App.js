import React, { Component } from "react";
import "./App.css";
import axios from "axios";

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
    this.setState({ showLoader: true });
    const { username } = this.state;
    const URL = `https://api.github.com/users/${username}`;
    const { data } = await axios(URL);
    this.setState({ showLoader: false });
    this.props.apiData(data);
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
