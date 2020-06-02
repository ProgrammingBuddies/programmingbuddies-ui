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
      return {
        type: START_LOGIN_FLOW,
        state: {
          loginFlowRunning: true,
        },
      };
    },
    [callbackReceived]: (state, action) => {
      return {
        type: LOGIN_CALLBACK_RECEIVED,
        state: {
          isLoggedIn: true,
          loginFlowRunning: false,
        },
      };
    },
  }
);

export default loginReducer;
