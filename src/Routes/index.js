import React from "react";
import { NavBar } from "../Components/navbarComponent";
import Profile from "../Containers/profileContainer";
import App from "../App";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={App} />
      </Switch>
    </React.Fragment>
  );
}

export default AppRouter;
