import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import store from "../../redux/Store";
import { callbackReceived } from "../../redux/Actions/LoginAction";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(callbackReceived());
  }

  render() {
    return (
      <>
        <h1>Login Callback works!</h1>
      </>
    );
  }
}
