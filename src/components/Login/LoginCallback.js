import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import login from "../../redux/Slices/LoginSlice";

const LoginCallback = ({ component: Component, location, ...rest }) => {
  let dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  let callbackUrl = useSelector((state) => state?.login?.callbackUrl);

  useEffect(() => {
    dispatch(login.actions.callbackReceived(location?.search?.split("=")[1]));
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
