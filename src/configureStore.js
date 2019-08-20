/* Redux */
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

/* Redux Persist */
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

/* Redux Sagas */
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootSaga from "./rootSaga";

import * as t from "./Constants";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
  whitelist: [t.USER_PROFILE_REDUCER]
};

const persistreducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistreducer,
  applyMiddleware(sagaMiddleware, logger)
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
