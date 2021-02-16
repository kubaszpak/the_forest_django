import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
    <div class = "parent-container">
    <div class="animated-container">
    <div class = "board">
      <div class="box" id="first-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
          </div>
      </div>
      <div class="box" id="second-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
      </div>
      </div>
      <div class="box" id="third-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
      <div class="box" id="fourth-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
      <div class="box" id="fifth-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
      <div class="box" id="sixth-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
      <div class="box" id="seventh-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
      <div class="box" id="eighth-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
      <div class="box" id="ninth-box">
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image"/>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);