

import React from "react";
import ReactDom from "react-dom";
import Header from "../Routes";
import { Link } from "react-router-dom";
import _ from 'lodash';

export default class Profile extends React.Component {
  render() {
    console.log('this',this)
    const {data} = this.props.state.rootReducer.profileReducer;
    const {avatar_url} = data;
    const {userName} = data;
    const {blog} = data;
    const {bio} = data;
    let   html;

    if (_.isEmpty(data)){
      html = (
        <div className="_text-align">
          <h3>
            {" "}
             Please search the user in the <Link to="/">Home</Link> page.{" "}
          </h3>
        </div>
     );
    } else {
      html = (
        <div className="col-lg-offset-4 col-lg-4 col-md-4 col-sm-offset-4 col-sm-5 col-xs-7 col-xs-offset-3">
          <div className="card">
            <img src={avatar_url} className="card-image" />
            <div className="card-title col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10">
              <h1>{userName}</h1>
              <h2>
                <a href={blog}> Portfolio </a>
              </h2>
            </div>
            <div className="card-info">{bio}</div>
            <div className="card-social">
              <a href="#">
                <i className="fa fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-music" />
              </a>
              <a href="#">
                <i className="fa fa-soundcloud" />
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header data={data} />
        {html}
      </div>
    );
  }
}
