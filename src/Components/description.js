import React from "react";
import ReactDom from "react-dom";
import Header from "../Routes";
import axios from "axios";
import Moment from "react-moment";
import "../App.css";
import { Link } from "react-router-dom";
import loader from "../Assets/loader.gif"
import _ from 'lodash';

export default class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      asyncDone: false
    };
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount() {
    const {data} = this.props.state.rootReducer.profileReducer;
    const {login} = data;
    this.setState({ isLoading: !this.state.isLoading });
    this.fetch(login)
  }

  async fetch(username){
    const URL = "https://api.github.com/users/" + username + "/repos";
    const { data } = await axios(URL);
    this.setState({ isLoading: !this.state.isLoading });

    if(data.length == 1){ 
      return 
    }
    if(data.length > 1){
        this.props.repoData(data)
        this.setState({ asyncDone: true });
    }
  }

  componentDidUpdate(){}

  render() {
  
    let html;
    if (this.state.asyncDone) {

      const {data} = this.props.state.rootReducer.descriptionReducer
      html = data.map((repo, index) => {
        return (
          <div key = {index}>
            <div className="card-2 col-lg-5 col-md-5">
              <div className="panel panel-default _margin-top">
                <div className="panel-heading">
                  <a href={repo.html_url}> {repo.name} </a>
                </div>
              </div>

              <div>
                <h3>Project Description :</h3> <p> {repo.description}</p>
              </div>

              <div>
                <h3>Language : </h3> <p>{repo.language}</p>
              </div>
              <div />

              <div className="panel panel-default _margin-top">
                <div className="panel-heading _panel-padding">
                  <p className="_zero_mr _text-align ">
                    <i className="fa fa-star pull-left" aria-hidden="true">
                      <span className="_mg-left">{repo.stargazers_count}</span>
                    </i>

                    <i className="fa fa-eye" aria-hidden="true" />
                    <span className="_mg-left">{repo.watchers}</span>

                    <i
                      className="fa fa-code-fork pull-right"
                      aria-hidden="true"
                    >
                      <span className="_mg-left">{repo.forks_count}</span>
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {

       const {isLoading} = this.state;
       if (isLoading) {
          html =
            <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto ">
              <img src={loader} className="" />
            </div>
        }
        else{
          html =
            <div className="_text-align">
              <h3>
                {" "}
                Please search the user in the <Link to="/">Home</Link> page.{" "}
              </h3>
            </div>
        }

      
    }

    return (
      <div>
        <Header/>
        <div>
          <div className="custom-panel-css col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
             {html}
          </div>
        </div>
      </div>
    );
  }
}
