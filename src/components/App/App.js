import React from "react";
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
          <AuthorizeRoute path="/private" component={PrivateComponent} />
          <Route path="/mainLayout" component={MainLayout} />
          <Route path="/login-callback" component={LoginCallback} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
