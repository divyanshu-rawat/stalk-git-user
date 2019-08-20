import { combineReducers } from "redux";
import description from "./Reducers/descriptionReducer";
import userProfile from "./Reducers/userProfileReducer";
import * as t from "./Constants";

export default combineReducers({
  [t.USER_PROFILE]: userProfile.reducer,
  [t.DESCRIPTION]: description.reducer
});
