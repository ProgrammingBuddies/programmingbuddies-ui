import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import login from "../redux/Slices/LoginSlice";

const LoginCallback = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(login.actions.loginCallback());
    history.push("/login-success");
  }, [history, dispatch]);

  return <p>Redirecting...</p>;
};

export default LoginCallback;
