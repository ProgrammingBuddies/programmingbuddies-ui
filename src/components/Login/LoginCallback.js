import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { callbackReceived } from "../../redux/Actions/LoginAction";
import { useSelector, useDispatch } from "react-redux";

const LoginCallback = ({ component: Component, ...rest }) => {
  let dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  let callbackUrl = useSelector((state) => state?.login?.callbackUrl);

  useEffect(() => {
    dispatch(callbackReceived());
  }, []);

  return (
    <>
      {isLoggedIn && (
        <>
          <h1>Starting redirect to {callbackUrl}</h1>
          <Redirect to={callbackUrl} />
        </>
      )}
    </>
  );
};

export default LoginCallback;
