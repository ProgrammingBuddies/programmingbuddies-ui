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

const HomeView = () => (
  <Layout>
    <HeaderComponent />
    <Layout.Content className="site-layout" style={styles.content}>
      <Switch>
        <Route path="/login" render={() => <LoginRegisterView isLogin />} />
        <Route path="/signup" render={() => <LoginRegisterView isRegister />} />
        <Route path="/login-success" component={LoginSuccessView} />
        <Route path="/logout" component={LogoutView} />
        <AuthorizeRoute path="/projects" component={ProjectsListScreenView} />
      </Switch>
    </Layout.Content>
    <FooterComponent />
  </Layout>
);

const styles = {
  content: {
    marginTop: 64,
    padding: "50px 50px",
  },
};

export default HomeView;
