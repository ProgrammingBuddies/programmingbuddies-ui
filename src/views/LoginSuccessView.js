import React from "react";
import { Link } from "react-router-dom";

const LoginSuccessView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Logged in successfully!</h1>
    <Link to="/">
      <p style={styles.link}>Go back to home page</p>
    </Link>
  </div>
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
    fontSize: 40,
    color: "limegreen",
  },
  link: {
    textDecoration: "underline",
  },
};

export default LoginSuccessView;
