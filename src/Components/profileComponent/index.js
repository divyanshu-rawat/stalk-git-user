import React from "react";
import loader from "../../Assets/loader.gif";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("data", this.props);
  }
  render() {
    const { isFetching } = this.props.state.USER_PROFILE_REDUCER.data;
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
          <div className="flex flex-col black-border" />
          <div className="flex flex-col black-border" />
        </div>
      </div>
    );
  }
}
