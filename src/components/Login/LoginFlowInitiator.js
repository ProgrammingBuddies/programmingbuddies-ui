import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../../redux/Store";
import { startLoginFlow } from "../../redux/Actions/LoginAction";
import React from "react";
const LoginFlowInitiator = (props) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      store.dispatch(startLoginFlow());
    }
  });

  return <></>;
};

export default LoginFlowInitiator;
