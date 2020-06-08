import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles/main.scss";
import "./styles/App.scss";

import HomeView from "./views/HomeView";
import LoginCallback from "./views/LoginCallback";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/login-callback" component={LoginCallback} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
