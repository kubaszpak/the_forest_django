import React, { Component } from "react";
import { render, Redirect } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  async componentDidMount() {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        if (response.ok) {
          this.setState({
            roomCode: data.code,
          });
        }
      });
  }

  handleCreateNewRoom() {
    const requestOptions = {
      method: "POST",
      header: { ContentType: "application/json" },
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (response.ok) {
          this.props.history.push(`/room/${data.code}`);
        }
      });
  }

  render() {
    return this.state.roomCode ? (
      <Redirect to={`/room/${this.state.roomCode}`} />
    ) : (
      () => {
        this.handleCreateNewRoom();
      }
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
