import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles/main.scss";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import LoginCallback from "./views/LoginCallback";
import LoginSuccessView from "./views/LoginSuccessView";
import LogoutView from "./views/LogoutView";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
