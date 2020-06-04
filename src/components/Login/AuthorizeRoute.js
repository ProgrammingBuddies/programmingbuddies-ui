import React from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LoginFlowInitiator from "./LoginFlowInitiator";
import { startLoginFlow } from "../../redux/Actions/LoginAction";

const AuthorizeRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  let dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(startLoginFlow(rest?.path));
    }
  }, [isLoggedIn]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <LoginFlowInitiator path={rest.path} />;
        }
      }}
    />
  );
};

export default AuthorizeRoute;
