import React, { Component } from "react";
import { render } from "react-dom";
import Main from "./Main";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <Main />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
