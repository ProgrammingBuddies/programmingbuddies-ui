import React from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import login from "../../redux/Slices/LoginSlice";

const AuthorizeRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  let dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(login.actions.startLoginFlow(rest?.path));
    }
  }, [isLoggedIn]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default AuthorizeRoute;
