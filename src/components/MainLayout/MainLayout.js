import logo from "../../resources/logo.png";
import { Layout, Menu, Button } from "antd";
import React from "react";
const { Content, Footer, Header } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="div-logo">
          <img src={logo} className="logo" />
        </div>
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
        <div className="w-auto float-right position-relative p-0 m-0">
          <Button>Login</Button>
          <Button>Sign up</Button>
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
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Programming Buddies ©2020</Footer>
    </Layout>
  );
};

export default MainLayout;
