import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import store from "../../redux/Store";
import { callbackReceived } from "../../redux/Actions/LoginAction";

const LoginCallback = ({ component: Component, ...rest }) => {
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    store.dispatch(callbackReceived());
  });

  return (
    <>
      <h1>Login Callback works!</h1>
      <button
        onClick={() => {
          setBtnClicked(true);
        }}
      >
        Redirect to private route
      </button>
      {btnClicked && <Redirect to="/private" />}
    </>
  );
};

export default LoginCallback;
