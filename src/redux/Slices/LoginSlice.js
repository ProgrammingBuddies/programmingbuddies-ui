import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "LOGIN",
  initialState: {
    isLoggedIn: false,
    callbackUrl: "",
  },
  reducers: {
    startLoginFlow: (state, action) => {
      localStorage.setItem("login-callback", action.payload);
      window.location.href = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN_URL}`;
    },
    callbackReceived: (state, action) => {
      const callbackUrl = localStorage.getItem("login-callback");

      const newState = {
        ...state,
        isLoggedIn: true,
        callbackUrl: callbackUrl,
        authToken: action.payload,
      };

      return newState;
    },
  },
});

export default login;
