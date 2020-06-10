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
        <Route path="/" component={HomeView} />
        <Route path="/logout" component={LogoutView} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
