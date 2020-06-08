import React from "react";
import "antd/dist/antd.css";
import "../../styles/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginCallback from "../Login/LoginCallback";
import AuthorizeRoute from "../Login/AuthorizeRoute";
import PrivateComponent from "../Private/PrivateComponent";
import MainLayout from "../MainLayout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <MainLayout />
          <AuthorizeRoute path="/private" component={PrivateComponent} />
          <Route path="/login-callback" component={LoginCallback} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;