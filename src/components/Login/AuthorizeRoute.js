import React from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import login from "../../redux/Slices/LoginSlice";

const AuthorizeRoute = (props) => {
  let isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  let dispatch = useDispatch();

  if (!isLoggedIn) dispatch(login.actions.startLoginFlow(props.path));

  return <Route {...props} />;
};

export default AuthorizeRoute;
