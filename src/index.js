import React from "react";
import ReactDOM from "react-dom";

/* Redux */
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

/* Redux Persist */
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const Root = ({ store }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
