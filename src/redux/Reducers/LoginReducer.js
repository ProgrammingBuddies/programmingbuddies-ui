import { createReducer } from "@reduxjs/toolkit";
import { startLoginFlow, callbackReceived } from "../Actions/LoginAction";
import { START_LOGIN_FLOW, LOGIN_CALLBACK_RECEIVED } from "../Constants";

const loginReducer = createReducer(
  {
    loginFlowRunning: false,
    isLoggedIn: false,
  },
  {
    [startLoginFlow]: (state, action) => {
      window.location.href =
        "https://localhost:5001/login?account=github&redirect=http://localhost:3000/login-callback";
      const newState = { ...state, loginFlowRunning: false, isLoggedIn: false };
      return {
        type: START_LOGIN_FLOW,
        state: newState,
      };
    },
    [callbackReceived]: (state, action) => {
      console.log("login flow completed");
      const newState = { ...state, isLoggedIn: true, loginFlowRunning: false };
      return {
        type: LOGIN_CALLBACK_RECEIVED,
        state: newState,
      };
    },
  }
);

export default loginReducer;
