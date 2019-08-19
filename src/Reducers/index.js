import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { descriptionReducer } from "./descriptionReducer";

export default combineReducers({ descriptionReducer, profileReducer });
