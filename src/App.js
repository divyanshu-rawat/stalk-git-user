import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Button } from "./Components/button";
import { Input } from "./Components/input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiData } from "./ActionTypes";
import Header from "./Routes";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  handleClick() {
    const URL = "https://api.github.com/users/" + this.state.username;
    axios
      .get(URL)
      .then(response => response.data)
      .then(response => {
        const data = response;
        this.props.apiData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className="col-lg-offset-4 col-md-offset-4 col-md-5 col-sm-offset-3 col-sm-6 col-lg-4 col-xs-12 _text-align _display-inline _percent_margin">
          <Input
            value={this.state.username}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <Button
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
