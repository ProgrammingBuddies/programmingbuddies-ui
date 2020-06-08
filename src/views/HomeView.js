import React from "react";
import { Layout } from "antd";

import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const HomeView = () => (
  <Layout style={{ height: "100vh" }}>
    <HeaderComponent />
    <Layout.Content
      className="site-layout"
      style={styles.content}
    ></Layout.Content>
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
