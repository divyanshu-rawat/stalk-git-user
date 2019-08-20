import React from "react";
import ReactDOM from "react-dom";

/* Redux */
import { Provider } from "react-redux";
/* Redux Persist */
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes";
import { store, persistor } from "./configureStore";


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
