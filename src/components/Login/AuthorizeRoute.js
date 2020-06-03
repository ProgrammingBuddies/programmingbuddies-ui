import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFlowInitiator from "./LoginFlowInitiator";

const AuthorizeRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
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
