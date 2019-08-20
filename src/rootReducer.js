import { combineReducers } from "redux";
import USER_PROFILE_REDUCER from "./Reducers/userProfileReducer";
import * as t from "./Constants";

export default combineReducers({
  [t.USER_PROFILE_REDUCER]: USER_PROFILE_REDUCER,
});
