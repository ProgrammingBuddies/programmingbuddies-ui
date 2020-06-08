import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Space } from "antd";
import logo from "../resources/logo.png";

const HeaderComponent = () => (
  <Layout.Header className="header">
    <div className="div-logo">
      <img src={logo} className="logo" alt="logo" />
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
    <div className="w-auto float-right h-full">
      <Space size="small">
        <Link to="/login">
          <Button type="primary">Login</Button>
        </Link>
        <Button type="primary">Sign up</Button>
      </Space>
    </div>
  </Layout.Header>
);

export default HeaderComponent;
