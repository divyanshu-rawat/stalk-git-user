import React from "react";
import { NavBar } from "../Components/navbarComponent";
import Profile from "../Containers/profileContainer";
import Description from "../Containers/descriptionContainer";
import App from "../App";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/description" component={Description} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={App} />
      </Switch>
    </React.Fragment>
  );
}

export default AppRouter;
