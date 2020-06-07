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
      window.location.href = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN_URL}`;

      return newState;
    },
    callbackReceived: (state, action) => {
      let callbackUrl = localStorage.getItem("login-callback");

      // TODO: Add call to getcurrentuser to verify, that the authentication really works.

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

export default login;
