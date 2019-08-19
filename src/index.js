import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import rootReducer from "./Reducers";
import AppRouter from "./Routes";

const Reducer = combineReducers({ rootReducer });
const store = createStore(Reducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
