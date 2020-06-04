import { combineReducers } from "redux";
import login from "./Slices/LoginSlice";

export const rootReducer = combineReducers({
  login: login.reducer,
});
