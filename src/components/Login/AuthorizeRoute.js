import { useSelector } from "react-redux";
import { startLoginFlow } from "../../redux/Actions/LoginAction";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import LoginFlowInitiator from "./LoginFlowInitiator";
import store from "../../redux/Store";

const AuthorizeRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      store.dispatch(startLoginFlow());
    }
  }, isLoggedIn);

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
