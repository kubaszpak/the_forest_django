import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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

  clearRoomCodeFromState(){
    this.setState = {
      roomCode: null,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              this.state.roomCode ? (
                <Redirect to={`/room/${this.state.roomCode}`} />
              ) : (
                () => {
                  this.handleCreateNewRoom();
                }
              );
            }}
          />
          <Route
            path="/room/:roomCode"
            render={(props) => {
              <Map {...props} leaveRoomCallback={this.clearRoomCodeFromState} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
