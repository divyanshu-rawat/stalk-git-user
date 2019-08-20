/* Redux */
import { createStore } from "redux";
import rootReducer from "./rootReducer";

/* Redux Persist */
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import * as t from './Constants';

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
  whitelist: [t.USER_PROFILE_REDUCER]
};

const persistreducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistreducer);
export const persistor = persistStore(store);
