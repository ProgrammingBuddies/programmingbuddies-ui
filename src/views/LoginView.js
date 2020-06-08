import React from "react";
import { useSelector, useDispatch } from "react-redux";
import login from "../redux/Slices/LoginSlice";
import { GithubLoginButton } from "react-social-login-buttons";

const LoginView = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const initLogin = (provider) => {
    if (isLoggedIn === false) {
      if (provider === "github") {
        dispatch(login.actions.redirectToLogin(props.path));
      }
    }
  };

  return (
    <div className="mr-auto ml-auto w-1/3 items-center justify-center login-view-min-width">
      <h1 className="text-lg">Login</h1>
      <div className="ml-auto mr-auto">
        <GithubLoginButton
          className="social-login-btn"
          onClick={() => initLogin("github")}
        ></GithubLoginButton>
      </div>
    </div>
  );
};

export default LoginView;
