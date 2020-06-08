import logo from "../../resources/logo.png";
import { Layout, Menu, Button, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AuthorizeRoute from "../Login/AuthorizeRoute";
import PrivateComponent from "../Private/PrivateComponent";

const { Content, Footer, Header } = Layout;

const MainLayout = () => {
  let isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="div-logo">
          <img src={logo} className="logo" />
        </div>
        {isLoggedIn && (
          <Menu
            inlineIndent="10em"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="main-menu w-1/2 float-left"
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        )}
        <div className="w-auto float-right h-full">
          <Space size="small">
            <Button type="primary">Login</Button>
            <Button type="primary">Sign up</Button>
          </Space>
        </div>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Switch>
            <AuthorizeRoute path="/private" component={PrivateComponent} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Programming Buddies ©2020</Footer>
    </Layout>
  );
};

export default MainLayout;
