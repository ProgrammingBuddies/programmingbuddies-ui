import { createReducer } from "@reduxjs/toolkit";
import { startLoginFlow, callbackReceived } from "../Actions/LoginAction";
import { START_LOGIN_FLOW, LOGIN_CALLBACK_RECEIVED } from "../Constants";

const loginReducer = createReducer(
  {
    loginFlowRunning: false,
    isLoggedIn: false,
    callbackUrl: "",
  },
  {
    [startLoginFlow]: (state, action) => {
      const newState = {
        ...state,
        loginFlowRunning: true,
        isLoggedIn: false,
        callbackUrl: "",
      };

      localStorage.setItem("login-callback", action.payload);

      window.location.href =
        "https://localhost:5001/login?account=github&redirect=http://localhost:3000/login-callback";

      return newState;
    },
    [callbackReceived]: (state, action) => {
      let callbackUrl = localStorage.getItem("login-callback");

      const newState = {
        ...state,
        loginFlowRunning: false,
        isLoggedIn: true,
        callbackUrl: callbackUrl,
      };

      return newState;
    },
  }
);

export default loginReducer;
