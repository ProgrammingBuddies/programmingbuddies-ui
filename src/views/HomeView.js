import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LoginView from "./LoginView";
import LogoutView from "./LogoutView";
import LoginSuccessView from "./LoginSuccessView";
import ProjectsListScreenView from "./ProjectsListScreenView";

const HomeView = () => (
  <Layout>
    <HeaderComponent />
    <Layout.Content className="site-layout" style={styles.content}>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/login-success" component={LoginSuccessView} />
        <Route path="/logout" component={LogoutView} />
        <Route path="/projects" component={ProjectsListScreenView} />
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
