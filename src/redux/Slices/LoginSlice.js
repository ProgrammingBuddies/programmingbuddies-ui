import { createSlice } from "@reduxjs/toolkit";
import parseGetParams from "../../helpers/parseGetParams";

// Initial state of auth
const initialState = {
  isLoggedIn: false,
  authToken: "",
};

/*
 * Redirects to the login page with the current state
 * Sends the current state too
 */
function redirectToLogin(state, action) {
  const redirectUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN_URL}`;
  window.location.href = redirectUrl;
}

/*
 * Redirects to the login page with the current state
 * Sends the current state too
 */
function redirectToSignUp(state, action) {
  const redirectUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_SIGN_UP_URL}`;
  window.location.href = redirectUrl;
}

/*
 * Recieves back the state from 'redirectToLogin'
 */
function loginCallback(state, action) {
  const getParams = parseGetParams();
  const token = getParams.token || "";
  const loginCallbackUrl = getParams.state || "";

  return {
    ...state,
    isLoggedIn: token ? true : false,
    authToken: token,
    loginCallback: loginCallbackUrl,
  };
}

// Create slice
const login = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    redirectToLogin,
    loginCallback,
    redirectToSignUp,
  },
});

export default login;
