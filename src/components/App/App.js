import React from "react";
import "../../styles/main.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginCallback from "../Login/LoginCallback";
import AuthorizeRoute from "../Login/AuthorizeRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AuthorizeRoute path="/private" component={LoginCallback} />
          <Route path="/login-callback" component={LoginCallback} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
