import React, { Component } from "react";
import Box from "./Box";

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="parent-container">
        <div class="animated-container">
          <div class="board">
            <Box id="first-box"></Box>
            <Box id="second-box"></Box>
            <Box id="third-box"></Box>
            <Box id="fourth-box"></Box>
            <Box id="fifth-box"></Box>
            <Box id="sixth-box"></Box>
            <Box id="seventh-box"></Box>
            <Box id="eighth-box"></Box>
            <Box id="ninth-box"></Box>
          </div>
        </div>
      </div>
    );
  }
}
