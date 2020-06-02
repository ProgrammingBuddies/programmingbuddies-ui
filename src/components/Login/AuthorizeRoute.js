import { useSelector } from "react-redux";
import { startLoginFlow } from "../../redux/Actions/LoginAction";
import React from "react";
import { Route } from "react-router-dom";
import LoginFlowInitiator from "./LoginFlowInitiator";

const AuthorizeRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <LoginFlowInitiator />
      }
    />
  );
};

export default AuthorizeRoute;
