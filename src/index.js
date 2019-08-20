import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes";
import { store, persistor } from "./configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
