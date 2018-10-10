import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import rootReducer from "./Reducers";
import Profile from "./Containers/profileContainer";
import Description from "./Containers/descriptionContainer";
import Main from "./Main";

const Reducer = combineReducers({ rootReducer });
const store = createStore(Reducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/description" component={Description} />
        <Route path="/profile"     component={Profile} />
        <Route path="/" 		   component={Main} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
