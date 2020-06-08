import React from "react";
import { Layout, Switch } from "antd";
import { Route } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LoginCallback from "./LoginCallback";
import LoginSuccessView from "./LoginSuccessView";
import LogoutView from "./LogoutView";
import LoginView from "./LoginView";

const HomeView = () => (
  <Layout style={{ height: "100vh" }}>
    <HeaderComponent />
    <Layout.Content className="site-layout" style={styles.content}>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/login-callback" component={LoginCallback} />
        <Route path="/login-success" component={LoginSuccessView} />
        <Route path="/logout" component={LogoutView} />
      </Switch>
    </Layout.Content>
    <FooterComponent />
  </Layout>
);

const styles = {
  content: {
    marginTop: 64,
    padding: "0 50px",
  },
};

export default HomeView;
