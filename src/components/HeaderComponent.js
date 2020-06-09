import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Space } from "antd";
import logo from "../resources/logo.png";

const HeaderComponent = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <Layout.Header className="header">
      <div className="div-logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      {isLoggedIn && (
        <Menu
          inlineIndent="10em"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="main-menu w-1/2 float-left"
        >
          <Menu.Item key="1">Projects</Menu.Item>
        </Menu>
      )}
      <div className="w-auto float-right h-full">
        <Space size="small">
          {isLoggedIn ? <LogoutButton /> : <LoginButtons />}
        </Space>
      </div>
    </Layout.Header>
  );
};

const LoginButtons = () => (
  <React.Fragment>
    <Link to="login">
      <Button type="primary">Login</Button>
    </Link>
    <Button type="primary">Sign up</Button>
  </React.Fragment>
);

const LogoutButton = () => (
  <React.Fragment>
    <Link to="logout">
      <Button type="primary">Logout</Button>
    </Link>
  </React.Fragment>
);

export default HeaderComponent;
