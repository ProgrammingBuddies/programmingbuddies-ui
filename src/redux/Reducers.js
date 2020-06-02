import { combineReducers } from "redux";
import loginReducer from "./Reducers/LoginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});
