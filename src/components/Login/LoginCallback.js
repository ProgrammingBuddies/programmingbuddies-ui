import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import login from "../../redux/Slices/LoginSlice";

const LoginCallback = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    dispatch(login.actions.loginCallback());
    history.push("/private");
  }, []);

  return <p>Redirecting...</p>;
};

export default LoginCallback;
