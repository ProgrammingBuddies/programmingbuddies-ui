import React from "react";
import logo from "../../resources/logo.svg";
import "../../styles/main.scss";
import LoginFlow from "./Login/LoginFlow";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/lf" component={LoginFlow} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
