import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles/main.scss";

import HomeView from "./views/HomeView";
import LoginCallback from "./components/Login/LoginCallback";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={PrivateComponent} />
        <Route path="/login-callback" component={LoginCallback} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

const PrivateComponent = () => (
  <h1>You should only see this if you are logged in! :-)</h1>
);

export default App;
