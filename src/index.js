import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import Profile from "./Containers/profileContainer";

import { combineReducers } from "redux";
import { GithubReducer } from "./Reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Description } from "./Components/description";
import Main from "./Main";

const rootReducer = combineReducers({ GithubReducer });
const store = createStore(rootReducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/description" component={Description} />
        <Route path="/profile"     component={Profile} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
