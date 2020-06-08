import React from "react";
import { useSelector, useDispatch } from "react-redux";
import login from "../redux/Slices/LoginSlice";

const LoginView = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLoggedIn === false)
      dispatch(login.actions.redirectToLogin(props.path));
  }, [isLoggedIn, dispatch, props.path]);

  return <p>Logging you in...</p>;
};

export default LoginView;
