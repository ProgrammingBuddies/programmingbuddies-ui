import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { startLoginFlow } from "../../redux/Actions/LoginAction";
import React from "react";

const LoginFlowInitiator = (props) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoginFlow(props?.path));
  });

  return <></>;
};

export default LoginFlowInitiator;
