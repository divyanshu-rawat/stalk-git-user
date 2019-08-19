import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "../Components/navbarComponent";
import Profile from "../Containers/profileContainer";
import Description from "../Containers/descriptionContainer";
import Main from "../Main";
import { Switch, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <div className="content-container">
      <Switch>
        <Route path="/description" component={Description} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default AppRouter;
