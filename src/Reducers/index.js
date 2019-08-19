import { combineReducers } from "redux";
import { userProfileReducer } from "./profileReducer";
import { descriptionReducer } from "./descriptionReducer";

export default combineReducers({ descriptionReducer, userProfileReducer });
