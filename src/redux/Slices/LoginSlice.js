import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "LOGIN",
  initialState: {
    loginFlowRunning: false,
    isLoggedIn: false,
    callbackUrl: "",
  },
  reducers: {
    startLoginFlow: (state, action) => {
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
    callbackReceived: (state, action) => {
      let callbackUrl = localStorage.getItem("login-callback");

      const newState = {
        ...state,
        loginFlowRunning: false,
        isLoggedIn: true,
        callbackUrl: callbackUrl,
      };

      return newState;
    },
  },
});

/*
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
*/
export default login;
