import React from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import login from "../../redux/Slices/LoginSlice";

const AuthorizeRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLoggedIn === false)
      dispatch(login.actions.redirectToLogin(props.path));
  }, [isLoggedIn]);

  return <Route {...props} />;
};

export default AuthorizeRoute;
