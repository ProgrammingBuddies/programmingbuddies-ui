import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LoginRegisterView from "./LoginRegisterView";
import LogoutView from "./LogoutView";
import LoginSuccessView from "./LoginSuccessView";
import ProjectsListScreenView from "./ProjectsListScreenView";
import AuthorizeRoute from "../Authentication/AuthorizeRoute";
import LoginCallback from "./LoginCallback";

const HomeView = () => (
  <>
    <div className="mx-auto content">
      <HeaderComponent />
      {/*
    <Layout.Content className="site-layout" style={styles.content}>
      <Route path="/login" render={() => <LoginRegisterView isLogin />} />
      <Route path="/signup" render={() => <LoginRegisterView isRegister />} />
      <Route path="/login-success" component={LoginSuccessView} />
      <Route path="/logout" component={LogoutView} />
      <Route path="/login-callback" component={LoginCallback} />
      <AuthorizeRoute path="/projects" component={ProjectsListScreenView} />
    </Layout.Content>
    */}
    </div>
    <FooterComponent />
  </>
);

const styles = {
  content: {
    marginTop: 64,
    padding: "50px 50px",
  },
};

export default HomeView;
