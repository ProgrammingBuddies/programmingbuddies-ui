import React from "react";

const LogoutView = () => (
  <h1 style={styles.title}>
    There is no such page because I don't know how logout works at the backend!
  </h1>
);

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "tomato",
  },
};

export default LogoutView;
