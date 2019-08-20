import { combineReducers } from "redux";
import descriptionReducer from "./Reducers/descriptionReducer/descriptionReducer";
import userProfileReducer from "./Reducers/userProfileReducer/userProfileReducer";
import * as t from "./Constants";

export default combineReducers({
  [t.USER_PROFILE]: userProfileReducer,
  [t.DESCRIPTION]: descriptionReducer
});
