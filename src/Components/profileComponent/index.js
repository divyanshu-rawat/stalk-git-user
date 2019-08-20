import React from "react";
import loader from "../../Assets/loader.gif";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("data", this.props);
  }
  render() {
    const { isFetching } = this.props.state.USER_PROFILE_REDUCER;
    const { data } = this.props.state.USER_PROFILE_REDUCER;
    if (isFetching) {
      return (
        <div>
          <img src={loader} />
        </div>
      );
    }
    return (
      <div>
        <div className="flex flex-row m-t-2em pd-2em black-border">
          <div className="flex flex-col black-border pd-2em " >
            <div className="username-profile-picture-wrapper flex flex-row">
                <div className="profile-picture-wrapper">
                      <img src={data.avatar_url} className="profile-picture"></img>
                </div>
                <div className="m-l-1em username-wrapper">
                    <p className="username">{data.name}</p>
                    <p className="portfolio">{data.blog}</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="flex flex-col black-border">
          </div>
        </div>
      </div>
    );
  }
}
