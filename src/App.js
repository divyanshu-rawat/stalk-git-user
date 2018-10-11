import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "./Components/button";
import { Input } from "./Components/input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiData } from "./ActionTypes";
import Header from "./Routes";
import loader from "./Assets/loader.gif"
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      isLoading: false,
      message:false
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

    const {isLoading} = this.state;
    if (isLoading) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto ">
          <img src={loader} className="" />
        </div>
      );
    }
    return (
       <div>
        <div>
          <Header />
        </div>

        <div className = "col-lg-offset-4 col-md-offset-4 col-md-5 col-sm-offset-3 col-sm-6 col-lg-4 col-xs-12">
           <h3>Enter GitHub Username</h3>
        </div>
        <div className="col-lg-offset-4 col-md-offset-4 col-md-5 col-sm-offset-3 col-sm-6 col-lg-4 col-xs-12 ">
         
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

        <div className = "col-lg-offset-4 col-md-offset-4 col-md-5 col-sm-offset-3 col-sm-6 col-lg-5 col-xs-12">
           <h3>{this.state.message && <div>View user profile information at <Link to="/profile">Profile</Link> page.{" "}</div>}</h3>
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
