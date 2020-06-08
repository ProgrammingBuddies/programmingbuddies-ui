import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles/main.scss";
import "./styles/App.scss";

import HomeView from "./views/HomeView";
import LoginCallback from "./views/LoginCallback";
import LoginSuccessView from "./views/LoginSuccessView";
import LogoutView from "./views/LogoutView";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/login-callback" component={LoginCallback} />
        <Route path="/login-success" component={LoginSuccessView} />
        <Route path="/logout" component={LogoutView} />
        <Route path="/" component={HomeView} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
