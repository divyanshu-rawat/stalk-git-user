import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("this", this.props);
  }
  render() {
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
