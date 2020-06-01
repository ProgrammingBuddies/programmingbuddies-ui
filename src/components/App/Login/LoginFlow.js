import React from "react";
import axios from "axios";

export default class LoginFlow extends React.Component {
  constructor(props) {
    super(props);
  }

  async startLoginFlow() {
    let res = await axios.get(
      "https://localhost:5001/login?account=github&redirect=http://localhost:3000"
    );
    console.log(res?.data);
  }

  render() {
    return (
      <button
        onClick={() => {
          this.startLoginFlow();
        }}
      >
        Start LoginFlow
      </button>
    );
  }
}
